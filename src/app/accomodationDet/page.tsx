"use client";
import AnimatedGridBackground from "@/components/animatingBackground";
import React from "react";
import Link from "next/link";
import { motion} from "framer-motion";

const AccommodationInfo = () => {
  const hotels = [
    {
      name: "DEEPTI Courtyard",
      website: "https://www.deepticourtyard.com/",
      distance: "5 Kms from NIT Rourkela",
      contact: "+91-9090098300/8895996473",
      rooms: [
        { category: "Standard Rooms", single: "3000", double: "3400" },
        { category: "Delux Rooms", single: "3800", double: "4200" },
        { category: "Club Rooms", single: "5000", double: "5000" },
        { category: "Club Rooms with Balcony", single: "5400", double: "5400" },
        { category: "Super Club Rooms", single: "5400", double: "5400" },
        { category: "Suite Rooms", single: "5960", double: "5960" },
        { category: "Extra Person", single: "1000", double: "-" },
      ],
    },
    {
      name: "Radhika Regency",
      website: "https://www.baisakhihotels.com/",
      distance: "7 Kms from NIT Rourkela",
      contact: "S. K. Imran - 7008360572",
      rooms: [
        { category: "Standard", single: "2228", double: "2475" },
        { category: "Executive Standard", single: "2723", double: "2970" },
        { category: "Deluxe", single: "3053", double: "3300" },
        { category: "Super Deluxe", single: "-", double: "3713" },
        { category: "Suites", single: "-", double: "4463" },
      ],
    },
    {
      name: "The Regency Inn",
      website: "http://www.regencyinn.in/",
      distance: "7 Kms from NIT Rourkela",
      contact: "S. Chakraborty - 9776106125",
      rooms: [
        { category: "Standard", single: "1998", double: "2396" },
        { category: "Delux Rooms", single: "2359", double: "2621" },
        { category: "Executive Rooms", single: "2959", double: "3184" },
      ],
    },
    {
      name: "Hotel Brindaban",
      website: "https://www.hotelbrindaban.com/",
      distance: "7 Kms from NIT Rourkela",
      contact: "Sukumar Dasgupta - 9238428921",
      rooms: [
        { category: "Premium Rooms", single: "1596", double: "1996" },
        { category: "Classic", single: "1996", double: "2396" },
        { category: "Club", single: "2076", double: "2476" },
        { category: "Royal", single: "2396", double: "2796" },
      ],
    },
    {
      name: "Panthanivas",
      website: "https://otdc.odisha.gov.in/accommodations/panthanivas-rourkela",
      distance: "4.5 Kms from NIT Rourkela",
      contact: "9861180573",
      rooms: [
        { category: "Delux Rooms", single: "-", double: "2250" },
        { category: "Premium Rooms", single: "-", double: "2700" },
        { category: "Super Premium", single: "-", double: "3150" },
        { category: "Royal Suite", single: "-", double: "3600" },
      ],
    },
    {
      name: "MayFair World Cup Village",
      website: "https://www.mayfairhotels.com/world-cup-village-rourkela/",
      distance: "10.5 kms from NIT Rourkela",
      contact: "Subhajit Mandal - +919238400919",
      rooms: [
        { category: "Executive", single: "3500", double: "4000" },
        { category: "Delux", single: "4500", double: "5000" },
        { category: "Suite", single: "9000", double: "9000" },
      ],
    },
  ];

  return (
    <div className="max-w-6xl mt-3 mb-3 rounded-lg mx-auto p-6 bg-white">
      <AnimatedGridBackground />
      <h1 className="text-3xl text-center font-bold text-gray-800 mb-6">
        Accommodation Information
      </h1>
      <div className="mb-6 text-gray-700 leading-relaxed">
        <p className="mb-4">
          The local arrangement committee has identified some hotels closer to
          the venue; interested participants may book them using the below
          details. These rooms may not be available closer to the date.
        </p>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
          <p className="font-semibold text-yellow-800">
            The mentioned discounted rates will be available only up to 15th
            August 2026.
          </p>
        </div>

        <p className="mb-4">
          While booking, please mention the NIT (NIT Rourkela) INDISCON 2026
          conference for availing these rates. Some hotels may not have twin
          (separate) beds for double occupancy. Please check while booking.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
          <p className="text-blue-800">
            Please bring govt issued ID (Aadhar, DL) and check the check-in and
            checkout times with the hotel.
          </p>
        </div>

        <p className="mb-4">
          Please check online to see if you can get a better price. Also, please
          check reviews of other hotels nearby and book yourself if you wish.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded p-4 mb-6">
          <p className="font-semibold mb-2">
            In case of any difficulty, contact LOC members:
          </p>
          <ul className="text-sm space-y-1">
            <li>
              <strong>Prof. Ayas Kanta Swain:</strong> 9437341298
            </li>
            <li>
              <strong>Prof. Shrishail Hiremath:</strong> 9964982542
            </li>
            <li>
              <strong>Prof. Ramavath Prasad Naik:</strong> 9861707825
            </li>
            <li>
              <strong>Prof. Sadananda Behera:</strong> 9861077539
            </li>
          </ul>
        </div>

        <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
          <p className="font-semibold text-green-800">
            12% GST will be added to the price mentioned below. Breakfast will
            be free in all hotels.
          </p>
        </div>
      </div>

      <div className="space-y-8">
        {hotels.map((hotel, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
          >
            <div className="bg-gray-50 p-4 border-b">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {hotel.name}
              </h2>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
                <div>
                  <strong>Distance:</strong> {hotel.distance}
                </div>
                <div>
                  <strong>Contact:</strong> {hotel.contact}
                </div>
                <div>
                  <a
                    href={hotel.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                      Room Category
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                      Single Occupancy (₹)
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                      Double Occupancy (₹)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {hotel.rooms.map((room, roomIndex) => (
                    <tr
                      key={roomIndex}
                      className={
                        roomIndex % 2 === 0 ? "bg-white" : "bg-gray-50"
                      }
                    >
                      <td className="px-4 py-3 text-sm text-gray-800">
                        {room.category}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-800">
                        {room.single !== "-" ? `₹${room.single}` : "-"}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-800">
                        {room.double !== "-" ? `₹${room.double}` : "-"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
          </div>
        ))}
        <div className="">
        <motion.div
            className="flex justify-center mt-8"
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Link
            href="/accOpt"
            className="px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-green-500 to-green-600 rounded-full hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Check Your Alloted Accomodation
          </Link>
        </motion.div>
      </div>
      </div>
    </div>
  );
};

export default AccommodationInfo;
