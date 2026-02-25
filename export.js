const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const cheerio = require('cheerio');
const https = require('https');
const http = require('http');
const url = require('url');

// Configuration
const config = {
  inputDir: 'out',      // Directory created by next build with output: 'export'
  outputDir: 'static',  // Where to save the vanilla HTML/CSS/JS files
  extractCSS: true,     // Extract CSS from Tailwind classes
  imageDir: 'images',   // Directory for extracted images
  fetchExternalImages: true, // Whether to download external images
  verbose: true,        // Log detailed information
};

// Make sure the output directories exist
['', 'css', 'js', 'assets', config.imageDir].forEach(dir => {
  const dirPath = path.join(config.outputDir, dir);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
});

// Debugging function
function log(message, isVerbose = false) {
  if (!isVerbose || config.verbose) {
    console.log(message);
  }
}

// Check if next.config.js exists and has output: 'export'
let configIsCorrect = false;
try {
  const nextConfigPath = path.join(process.cwd(), 'next.config.js');
  if (fs.existsSync(nextConfigPath)) {
    const configContent = fs.readFileSync(nextConfigPath, 'utf8');
    if (!configContent.includes("output: 'export'") && !configContent.includes('output: "export"')) {
      log('Adding output: "export" to next.config.js...');
      // Simple approach - might not work for all config files
      const updatedConfig = configContent.replace(
        /module\.exports\s*=\s*{/,
        'module.exports = {\n  output: "export",'
      );
      fs.writeFileSync(nextConfigPath, updatedConfig);
    }
    
    // Make sure images are configured correctly
    if (!configContent.includes('images:') || !configContent.includes('unoptimized: true')) {
      log('Adding unoptimized: true to Next.js image configuration...');
      let newConfig;
      if (configContent.includes('images:')) {
        // Add unoptimized to existing images config
        newConfig = configContent.replace(
          /images:\s*{/,
          'images: {\n    unoptimized: true,'
        );
      } else {
        // Add new images config
        newConfig = configContent.replace(
          /module\.exports\s*=\s*{/,
          'module.exports = {\n  images: {\n    unoptimized: true,\n  },'
        );
      }
      fs.writeFileSync(nextConfigPath, newConfig);
    }
    
    configIsCorrect = true;
  } else {
    log('Creating next.config.js with output: "export" and unoptimized images...');
    fs.writeFileSync(
      nextConfigPath,
      'module.exports = {\n  output: "export",\n  images: {\n    unoptimized: true,\n  }\n};'
    );
    configIsCorrect = true;
  }
} catch (error) {
  console.warn('Warning: Could not update next.config.js:', error.message);
}

// Step 1: Build the Next.js app with static export
log('Building Next.js app with static export...');
try {
  execSync('npx next build', { stdio: 'inherit' });
} catch (error) {
  console.error('Error building Next.js app:', error);
  process.exit(1);
}

// Check if the build was successful
if (!fs.existsSync(config.inputDir)) {
  console.error(`Error: The ${config.inputDir} directory was not created.`);
  console.error('Make sure your next.config.js has output: "export" configured.');
  process.exit(1);
}

// Step 2: Process the exported HTML files
log('Processing exported HTML files...');
const htmlFiles = [];
function findHtmlFiles(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);
    if (stats.isDirectory()) {
      findHtmlFiles(filePath);
    } else if (file.endsWith('.html')) {
      htmlFiles.push(filePath);
    }
  });
}
findHtmlFiles(config.inputDir);

if (htmlFiles.length === 0) {
  console.error('No HTML files found in the output directory.');
  process.exit(1);
}

// Copy all assets
log('Copying assets...');
function copyDirectory(source, destination) {
  if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination, { recursive: true });
  }
  
  const files = fs.readdirSync(source);
  files.forEach(file => {
    const sourcePath = path.join(source, file);
    const destPath = path.join(destination, file);
    
    const stats = fs.statSync(sourcePath);
    if (stats.isDirectory()) {
      copyDirectory(sourcePath, destPath);
    } else if (!file.endsWith('.html')) {
      fs.copyFileSync(sourcePath, destPath);
    }
  });
}
copyDirectory(config.inputDir, config.outputDir);

// Create a map to track processed images
const processedImages = new Map();

