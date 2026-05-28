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
      <section
  id="call-for-reviewers"
  className="py-16 bg-white scroll-mt-24"
>
  <div className="max-w-6xl mx-auto px-6 lg:px-8">

    {/* Heading */}
    <div id="call-for-reviewers" className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-5">
        Call for Reviewers – 2026 IEEE INDISCON
      </h2>

      <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
        The 7th 2026 IEEE INDISCON invites nominations from
        academicians, researchers, industry professionals, and domain
        experts to join the Reviewer Panel for the conference.
      </p>
    </div>

    {/* Main Content */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

      {/* Left Section */}
      <div className="bg-blue-50 rounded-3xl shadow-lg p-8 border border-blue-100">
        <h3 className="text-2xl font-bold text-blue-800 mb-5">
          Why Join as a Reviewer?
        </h3>

        <div className="space-y-4">
          {[
            "Contribute to maintaining the quality of conference publications",
            "Review innovative research from global researchers",
            "Network with academicians and industry experts",
            "Enhance your professional and research profile",
            "Be part of a prestigious IEEE Region 10 conference",
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-start bg-white rounded-2xl p-4 shadow-sm"
            >
              <span className="text-blue-700 font-bold text-lg mr-3">
                ✓
              </span>

              <p className="text-gray-700 text-sm leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="bg-white rounded-3xl shadow-lg p-8 border border-blue-100">
        <h3 className="text-2xl font-bold text-blue-800 mb-5">
          Conference Information
        </h3>

        <div className="space-y-5">

          <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
            <h4 className="text-lg font-semibold text-blue-900 mb-2">
              Conference Dates
            </h4>

            <p className="text-gray-700 font-medium">
              11 – 13 September 2026
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
            <h4 className="text-lg font-semibold text-blue-900 mb-2">
              Reviewer Registration
            </h4>

            <p className="text-gray-700 mb-4">
              Interested experts can register by filling out the Google
              Form below:
            </p>

            <a
              href="https://forms.gle/9q4rBNRxEwhuDJcd8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-900 hover:bg-blue-800 transition-all duration-300 text-white px-6 py-3 rounded-full font-semibold shadow-md"
            >
              Apply as Reviewer
            </a>
          </div>

          <div className="bg-blue-900 rounded-2xl p-5 text-white">
            <p className="leading-relaxed text-sm">
              Your expertise will play a vital role in ensuring the
              quality and impact of the conference publications.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>








      <Countdown/>

      <section
  id="publication-opportunity"
  className="relative py-20 overflow-hidden"
>
  {/* Background */}
  <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-blue-900 to-slate-900"></div>

  {/* Glow Effects */}
  <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>
  <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl"></div>

  <div className="relative max-w-5xl mx-auto px-6 lg:px-8">

    <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-14 shadow-2xl text-center">

     <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
        Publication Opportunity
      </h2>

      <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-4xl mx-auto">
        All accepted and presented papers will be submitted for possible
        publication in the
        <span className="text-cyan-300 font-semibold">
          {" "}IEEE Xplore® Digital Library
        </span>
        {" "}(Conference Record # 72742), through the IEEE Conference
        Publications Program (CPP).
      </p>
    </div>
  </div>
</section>
      {/* <DatesSlider/> */}
      <AnimatedGridBackground/>
      <Announcements/>


      <section
  id="tutorial-workshop-proposals"
  className="py-16 bg-white scroll-mt-24"
>
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-blue-900 mb-4">
        Call for Tutorial/Workshop Proposals
      </h2>

      <p className="text-gray-700 text-lg max-w-4xl mx-auto leading-relaxed">
        2026 IEEE INDISCON solicits proposals for Tutorials/Workshops of
        <span className="font-semibold"> 90 minutes (one session)</span> that
        complement the regular program with clear and focused coverage of
        thrust technologies within the scope and theme of the conference.
        Tutorials/Workshops provide an excellent opportunity for researchers,
        academicians, and industry professionals to learn about
        state-of-the-art research and emerging technologies.
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      
      {/* Proposal Format */}
      <div className="bg-blue-50 rounded-2xl shadow-md p-8">
        <h3 className="text-2xl font-semibold text-blue-800 mb-6">
          Tutorial/Workshop Proposal Format
        </h3>

        <p className="text-gray-700 mb-4">
          Proposals should have a maximum of{" "}
          <span className="font-semibold">4 pages</span> and must address the
          following:
        </p>

        <ol className="list-decimal list-inside space-y-3 text-gray-700 leading-relaxed">
          <li>Title of the Tutorial/Workshop</li>

          <li>
            Abstract (maximum 200 words) for publicity on the conference
            website
          </li>

          <li>
            Duration of the Tutorial/Workshop (maximum 90 minutes)
          </li>

          <li>
            Names, affiliations, contact addresses, and short biographies
            (maximum 200 words each) of the instructor(s)
          </li>

          <li>
            Novelty and significance of the proposed Tutorial/Workshop,
            emphasizing timeliness and relevance
          </li>

          <li>Detailed outline of the Tutorial/Workshop content</li>

          <li>Intended audience</li>
        </ol>
      </div>

      {/* Topics */}
      <div className="bg-white border border-blue-100 rounded-2xl shadow-md p-8">
        <h3 className="text-2xl font-semibold text-blue-800 mb-6">
          Preferable Topics
        </h3>

        <p className="text-gray-700 mb-4">
          Topics of interest include, but are not limited to:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            "Neuromorphic Computing",
            "Quantum Computing",
            "High-Speed Computing",
            "GPU Vega Processor",
            "Cryogenic Electronics",
            "Drone and Automation Technologies",
            "Hands-on Tutorials using MATLAB",
            "Biomedical Signal and Image Processing",
            "Renewable Energy Integration",
            "Energy Harvesting & Low-Power Electronics",
            "AI & IoT for Smart Cities",
          ].map((topic, index) => (
            <div
              key={index}
              className="bg-blue-100 text-blue-900 px-4 py-3 rounded-xl text-sm font-medium shadow-sm"
            >
              {topic}
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Submission Details */}
    <div className="mt-12 bg-gradient-to-r from-blue-700 to-blue-900 rounded-2xl shadow-lg p-8 text-white text-center">
  <h3 className="text-3xl font-bold mb-4">
    Tutorial/Workshop Proposal Submission
  </h3>

  <p className="text-lg mb-4">
    Submit your Tutorial/Workshop proposals via email to:
  </p>

  <div className="flex flex-col items-center gap-5">
    <a
      href="mailto:ieeeindiscon2026@gmail.com"
      className="text-yellow-300 text-lg md:text-xl font-semibold hover:underline break-all"
    >
      ieeeindiscon2026@gmail.com
    </a>

    <div className="bg-white text-blue-900 px-6 py-3 rounded-full font-bold shadow-md">
      Submission Deadline: May 31, 2026
    </div>
  </div>
</div>
  </div>
</section>
    </>
  )
}
