// "use client";
// import AnimatedGridBackground from "@/components/animatingBackground";
// import React from "react";
// import Link from "next/link";
// import { motion} from "framer-motion";

// const AccommodationInfo = () => {
//   const hotels = [
//     {
//       name: "DEEPTI Courtyard",
//       website: "https://www.deepticourtyard.com/",
//       distance: "5 Kms from NIT Rourkela",
//       contact: "+91-9090098300/8895996473",
//       rooms: [
//         { category: "Standard Rooms", single: "3000", double: "3400" },
//         { category: "Delux Rooms", single: "3800", double: "4200" },
//         { category: "Club Rooms", single: "5000", double: "5000" },
//         { category: "Club Rooms with Balcony", single: "5400", double: "5400" },
//         { category: "Super Club Rooms", single: "5400", double: "5400" },
//         { category: "Suite Rooms", single: "5960", double: "5960" },
//         { category: "Extra Person", single: "1000", double: "-" },
//       ],
//     },
//     {
//       name: "Radhika Regency",
//       website: "https://www.baisakhihotels.com/",
//       distance: "7 Kms from NIT Rourkela",
//       contact: "S. K. Imran - 7008360572",
//       rooms: [
//         { category: "Standard", single: "2228", double: "2475" },
//         { category: "Executive Standard", single: "2723", double: "2970" },
//         { category: "Deluxe", single: "3053", double: "3300" },
//         { category: "Super Deluxe", single: "-", double: "3713" },
//         { category: "Suites", single: "-", double: "4463" },
//       ],
//     },
//     {
//       name: "The Regency Inn",
//       website: "http://www.regencyinn.in/",
//       distance: "7 Kms from NIT Rourkela",
//       contact: "S. Chakraborty - 9776106125",
//       rooms: [
//         { category: "Standard", single: "1998", double: "2396" },
//         { category: "Delux Rooms", single: "2359", double: "2621" },
//         { category: "Executive Rooms", single: "2959", double: "3184" },
//       ],
//     },
//     {
//       name: "Hotel Brindaban",
//       website: "https://www.hotelbrindaban.com/",
//       distance: "7 Kms from NIT Rourkela",
//       contact: "Sukumar Dasgupta - 9238428921",
//       rooms: [
//         { category: "Premium Rooms", single: "1596", double: "1996" },
//         { category: "Classic", single: "1996", double: "2396" },
//         { category: "Club", single: "2076", double: "2476" },
//         { category: "Royal", single: "2396", double: "2796" },
//       ],
//     },
//     {
//       name: "Panthanivas",
//       website: "https://otdc.odisha.gov.in/accommodations/panthanivas-rourkela",
//       distance: "4.5 Kms from NIT Rourkela",
//       contact: "9861180573",
//       rooms: [
//         { category: "Delux Rooms", single: "-", double: "2250" },
//         { category: "Premium Rooms", single: "-", double: "2700" },
//         { category: "Super Premium", single: "-", double: "3150" },
//         { category: "Royal Suite", single: "-", double: "3600" },
//       ],
//     },
//     {
//       name: "MayFair World Cup Village",
//       website: "https://www.mayfairhotels.com/world-cup-village-rourkela/",
//       distance: "10.5 kms from NIT Rourkela",
//       contact: "Subhajit Mandal - +919238400919",
//       rooms: [
//         { category: "Executive", single: "3500", double: "4000" },
//         { category: "Delux", single: "4500", double: "5000" },
//         { category: "Suite", single: "9000", double: "9000" },
//       ],
//     },
//   ];

//   return (
//     <div className="max-w-6xl mt-3 mb-3 rounded-lg mx-auto p-6 bg-white">
//       <AnimatedGridBackground />
//       <h1 className="text-3xl text-center font-bold text-gray-800 mb-6">
//         Accommodation Information
//       </h1>
//       <div className="mb-6 text-gray-700 leading-relaxed">
//         <p className="mb-4">
//           The local arrangement committee has identified some hotels closer to
//           the venue; interested participants may book them using the below
//           details. These rooms may not be available closer to the date.
//         </p>

//         <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
//           <p className="font-semibold text-yellow-800">
//             The mentioned discounted rates will be available only up to 15th
//             August 2026.
//           </p>
//         </div>

//         <p className="mb-4">
//           While booking, please mention the NIT (NIT Rourkela) IEEE INDISCON2026
//           conference for availing these rates. Some hotels may not have twin
//           (separate) beds for double occupancy. Please check while booking.
//         </p>

//         <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
//           <p className="text-blue-800">
//             Please bring govt issued ID (Aadhar, DL) and check the check-in and
//             checkout times with the hotel.
//           </p>
//         </div>

