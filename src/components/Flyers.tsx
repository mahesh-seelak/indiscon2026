'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

export default function Flyers() {
  const [selectedFlyer, setSelectedFlyer] = useState<number | null>(null);

  const flyers = [
    {
      id: 1,
      src: '/flyer1.jpg',
      alt: 'IEEE INDISCON 2026 - Sustainable and Immersive Computing for Future Ecosystems',
    },
    {
      id: 2,
      src: '/flyer2.jpg',
      alt: 'IEEE INDISCON 2026 - AI-Driven Semantic Technology for 6G Sustainable Communication',
    },
    {
      id: 3,
      src: '/flyer3.jpg',
      alt: 'IEEE INDISCON 2026 - Innovation in AI for Sustainable Healthcare and Assistive Technology',
    },
  ];

  const handleFlyerClick = (id: number) => {
    setSelectedFlyer(selectedFlyer === id ? null : id);
    
    // Only scroll on mobile devices
    if (window.innerWidth < 768 && selectedFlyer !== id) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  // Reset scroll position when closing the flyer
  useEffect(() => {
    if (!selectedFlyer && window.innerWidth < 768) {
      const scrollPosition = window.sessionStorage.getItem('scrollPosition');
      if (scrollPosition) {
        window.scrollTo({
          top: parseInt(scrollPosition, 10),
          behavior: 'smooth'
        });
        window.sessionStorage.removeItem('scrollPosition');
      }
    }
  }, [selectedFlyer]);

  // Store scroll position when opening a flyer
  useEffect(() => {
    if (selectedFlyer && window.innerWidth < 768) {
      window.sessionStorage.setItem('scrollPosition', window.scrollY.toString());
    }
  }, [selectedFlyer]);

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="py-16">
        <h1 className="text-4xl font-bold text-center mb-12">
          Special Sessions
        </h1>
        
        {/* Flyers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
          {flyers.map((flyer) => (
            <div key={flyer.id} className="flex flex-col items-center gap-2">
              <span className="text-xl font-bold ">Special Session {flyer.id}</span>
              <div
                onClick={() => handleFlyerClick(flyer.id)}
                className={`
    relative aspect-[3/4] w-full rounded-lg overflow-hidden cursor-pointer
    transition-all duration-300 ease-in-out
    ${selectedFlyer && selectedFlyer !== flyer.id ? 'opacity-40 scale-95' : ''}
    shadow-lg hover:shadow-xl
    border border-sky-100/30
    hover:border-sky-200/50
  `}
              >
                <Image
                  src={flyer.src}
                  alt={flyer.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Overlay for selected flyer */}
        {selectedFlyer && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 md:pt-6">
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
              onClick={() => setSelectedFlyer(null)}
            />

            {/* Selected Flyer */}
            <div className="relative z-10 w-full h-[calc(100vh-4rem)] md:h-auto md:max-w-4xl mx-auto md:aspect-[3/4]">
              <Image
                src={flyers.find(f => f.id === selectedFlyer)?.src || ''}
                alt={flyers.find(f => f.id === selectedFlyer)?.alt || ''}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
              
              {/* Close button */}
              <button
                onClick={() => setSelectedFlyer(null)}
                className="absolute bg-red-600 font-bold text-white top-4 right-4 md:-top-4 md:-right-4 p-2 rounded-full bg-background border shadow-lg hover:bg-muted transition-colors"
              >
                <X className=" h-6 w-6" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}