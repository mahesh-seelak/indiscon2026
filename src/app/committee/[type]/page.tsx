"use client"

import { useParams } from "next/navigation"
import Image from "next/image"
import { committeeGroups } from "@/components/data"
import AnimatedGridBackground from "@/components/animatingBackground"

export default function CommitteeTypePage() {
  const params = useParams()
  const type = params.type as string

  const group = committeeGroups[type]

  if (!group) {
    return (
      <div className="py-20 text-center">
        Committee category not found.
      </div>
    )
  }

  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <AnimatedGridBackground />

      {/* Content */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4">

          {/* Header */}
          <div className="mb-14 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
              {group.title}
            </h2>

            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          {/* Committees */}
          {group.committees.map((committee) => (
            <div key={committee.title} className="mb-16">

              {/* Committee Title */}
              <h3 className="text-2xl font-bold mb-8 text-blue-700 text-center uppercase tracking-wider">
                {committee.title}
              </h3>

              {/* Members Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

                {committee.members.map((member) => (

                  <div
                    key={member.id}
                    className="transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                  >

                    {/* CARD WITH PHOTO */}
                    {member.imageUrl ? (

                      <div className="bg-white/85 backdrop-blur-sm rounded-xl shadow-md p-4 border border-gray-100 h-full">

                        <div className="relative w-24 h-24 mx-auto mb-3">
                          <Image
                            src={member.imageUrl}
                            alt={member.name}
                            fill
                            className="rounded-full object-cover border-4 border-blue-500"
                          />
                        </div>

                        <div className="text-center">
                          <h4 className="font-bold text-base text-gray-800 leading-snug">
                            {member.name}
                          </h4>

                          <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                            {member.role}
                          </p>
                        </div>

                      </div>

                    ) : (

                      /* CARD WITHOUT PHOTO */
                      <div className="bg-white/85 backdrop-blur-sm rounded-xl shadow-md p-4 border border-gray-100 h-full min-h-[130px] flex items-center justify-center">

                        <div className="text-center">
                          <h4 className="font-bold text-base text-gray-800 leading-snug mb-2">
                            {member.name}
                          </h4>

                          <p className="text-gray-500 text-sm leading-relaxed">
                            {member.role}
                          </p>
                        </div>

                      </div>

                    )}

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