export type Member = {
  id: number
  name: string
  role: string
  imageUrl?: string
}

export type Committee = {
  title: string
  members: Member[]
}

let id = 1
const m = (name: string, role: string, imageUrl?: string): Member => ({
  id: id++,
  name,
  role,
  ...(imageUrl ? { imageUrl } : {}),
})

/* ---------------- PATRONS ---------------- */

export const patronCommittees: Committee[] = [
  {
    title: "Patrons",
    members: [
      m(
        "Prof. Prerna Gaur",
        "Chair, IEEE India Council",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRub3_UMM7LMjkMpiAGe88Lhi6SQiPRaVv9vA&s"
      ),

      m("Prof. N. P. Padhy", "Director, MNIT Jaipur", "/mnitdir.jpg"),
      m("Prof. Preeti Bajaj", "Chair Elect 2026, IEEE India Council", "/Prof. Preeti Bajaj.jpg"),
    ],
  },
    {
    title: "Co-Patrons",
    members: [
      m("Prof. Rohit Bhakar", "Professor, MNIT Jaipur", "/mnitjas121.png"),
      m("Prof. D. Boolchandani", "Past Chair, IEEE Rajasthan Sub-Section", "/mnitjas061.png"),
      m("Prof. M. N. Hoda", "Chair, IEEE Delhi Section", "/M-N-Hoda.jpeg"),
      m("Prof. S. M. Sameer", "IEEE R10 Director-Elect", "/smSameer.jpg"),
    ],
  },

  {
    title: "Honorary Chairs",
    members: [
      m("Prof. V. Ramgopal Rao", "IEEE Fellow & Group VC, BITS Pilani", "/Pic-4.jpg.webp"),
      m("Prof. Bhim Singh", "IEEE Fellow & Emeritus Professor, IIT Delhi", "/faculty_90rdtVACWb.jpg"),
      //m("Prof. M. C. Govil", "Director, NIT Sikkim", "/mahesh.png"),
      // m("Prof. Subrata Mukhopadhyay", "Adjunct Professor, NSUT", "/Subrata-Mukhopadhyay.webp"),
      //m("Dr. Satya Gupta", "President, VLSI Society", "/1688613993566.jpg"),
      m("Prof. B. K. Panigrahi", "Professor, IIT Delhi",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThRKjITwO55dKDIHUrEulkhFbpuvuKp0inHA&s"),
      m("Prof. Vineet Sahula", "Professor, MNIT Jaipur", "/mnitjas063.png"),
   ],
  },

  {
    title: "General Chairs",
    members: [
      m("Prof. Sudip Misra", "IIT Kharagpur", "/1517731962576.jpg"),
      m("Prof. Lava Bhargava", "Professor, MNIT Jaipur & Chair, IEEE Rajasthan Subsection", "/mnitjas097.png"),
      m("Prof. Sandeep Vyas", "Vice-chair, IEEE Rajasthan Subsection & Professor, JECRC Foundation", "/Prof. Sandeep Vyas.jpeg"),
    ],
  },

  {
    title: "Executive Steering Committee",
    members: [
      m("Mr. Deepak Mathur", "IEEE Past Vice President-MGA",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8AwK73IZlWew38so4ddMSLprBk8ZRgZ3Edw&s"),
      m("Prof. Sandeep Sancheti", "Elsevier India", "/SS_Photo_H_S.webp"),
      m("Prof. Debabrata Das", "Immediate Past Chair, IEEE India Council",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKnzniJrVCK2IHkTCQ952FifWpbA32bD2Hnw&s"),
      m("Prof. Suresh Nair", "Past Chair, IEEE India Council",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI8qFEnAViKWyntqryCxH_UxoG35CErxKazg&s"),
      m("Prof. Ashutosh Dutta", "IEEE Fellow, Johns Hopkins University, USA",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx_-K-vlJRAOVfL4j7zHUURjEmbF3JoeofPw&s"),
      m("Prof. Shiban K Koul", "Chair, IEEE MTS", "/koul_photo_0-250x330.jpg"),
       m("Prof. Vinay Kumar Chandna", "Principal, JECRC Foundation", "/vinay.jpg"),

    ],
  },
 
  {
    title: "International Advisory Committee",
    members: [
      m("Ms. Mary Ellen Randall", "IEEE President", "/MaryEllenRandall.jpg"),
      m("Mr. Maurizio Bozzi", "Past IEEE MTS-President", "/Mr. Maurizio Bozzi.jpg"),
      m("Ms. Bozenna Pasik-Duncan", "University of Kansas", "/bozenna.jpg"),
      m("Mr. Grayson Randall", "IEEE HTB Chair", "/Mr. Grayson Randall.jpg"),
      m("Ms. Kathleen Kramer", "Former IEEE President", "/Ms. Kathleen Kramer.jpeg"),
      m("Prof. Saraju Mohanty", "University of Texas", "/saraju_mohanty.jpg"),
      m("Prof. Anand Nayyar", "Duy Tan University", "/Anand_Nayyar.jpg"),
      m("Prof. Sajal Das", "Missouri S&T University",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn3tiubeHnlguDmkR7ptxgeDFPhPcrXaq_CQ&s"),
      m("Prof. Amit Mishra", "Aberystwyth University",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU1o3rDuAbq0PLG0jfl0lnTvJzGBJwD6T82w&s"),
      m("Prof. Ranga Rao V. Prasad", "Delft University of Technology",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6TKe40G6bZhp2Yz531yN9ilTzy-tNpukTrA&s"),
      m("Prof. Akshay Rathore", "Singapore Institute of Technology",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHXEaZS4xXyIVtFvHm2FhcmcjUV99f2_KPYg&s"),
      m("Dr. Nawab Singh", "Institute of Microelectronics Singapore", "/NavabSingh.jpg"),
      m("Prof. Shriniwas Katkoori", "University of South Florida", "/Prof. Shriniwas Katkoori.jpg"),
      m("Dr. Kriti Bhargava", "University of Connecticut", "/k_bhargava.jpg"),
      m("Dr. Andrea Baloo", "University of Catania, Italy", "/173.jpg"),
      // m("Dr. Furnando Guarin", "IEEE Life Fellow", "/guarin.jpg"),
      m("Dr. Daniel Tomaszewski", "Lords University Poland", "/daniel.jpg"),
    //  m("Prof. Richi Nayak", "QUT Australia", "/richi.jpg"),
      m("Rafal Mars Zalek", "Chief Editor Scientific Reports SN", "/rafal.jpg"),
      m("Dr. Mourad Fakhfakh", "National School of Electronics Tunisia", "/mourad.jpg"),
      m("Prof. Ghanshyam Singh", "University of Johannesburg", "/ghanshyam.jpg"),

    ],
  },

  {
    title: "Publication Chairs",
    members: [
      m("Dr. Amit M. Joshi", "MNIT Jaipur", "/amit-joshi.jpeg"),
      m("Dr. Ravi Kumar Maddila", "MNIT Jaipur", "/ravi-kumar.jpg"),
      m("Dr. Nitin Chaturvedi", "BITS Pilani", "/dr-nitin.jpeg"),
      m("Dr. Vijay Singh Rathore", "Dean (International) Apex University", "/vijay-singh-rathore.jpg"),
      m("Dr. Ankur Saharia", "Manipal University Jaipur", "/dr-ankur.jpeg"),
      m("Prof. Kusum Lata", "LNMIIT Jaipur", "/kusum-lata.jpeg"),
      m("Dr. Payal Bansal", "PIET Jaipur", "/Payal_Bansal.jpg"),
       m("Dr. Ashish Sharma", "Manipal University Jaipur", "/Ashish_Sharma.jpg"),
 
    ],
  },

  {
    title: "Conference Conveners/Secretaries",
    members: [
      m("Prof. Namita Mittal", "MNIT Jaipur", "/namita-mittal.jpeg"),
      m("Dr. Arun Kishor Johar", "Secretary, IEEE Rajasthan Subsection & Assistant Professor, Manipal University Jaipur", "/arun-johar.jpg"),
      m("Ms. Ritambhara", "Treasurer IEEE Rajasthan Subsection & Assistant Professor, JECRC Foundation", "/ritambara1.jpeg"),
      m("Dr. Nandan S.", "IEEE India Council", "/dr-nandan.jpeg"),
     // m("Dr. Sneha Kabra", "IEEE Delhi Section", "/dr-sneha.jpeg"),
    ],
  },

  {
    title: "Conference Co-conveners/Co-Secretaries",
    members: [
      m("Dr. Mahesh Jangid", "Manipal University Jaipur", "/IMG_0256.jpg"),
      m("Dr. Dinesh Seti", "JECRC University", "/Dr. Dinesh Seti.jpg"),
      m("Dr. Deepak Bharti", "MNIT Jaipur", "/deepak-bharti.jpeg"),
      m("Dr. Shraddha Tripathi", "IIT Jodhpur", "/Shraddha Tripathi.jpg"),
      m("Dr Jeetu Sharma", "Mody University", "/Dr Jeetu Sharma.jpg"),
    ],
  },



  {
    title: "WIE Chairs",
    members: [
      m("Dr. Rashmi Aggarwal", "IEEE WIE IC", "/rashmi-agarwal.jpeg"),
           m("Dr.Y.padma sai", "VNRVJIET, Hyderabad", "/Dr.Y.padma sai.jpg"), 

    /*    m("Dr. Nilam Choudhary", "IEEE Rajasthan Subsection", "/dr-nilam.jpeg"), */
     /*  m("Dr. Jeetu Sharma", "Mody University", "/dr-jeetu.jpeg"), */
      m("Dr. Basudha Dewan", "Manipal University Jaipur", "/dr-basudha.jpeg"),
      m("Dr. Sharda Tripathi", "BITS Pilani", "/dr-sharda.jpeg"),
   //   m("Dr. Chetna Sharma", "IIIT Kota", "/chetna.jpeg"),
      m("Dr. Richa Gupta", "IEEE Delhi Section", "/dr-richa.jpeg"),
      m("Dr.Awshin Appaji", "Execom Member", "/Dr.Awshin Appaji.jpg"), 
      m("Dr. Pooja Gupta", "IEEE Rajasthan Subsection", "/dr-pooja.jpeg"),
 
     ],
  },
  
  {
    title: "Website and Design Chairs",
    members: [
      m("Dr. Mahesh Jangid", "Manipal University Jaipur", "/IMG_0256.jpg"),
      m("Dr. Ramesh Babu Battula", "MNIT Jaipur", "/ramesh.jpg"),
      m("Dr. Lavika Goel", "MNIT Jaipur", "/lavika.jpg"),
      m("Dr. Juhi Singh", "Manipal University Jaipur", "/196.jpg"),
    ],
  },

  {
    title: "Travel and Hospitality Committee",
    members: [
      m("Dr. Menka Yadav", "MNIT Jaipur", "/menka.jpg"),
      m("Dr. Bipin Kumar Saw", "IEEE Rajasthan Subsection", "/dummy.jpg"),
      m("Mr. Ankit Garg", "Research Scholar MNIT Jaipur", "/dummy.jpg"),
    ],
  },
  {
    title: "National Advisory Committee (Selected Members)",
    members: [
      m("Mr. Sanjay Kar", "Vice-Chair, IEEE India Council Awards", "/sanjay.jpg"),
      m("Prof. Abdul Quaaiyum Ansari", "Vice Chair, IEEE India Council HTA", "/abdul.jpg"),
      m("Dr. Anuradha Tomar", "Vice Chair, IEEE India Council SAC", "/anuradha.jpg"),
      m("Dr. Kasim Sidhiqui", "Chair, IEEE Kerala Section", "/kasim.jpg"),
      m("Prof. Ajay Aggarwal", "IIT Jodhpur", "/ajay.jpg"),
      m("Prof. Sudeb Dasgupta", "IIT Roorkee", "/sudeb.jpg"),
      m("Prof. Rachna Garg", "DTU", "/rachna.jpg"),
      m("Prof. Rajendra Patriakar", "VNIT Nagpur", "/rajendra.jpg"),
      m("Prof. B. Deshmukh", "VNIT Nagpur", "/1516330188309.jpg"),
      m("Prof. Miridula Thakur", "DTU", "/dummy.jpg"),
      m("Prof. Mini Shaji Thomas", "Ex-Director, NIT Trichy", "/mini.jpg"),
      m("Prof. Amit Soni", "Registrar, Manipal University Jaipur", "/amit-soni.webp"),
      m("Prof. Preetam Kumar", "IIT Patna", "/preetam.jpg"),
      m("Prof. Jawar Singh", "IIT Patna", "/jawar.jpg"),
      m("Prof. M. M. Sharma", "MNIT Jaipur", "/mm.jpg"),
      m("Prof. Ghanshyam Singh", "MNIT Jaipur", "/ghanshyam_mnit.jpg"),
      m("Dr. Santosh Kumar Vishvakarma", "Chief Scientific Advisor, Govt. of MP", "/santosh.jpg"),
      m("Prof. Nikhil Gupta", "MNIT Jaipur", "/nikhil.jpg"),
      m("Dr. Mushtaq Ahmed", "MNIT Jaipur", "/mushtaq.jpg"),
      m("Dr. Yogesh Chauhan", "Chair, IEEE UP Section", "/yogesh.jpg"),
      m("Dr. G. S. Tomar", "Chair, IEEE MP Section", "/gs.jpg"),
      m("Dr. Chandrakanta Kumar", "Chair, IEEE Bangalore Section", "/Chandrakant.jpg"),
      m("Dr. Sadhna Attawar", "Chair, IEEE MOVE India", "/sadhana.jpg"),
      m("Dr. Ranjan Kumar Bahera", "IIT Patna", "/ranjan.jpg"),
     m("Prof. Jasdeep Kaur Dhanoa", "Vice Chair, IEEE Delhi Section", "/2110099372.jpg"),
  

    ],
  },
  {
    title: "Finance Chairs",
    members: [
      m("Prof. Pilli Emmanuel Shubhakar", "Malaviya National Institute of Technology Jaipur", "/PilliEmmanual.jpg"),
      m("Dr. Tejpal Singh", "Manipal University Jaipur", "/tejpal.jpg"),
      m("Dr. Rajashree Jain", "Treasurer, IEEE India Council", "/rajshree.jpg"),
      m("Dr. Abhishek Dixit", "JECRC Foundation", "/abhishek.jpeg"),
    ],
  },
 {
    title: "Registration Chairs",
    members: [
      m("Prof. Ghanshyam Singh", "Malaviya National Institute of Technology Jaipur", "/mnitjas109.png"),
   
    ],
  },


  {
    title: "Industry Liaison Chairs",
    members: [
      m("Prof. Arun Kumar Singh", "Punjab Engineering College Chandigarh", "/arun.jpg"),
      m("Mr. Nirupam SD", "CEO, Spectra AI", "/nirupam.jpg"),
      m("Dr. Jai Gopal Pandey", "Scientist-F, CSIR-CEERI Pilani", "/jai.jpg"),
      m("Dr. Vijay Chatarjee", "Scientist-E, CSIR-CEERI Jaipur", "/vijay.jpg"),
      m("Dr. Kuldeep Singh", "MNIT Jaipur", "/kuldeep.jpg"),
      m("Dr. Harpreet Singh Jatana", "Former Group Head, SCL Mohali", "/dummy.jpg"),
      m("Dr. Mukesh Kumar Gupta", "Scientist-F, NIC Delhi", "/dummy.jpg"),
      m("Dr. Balwinder Singh", "CDAC Chandigarh", "/dummy.jpg"),
      m("Ms. Chitra Hariharan", "VLSI Society of India", "/Chitra-Hariharan.jpg"),
      m("Mr. Preet Yadav", "Chair, IEEE CAS Delhi Section", "/preet-yadav.jpg"),
      m("Mr. Daman Deev Sood", "IEEE Delhi Section", "/dummy.jpg"),
      m("Mr. Navin Bishnoi", "Country Head, Marvell Technology", "/Navin-Bishnoi.jpg"),

    ],
  },
  {
    title: "Special Track / Tutorial Chairs",
    members: [
      // To be announced by organizers
    ],
  },
]

/* ---------------- ALL OTHER COMMITTEES ---------------- */


export const otherCommittees: Committee[] = [
  {
    title: "TPC Chairs",
    members: [
      m("Shruti Jain", "IEEE Delhi Section"),
      m("Sneha Kabra", "IEEE Delhi Section"),
      m("Rajnesh Sharma", "IEEE Delhi Section"),
      m("Vijay Janyani", "MNIT Jaipur"),
      m("P. Shreehari", "NIT Warangal"),
      m("Brahmjit Singh", "NIT Kurukshetra"),
      m("Virendra Singh", "IIT Bombay"),
      m("Manoj Saxena", "IEEE Delhi Section"),
      m("C. Periasamy", "NIT Calicut"),
      m("M. S. Bhat", "NIT Surathkal"),
      m("Shilpi Birla", "Manipal University Jaipur"),
      m("Rajesh Kumar", "University of Johannesburg, SA & MNIT Jaipur"),
      m("Deepti Saxena", " MNIT Jaipur"),
      m("Anil Singh", "NIT Allahabad"),
      m("Sandeep Saini", "LNMIIT Jaipur"),
      m("M. Santosh Kumar", "CEERI Pilani"),
      m("Rahul Goyal", "Manipal University Jaipur"),
      m("Satyabrata Roy", "Manipal University Jaipur"),
    ],
  },

  {
    title: "TPC Co-chairs",
    members: [
      m("Renu Kumawat", "Manipal University Jaipur"),
      m("Hemant Kumar Meena", " MNIT Jaipur"),
      m("Lintu Rajan", "NIT Calicut"),
      m("Niketa Sharma", "SKIT Jaipur"),
      m("Anjan Kumar", "GLA University, Mathura"),
      m("Sunanda Sinha", "MNIT Jaipur"),
      m("Bharat Choudhary", "MNIT Jaipur"),
      m("Sushil Kumar Jain", "TIET Patiala"),
      m("Ashvinee Deo Meshram", "Manipal University Jaipur"),
      m("Akshay Moudgil", "IIT Jodhpur"),
      m("Rahul Kumar", "BITS Pilani"),
      m("Shruti Jain", "IEEE Delhi Section"),
      m("Nitesh Mudgal", "PCE Jaipur"),
      m("Nitin Chaturvedi", "BITS Pilani, Jaipur"),
      m("Rashmi Aggarwal", "JC Bose University"),
    ],
  },

 {
  title: "Track 1: Sustainable AI & Green Technologies",
  members: [
    m("Mohit P. Tahiliani", "NIT Surathkal"),
    m("Kavita Verma", "IISc Bangalore"),
    m("Sumit Srivastava", "Manipal University Jaipur"),
    m("Durgesh Nandan", "SR University Hyderabad"),
  ],
},

{
  title: "Track 2: Semiconductors, Nanoelectronics and Next Generation Computing",
  members: [
    m("Jawar Singh", "IIT Patna"),
    m("Ambika Prasad Shah", "IIT Jammu"),
    m("Abir Jyoti Mondal", "NIT Andhra Pradesh"),
    m("Balvinder Raj", "NIT Jalandhar"),
  ],
},

{
  title: "Track 3: Humanitarian Technology & AI for Social Goods",
  members: [
    m("A. Q. Ansari", "IEEE IC"),
    m("Sudeep Tanwar", "Nirma University"),
    m("Manpreet Kaur", "MRU Faridabad"),
    m("Amit Ved", "Marwadi University Rajkot"),
  ],
},

{
  title: "Track 4: Intelligent Systems, IoT & Industrial Applications",
  members: [
    m("Ajay Aggarwal", "IIT Jodhpur"),
    m("Mitul Kumar Ahirwal", "MANIT Bhopal"),
    m("Indu Joshi", "IIT Mandi"),
    m("Shakshi Dhanker", "IIT Jodhpur"),
  ],
},

{
  title: "Track 5: Communication Systems & Network Technologies",
  members: [
    m("Ranjan K. Mallik", "IIT Delhi"),
    m("Swades De", "IIT Delhi"),
    m("Parul Garg", "NSUT Delhi"),
    m("Mithilesh Kumar", "RTU"),
  ],
},

{
  title: "Track 6: Signal Processing, Computing & Data Science",
  members: [
    m("D. K. Yadav", "MNNIT Allahabad"),
    m("Anurag Singh", "NIT Delhi"),
    m("Satyendra Singh Chouhan", "MNIT Jaipur"),
    m("Deepak Gupta", "MNNIT Allahabad"),
  ],
},

{
  title: "Track 7: Power, Energy & Electrical System",
  members: [
    m("B. K. Panigrahi", "IIT Delhi"),
    m("Sukumar Mishra", "IIT Delhi"),
    m("Rachna Garg", "DTU"),
    m("Anuradha Tomar", "University of Delhi"),
    m("Neelu Nagpal", "Maharaja Agrasen Institute of Technology"),
  ],
},

{
  title: "Track 8: Special Session on Drone Technology",
  members: [
    m("Anand Darji", "SVNIT Surat"),
    m("Sumit Gautam", "IIT Indore"),
  ],
},

{
  title: "Track 9: Special Session on Women in Engineering",
  members: [
    m("Rashmi Aggarwal", "Women In Engineering"),
    m("Ashwini Appaji", "Women In Engineering"),
    m("Renu Sharma", "Women In Engineering"),
    m("Y. Padma Sai", "Women In Engineering"),
  ],
},

{
  title: "Track 10: Special Session: Explainable Models in Engineering Systems",
  members: [
    m("Sachin Gupta", "MAIT"),
    m("Neelu Nagpal", "MAIT"),
  ],
},
];

const getByTitle = (titles: string[]) =>
  [...patronCommittees, ...otherCommittees].filter(c =>
    titles.includes(c.title)
  );

// 2. Define the filtered groups
const internationalAdvisory = getByTitle([
  "International Advisory Committee",
  "National Advisory Committee (Selected Members)"
]);

const tpcPersonnel = getByTitle([
  "TPC Chairs",
  "TPC Co-chairs",
  
  "Track 1: Sustainable AI & Green Technologies",
  "Track 2: Semiconductors, Nanoelectronics and Next Generation Computing",
  "Track 3: Humanitarian Technology & AI for Social Goods",
  "Track 4: Intelligent Systems, IoT & Industrial Applications",
  "Track 5: Communication Systems & Network Technologies",
  "Track 6: Signal Processing, Computing & Data Science",
  "Track 7: Power, Energy & Electrical System",
  "Track 8: Special Session on Drone Technology",
  "Track 9: Special Session on Women in Engineering",
  "Track 10: Special Session: Explainable Models in Engineering Systems",


]);

const executiveSteering = getByTitle([
  "Executive Steering Committee"
]);

// 2. Define the filtered groups
const organizingBody = getByTitle([
  "Patrons",
  "Co-Patrons",
  "Honorary Chairs",
  "General Chairs",
  "Conference Conveners/Secretaries",
  "Conference Co-conveners/Co-Secretaries",
  //"Organizing Secretaries",
  //"Co-Organizing Secretaries",
  "Registration Chairs",
  "Finance Chairs",
  "Industry Liaison Chairs",
  "Website and Design Chairs",
  "Travel and Hospitality Committee",
  "WIE Chairs",
  "Publication Chairs"
 /*  "Special Track / Tutorial Chairs" */
]);
// 3. Export the final Mapping
export const committeeGroups: Record<string, { title: string, committees: Committee[] }> = {
  all: {
    title: "All Committees",
    committees: [...patronCommittees, ...otherCommittees]
  },

  patrons: {
    title: "Patrons",
    committees: patronCommittees
  },

  "international-advisory": {
    title: "Advisory Committee",
    committees: internationalAdvisory
  },

  "executive-steering": {
    title: "Executive Steering Committee",
    committees: executiveSteering
  },

  tpc: {
    title: "Technical Program Committee",
    committees: tpcPersonnel
  },

  organizing: {
    title: "Organizing Committee",
    committees: organizingBody
  }
};