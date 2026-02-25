import React from 'react'
import { SpeakerType } from './speakerData'
import Image from 'next/image'

const SpeakerCard = ({ speaker }: { speaker: SpeakerType }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md w-full transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02]">
      <div className="relative w-full aspect-square mb-5 bg-gray-100 rounded-md overflow-hidden">
        <Image 
          src={speaker.imageUrl} 
          alt={speaker.name} 
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
          sizes="(max-width: 640px) 100vw, 640px"
        />
      </div>
      <h2 className="text-xl font-bold text-gray-900 text-center">{speaker.name}</h2>
      {speaker.ieeeAffil && (
        <p className="text-indigo-600 text-[15px] font-medium text-center mt-1.5">{speaker.ieeeAffil}</p>
      )}
      {speaker.designation && (
        <p className="text-indigo-600 text-[15px] font-medium text-center mt-1.5">{speaker.designation}</p>
      )}
      <p className="text-gray-600 text-sm text-center mt-1.5">{speaker.university}</p>
    </div>
  )
}

export default SpeakerCard