//         <p className="mb-4">
//           Please check online to see if you can get a better price. Also, please
//           check reviews of other hotels nearby and book yourself if you wish.
//         </p>

//         <div className="bg-gray-50 border border-gray-200 rounded p-4 mb-6">
//           <p className="font-semibold mb-2">
//             In case of any difficulty, contact LOC members:
//           </p>
//           <ul className="text-sm space-y-1">
//             <li>
//               <strong>Prof. Ayas Kanta Swain:</strong> 9437341298
//             </li>
//             <li>
//               <strong>Prof. Shrishail Hiremath:</strong> 9964982542
//             </li>
//             <li>
//               <strong>Prof. Ramavath Prasad Naik:</strong> 9861707825
//             </li>
//             <li>
//               <strong>Prof. Sadananda Behera:</strong> 9861077539
//             </li>
//           </ul>
//         </div>

//         <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
//           <p className="font-semibold text-green-800">
//             12% GST will be added to the price mentioned below. Breakfast will
//             be free in all hotels.
//           </p>
//         </div>
//       </div>

//       <div className="space-y-8">
//         {hotels.map((hotel, index) => (
//           <div
//             key={index}
//             className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
//           >
//             <div className="bg-gray-50 p-4 border-b">
//               <h2 className="text-xl font-semibold text-gray-800 mb-2">
//                 {hotel.name}
//               </h2>
//               <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
//                 <div>
//                   <strong>Distance:</strong> {hotel.distance}
//                 </div>
//                 <div>
//                   <strong>Contact:</strong> {hotel.contact}
//                 </div>
//                 <div>
//                   <a
//                     href={hotel.website}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-600 hover:text-blue-800 underline"
//                   >
//                     Visit Website
//                   </a>
//                 </div>
//               </div>
//             </div>

