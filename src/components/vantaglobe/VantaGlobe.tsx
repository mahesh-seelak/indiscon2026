import { useEffect, useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import * as THREE from 'three';
import Link from 'next/link';
/* import AnnouncementBanner from '../NotificationImp'; */

interface VantaEffect {
  destroy: () => void;
  camera?: THREE.PerspectiveCamera;
}

const VantaGlobe: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const vantaRef = useRef<VantaEffect | null>(null);
  const theta = useRef<number>(0);
  const radius = useRef<number>(5);
  const phi = useRef<number>(Math.PI / 4);
  const { scrollYProgress } = useScroll();
  const zoomValue = useTransform(scrollYProgress, [0, 1], [3, 10]);

  useEffect(() => {
    if (!containerRef.current) return;

    const initVanta = async () => {
      try {
        const VANTA = (await import('vanta/dist/vanta.globe.min')) as unknown as {
          default: (options: Record<string, unknown>) => VantaEffect;
        };

        vantaRef.current = VANTA.default({
          el: containerRef.current,
          THREE: THREE,
          mouseControls: false,
          touchControls: false,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x16edc4,
          backgroundColor: 0x1e097e,
          onUpdate: (self: unknown) => {
            const vantaInstance = self as VantaEffect;
            if (!vantaInstance.camera) return;

            const camera = vantaInstance.camera;
            const r = radius.current;
            const t = theta.current;
            const p = phi.current;

            camera.position.x = r * Math.sin(t) * Math.cos(p);
            camera.position.y = r * Math.sin(p);
            camera.position.z = r * Math.cos(t) * Math.cos(p);
            camera.lookAt(0, 0, 0);
            camera.updateProjectionMatrix();
          },
        });
      } catch (error) {
        console.error('Error loading Vanta.js:', error);
      }
    };

    initVanta();

    return () => {
      if (vantaRef.current) {
        vantaRef.current.destroy();
        vantaRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    return zoomValue.onChange((newRadius) => {
      radius.current = newRadius;
    });
  }, [zoomValue]);
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = event;
    const { width, height } = currentTarget.getBoundingClientRect();

    const x = (clientX / width - 0.5) * 2;
    const y = (clientY / height - 0.5) * 2;

    theta.current = x * Math.PI; 
    phi.current = y * Math.PI / 4;
  };

  return (
    <div className="relative w-screen h-screen " onMouseMove={handleMouseMove}>
      <motion.div ref={containerRef} className="absolute top-0 left-0 w-full h-full" />
      <motion.div
        className="absolute w-full inset-0 flex flex-col items-center justify-center text-center text-white px-6 bg-[#151515] bg-opacity-40 space-y-5  "
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* <AnnouncementBanner/> */}<p></p><p></p>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">IEEE INDISCON 2026</h1>
        <p className="text-base md:text-lg lg:text-xl leading-relaxed md:leading-loose tracking-wide max-w-3xl mx-auto text-white/90 font-medium text-left md:text-justify mb-6 px-4">
              IEEE INDISCON is the flagship annual international conference of the IEEE India Council, aimed at bringing together researchers, academicians, industry professionals, and students from across the country and abroad. The conference serves as a premier platform for sharing cutting-edge research, emerging trends, and technological advancements in various domains of engineering and technology.

              <br /><br />

              IEEE INDISCON 2026 will be hosted by the IEEE Rajasthan Subsection at Malaviya National Institute of Technology Jaipur, Jaipur, India. The conference will feature keynote lectures, invited talks, technical paper presentations, tutorials, and industry sessions aligned with the conference theme. It will also include a Graduate Research Forum to encourage young researchers and students to present their innovative work and engage with experts, fostering collaboration and professional growth.
            </p>
          <motion.div
            suppressHydrationWarning
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='flex flex-col  gap-4 items-center justify-center'
          >
            <Link href="/about" passHref>
              <motion.button
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition"
                suppressHydrationWarning
              >
                Learn More
              </motion.button>
            </Link>
          </motion.div>
          <motion.div
            suppressHydrationWarning
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='flex flex-col  gap-4 items-center justify-center'
          >
          {/*   <Link
            href="https://forms.gle/yFPx3wAf53ratSky5"
            className="px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-green-500 to-green-600 rounded-full hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Book Accommodation
          </Link> */}
          </motion.div>
      </motion.div>
    </div>
  );
};

export default VantaGlobe;
