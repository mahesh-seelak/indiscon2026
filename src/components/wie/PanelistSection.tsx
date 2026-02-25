import Image from "next/image"

export default function PanelistSection() {
  const panelists = [
    {
      id: 1,
      name: "Prof Celia Sahanaz",
      designation: "Professor BUET and 2023-24 IEEE WIE Committee (WIEC) Chair ",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNTV6dd_xf7XpQ9KJnFZRTywG1sIxKS-2Epw&s",
    },
    {
      id: 2,
      name: "Prof Sanghamitra Bandhopadhy",
      designation: "Padmashri & SSB awardee and Director ISI Kolkata",
      image: "/Bandyopadhyay.jpg",
    },
    {
      id: 3,
      name: "Dr. Anitha Sukumaran Nair",
      designation: "Scientist at VSSC, ISRO , Thiruvananthapuram",
      image: "/wie/AnithaNair.jpg",
    },
    {
      id: 4,
      name: "Prof Renu Sharma",
      designation: "Professor and Associate Dean (Student affairs) SOA Bhubaneswar",
      image: "/wie/RenuSharma.jpg",
    },
    {
      id: 5,
      name: "Ms Deepa K Mahajan",
      designation: "TETRA INFORMATION SERVICES PRIVATE LIMITED	Director	and COGROWTH SERVICES PRIVATE LIMITED	Director New Delhi",
      image: "/wie/Deepa.jpg",
    },
  ]

  return (
    <section className="flex justify-center items-center py-8 px-4">
      <div className="w-full max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Meet Our Panelists</h2>
          <p className="text-lg text-gray-600">Distinguished women engineers sharing their expertise</p>
        </div>

        {/* Panelists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center items-center">
          {panelists.map((panelist) => (
            <div
              key={panelist.id}
              className="group relative backdrop-blur-lg bg-white/20 border border-white/30 rounded-lg p-6 shadow-lg hover:shadow-xl hover:bg-white/30 transition-all duration-300 hover:scale-105"
            >
              {/* Profile Image */}
              <div className="flex justify-center mb-4">
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-white/50 shadow-md">
                  <Image
                    src={panelist.image || "/placeholder.svg"}
                    alt={`${panelist.name} profile`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Panelist Info */}
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 text-shadow-sm">{panelist.name}</h3>
                <p className="text-sm text-gray-700 leading-relaxed text-shadow-sm">{panelist.designation}</p>
              </div>

              {/* Decorative element */}
              <div className="absolute top-2 right-2 w-3 h-3 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-60"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
