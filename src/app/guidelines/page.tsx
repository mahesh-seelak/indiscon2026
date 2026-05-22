
import AnimatedGridBackground from '@/components/animatingBackground'
import PaperSubmission from '@/components/callforpapersnormal'
import React from 'react'

export default function page() {
  return (
    <>
        <AnimatedGridBackground/>
        <PaperSubmission/>


        <section
  id="travel-grants-awards"
  className="py-16 bg-gray-50 scroll-mt-24"
>
  <div id="travel-grants-awards" className="max-w-7xl mx-auto px-6 lg:px-8">

    {/* Heading */}
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-blue-900 mb-4">
        Travel Grants & Awards
      </h2>

      <p className="text-gray-700 text-lg max-w-4xl mx-auto leading-relaxed">
        INDISCON IEEE 2026 is pleased to offer financial support to selected
        IEEE student members (first author only) for presenting their
        research work during the conference. The grants and awards are
        intended to encourage high-quality research contributions and
        recognize outstanding academic achievements.
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

      {/* Travel Grants */}
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100">
        <h3 className="text-2xl font-semibold text-blue-800 mb-5">
          Travel Grants
        </h3>

        <p className="text-gray-700 leading-relaxed mb-5">
          Financial assistance will be awarded to a limited number of
          selected IEEE student members (first author only) on a highly
          competitive basis. The grant may partially cover:
        </p>

        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="text-blue-700 mr-2">•</span>
            Partial conference registration fee
          </li>

          <li className="flex items-start">
            <span className="text-blue-700 mr-2">•</span>
            Partial travel support for attending the conference
          </li>
        </ul>

        <p className="text-gray-700 leading-relaxed mt-5">
          The final decision regarding the grant will be made by the
          Conference Organizing Committee / Fellowship Committee.
        </p>

        <div className="mt-6 bg-blue-50 rounded-xl p-5">
          <h4 className="text-lg font-semibold text-blue-900 mb-3">
            Required Details for Application
          </h4>

          <ul className="space-y-2 text-gray-700 text-sm">
            <li>• Paper ID</li>
            <li>• Paper Title</li>
            <li>
              • Authors Names and Affiliations (with country name)
            </li>
            <li>• Abstract</li>
            <li>• Email Address</li>
            <li>• Contact Number</li>
          </ul>
        </div>
      </div>

      {/* Awards */}
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100">
        <h3 className="text-2xl font-semibold text-blue-800 mb-5">
          Awards
        </h3>

        <p className="text-gray-700 leading-relaxed mb-5">
          Best Paper Awards, Poster Awards, and PhD Forum Awards will be
          presented to authors and participants whose work demonstrates
          groundbreaking research and exceptional presentation quality.
        </p>

        <p className="text-gray-700 leading-relaxed mb-5">
          Papers will be nominated by the session chairs and reviewed by
          the evaluation committee based on reviewers’ comments and
          recommendation statements.
        </p>

        <h4 className="text-lg font-semibold text-blue-900 mb-4">
          Evaluation Criteria
        </h4>

        <div className="space-y-3">
          {[
            "Originality and novelty of research work",
            "Technical quality and depth of research",
            "Clarity of presentation and communication skills",
            "Research methodology and experimental validation",
            "Relevance to conference themes and societal/industrial impact",
            "Ability to answer questions and defend the research contribution",
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-start bg-blue-50 rounded-xl px-4 py-3"
            >
              <span className="text-blue-700 font-bold mr-3">✓</span>
              <span className="text-gray-700 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Contact */}
    <div className="mt-12 bg-gradient-to-r from-blue-700 to-blue-900 rounded-2xl shadow-lg p-8 text-white text-center">
      <h3 className="text-3xl font-bold mb-4">
        Travel Grant Applications
      </h3>

      <p className="text-lg mb-4">
        Interested IEEE student members (first author only) may apply
        after paper acceptance by emailing the required details to:
      </p>

      <div className="flex flex-col items-center gap-5">
        <a
          href="mailto:ieeeindiscon2026@gmail.com"
          className="text-yellow-300 text-lg md:text-xl font-semibold hover:underline break-all"
        >
          ieeeindiscon2026@gmail.com
        </a>

        <div className="bg-white text-blue-900 px-6 py-3 rounded-full font-bold shadow-md">
          Limited Grants Available
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}
