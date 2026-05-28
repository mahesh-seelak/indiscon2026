import React from 'react';
import Image from 'next/image';

type Speaker = {
  id: number;
  name: string;
  imageUrl: string;
  introduction: string;
};

const speakers: Speaker[] = [
  {
    id: 1,
    name: 'Dr. Jane Smith',
    imageUrl: 'https://res.cloudinary.com/dk6m1qejk/image/upload/v1738839394/IEEE/naiaavgzjlkkhockcsgm.jpg',
    introduction: 'Dr. Jane Smith is a renowned AI researcher with over 20 years of experience in machine learning and robotics.'
  },
  {
    id: 2,
    name: 'Prof. John Doe',
    imageUrl: 'https://res.cloudinary.com/dk6m1qejk/image/upload/v1738839394/IEEE/naiaavgzjlkkhockcsgm.jpg',
    introduction: 'Prof. John Doe is a cybersecurity expert specializing in ethical hacking and digital forensics.'
  }
];

export default function Speakers() {
  return (
    <section className="relative py-20 overflow-hidden">

      <div className="w-full max-w-[1600px] mx-auto px-4 relative">

        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-900">
          Our Speakers
        </h2>

        <div className="grid grid-cols-4 gap-6">

          {speakers.map((speaker) => (
            <div
              key={speaker.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden text-center"
            >
              <Image
                src={speaker.imageUrl}
                alt={speaker.name}
                width={400}
                height={250}
                className="w-full h-64 object-cover"
              />

              <div className="p-4">
                <h4 className="text-xl font-bold text-gray-800">
                  {speaker.name}
                </h4>

                <p className="text-sm text-slate-700 mt-3 leading-relaxed">
                  {speaker.introduction}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}