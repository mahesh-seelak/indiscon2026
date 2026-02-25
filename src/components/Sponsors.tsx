"use client"

import Image from "next/image"

interface Sponsor {
  id: number
  name: string
  logo: string
  website?: string
  tier?: "platinum" | "gold" | "silver" | "bronze"
}

const sponsors: Sponsor[] = [
  {
    id: 1,
    name: "ANRF",
    logo: "/sponsors/ANRF.jpg",
    tier: "platinum",
  },
  {
    id: 2,
    name: "NALCO",
    logo: "/sponsors/NALCO.jpg",
    tier: "platinum",
  },
  {
    id: 3,
    name: "SAIL",
    logo: "/sponsors/SAIL.jpg",
    tier: "platinum",
  },
  {
    id: 4,
    name: "REVINE TECHNOLOGIES",
    logo: "/sponsors/REVINE.png",
    tier: "platinum",
  },
  {
    id: 5,
    name: "SCUBE",
    logo: "/sponsors/SCUBE.jpg",
    tier: "platinum",
  },
  {
    id: 6,
    name: "IEEE Future Networks",
    logo: "/IEEE-Futures.jpg",
    tier: "platinum",
  },
  {
    id: 7,
    name: "L & T Construction",
    logo: "/LandT.jpg",
    tier: "platinum",
  },
  {
    id: 8,
    name: "ISRO",
    logo: "/ISRO.jpg",
    tier: "platinum",
  },
]

export default function SponsorsSection() {
  if (sponsors.length === 0) {
    return null
  }

  return (
    <section className="flex justify-center items-center py-8 px-4">
      <div className="w-full max-w-6xl backdrop-blur-lg bg-white/20 border-2 border-white/30 rounded-xl p-8 shadow-xl hover:bg-white/25 transition-all duration-300">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 text-shadow-sm">Our Sponsors</h2>
          <p className="text-gray-700 text-lg text-shadow-sm">Thank you to our valued partners and sponsors</p>
        </div>

        <div
          className={`grid gap-6 items-center justify-items-center ${
            sponsors.length <= 2
              ? "grid-cols-1 md:grid-cols-2"
              : sponsors.length <= 4
                ? "grid-cols-2 md:grid-cols-4"
                : "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          }`}
        >
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.id}
              className={`backdrop-blur-sm bg-white/40 border border-white/50 rounded-lg p-4 hover:bg-white/50 transition-all duration-300 hover:scale-105 ${
                sponsor.website ? "cursor-pointer" : ""
              }`}
              onClick={() => {
                if (sponsor.website) {
                  window.open(sponsor.website, "_blank", "noopener,noreferrer")
                }
              }}
              role={sponsor.website ? "button" : undefined}
              tabIndex={sponsor.website ? 0 : undefined}
              onKeyDown={(e) => {
                if (sponsor.website && (e.key === "Enter" || e.key === " ")) {
                  e.preventDefault()
                  window.open(sponsor.website, "_blank", "noopener,noreferrer")
                }
              }}
            >
              <Image
                src={sponsor.logo || "/placeholder.svg"}
                height={80}
                width={120}
                alt={`${sponsor.name} logo`}
                className="object-contain w-full h-full"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = `/placeholder.svg?height=80&width=120&text=${encodeURIComponent(sponsor.name)}`
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