//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead className="bg-gray-100">
//                   <tr>
//                     <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
//                       Room Category
//                     </th>
//                     <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
//                       Single Occupancy (₹)
//                     </th>
//                     <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
//                       Double Occupancy (₹)
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {hotel.rooms.map((room, roomIndex) => (
//                     <tr
//                       key={roomIndex}
//                       className={
//                         roomIndex % 2 === 0 ? "bg-white" : "bg-gray-50"
//                       }
//                     >
//                       <td className="px-4 py-3 text-sm text-gray-800">
//                         {room.category}
//                       </td>
//                       <td className="px-4 py-3 text-sm text-gray-800">
//                         {room.single !== "-" ? `₹${room.single}` : "-"}
//                       </td>
//                       <td className="px-4 py-3 text-sm text-gray-800">
//                         {room.double !== "-" ? `₹${room.double}` : "-"}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
            
//           </div>
//         ))}
//         <div className="">
//         <motion.div
//             className="flex justify-center mt-8"
//           whileTap={{ scale: 0.95 }}
//           transition={{ type: "spring", stiffness: 400, damping: 17 }}
//         >
//           <Link
//             href="/accOpt"
//             className="px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-green-500 to-green-600 rounded-full hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg"
//           >
//             Check Your Alloted Accomodation
//           </Link>
//         </motion.div>
//       </div>
//       </div>
//     </div>
//   );
// };

// export default AccommodationInfo;
"use client";

import AnimatedGridBackground from "@/components/animatingBackground";
import React from "react";
import { motion } from "framer-motion";

const AccommodationInfo = () => {
  const hotels = [
    {
      name: "Red Fox by Lemon Tree Hotels, Jaipur",
      distance: "Opposite MNIT Jaipur",
      contact: "+91 141 4120101",
      website:
        "https://www.lemontreehotels.com/red-fox-hotel/jaipur/hotels-jaipur",
    },
    {
      name: "Hotel Rang Mahal",
      distance: "Approx. 1 km from MNIT Jaipur",
      contact: "+91 141 2524317",
      website: "https://www.hotelrangmahal.com/",
    },
    {
      name: "Hotel Royal Empire",
      distance: "Approx. 1.5 km from MNIT Jaipur",
      contact: "+91 9001793533",
      website: "https://www.hotelroyalempire.com/",
    },
  ];

  return (
    <div className="relative max-w-6xl mx-auto mt-3 mb-3 rounded-lg bg-white overflow-hidden">
      <AnimatedGridBackground />

      <div className="relative px-6 py-8 md:px-10">
        {/* ========================================================= */}
        {/* PAGE HEADER                                               */}
        {/* ========================================================= */}

        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Accommodation &amp; Travel Information
          </h1>

          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Important accommodation and connectivity information for
            participants attending the conference at MNIT Jaipur.
          </p>
        </div>

        {/* ========================================================= */}
        {/* HOSTEL ACCOMMODATION                                      */}
        {/* ========================================================= */}

        <section className="mb-8">
          <div className="rounded-xl border border-purple-200 bg-purple-50 p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-11 h-11 rounded-full bg-purple-100 flex items-center justify-center">
                <span className="text-xl">🏨</span>
              </div>

              <div>
                <h2 className="text-xl font-bold text-purple-900 mb-2">
                  Hostel Accommodation
                </h2>

                <p className="text-purple-800 leading-relaxed">
                  Accommodation facilities in the hostel are available for
                  student presenters. The availability is limited and hostel
                  accommodation will be provided on a{" "}
                  <strong>first-come, first-served basis</strong>.
                </p>

                <p className="mt-2 text-sm text-purple-700">
                  Student presenters are encouraged to make their request at
                  the earliest.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* IMPORTANT NOTICE                                         */}
        {/* ========================================================= */}

        <section className="mb-8">
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-11 h-11 rounded-full bg-amber-100 flex items-center justify-center">
                <span className="text-xl">📢</span>
              </div>

              <div>
                <h2 className="text-xl font-bold text-amber-900 mb-2">
                  Important Notice
                </h2>

                <p className="text-amber-800 leading-relaxed">
                  A detailed schedule of the program will be shared once early
                  bird registrations are completed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* MNIT CONNECTIVITY                                         */}
        {/* ========================================================= */}

        <section className="mb-10">
          <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-5">
              Reaching MNIT Jaipur
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Airport */}
              <div className="bg-white rounded-lg border border-blue-100 p-5 shadow-sm">
                <div className="text-2xl mb-3">✈️</div>

                <h3 className="font-semibold text-gray-800 mb-1">
                  Jaipur International Airport
                </h3>

                <p className="text-blue-700 font-semibold">
                  Approx. 5 km
                </p>
              </div>

              {/* Railway */}
              <div className="bg-white rounded-lg border border-blue-100 p-5 shadow-sm">
                <div className="text-2xl mb-3">🚆</div>

                <h3 className="font-semibold text-gray-800 mb-1">
                  Jaipur Junction Railway Station
                </h3>

                <p className="text-blue-700 font-semibold">
                  Approx. 13 km
                </p>
              </div>

              {/* Bus Stand */}
              <div className="bg-white rounded-lg border border-blue-100 p-5 shadow-sm">
                <div className="text-2xl mb-3">🚌</div>

                <h3 className="font-semibold text-gray-800 mb-1">
                  Sindhi Camp Central Bus Stand
                </h3>

                <p className="text-blue-700 font-semibold">
                  Approx. 10 km
                </p>
              </div>
            </div>

            <p className="mt-5 text-sm text-gray-600">
              MNIT Jaipur is located on Jawaharlal Nehru (JLN) Marg, Jaipur -
              302017.
            </p>
          </div>
        </section>

        {/* ========================================================= */}
        {/* HOTEL ACCOMMODATION                                       */}
        {/* ========================================================= */}

        <section className="mb-10">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                Nearby Hotels
              </h2>

              <p className="text-gray-600 mt-1">
                Participants may directly contact the hotels for booking.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {hotels.map((hotel, index) => (
              <motion.div
                key={hotel.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -4 }}
                className="rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                {/* Hotel top */}
                <div className="bg-gray-50 px-5 py-5 border-b border-gray-200">
                  <h3 className="text-lg font-bold text-gray-800 leading-snug">
                    {hotel.name}
                  </h3>
                </div>

                <div className="p-5">
                  {/* Distance */}
                  <div className="mb-4">
                    <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold mb-1">
                      Distance from MNIT
                    </p>

                    <p className="text-gray-800 font-medium">
                      {hotel.distance}
                    </p>
                  </div>

                  {/* Contact */}
                  <div className="mb-5">
                    <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold mb-1">
                      Contact
                    </p>

                    <a
                      href={`tel:${hotel.contact.replace(/\s+/g, "")}`}
                      className="text-gray-800 hover:text-blue-600 transition-colors"
                    >
                      {hotel.contact}
                    </a>
                  </div>

                  {/* Website */}
                  <a
                    href={hotel.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-4 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
                  >
                    Visit Website
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-5 rounded-lg bg-gray-50 border border-gray-200 p-4">
            <p className="text-sm text-gray-600">
              <strong>Note:</strong> Participants are advised to confirm room
              availability, rates and booking terms directly with the hotel
              before making a reservation.
            </p>
          </div>
        </section>

        {/* ========================================================= */}
        {/* FOOTER NOTE                                               */}
        {/* ========================================================= */}

        <div className="text-center pt-2">
          <p className="text-sm text-gray-500">
            For any accommodation-related assistance, please contact the
            conference organizers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccommodationInfo;