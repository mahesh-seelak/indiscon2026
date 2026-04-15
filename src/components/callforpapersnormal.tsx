"use client"

import Image from "next/image"

export default function PaperSubmission() {
  return (
    <>
     {/*  <div className="mb-6 sm:mb-8 w-[80%] mx-auto">
        <Image
          src="/CallForPaper2.png"
          alt="INDISCON 2026 Conference Call for Papers"
          width={1000}
          height={1200}
          className="w-full h-auto rounded-lg shadow-md"
          priority
        />
      </div> */}

      <div className="space-y-4 sm:space-y-6">
        <div className="bg-blue-50 p-4 sm:p-6 rounded-lg shadow-sm">
          <h2 className="text-lg sm:text-xl font-semibold text-indigo-800 mb-3 sm:mb-4">Conference Overview</h2>
          <p className="mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed text-justify">
            IEEE INDISCON is the flagship annual international conference of the IEEE India Council, aimed at bringing together researchers, academicians, industry professionals, and students from across the country and abroad. The conference serves as a premier platform for sharing cutting-edge research, emerging trends, and technological advancements in various domains of engineering and technology.
          </p>
          <p className="text-sm sm:text-base leading-relaxed text-justify">
           IEEE INDISCON 2026 will be hosted by the IEEE Rajasthan Subsection at Malaviya National Institute of Technology, Jaipur, India. The conference will focus on keynote lectures, panel discussion on thrust technology, invited talks, technical paper presentations, tutorials, and industry sessions aligned with the conference theme. It will also include a Graduate Research Forum to encourage young researchers and students to present their innovative work and engage with experts, fostering collaboration and professional growth.
          </p>
        </div>
        <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-sm">
          <h2 className="text-lg sm:text-xl font-semibold text-indigo-800 mb-3 sm:mb-4">Submission Guidelines</h2>
          <ul className="list-disc pl-5 space-y-1 sm:space-y-2 text-sm sm:text-base">
            <li>
              Prospective authors are invited to submit their original research articles to any of the technical tracks.
            </li>
            <li>All papers must be submitted via Microsoft CMT.</li>
           
            <li>Paper should be written in IEEE double column conference format and restricted to a maximum of 6 pages only</li>
            <li>
              The paper should be in the IEEE conference format and must be in English.
            </li>
            <li>
              Authors are encouraged to submit high-quality research work that contributes to the advancement of knowledge in the respective technical tracks.
            </li>
            <li>
              The paper should present original work not previously published or currently under review elsewhere.
            </li>
            <li>
              The paper format should follow the IEEE conference template available at: <a href="https://www.ieee.org/conferences/publishing/templates.html" className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">IEEE Conference Templates</a>.
            </li>
              <li>
              Authors must understand and abide by IEEE’s submission policies available at: <a href="https://conferences.ieeeauthorcenter.ieee.org/author-ethics/guidelines-and-policies/submission-policies/" className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">Submission Policy</a>.
            </li>

           
          </ul>
        </div>
        <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-sm">
          <h2 className="text-lg sm:text-xl font-semibold text-indigo-800 mb-3 sm:mb-4">Technical Tracks</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <ul className="list-disc pl-5 space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li>
                  <strong>Track 1:</strong> Sustainable AI & Green Technologies
                </li>
                <li>
                  <strong>Track 2:</strong> Semiconductors, Nanoelectronics & Next-Generation Computing
                </li>
                <li>
                  <strong>Track 3:</strong> Humanitarian Technology & AI for Social Goods
                </li>
                <li>
                  <strong>Track 4:</strong> Intelligent Systems, IoT & Industrial Applications
                </li>
                <li>
                  <strong>Track 5:</strong> Communication Systems & Network Technologies
                </li>
                <li>
                  <strong>Track 6:</strong> Signal Processing, Computing & Data Science
                </li>
                 <li>
                  <strong>Track 7:</strong> Power, Energy & Electrical Systems
                </li>
                
              </ul>
            </div>
            
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
      

       <div className="bg-blue-50 p-4 sm:p-6 rounded-lg shadow-sm">
          <h2 className="text-lg sm:text-xl font-semibold text-indigo-800 mb-3 sm:mb-4">CMT Acknowledgement:</h2>
          <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base">
            <li>
                        <p>
                The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
              </p>
            </li>
            </ul>
        </div> 


       {/*  <div className="bg-blue-50 p-4 sm:p-6 rounded-lg shadow-sm">
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
        </div> */}



        
      </div>
    </>
  )
}

