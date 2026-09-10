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
        {/* VLTC VENUE NAVIGATION                                     */}
        {/* ========================================================= */}

        <section className="mb-10">
          <div className="rounded-xl border border-green-200 bg-green-50 p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Reaching the VLTC Front Porch
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              The conference venue is the <strong>VLTC (Vivekananda Lecture
                Theatre Complex)</strong> at MNIT Jaipur. The following
              information provides the approximate distances from nearby
              transport hubs and directions from the MNIT Dean Gate to the
              conference venue.
            </p>

            {/* Transport distances */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white rounded-lg border border-green-100 p-5 shadow-sm">
                <div className="text-2xl mb-3">🚆</div>
                <h3 className="font-semibold text-gray-800 mb-1">
                  Gandhi Nagar Railway Station
                </h3>
                <p className="text-green-700 font-semibold">
                  10 min · 4.2 km
                </p>
              </div>

              <div className="bg-white rounded-lg border border-green-100 p-5 shadow-sm">
                <div className="text-2xl mb-3">✈️</div>
                <h3 className="font-semibold text-gray-800 mb-1">
                  Jaipur Airport
                </h3>
                <p className="text-green-700 font-semibold">
                  12 min · 5.2 km
                </p>
              </div>

              <div className="bg-white rounded-lg border border-green-100 p-5 shadow-sm">
                <div className="text-2xl mb-3">🚆</div>
                <h3 className="font-semibold text-gray-800 mb-1">
                  Jaipur Station → MNIT Dean Gate
                </h3>
                <p className="text-green-700 font-semibold">
                  24 min · 9.8 km
                </p>
              </div>
            </div>

            {/* Directions */}
            <div className="rounded-lg bg-white border border-gray-200 p-5 mb-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                Directions from MNIT Dean Gate
              </h3>

              <ol className="list-decimal list-inside space-y-2 text-gray-700 leading-relaxed">
                <li>
                  Start from the <strong>MNIT Dean Gate</strong> and head
                  straight down the main road.
                </li>
                <li>
                  Continue straight and pass the <strong>Helicopter (OAT)</strong>.
                </li>
                <li>
                  Continue up the steep incline and then take a
                  <strong> right at the circle (PMC)</strong>.
                </li>
                <li>
                  From the circle, continue straight for a few hundred metres.
                  The <strong>VLTC building</strong> will be prominently visible
                  as you approach the main lecture theatre zone.
                </li>
                <li>
                  The <strong>Statue of Swami Vivekananda</strong> is a useful
                  landmark near the venue.
                </li>
              </ol>
            </div>

            {/* Route image from the supplied navigation document */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="px-5 py-4 border-b border-gray-200">
                <h3 className="text-lg font-bold text-gray-800">
                  Route Guide
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Visual guide from the MNIT Dean Gate through OAT and PMC to
                  the VLTC.
                </p>
              </div>

              <div className="p-4 flex justify-center">
                <img
                  src="/images/vltc-route-guide.png"
                  alt="Route guide from MNIT Dean Gate to the VLTC Front Porch via OAT and PMC"
                  className="w-full max-w-2xl h-auto max-h-[400px] rounded-lg object-contain"
                />
              </div>
            </div>
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