// Function to download an external image
function downloadImage(imageUrl, outputPath) {
  return new Promise((resolve, reject) => {
    // Parse the URL
    const parsedUrl = url.parse(imageUrl);
    const protocol = parsedUrl.protocol === 'https:' ? https : http;
    
    // Make a GET request to the image URL
    const request = protocol.get(imageUrl, (response) => {
      // Check if the response is successful
      if (response.statusCode !== 200) {
        return reject(new Error(`Failed to download image: ${response.statusCode}`));
      }
      
      // Create a write stream to save the image
      const file = fs.createWriteStream(outputPath);
      
      // Pipe the response to the file
      response.pipe(file);
      
      // Handle completion
      file.on('finish', () => {
        file.close();
        resolve(outputPath);
      });
    });
    
    // Handle request errors
    request.on('error', (err) => {
      fs.unlink(outputPath, () => {}); // Delete the file if it was created
      reject(err);
    });
    
    // Set a timeout for the request (5 seconds)
    request.setTimeout(5000, () => {
      request.abort();
      fs.unlink(outputPath, () => {});
      reject(new Error('Request timeout'));
    });
  });
}

// Function to find an image in the output directory
function findImageInOutput(relativePath) {
  // Check if the image exists in various possible locations
  const possiblePaths = [
    path.join(config.outputDir, relativePath),
    path.join(config.outputDir, relativePath.replace(/^\//, '')),
    path.join(config.inputDir, relativePath.replace(/^\//, '')),
    // Check in _next/static/media directory for images
    ...fs.readdirSync(path.join(config.outputDir, '_next/static/media'))
      .filter(file => file.match(/\.(png|jpg|jpeg|gif|svg|webp)$/i))
      .map(file => path.join(config.outputDir, '_next/static/media', file))
  ];
  
  for (const imgPath of possiblePaths) {
    if (fs.existsSync(imgPath)) {
      return imgPath;
    }
  }
  
  return null;
}

// Function to extract image files from _next/static/media
function extractNextMediaImages() {
  const mediaDir = path.join(config.outputDir, '_next/static/media');
  if (!fs.existsSync(mediaDir)) {
    return;
  }
  
  const mediaFiles = fs.readdirSync(mediaDir);
  mediaFiles.forEach(file => {
    if (file.match(/\.(png|jpg|jpeg|gif|svg|webp)$/i)) {
      const srcPath = path.join(mediaDir, file);
      const destPath = path.join(config.outputDir, config.imageDir, file);
      fs.copyFileSync(srcPath, destPath);
      log(`Copied media file: ${file}`, true);
    }
  });
}

// Extract Next.js media images first
extractNextMediaImages();

// Function to process an image source
async function processImageSrc(src, basePath = '') {
  // Skip empty URLs
  if (!src) {
    return src;
  }
  
  // Skip data URLs
  if (src.startsWith('data:') || src.startsWith('blob:')) {
    return src;
  }
  
  // If we've already processed this image, return the cached path
  if (processedImages.has(src)) {
    return processedImages.get(src);
  }
  
  try {
    // Handle external URLs
    if (src.startsWith('http://') || src.startsWith('https://')) {
      if (!config.fetchExternalImages) {
        return src; // Don't modify external URLs if fetchExternalImages is false
      }
      
      // Create a filename based on the URL
      const urlObj = new URL(src);
      let fileName = path.basename(urlObj.pathname);
      
      // If the filename doesn't have an extension, add .jpg
      if (!fileName.includes('.')) {
        fileName += '.jpg';
      }
      
      // Create a unique filename
      const uniqueName = `external-${Date.now()}-${fileName}`;
      const outputPath = path.join(config.outputDir, config.imageDir, uniqueName);
      
      try {
        await downloadImage(src, outputPath);
        const newSrc = `/${config.imageDir}/${uniqueName}`;
        processedImages.set(src, newSrc);
        log(`Downloaded external image: ${src} -> ${newSrc}`, true);
        return newSrc;
      } catch (err) {
        console.warn(`Warning: Failed to download external image ${src}:`, err.message);
        return src; // Return original URL if download fails
      }
    }
    
    // Handle relative paths
    let fullPath = src;
    if (!src.startsWith('/')) {
      // Make relative path absolute based on the current HTML file
      fullPath = path.join(basePath, src);
    }
    
    // Handle Next.js image paths
    // 1. Check for _next/image paths with URL parameters
    if (src.includes('/_next/image') && src.includes('?url=')) {
      const urlMatch = src.match(/url=([^&]+)/);
      if (urlMatch && urlMatch[1]) {
        const decodedUrl = decodeURIComponent(urlMatch[1]);
        // Process the decoded URL recursively
        return processImageSrc(decodedUrl, basePath);
      }
    }
    
    // 2. Check for direct paths to _next/static/media/
    if (src.includes('/_next/static/media/')) {
      // Extract the filename
      const fileName = path.basename(src);
      // Check if we've already copied this file
      const outputPath = path.join(config.outputDir, config.imageDir, fileName);
      
      if (fs.existsSync(outputPath)) {
        const newSrc = `/${config.imageDir}/${fileName}`;
        processedImages.set(src, newSrc);
        return newSrc;
      }
      
      // Try to find the file in the Next.js media directory
      const mediaFile = findImageInOutput(src);
      if (mediaFile) {
        fs.copyFileSync(mediaFile, outputPath);
        const newSrc = `/${config.imageDir}/${fileName}`;
        processedImages.set(src, newSrc);
        log(`Copied Next.js media file: ${src} -> ${newSrc}`, true);
        return newSrc;
      }
    }
    
    // Normalize paths
    let normalizedPath = fullPath;
    if (normalizedPath.startsWith('/')) {
      normalizedPath = normalizedPath.substring(1);
    }
    
    // Create a unique filename for the image
    const fileName = path.basename(normalizedPath);
    const uniqueName = `local-${Date.now()}-${fileName}`;
    const outputPath = path.join(config.outputDir, config.imageDir, uniqueName);
    
    // Try to find the image in the output directory
    const imageFile = findImageInOutput(fullPath);
    
    if (imageFile) {
      // Copy the image to our images directory
      fs.copyFileSync(imageFile, outputPath);
      const newSrc = `/${config.imageDir}/${uniqueName}`;
      processedImages.set(src, newSrc);
      log(`Processed image: ${src} -> ${newSrc}`, true);
      return newSrc;
    } else {
      // Look for the image in public directory
      const publicPath = path.join(process.cwd(), 'public', normalizedPath);
      if (fs.existsSync(publicPath)) {
        fs.copyFileSync(publicPath, outputPath);
        const newSrc = `/${config.imageDir}/${uniqueName}`;
        processedImages.set(src, newSrc);
        log(`Copied from public: ${src} -> ${newSrc}`, true);
        return newSrc;
      }
      
      // If we can't find the image, log a warning
      console.warn(`Warning: Could not find image: ${src}`);
      return src;
    }
  } catch (error) {
    console.warn(`Warning: Error processing image ${src}:`, error.message);
    return src; // Return original on error
  }
}

// Create a common JS file for functionality
const commonJsContent = `
// Common functionality for vanilla JS version
document.addEventListener('DOMContentLoaded', function() {
  console.log('Vanilla JS version loaded');
  
  // Handle navigation
  document.querySelectorAll('a[data-navigation]').forEach(link => {
    link.addEventListener('click', function(event) {
      const href = this.getAttribute('href');
      if (href && href.startsWith('/')) {
        event.preventDefault();
        window.location.href = href + '.html';
      }
    });
  });
  
  // Handle interactive elements
  document.querySelectorAll('[data-action]').forEach(element => {
    const action = element.getAttribute('data-action');
    element.addEventListener('click', function(event) {
      switch(action) {
        case 'toggle':
          const targetId = this.getAttribute('data-target');
          const target = document.getElementById(targetId);
          if (target) {
            target.classList.toggle('hidden');
          }
          break;
      }
    });
  });
  
  // Handle image errors
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
      console.warn('Failed to load image:', this.src);
      // You could set a fallback image here if desired
      // this.src = '/images/fallback.png';
    });
  });
});
`;

fs.writeFileSync(path.join(config.outputDir, 'js', 'common.js'), commonJsContent);

// Extract CSS from Tailwind if needed
if (config.extractCSS) {
  log('Setting up CSS...');
  
  // Create a basic CSS file that includes Tailwind via CDN
  const basicCss = `
/* Base styles */
@import url('https://cdn.tailwindcss.com');

/* Custom styles */
body {
  font-family: system-ui, -apple-system, sans-serif;
}
  `;
  fs.writeFileSync(path.join(config.outputDir, 'css', 'styles.css'), basicCss);
}

// Process each HTML file
log('Processing HTML files...');

// Process in series to avoid race conditions with image processing
(async function processHtmlFiles() {
  for (const filePath of htmlFiles) {
    try {
      const relativePath = path.relative(config.inputDir, filePath);
      const outputPath = path.join(config.outputDir, relativePath);
      const baseDir = path.dirname(relativePath);
      
      // Make sure the directory exists
      const outputDir = path.dirname(outputPath);
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }
      
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Use cheerio to parse and modify the HTML
      const $ = cheerio.load(content);
      
      // Remove Next.js specific scripts
      $('script[src^="/_next/"]').remove();
      
      // Process all images
      const imgPromises = [];
      $('img').each((i, elem) => {
        const $elem = $(elem);
        const src = $elem.attr('src');
        
        if (src) {
          const promise = processImageSrc(src, baseDir).then(newSrc => {
            $elem.attr('src', newSrc);
          });
          imgPromises.push(promise);
        }
        
        // Also handle srcset if present
        const srcset = $elem.attr('srcset');
        if (srcset) {
          const srcsetParts = srcset.split(',');
          const srcsetPromises = srcsetParts.map(async part => {
            const [url, size] = part.trim().split(' ');
            const newUrl = await processImageSrc(url, baseDir);
            return newUrl + (size ? ` ${size}` : '');
          });
          
          Promise.all(srcsetPromises).then(newParts => {
            $elem.attr('srcset', newParts.join(', '));
          });
          
          imgPromises.push(Promise.all(srcsetPromises));
        }
      });
      
      // Handle picture sources
      $('source').each((i, elem) => {
        const $elem = $(elem);
        const srcset = $elem.attr('srcset');
        
        if (srcset) {
          const srcsetParts = srcset.split(',');
          const srcsetPromises = srcsetParts.map(async part => {
            const [url, size] = part.trim().split(' ');
            const newUrl = await processImageSrc(url, baseDir);
            return newUrl + (size ? ` ${size}` : '');
          });
          
          Promise.all(srcsetPromises).then(newParts => {
            $elem.attr('srcset', newParts.join(', '));
          });
          
          imgPromises.push(Promise.all(srcsetPromises));
        }
      });
      
      // Handle image elements with data-src (lazy loading)
      $('[data-src]').each((i, elem) => {
        const $elem = $(elem);
        const src = $elem.attr('data-src');
        
        if (src) {
          const promise = processImageSrc(src, baseDir).then(newSrc => {
            $elem.attr('data-src', newSrc);
          });
          imgPromises.push(promise);
        }
      });
      
      // Handle background images in style attributes
      $('[style*="background"]').each((i, elem) => {
        const $elem = $(elem);
        const style = $elem.attr('style');
        
        if (style && style.includes('url(')) {
          const stylePromise = new Promise(async (resolve) => {
            let newStyle = style;
            
            // Extract all url() patterns
            const urlMatches = style.match(/url\(['"]?([^'")]+)['"]?\)/g);
            
            if (urlMatches) {
              for (const urlMatch of urlMatches) {
                const url = urlMatch.replace(/url\(['"]?/, '').replace(/['"]?\)/, '');
                const newUrl = await processImageSrc(url, baseDir);
                newStyle = newStyle.replace(url, newUrl);
              }
            }
            
            $elem.attr('style', newStyle);
            resolve();
          });
          
          imgPromises.push(stylePromise);
        }
      });
      
      // Handle background images in CSS
      $('style').each((i, elem) => {
        const $elem = $(elem);
        const css = $elem.html();
        
        if (css && css.includes('url(')) {
          const cssPromise = new Promise(async (resolve) => {
            let newCss = css;
            
            // Extract all url() patterns
            const urlMatches = css.match(/url\(['"]?([^'")]+)['"]?\)/g);
            
            if (urlMatches) {
              for (const urlMatch of urlMatches) {
                const url = urlMatch.replace(/url\(['"]?/, '').replace(/['"]?\)/, '');
                // Skip data URLs
                if (!url.startsWith('data:')) {
                  const newUrl = await processImageSrc(url, baseDir);
                  newCss = newCss.replace(url, newUrl);
                }
              }
            }
            
            $elem.html(newCss);
            resolve();
          });
          
          imgPromises.push(cssPromise);
        }
      });
      
      // Wait for all image processing to complete
      await Promise.all(imgPromises);
      
      // Mark internal links for processing
      $('a').each((i, elem) => {
        const $elem = $(elem);
        const href = $elem.attr('href');
        if (href && href.startsWith('/') && !href.includes('.')) {
          $elem.attr('data-navigation', 'true');
        }
      });
      
      // Replace React-specific attributes
      $('[onClick]').each((i, elem) => {
        const $elem = $(elem);
        $elem.attr('data-action', 'click');
        $elem.removeAttr('onClick');
      });
      
      // Add our common JS and CSS
      $('head').append('<link rel="stylesheet" href="/css/styles.css">');
      $('body').append('<script src="/js/common.js"></script>');
      
      // Save the modified HTML
      fs.writeFileSync(outputPath, $.html());
      
      log(`Processed ${relativePath}`);
    } catch (error) {
      console.error(`Error processing ${filePath}:`, error);
    }
  }
  
  log(`
Conversion complete! Your vanilla HTML/CSS/JS files are in the ${config.outputDir} directory.

Important notes:
- Images have been processed and copied to the /${config.imageDir}/ directory
- Internal links have been processed, but you may need to update some hrefs manually
- Dynamic functionality will need to be reimplemented using vanilla JS
- The Tailwind CDN is included for styling
`);
})();