"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

const IMAGES = [
  {
    id: 1,
    src: "/IEEEComSoc.png",
    alt: "IEEE Com Soc",
  },
  {
    id: 2,
    src: "/IEEESPS.png",
    alt: "IEEE SPS",
  },
  {
    id: 3,
    src: "/IEEEPES.png",
    alt: "IEEE PES",
  },
  {
    id:4,
    src: "/WIE-logo.jpg",
    alt: "WIE",
  }

  
]

export default function ImageSliderTech() {
  const [isPaused, setIsPaused] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sliderRef.current) return

    if (isPaused) {
      sliderRef.current.style.animationPlayState = "paused"
    } else {
      sliderRef.current.style.animationPlayState = "running"
    }
  }, [isPaused])

  // Duplicate images to create a seamless loop
  const allImages = [...IMAGES, ...IMAGES, ...IMAGES]  // Triple the array for smoother looping

  return (
    <div
      className="relative w-full bg-white shadow-md overflow-hidden rounded-lg"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="bg-blue-600 py-3 px-4 flex justify-center items-center">
        <h2 className="text-white text-xl font-bold text-center">Our Technical Sponsors</h2>
      </div>

      <div className="relative overflow-hidden py-4">
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-250px * ${IMAGES.length}));
            }
          }
        `}</style>

        <div
          ref={sliderRef}
          className="flex"
          style={{
            animation: `scroll 5000ms linear infinite`,
            width: `calc(250px * ${allImages.length})`,
          }}
        >
          {allImages.map((image, index) => (
            <div
              key={`${image.id}-${index}`}
              className="flex-shrink-0 w-[250px] h-[150px] px-4"
            >
              <div className=" h-full w-full flex items-center justify-center p-3 rounded-md ">
                <div className={`relative ${image.id === 2 ? 'w-[120%] h-[80px]' : 'w-full h-[80px]'}`}>
                  <Image 
                    src={image.src} 
                    alt={image.alt} 
                    fill
                    sizes="(max-width: 768px) 100vw, 250px"
                    style={{
                      objectFit: 'contain'
                    }}
                    //priority={index < 2} // Load first instances with priority
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}