import React from 'react'
import AnimatedGridBackground  from '@/components/animatingBackground'
import Image from 'next/image'
import SponsorsSection from '@/components/Sponsors'
export default function page() {
  return (
    <>
      <AnimatedGridBackground/>
      <div className="flex items-center justify-center lg:h-[150vh] h-full w-screen ">
      <div className="text-center p-6 bg-white shadow-lg lg:rounded-2xl rounded-none ">
        <h1 className="text-3xl font-bold text-gray-800">Become a partner</h1>
        <Image src="/IndisconSponsor.png" width={600} height={600} alt="partners" />
        <a href="mailto:ieeeindiscon2026@gmail.com" className="text-blue-500">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4">Contact us</button>
        </a>
        
      </div>
    </div>
    <SponsorsSection/>
    </>
  )
}
