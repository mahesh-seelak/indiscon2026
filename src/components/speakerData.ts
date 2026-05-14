export type SpeakerType = {
  id: string;
  name: string;
  ieeeAffil?:string;
  designation?: string;
  university?: string;
  bio: string;
  imageUrl:string;
  about?:string;
  title?:string;
  onClick?:() => void;
};
export const speakers: SpeakerType[] = 
[
   /* {
    id: "1",
    designation: "IEEE President Elect",
    university: "IEEE",
    name: "Dr. Jill Gostin",
    bio: "update soon",
    imageUrl: "/dummy.jpg",
    title: "update soon",
    about: `update soon.`
  },
  {
    id: "2",
    name: "Dr. Balakrishna Islavath",
    designation:"Scientist",
    university:" R&D Redearch Centre, Chennai, MeitY, GoI",
    bio: `Dr. I. Balakrishna is a distinguished academic and research professional, recognized for his extensive contributions to the fields of RF, Microwave, and mm-Wave technologies.Recently appointed as a Senate Member of the University of Madras and Anna University by the Hon'ble Governor of Tamil Nadu, Shri RN Ravi, Dr Balakrishna serves as an Executive Committee Member at the Center for Internet of Things (C-IoT) at Anna University,furthering innovative technological advancements. His impressive career includes leadership roles as Chairman and Board of Studies(BOS)member across prestigious institutions such as IITs, NITs, and various renownedengineeringcolleges. With a rich history as a Visiting Scientist at esteemed institutions like MIT, GeorgiaTech, and IISc Bangalore, he previously excelled as Chief Manager and Headof R&DatReliance Jio Pvt. Ltd, Mumbai. Currently, he is a dedicated Scientist at the R&D Research Centre, Chennai, Ministryof Electronics & Information Technology(MeitY), GoI. With over 15 years of hands-onexperience in R&D, he has been instrumental in executing critical national defenseprojects,contributing to the successful test flights of missiles, and solving complex electromagneticchallenges, including antenna systems for naval ships, satellites, and stealthtechnologyaircraft.His collaborative spirit has led to significant contributions to the "IndigenousDevelopment of End-to- End 5G Test Bed," a project funded by the Department ofTelecommunications (DoT), which resulted in India's first fully functional MIMOandmassive MIMO antenna systems demonstrated to the Hon’ble Prime Minister. His dedication to technology advancement is evident in his active contributionstoindigenous 5G/6G projects and future-oriented tech programs in India. His current researchinterests include a wide array of cutting-edge topics, such as:
 Advanced Communication Systems: 5G/6G solutions, Massive MIMO, andSmartMedical Applications, Spectrum Studies, RF SoC, Intelligent ReflectingSurfaces,and Jammer & Surveillance Systems
 IoT and Smart Applications: Innovations in Smart Agriculture, Smart Cities,Health Monitoring Wearables, and IoT-integrated Smart Homes
 Strategic Antenna and RF Developments: Design and optimizationof phasedarray antennas, MIMO, massive MIMO, WiGig, high-impedance surfaces, andUAV antennas
 Emerging Technologies: Airborne and autonomous applications, robotics, hybridand e- vehicles, RFICs, RF MEMs, and semiconductor technologies
 Innovative Antenna Solutions: Switched beam arrays, aperture coupledandplanarantenna arrays, RF cloaking, and metamaterial-based antennas
He is highly involved in capacity building, delivering impactful lectures, workshops, andconferences globally. He is a prolific author, with several patents and publications inIEEEInternational Journals, contributing to the academic and scientific community. His work, driven by a passion for societal impact and national advancement, resonates acrosssectors, reflecting his commitment to harnessing technology to address contemporarychallengesand enhance India's global standing in innovation.`,
    imageUrl: "/BalakrishnaIslavat.jpg",
    about:`Antenna technology is a key enabler for a wide range of next-generation technologies, including 5G evolution, 6G, IoT, and beyond.  This talk will explore the latest advancements in antenna technologies that are critical to realizing the full potential of 6G. Key topics include novel antenna designs for millimetre-wave and terahertz frequencies, massive MIMO architectures, reconfigurable intelligent surfaces (RIS), and energy-efficient antenna solutions.   The presentation will cover wideband antennas, reconfigurable antennas, massive MIMO, and innovative antenna systems. Furthermore, the talk will highlight the importance of developing sustainable antenna solutions to minimise energy consumption and promote environmentally friendly technologies, paving the way for smarter and more sustainable societal advancements.`,
    title:`Innovative Antenna Solutions for Next-Generation Technologies: Driving Smart and Sustainable Societal Advancements`
  }, */
 

  {
    id: "1",
    designation: "IEEE President Elect",
    university: "IEEE",
    name: "Dr. Jill Gostin",
    bio: "updated soon",
    imageUrl: "/jill.jpg",
    title: `updated soon.`,
    about: `updated soon.`
  },
  {
    id: "2",
    designation: "Professor",
    university: "Collaborative Microelectronics Design Excellence Ecentre",
    name: "Dr. Asrulnizam Abd Manaf",
    bio: "updated soon",
    imageUrl: "/asrul.jpg",
    title: `updated soon.`,
    about: `updated soon.`
  },
  {
    id: "3",
    designation: "Deputy Vice-Chancellor",
    university: "Lincoln University Malaysia",
    name: "Prof. Sandeep Poddar",
    bio: "updated soon",
    imageUrl: "/sandeep_poddar.jpg",
    title: `updated soon.`,
    about: `updated soon.`
  },
  {
    id: "4",
    designation: "Co-Founder",
    university: "Startups Accelerator, Silicon Valley",
    name: "Mr. Adithya Das",
    bio: "updated soon",
    imageUrl: "/adithya.jpg",
    title: `updated soon.`,
    about: `updated soon.`
  },
  {
    id: "5",
    designation: "Professor, CSE",
    university: "University of North Texas",
    name: "Dr. Saraju Mohanty",
    bio: "updated soon",
    imageUrl: "/saraju.jpg",
    title: `updated soon.`,
    about: `updated soon.`
  },
  {
    id: "6",
    designation: "Professor",
    university: "Duy Tan University, Vietnam",
    name: "Prof. Anand Nayar",
    bio: "updated soon",
    imageUrl: "/anad_nayar.jpg",
    title: `updated soon.`,
    about: `updated soon.`
  },
  {
    id: "7",
    designation: "Professor",
    university: "IIT Delhi",
    name: "Prof. Bhim Singh",
    bio: "Application of Power Electronics in Solar and Wind Energy Systems",
    imageUrl: "/bhim_singh.jpg",
    title: `updated soon.`,
    about: `updated soon.`
  },
  {
    id: "8",
    designation: "Professor",
    university: "IIT Roorkee",
    name: "Prof. N. P. Padhy",
    bio: "Impact of high renewable penetration and grid forming capability",
    imageUrl: "/np_pady.jpg",
    title: `updated soon.`,
    about: `updated soon.`
  },
  {
    id: "9",
    designation: "Professor",
    university: "IIT Delhi",
    name: "Prof. B. K. Panigrahi",
    bio: "updated soon",
    imageUrl: "/B. K. Panigrahi.jpg",
    title: `updated soon.`,
    about: `updated soon.`
  },
  {
    id: "10",
    designation: "Professor",
    university: "IIT Delhi",
    name: "Prof. Ranjan Kumar Mallik",
    bio: "updated soon",
    imageUrl: "/Ranjan Kumar Mallik.jpg",
    title: `updated soon.`,
    about: `updated soon.`
  },
  {
    id: "11",
    designation: "Professor",
    university: "DTU",
    name: "Prof. Rachna Garg",
    bio: "updated soon",
    imageUrl: "/Rachna_Garg.jpg",
    title: `updated soon.`,
    about: `updated soon.`
  },
  {
    id: "12",
    designation: "Professor (Former Scientist G, ISRO)",
    university: "DAU Gandhinagar",
    name: "Dr. H. S. Jattana",
    bio: "updated soon",
    imageUrl: "/Dr. H. S. Jattana.jpg",
    title: `updated soon.`,
    about: `updated soon.`
  },
  {
    id: "13",
    designation: "Professor",
    university: "IISc Bangalore",
    name: "Prof. Mayank Srivastava",
    bio: "updated soon",
    imageUrl: "/Prof. Mayank Srivastava.jpg",
    title: `updated soon.`,
    about: `updated soon.`
  },
  {
    id: "14",
    designation: "Professor",
    university: "IIT Roorkee",
    name: "Prof. Sudeep Das Gupta",
    bio: "updated soon",
    imageUrl: "/Prof. Sudeep Das Gupta.jpg",
    title: `updated soon.`,
    about: `updated soon.`
  },
  {
    id: "15",
    designation: "Professor",
    university: "IIT Indore",
    name: "Prof. Santosh Vishwakarma",
    bio: "updated soon",
    imageUrl: "/Prof. Santosh Vishwakarma.jpg",
    title: `updated soon.`,
    about: `updated soon.`
  },
  {
    id: "16",
    designation: "Professor",
    university: "IIT Guwahati",
    name: "Dr. John Jose",
    bio: "updated soon",
    imageUrl: "/Dr. John Jose.jpg",
    title: `updated soon.`,
    about: `updated soon.`
  },
  {
    id: "17",
    designation: "Professor",
    university: "IIT Patna",
    name: "Prof. Mahesh H. Kolekar",
    bio: "updated soon",
    imageUrl: "/Prof. Mahesh H. Kolekar.jpg",
    title: `updated soon.`,
    about: `updated soon.`
  },
  {
    id: "18",
    designation: "Professor",
    university: "IIT Patna",
    name: "Prof. Ranjan Kumar Behera",
    bio: "updated soon",
    imageUrl: "/Prof. Ranjan Kumar Behera.jpg",
    title: `updated soon.`,
    about: `updated soon.`
  },
  {
    id: "19",
    designation: "Professor",
    university: "IIT Bombay",
    name: "Prof. Abhay Karandikar",
    bio: "updated soon",
    imageUrl: "/Prof. Abhay Karandikar.jpg",
    title: `updated soon.`,
    about: `updated soon.`
  },
  {
    id: "20",
    designation: "Chair",
    university: "IEEE DataPort",
    name: "Dr. Anjali Dewan",
    bio: "updated soon",
    imageUrl: "/Dr. Anjali Dewan.jpg",
    title: `updated soon.`,
    about: `updated soon.`
  },
  {
    id: "21",
    designation: "Professor",
    university: "IIT Jodhpur",
    name: "Prof. Ajay Aggarwal",
    bio: "updated soon",
    imageUrl: "/Prof. Ajay Aggarwal.jpg",
    title: `updated soon.`,
    about: `updated soon.`
  },
  {
    id: "22",
    designation: "Chair",
    university: "IEEE UP Section",
    name: "Prof. Yogesh Chauhan",
    bio: "updated soon",
    imageUrl: "/Prof. Yogesh Chauhan.jpg",
    title: `updated soon.`,
    about: `updated soon.`
  },
  {
    id: "23",
    designation: "Chair",
    university: "VLSI Society",
    name: "Dr. Satya Gupta",
    bio: "updated soon",
    imageUrl: "/Dr. Satya Gupta.jpg",
    title: `updated soon.`,
    about: `updated soon.`
  },
  {
    id: "24",
    designation: "University Program Manager",
    university: "Synopsys",
    name: "Dr. Sankalp Singh",
    bio: "updated soon",
    imageUrl: "/Dr. Sankalp Singh.jpg",
    title: `updated soon.`,
    about: `updated soon.`
  },
  {
    id: "25",
    designation: "Associate Professor",
    university: "ISM Dhanbad",
    name: "Prof. Rajeev Kumar Ranjan",
    bio: "Neuromorphic Computing",
    imageUrl: "/Prof. Rajeev Kumar Ranjan.jpg",
    title: `updated soon.`,
    about: `updated soon.`
  },
  {
    id: "26",
    designation: "Associate Professor",
    university: "IIT Jammu",
    name: "Dr. Ambika Prasad Shah",
    bio: "updated soon",
    imageUrl: "/Dr. Ambika Prasad Shah.jpg",
    title: `updated soon.`,
    about: `updated soon.`
  },
  {
    id: "27",
    designation: "Director Innovation",
    university: "STMicroelectronics",
    name: "Mr. Manoj Kumar",
    bio: "updated soon",
    imageUrl: "/Mr. Manoj Kumar.jpg",
    title: `updated soon.`,
    about: `updated soon.`
  },
  {
    id: "28",
    designation: "Professor",
    university: "IIT Delhi",
    name: "Dr. Mahesh Verma",
    bio: "updated soon",
    imageUrl: "/dummy.jpg",
    title: `updated soon.`,
    about: `updated soon.`
  },
  {
    id: "29",
    designation: "Rector",
    university: "Vignan’s Institute of Technology",
    name: "Prof. Madhusudhan Rao Vallabhanchi",
    bio: "updated soon",
    imageUrl: "/Prof. Madhusudhan Rao Vallabhanchi.jpg",
    title: `updated soon.`,
    about: `updated soon.`
  }
];
