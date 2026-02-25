import AnimatedGridBackground from "@/components/animatingBackground";
import React from "react";
import { SpeakerType, speakers } from "@/components/speakerData";
import Image from 'next/image';
import { notFound } from 'next/navigation';
import BackButton from '@/components/BackButton'; // We'll need to create this client component

// Generate static params for all speakers at build time
export async function generateStaticParams() {
  return speakers.map((speaker: SpeakerType) => ({
    name: speaker.name.toLowerCase().replace(/[^a-z0-9]/g, ''),
  }));
}

// Generate metadata for each speaker page
export async function generateMetadata({ params }: { params: Promise<{ name: string }> }) {
  const resolvedParams = await params;
  const { name } = resolvedParams;
  
  const decodedName = decodeURIComponent(name).toLowerCase().replace(/[^a-z0-9]/g, '');
  const speaker = speakers.find((s: SpeakerType) => 
    s.name.toLowerCase().replace(/[^a-z0-9]/g, '').includes(decodedName) ||
    decodedName.includes(s.name.toLowerCase().replace(/[^a-z0-9]/g, ''))
  );

  if (!speaker) {
    return {
      title: 'Speaker Not Found',
    };
  }

  return {
    title: `${speaker.name} - Speaker Profile`,
    description: speaker.bio.substring(0, 160) + '...',
  };
}

interface PageProps {
  params: Promise<{
    name: string;
  }>;
}

export default async function SpeakerDetailsPage({ params }: PageProps) {
  const resolvedParams = await params;
  const { name } = resolvedParams;
  
  // Find the speaker by matching the name parameter
  const decodedName = decodeURIComponent(name).toLowerCase().replace(/[^a-z0-9]/g, '');
  const speaker = speakers.find((s: SpeakerType) => 
    s.name.toLowerCase().replace(/[^a-z0-9]/g, '').includes(decodedName) ||
    decodedName.includes(s.name.toLowerCase().replace(/[^a-z0-9]/g, ''))
  );

  // If speaker not found, trigger Next.js 404
  if (!speaker) {
    notFound();
  }

  return (
    <>
      <AnimatedGridBackground/>
      <div className="min-h-screen py-12 px-4">
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
                      &quot;{speaker.title}&quot;
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
            <BackButton />
          </div>
        </div>
      </div>
    </>
  );
}