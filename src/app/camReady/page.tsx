import AnimatedGridBackground from '@/components/animatingBackground'
import React from 'react'

const Page = () => {
  return (
    <div className='max-w-4xl mx-auto p-4 sm:p-6 md:p-8'>
      <AnimatedGridBackground/>
       <div className=" rounded-xl shadow-lg overflow-hidden mb-8 ">
       <iframe
         src="/camReady.pdf"
         title="CAM Ready PDF"
         className="w-full h-112"
         allowFullScreen
         style={{ border: 'none' }}
       ></iframe>
      </div>
    </div>
  )
}

export default Page
