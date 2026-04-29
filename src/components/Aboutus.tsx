"use client"

import { motion } from "framer-motion"
import { type FC } from "react"
import Image from "next/image"

interface Section {
  title: string
  content: string
  image: string
}

const AboutUs: FC = () => {
  const sections: Section[] = [
    {
      title: "About IEEE INDISCON",
      content:
        `IEEE INDISCON-2026 is the 7th edition of INDISCON(Conference ID #) and the flagship conference of the IEEE India Council. It will be organized by IEEE Rajasthan Subsection at MNIT Jaipur. The conference aims to foster the theme through keynotes, invited talks, and industry exhibits and oral presentation of research articles in the most relevant areas allied to the theme. The conference will also exhibit Graduate Research Forum to encourage budding young researchers to showcase their innovative research in aforementioned domains.`,
      image:
        "/logo.svg",
    },
    {
      title: "About the Theme",
      content:
        "The theme of IEEE INDISCON 2026, “AI & Semiconductors to Advance Sustainable Humanitarian Technology,” emphasizes the transformative role of intelligent systems and semiconductor innovations in addressing global challenges while promoting environmental, economic, and social sustainability. The conference focuses on the integration of Artificial Intelligence with next-generation semiconductor technologies to enable energy-efficient computing, smart sensing, and scalable digital solutions.Key areas include AI-driven systems, semiconductor design and fabrication, Internet of Things (IoT), smart energy systems, sustainable infrastructure, and intelligent transportation. These technologies play a critical role in enhancing efficiency, optimizing resource utilization, and reducing environmental impact.IEEE INDISCON 2026, to be held at Malaviya National Institute of Technology Jaipur, India, will serve as a premier platform for researchers, academicians, industry professionals, and students to share insights, present cutting-edge research, and foster collaborations that drive sustainable development and societal well-being.",
      image:
        "/theme.jpeg",
    },
    {
      title: "About MNIT Jaipur",
      content:
        `Malaviya National Institute of Technology (MNIT), Jaipur, established in 1963 as Malaviya Regional Engineering College, is one of India’s leading technical institutions and an Institute of National Importance. MNIT Jaipur offers undergraduate, postgraduate, and doctoral programs across engineering, science, management, and architecture. The Institute is known for its strong academic environment, quality research, and active collaboration with industry and academia. With state-of-the-art infrastructure and a vibrant campus, MNIT Jaipur provides an excellent venue for hosting international conferences such as INDISCON 2026.`,
      image:
        "/MNIT.jpg",
    },
    {
      title: "About IEEE India Council",
      content:
        "IEEE is the world's largest professional association dedicated to advancing technological innovation and excellence for the benefit of humanity. IEEE and its members inspire a global community through IEEE highly cited publications, conferences, technology standards, and professional and educational activities. IEEE India Council is the umbrella organisation which coordinates IEEE activities in India. Its primary aim is to assist and coordinate the activities of local Sections, in order to benefit mutually, and avoid duplication of effort and resources. IEEE India Council was established on 20th May 1976 and is one of the five councils in the Asia Pacific Region (Region #10 of IEEE).For more details visit: https://ieeeindiacouncil.org/",
      image:
        "/ieeeindiacouncil_cover.jpg",
    },
    {
      title: "About IEEE Rajasthan Subsection",
      content:
        "IEEE Rajasthan Subsection was established on 20th June 2015 under the umbrella of IEEE India Council with GEO Code R0012302. The Subsection serves the state of Rajasthan and works to promote professional and student activities in engineering and technology. Its aim is to organize and support technical events such as seminars, workshops, conferences, short-term courses, and exhibitions that foster innovation, collaboration, and professional growth. The Subsection also engages with IEEE Student Branches across colleges in the region to enhance learning, networking, and career development opportunities for members.",
      image:
        "/IEEERajasthan.jpeg",
    },
  ]

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }

  const imageVariants = {
    hover: { scale: 1.03 },
    rest: { scale: 1 }
  }

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 ">
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-gray-900"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About INDISCON 2026
      </motion.h2>

      <div className="max-w-6xl mx-auto space-y-24">
        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-12`}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <motion.div
              className="relative w-full lg:w-1/2 overflow-hidden rounded-xl shadow-lg"
              variants={imageVariants}
              whileHover="hover"
              initial="rest"
              transition={{ duration: 0.3 }}
            >
              <Image
                src={section.image}
                alt={section.title}
                width={800}
                height={450}
                className={`w-full ${section.image === '/AboutTheTheme.jpg' ? 'object-fill' : 'object-cover'} h-64`}
                priority={index < 2}
              />
            </motion.div>

            <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pl-6' : 'lg:pr-6'}`}>
              <h3 className="text-3xl md:text-3xl font-bold text-gray-900 mb-4">
                {section.title}
              </h3>
              <p className="text-slate-900 font-semibold leading-relaxed text-justify">
                {section.content}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default AboutUs