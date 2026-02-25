"use client"

import Image from "next/image"

export default function PaperSubmission() {
  return (
    <>
      <div className="mb-6 sm:mb-8 w-[80%] mx-auto">
        <Image
          src="/CallForPaper2.png"
          alt="INDISCON 2026 Conference Call for Papers"
          width={1000}
          height={1200}
          className="w-full h-auto rounded-lg shadow-md"
          priority
        />
      </div>

      <div className="space-y-4 sm:space-y-6 h-[160vh]">
        <div className="bg-blue-50 p-4 sm:p-6 rounded-lg shadow-sm">
          <h2 className="text-lg sm:text-xl font-semibold text-indigo-800 mb-3 sm:mb-4">Conference Overview</h2>
          <p className="mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed text-justify">
            INDISCON is the flagship annual international conference of the IEEE India Council, organized by an IEEE
            Subsection in India. The 6th IEEE India Council International Subsection Conference (INDISCON 2026) is
            proudly hosted by the IEEE Rourkela Subsection in collaboration with the IEEE India Council from 21-23,
            August 2026, at the prestigious National Institute of Technology Rourkela.
          </p>
          <p className="text-sm sm:text-base leading-relaxed text-justify">
            With a focus on &quot;Smart and Sustainable Technologies for Society,&quot; INDISCON 2026 aims to bring
            together leading academicians, researchers, industry experts, and scholars to exchange insights, share
            breakthroughs, and foster collaborations in pioneering technological advancements.
          </p>
        </div>
        <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-sm">
          <h2 className="text-lg sm:text-xl font-semibold text-indigo-800 mb-3 sm:mb-4">Submission Guidelines</h2>
          <ul className="list-disc pl-5 space-y-1 sm:space-y-2 text-sm sm:text-base">
            <li>
              Prospective authors are invited to submit their original research articles to any of the technical tracks.
            </li>
            <li>All papers must be submitted via Microsoft CMT.</li>
            <li>
              Accepted and presented papers will be submitted to IEEE Xplore for possible publication, ensuring global
              visibility and recognition.
            </li>
            <li>paper should be written in IEEE double column conference format and restricted to a maximum of 6 pages only</li>
            <li>
              The paper should present original work not previously published or currently under review elsewhere.
            </li>
          </ul>
        </div>
        <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-sm">
          <h2 className="text-lg sm:text-xl font-semibold text-indigo-800 mb-3 sm:mb-4">Technical Tracks</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <ul className="list-disc pl-5 space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li>
                  <strong>Track 1:</strong> AI & ML, Data Science
                </li>
                <li>
                  <strong>Track 2:</strong> Sensors, Instrumentation, Control and Automation
                </li>
                <li>
                  <strong>Track 3:</strong> Network and Hardware Security, Cryptography, and Block chain Technology
                </li>
                <li>
                  <strong>Track 4:</strong> Neuromorphic, Quantum Computing, Parallel and Distributed computing and
                  Sustainable Computing
                </li>
                <li>
                  <strong>Track 5:</strong> Optical/RF/Microwave/Radar/Terahertz Technologies
                </li>
                <li>
                  <strong>Track 6:</strong> VLSI and Embedded Systems, Semiconductor Devices, Circuits, MEMS
                </li>
              </ul>
            </div>
            <div>
              <ul className="list-disc pl-5 space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li>
                  <strong>Track 7:</strong> Robotics, UAV, and Autonomous Vehicle
                </li>
                <li>
                  <strong>Track 8:</strong> Signal, Image and Multimedia Processing, Digital Healthcare
                </li>
                <li>
                  <strong>Track 9:</strong> Next Generation Communication Technologies and Networks
                </li>
                <li>
                  <strong>Track 10:</strong> Power Electronics and Power Systems
                </li>
                <li>
                  <strong>Track 11:</strong> Electric Vehicles, Sustainable Technologies
                </li>
                <li>
                  <strong>Track 12:</strong> IoT, Cyber Physical Systems, and Industry4.0
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-4 sm:p-6 rounded-lg shadow-sm">
          <h2 className="text-lg sm:text-xl font-semibold text-indigo-800 mb-3 sm:mb-4">Important Dates</h2>
          <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base">
            <li>
              <strong>Paper Submission Starts:</strong> 01-12-2024
            </li>
            <li>
              <strong>Paper Submission Ends:</strong> 30-04-2026
            </li>
            <li>
              <strong>Notification of Acceptance:</strong> 10-06-2026
            </li>
            <li>
              <strong>Camera-ready Submission:</strong> 20-06-2026
            </li>
          </ul>
        </div>



        <div className="flex justify-center mt-6 sm:mt-8">
          <button
            className="px-6 sm:px-8 py-2 sm:py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors text-base sm:text-lg"
            onClick={() => window.open("https://cmt3.research.microsoft.com/INDISCON2026/Submission/Index", "_blank")}
          >
            Submit Paper
          </button>
        </div>
      </div>
    </>
  )
}

