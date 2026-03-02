"use client"
import { useParams } from "next/navigation"
import Image from "next/image"
import { committeeGroups } from "@/components/data" 
import AnimatedGridBackground from "@/components/animatingBackground";

export default function CommitteeTypePage() {
  const params = useParams();
  const type = params.type as string;
  
  const group = committeeGroups[type];

  if (!group) {
    return <div className="py-20 text-center">Committee category not found.</div>;
  }

  return (
    <div className="relative min-h-screen">
      {/* 1. Ensure the background is present */}
      <AnimatedGridBackground />

      {/* 2. Removed 'bg-white' so it is transparent and we can see the animation */}
      {/* 3. Added 'relative z-10' to ensure content stays above the background layers */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
              {group.title}
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          {/* Committees within this group */}
          {group.committees.map((committee) => (
            <div key={committee.title} className="mb-20">
              <h3 className="text-2xl font-bold mb-10 text-blue-700 text-center uppercase tracking-wider">
                {committee.title}
              </h3>
              
              <div className="flex flex-wrap justify-center gap-8">
                {committee.members.map((member) => (
                  <div key={member.id} className="w-64 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-100 transition-all hover:shadow-2xl hover:-translate-y-1">
                    {/* Added 'bg-white/80' and 'backdrop-blur-sm' for a cool glass effect over the animation */}
                    <div className="relative w-32 h-32 mx-auto mb-4">
                      <Image
                        src={member.imageUrl || "/avatar.jpeg"}
                        alt={member.name}
                        fill
                        className="rounded-full object-cover border-4 border-blue-500"
                      />
                    </div>
                    <div className="text-center">
                      <h4 className="font-bold text-lg text-gray-800 leading-tight">{member.name}</h4>
                      <p className="text-gray-500 text-sm mt-2">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}