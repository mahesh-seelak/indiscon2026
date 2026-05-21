import React from 'react'
import AnimatedGridBackground  from '@/components/animatingBackground'
import Image from 'next/image'
import SponsorsSection from '@/components/Sponsors'
export default function page() {
  return (
    <>
<section
  id="sponsorship-opportunities"
  className="py-16 bg-gray-50 scroll-mt-24"
>
  <div className="max-w-7xl mx-auto px-6 lg:px-8">

    {/* Hero Section */}
    <div className="text-center mb-14">
      <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-5">
        Sponsorship & Exhibition Opportunities
      </h2>

      <p className="text-lg text-gray-700 max-w-5xl mx-auto leading-relaxed">
        INDISCON 2026 provides an excellent platform for industries,
        organizations, research laboratories, startups, and technology
        partners to showcase their innovations, products, services, and
        research contributions before a diverse audience of academicians,
        researchers, professionals, entrepreneurs, and students.
      </p>
    </div>

    {/* Why Sponsor */}
    <div className="bg-white rounded-3xl shadow-lg p-8 md:p-10 mb-12 border border-blue-100">
      <h3 className="text-3xl font-bold text-blue-800 mb-8 text-center">
        Why Sponsor INDISCON 2026?
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {[
          "Brand visibility among national and international delegates",
          "Networking opportunities with researchers and industry experts",
          "Promotion through website, brochures, banners & proceedings",
          "Opportunity to showcase products, technologies & services",
          "Direct interaction with students and young researchers",
          "Recognition during keynote, technical and inaugural sessions",
        ].map((item, index) => (
          <div
            key={index}
            className="bg-blue-50 rounded-2xl p-5 flex items-start shadow-sm"
          >
            <span className="text-blue-700 font-bold text-xl mr-3">
              ✓
            </span>

            <p className="text-gray-700 text-sm leading-relaxed">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* Invitation Section */}
    <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-3xl shadow-xl p-8 md:p-10 text-white mb-14">
      <h3 className="text-3xl font-bold mb-6 text-center">
        Join as Sponsor or Exhibitor
      </h3>

      <p className="text-lg leading-relaxed text-center max-w-5xl mx-auto">
        We invite industries, startups, research organizations, and
        technology leaders to participate as sponsors and exhibitors at
        INDISCON 2026 hosted at MNIT Jaipur, India. Sponsorship and
        exhibition spaces are limited and will be allocated on a
        first-come, first-served basis.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white/10 rounded-2xl p-5 backdrop-blur-sm">
          <h4 className="font-semibold text-xl mb-2">
            1500+ Participants
          </h4>
          <p className="text-sm text-gray-100">
            Connect with global academicians, researchers, and industry
            professionals.
          </p>
        </div>

        <div className="bg-white/10 rounded-2xl p-5 backdrop-blur-sm">
          <h4 className="font-semibold text-xl mb-2">
            IEEE Region 10 Conference
          </h4>
          <p className="text-sm text-gray-100">
            Be part of one of the premier IEEE International
            Sub-Section Conferences.
          </p>
        </div>

        <div className="bg-white/10 rounded-2xl p-5 backdrop-blur-sm">
          <h4 className="font-semibold text-xl mb-2">
            Global Visibility
          </h4>
          <p className="text-sm text-gray-100">
            Showcase your brand, technologies, innovations, and
            solutions internationally.
          </p>
        </div>
      </div>
    </div>

    {/* Sponsorship Packages */}
    <div className="mb-14">
      <div className="text-center mb-10">
        <h3 className="text-4xl font-bold text-blue-900 mb-3">
          Sponsorship Packages
        </h3>

        <p className="text-gray-700 text-lg">
          Explore the sponsorship opportunities available at
          INDISCON 2026
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

        {/* Platinum */}
        <div className="bg-gradient-to-br from-gray-100 to-gray-300 rounded-3xl shadow-xl p-8 border-4 border-gray-400 relative">
          <div className="absolute top-4 right-4 bg-blue-900 text-white text-xs px-3 py-1 rounded-full font-semibold">
            PREMIUM
          </div>

          <h4 className="text-3xl font-bold text-gray-900 mb-2">
            Platinum
          </h4>

          <p className="text-2xl font-bold text-blue-900 mb-6">
            ₹5,00,000 + GST
          </p>

          <ul className="space-y-3 text-gray-700 text-sm">
            <li>✓ Logo in all promotional materials</li>
            <li>✓ Exhibition showcase space</li>
            <li>✓ Podium presence during inaugural ceremony</li>
            <li>✓ Gala dinner & networking lunch invitation</li>
            <li>✓ Social media & PR mentions</li>
            <li>✓ 7–10 minute presentation slot</li>
            <li>✓ Three complimentary registrations</li>
          </ul>
        </div>

        {/* Gold */}
        <div className="bg-gradient-to-br from-yellow-50 to-yellow-200 rounded-3xl shadow-xl p-8 border-4 border-yellow-400">
          <h4 className="text-3xl font-bold text-yellow-800 mb-2">
            Gold
          </h4>

          <p className="text-2xl font-bold text-blue-900 mb-6">
            ₹3,00,000 + GST
          </p>

          <ul className="space-y-3 text-gray-700 text-sm">
            <li>✓ Logo in promotional materials</li>
            <li>✓ Exhibition showcase space</li>
            <li>✓ Recognition during conference events</li>
            <li>✓ Branding on banners & posters</li>
            <li>✓ Two complimentary registrations</li>
          </ul>
        </div>

        {/* Silver */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-200 rounded-3xl shadow-xl p-8 border-4 border-gray-300">
          <h4 className="text-3xl font-bold text-gray-700 mb-2">
            Silver
          </h4>

          <p className="text-2xl font-bold text-blue-900 mb-6">
            ₹2,00,000 + GST
          </p>

          <ul className="space-y-3 text-gray-700 text-sm">
            <li>✓ Branding on banners & posters</li>
            <li>✓ Exhibition space at venue</li>
            <li>✓ Product showcase opportunity</li>
            <li>✓ One complimentary registration</li>
          </ul>
        </div>

        {/* Bronze */}
        <div className="bg-orange-50 rounded-3xl shadow-lg p-8 border border-orange-200">
          <h4 className="text-3xl font-bold text-orange-700 mb-2">
            Bronze
          </h4>

          <p className="text-2xl font-bold text-blue-900 mb-6">
            ₹1,00,000 + GST
          </p>

          <ul className="space-y-3 text-gray-700 text-sm">
            <li>✓ Branding on conference materials</li>
            <li>✓ One-page promotional insert in kits</li>
            <li>✓ Visibility among delegates</li>
          </ul>
        </div>

        {/* Academic Partner */}
        <div className="bg-green-50 rounded-3xl shadow-lg p-8 border border-green-200">
          <h4 className="text-3xl font-bold text-green-700 mb-2">
            Academic Partner
          </h4>

          <p className="text-2xl font-bold text-blue-900 mb-6">
            ₹1,50,000 + GST
          </p>

          <ul className="space-y-3 text-gray-700 text-sm">
            <li>✓ Open for IEEE Student Branch institutions</li>
            <li>✓ Showcase projects & innovations</li>
            <li>✓ Branding on posters & flyers</li>
            <li>✓ One complimentary registration</li>
          </ul>
        </div>

        {/* Exhibitor */}
        <div className="bg-purple-50 rounded-3xl shadow-lg p-8 border border-purple-200">
          <h4 className="text-3xl font-bold text-purple-700 mb-2">
            Exhibitor
          </h4>

          <p className="text-2xl font-bold text-blue-900 mb-6">
            ₹60,000 + GST
          </p>

          <ul className="space-y-3 text-gray-700 text-sm">
            <li>✓ Exhibition space at conference venue</li>
            <li>✓ Showcase products & innovations</li>
            <li>✓ Networking opportunities</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Closing Section */}
    <div className="bg-white rounded-3xl shadow-lg p-8 md:p-10 border border-blue-100">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-blue-900 mb-5">
          Partner With INDISCON 2026
        </h3>

        <p className="text-gray-700 text-lg leading-relaxed max-w-5xl mx-auto mb-8">
          We welcome collaboration from industries, startups, research
          organizations, government agencies, and technology leaders to
          bridge the gap between industry and academia and foster
          innovation together.
        </p>

        <div className="flex flex-col items-center gap-5">
          <a
            href="mailto:ieeeindiscon2026@gmail.com"
            className="text-blue-800 text-lg md:text-xl font-bold hover:underline break-all"
          >
            ieeeindiscon2026@gmail.com
          </a>

          <a
            href="https://www.ieeeindiscon.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-900 hover:bg-blue-800 transition-all duration-300 text-white px-8 py-3 rounded-full font-semibold shadow-lg"
          >
            Visit Official Website
          </a>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* <AnimatedGridBackground/>
      <div className="flex items-center justify-center lg:h-[150vh] h-full w-screen ">
      <div className="text-center p-6 bg-white shadow-lg lg:rounded-2xl rounded-none ">
        <h1 className="text-3xl font-bold text-gray-800">Become a partner</h1>
        <Image src="/IndisconSponsor.png" width={600} height={600} alt="partners" />
        <a href="mailto:ieeeindiscon2026@gmail.com" className="text-blue-500">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4">Contact us</button>
        </a>
        
      </div>
    </div>
    <SponsorsSection/> */}
    </>
  )
}
