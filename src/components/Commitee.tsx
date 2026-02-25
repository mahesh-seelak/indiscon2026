"use client"
import Image from "next/image"
import { patronCommittees, otherCommittees } from "./data"

export default function Committee() {
  return (
    <section className="min-h-screen py-20 flex flex-col items-center justify-center">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        {/* Header */}
        <div className="mb-16 animate-fadeIn" style={{ animation: "fadeIn 0.5s ease-out" }}>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
            Our <span className="text-blue-600">Committees</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the distinguished leaders guiding our IEEE initiatives and activities
          </p>
        </div>

        {/* Patrons Section */}
        <div className="mb-24 flex flex-col items-center">
          {patronCommittees.map((committee) => (
            <div key={committee.title} className="mb-16 animate-fadeUp w-full flex flex-col items-center">
              <h3 className="text-3xl font-bold mb-3 text-blue-700">{committee.title}</h3>
              <div className="h-1 w-32 mb-6 bg-blue-700"></div>

              <div className="flex flex-wrap justify-center gap-8 w-full max-w-6xl">
                {committee.members.map((member) => (
                  <div key={member.id} className="transition-transform duration-300 hover:-translate-y-2 flex justify-center w-64">
                    <div className="rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl bg-white border border-gray-200 w-64 h-[300px] flex flex-col items-center">
                      <div className="flex flex-col items-center p-6 h-full justify-between">
                        <div className="relative w-32 h-32">
                          <Image

                          src={member.imageUrl || "/public/avatar.jpeg"}
                            alt={member.name}
                            width={128}
                            height={128}
                            className="rounded-full object-cover border-4 border-blue-500 shadow-lg"
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              objectPosition: 'center'
                            }}
                          />
                          {committee.title.includes("Patron") && (
                            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                              Patron
                            </div>
                          )}
                        </div>
                        <div className="text-center">
                          <h4 className="font-bold mb-2 text-gray-800 text-xl">{member.name}</h4>
                          <p className="text-gray-600 font-medium text-sm">{member.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Other Committees Section */}
        <div className="mb-24 flex flex-col items-center">
          {otherCommittees.map((committee) => (
            <div key={committee.title} className="mb-16 animate-fadeUp w-full flex flex-col items-center">
              <h3 className="text-3xl font-bold mb-3 text-blue-700">{committee.title}</h3>
              <div className="h-1 w-32 mb-6 bg-blue-700"></div>

              <div className="flex flex-wrap justify-center gap-8 w-full max-w-6xl">
                {committee.members.map((member) => (
                  <div key={member.id} className="transition-transform duration-300 hover:-translate-y-2 flex justify-center w-64">
                    <div className="rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl bg-white border border-gray-200 w-64 h-[300px] flex flex-col items-center">
                      <div className="flex flex-col items-center p-6 h-full justify-between">
                        <div className="relative w-32 h-32">
                          <Image
                            src={member.imageUrl || "/placeholder.svg"}
                            alt={member.name}
                            width={128}
                            height={128}
                            className="rounded-full object-cover border-4 border-blue-500 shadow-lg"
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              objectPosition: 'center'
                            }}
                          />
                        </div>
                        <div className="text-center">
                          <h4 className="font-bold mb-2 text-gray-800 text-xl">{member.name}</h4>
                          <p className="text-gray-600 font-medium text-sm">{member.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fadeUp {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}