"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

const CallForPapers: React.FC = () => {
  const tracks = [
    "Track 1: AI & ML, Data Science",
    "Track 2: Sensors, Instrumentation, Control and Automation",
    "Track 3: Network and Hardware Security, Cryptography, and Block chain Technology",
    "Track 4: Neuromorphic, Quantum Computing, Parallel and Distributed computing and Sustainable Computing",
    "Track 5: Optical/RF/Microwave/Radar/Terahertz Technologies",
    "Track 6: VLSI and Embedded Systems, Semiconductor Devices, Circuits, MEMS",
    "Track 7: Robotics, UAV, and Autonomous Vehicle",
    "Track 8: Signal, Image and Multimedia Processing, Digital Healthcare",
    "Track 9: Next Generation Communication Technologies and Networks",
    "Track 10: Power Electronics and Power Systems",
    "Track 11: Electric Vehicles, Sustainable Technologies",
    "Track 12: IoT, Cyber Physical Systems, and Industry4.0",
  ]

  const importantDates = [
    { event: "Paper Submission Starts:", date: "01-12-2024" },
    { event: "Paper Submission Ends:", date: "30-04-2026" },
    { event: "Notification of Acceptance:", date: "10-06-2026" },
    { event: "Camera-ready Submission:", date: "20-06-2026" },
    { event: "Proposal Submission Deadline:", date: "20-03-25" },
    { event: "Notification of Acceptance/Rejection(special paper):", date: "25-03-25" },
  ]

  // Create refs for the slider animation
  const sliderRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  // Set up the infinite scroll effect
  useEffect(() => {
    const slider = sliderRef.current
    const content = contentRef.current

    if (!slider || !content) return

    // Clone the content for seamless looping
    const clone = content.cloneNode(true)
    slider.appendChild(clone)

    // Calculate animation duration based on content width
    const setAnimationDuration = () => {
      const contentWidth = content.offsetWidth
      const duration = contentWidth / 50 // Adjust speed here
      slider.style.animationDuration = `${duration}s`
    }

    setAnimationDuration()
    window.addEventListener("resize", setAnimationDuration)

    return () => {
      window.removeEventListener("resize", setAnimationDuration)
    }
  }, [])

  return (
    <div className="min-h-screen text-gray-800 font-sans w-screen flex flex-col items-center">
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24 px-4 text-center w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-opacity-10 bg-gray-900" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold mb-6 text-balance hyphens-auto leading-tight ">6th IEEE India Council International Subsections Conference</h1>
          <p className="text-2xl mb-4 text-balance">Theme: &ldquo;Smart and Sustainable Technologies for Society&rdquo;</p>
          <p className="text-xl text-balance">We invite you to submit your groundbreaking papers for our upcoming conference</p>
        </div>
      </header>
      <section className="w-full bg-gradient-to-b from-blue-700 via-blue-500 to-blue-300 py-12 overflow-hidden relative">
        <div className="max-w-6xl mx-auto px-4 mb-6">
          <h2 className="text-3xl font-bold text-white text-center">Important Dates</h2>
          <div className="w-24 h-1 bg-white mx-auto mt-2 rounded-full"></div>
        </div>
        <div className="relative overflow-hidden w-full py-4">
          <div ref={sliderRef} className="dates-slider flex whitespace-nowrap animate-scroll">
            <div ref={contentRef} className="flex">
              {importantDates.map((item, index) => (
                <div
                  key={index}
                  className="inline-flex flex-none mx-4 bg-white rounded-xl shadow-lg min-w-[280px] transform transition-all duration-300 hover:scale-105"
                >
                  <div className="p-5 w-full">
                    <div className="flex items-center mb-2">
                      <div className="w-3 h-3 rounded-full bg-blue-600 mr-2"></div>
                      <h3 className="font-bold text-blue-800 text-lg">{item.event}</h3>
                    </div>
                    <div className="pl-5 border-l-2 border-blue-200">
                      <p className="text-blue-950 font-medium">{item.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-blue-700 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-blue-700 to-transparent z-10 pointer-events-none"></div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-16 -left-16 w-32 h-32 rounded-full bg-blue-500 opacity-10"></div>
          <div className="absolute top-1/2 -right-16 w-48 h-48 rounded-full bg-blue-500 opacity-10"></div>
        </div>
      </section>

      <section className="py-20 px-4 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-blue-800">Conference Tracks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center ">
          {tracks.map((track) => (
            <div
              key={track}
              className="bg-white p-6 rounded-lg shadow-lg border border-blue-100 hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-center items-center h-40"
            >
              <h3 className="text-lg font-semibold text-blue-600 mb-2 text-center text-balance">{track}</h3>
              <p className="text-gray-600 text-center text-balance">
                Explore cutting-edge research and innovations in this exciting field.
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-blue-600 py-20 px-4 text-center w-full">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-white">Take Action</h2>
          <p className="text-xl text-white mb-10 text-balance">
            Be part of shaping the future of technology. Download our brochure for more information or submit your paper
            today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <motion.div whileHover={{ scale: 1.05 }} suppressHydrationWarning>
              <Link href="/guidelines" passHref>
                <motion.button
                  rel="noopener noreferrer"
                  className="bg-blue-800 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-black hover:text-white transition duration-300 transform shadow-lg"
                >
                  Guidelines
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          display: flex;
          animation: scroll 40s linear infinite;
          will-change: transform;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}

export default CallForPapers

