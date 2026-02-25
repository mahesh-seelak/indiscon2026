"use client"
import React from 'react'
import Image from 'next/image'
import { SpeakerType } from '@/components/speakerData'

const SpeakerAbout = ({ speaker }: { speaker: SpeakerType }) => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Speaker Profile Header */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8 transition-all duration-300 hover:shadow-xl">
            <div className="flex flex-col lg:flex-row">
              {/* Speaker Image */}
              <div className="lg:w-1/3 p-8 flex justify-center items-start">
                <div className="w-64 h-64 relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <Image
                    src={speaker.imageUrl}
                    alt={speaker.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>
              
              {/* Speaker Details */}
              <div className="lg:w-2/3 p-8">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                  {speaker.name.trim()}
                </h1>
                
                {speaker.designation && (
                  <p className="text-lg text-indigo-600 font-medium mb-4">
                    {speaker.designation}
                  </p>
                )}
                
                {speaker.university && (
                  <p className="text-gray-600 mb-6">
                    {speaker.university}
                  </p>
                )}
                
                {speaker.title && (
                  <div className="mb-6 bg-indigo-50 p-4 rounded-lg">
                    <h2 className="text-xl font-semibold text-indigo-700 mb-2">
                      Title of Talk:
                    </h2>
                    <p className="text-lg text-gray-800 leading-relaxed">
                      &quot;{speaker.title}&quot;;
                    </p>
                  </div>
                )}
                
                <div className="text-gray-700">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                    Professional Background
                  </h3>
                  <div className="space-y-4">
                    {speaker.bio.split('.').filter(sentence => sentence.trim()).map((sentence, index) => (
                      <p key={index} className="text-justify leading-relaxed">
                        {sentence.trim()}.
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Abstract/About Section */}
          {speaker.about && (
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8 transition-all duration-300 hover:shadow-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                Abstract
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                {speaker.about.split('\n').filter(paragraph => paragraph.trim()).map((paragraph, index) => (
                  <p key={index} className="text-justify">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>
            </div>
          )}

          {/* Navigation Back */}
          <div className="mt-8 text-center">
            <button 
              onClick={() => window.history.back()}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition-all duration-200 font-medium shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              ← Back to Speakers
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpeakerAbout