"use client";
import AnimatedGridBackground from '@/components/animatingBackground';
import React, { useState } from 'react';
import SpeakerCard from '@/components/SpeakerCard';
import { SpeakerType } from '@/components/speakerData';
import { speakers } from '@/components/speakerData';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

export default function SpeakersPage() {
  const [selectedSpeaker, setSelectedSpeaker] = useState<SpeakerType | null>(null);
  
  const handleSpeakerClick = (speaker: SpeakerType) => {
    
      setSelectedSpeaker(speaker);
    
  };

  const handleBackClick = () => {
    setSelectedSpeaker(null);
  };

  // If a speaker is selected, show their detail view
  if (selectedSpeaker) {
    return (
      <>
        <AnimatedGridBackground/>
        <div className="min-h-screen py-12 px-4">
          <div className="max-w-6xl mx-auto">
            {/* Back Button */}
            <button
              onClick={handleBackClick}
              className="mb-8 flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200"
            >
              <ArrowLeft size={20} />
              Back to Speakers
            </button>

            {/* Speaker Profile Header */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8 transition-all duration-300 hover:shadow-xl">
              <div className="flex flex-col lg:flex-row">
                {/* Speaker Image */}
                <div className="lg:w-1/3 p-8 flex justify-center items-start">
                  <div className="w-64 h-64 relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                    <Image
                      src={selectedSpeaker.imageUrl}
                      alt={selectedSpeaker.name}
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
                    {selectedSpeaker.name.trim()}
                  </h1>
                  
                  
                  {selectedSpeaker.designation && (
                    <p className="text-lg text-indigo-600 font-medium mb-4">
                      {selectedSpeaker.designation}
                    </p>
                  )}
                  
                  {selectedSpeaker.university && (
                    <p className="text-gray-600 mb-6">
                      {selectedSpeaker.university}
                    </p>
                  )}
                  
                  {selectedSpeaker.title && (
                    <div className="mb-6 bg-indigo-50 p-4 rounded-lg">
                      <h2 className="text-xl font-semibold text-indigo-700 mb-2">
                        Title of Talk:
                      </h2>
                      <p className="text-lg text-gray-800 leading-relaxed">
                        &quot;{selectedSpeaker.title}&quot;
                      </p>
                    </div>
                  )}
                  
                   <div className="text-gray-700">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                      Professional Background
                    </h3>
                    <p className="text-justify leading-relaxed">
                      {selectedSpeaker.bio}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Abstract/About Section */}
            {selectedSpeaker.about && (
              <div className="bg-white rounded-xl shadow-lg p-8 mb-8 transition-all duration-300 hover:shadow-xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                  Abstract
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  {selectedSpeaker.about.split('\n').filter(paragraph => paragraph.trim()).map((paragraph, index) => (
                    <p key={index} className="text-justify">
                      {paragraph.trim()}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </>
    );
  }

  // Default view - show all speakers
  return (
    <>
      <AnimatedGridBackground/>
      <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4">
        <div className="w-full max-w-6xl bg-white p-8 rounded-xl shadow-lg">
          <h1 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Previous Speakers</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {speakers.map((speaker: SpeakerType) => (
              <div 
                key={speaker.id} 
                onClick={() => handleSpeakerClick(speaker)}
                className={`${
                  speaker.name === "Shuvra S. Bhattacharya" 
                    ? "cursor-default" 
                    : "cursor-pointer hover:scale-105"
                } transition-transform duration-200`}
              >
                <SpeakerCard speaker={speaker} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}