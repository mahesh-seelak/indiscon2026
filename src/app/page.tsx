'use client'
import  AnimatedGridBackground  from '@/components/animatingBackground'
import Announcements from '@/components/Announcements'
import Countdown from '@/components/Time'
import React from 'react'
import VantaGlobe from '../components/vantaglobe/VantaGlobe'
import DatesSlider from '../components/dateSlider'
/* import ImportantDatesSlider from '@/components/dateSlider' */


export default function page() {
  return (
    <>
      <VantaGlobe/>

{/* ========================= CALL FOR REVIEWERS SECTION ========================= */}
<section className="relative py-16 overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
  
  {/* Background Glow Effects */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>

  <div className="container mx-auto px-4 lg:px-8 relative z-10">
    
    <div className="max-w-5xl mx-auto">
      
      {/* Badge 
      <div className="flex justify-center mb-6">
        <span className="bg-yellow-400 text-black font-bold px-5 py-2 rounded-full text-sm md:text-base shadow-lg animate-pulse">
          🚨 Call for Reviewers Open Now
        </span>
      </div>*/}

      {/* Main Card */}
  <div className="bg-blue-900/80 backdrop-blur-xl border border-blue-300/20 rounded-3xl shadow-2xl p-8 md:p-12 text-center">        
        {/* Heading */}
        <h2 id="call-for-reviewers" className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
  Call for Reviewers – <span className="text-cyan-300">INDISCON 2026</span>
</h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8 max-w-4xl mx-auto">
          The <span className="font-semibold text-white">7th INDISCON 2026 </span> 
          invites nominations to join our prestigious 
          <span className="text-cyan-300 font-semibold"> Reviewer Panel</span>.
          <br className="hidden md:block" />
          Your expertise will play a vital role in maintaining the quality and excellence 
          of conference publications.
        </p>

        {/* Conference Dates */}
        <div className="inline-flex items-center gap-3 bg-cyan-500/20 border border-cyan-300/30 px-6 py-4 rounded-2xl mb-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 text-cyan-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 7V3m8 4V3m-9 8h10m-11 9h12a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v11a2 2 0 002 2z"
            />
          </svg>

          <div className="text-left">
            <p className="text-sm text-cyan-200 uppercase tracking-wide">
              Conference Dates
            </p>
            <p className="text-xl font-bold text-white">
              11 – 13 September 2026
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          
          <a
            href="https://forms.gle/9q4rBNRxEwhuDJcd8"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-4 rounded-2xl text-lg shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Apply as Reviewer
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>

        </div>

        {/* Footer Text */}
        <p className="text-gray-300 mt-8 text-sm md:text-base">
          We look forward to your valuable support and contribution to 
          <span className="font-semibold text-white"> INDISCON 2026</span>.
        </p>
      </div>
    </div>
  </div>
</section>





      <Countdown/>
      {/* <DatesSlider/> */}
      <AnimatedGridBackground/>
      <Announcements/>
    </>
  )
}
