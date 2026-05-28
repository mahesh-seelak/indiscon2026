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
      m("Prof. Richi Nayak", "QUT Australia", "/richi.jpg"),
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
      m("Dr. Chetna Sharma", "IIIT Kota", "/chetna.jpeg"),
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
      m("Prof. Jawar Singh", "IIT Patna"),
      m("Prof. A. Q. Ansari", "Vice-Chair HTA, IEEE IC"),
      m("Dr. Ajay Aggarwal", "Professor, ECE, IIT Jodhpur"),
      m("Prof. Ranjan Kumar Mallik", "Professor, IIT Delhi"),
      m("Prof. D. K. Yadav", "MNNIT Allahabad"),
      m("Prof. B. K. Panigrahi", "IIT Delhi"),
      m("Prof. Vijay Janyani", "Professor, MNIT Jaipur"),
      m("Dr. Sumit Srivastava", "Manipal University Jaipur"),
      m("Prof. P. Shreehari", "Professor, NIT Warangal"),
      m("Prof. Brahmjit Singh", "Professor, NIT Kurukshetra"),
      m("Prof. Virendra Singh", "Professor, IIT Bombay"),
      m("Prof. Manoj Saxena", "Chair, EDS IEEE Delhi Section"),
      m("Dr. Anurag Singh", "Associate Professor, NIT Delhi"),
      m("Dr. C. Periasamy", "Associate Professor, NIT Calicut"),
      m("Prof. M. S. Bhat", "Professor, NIT Surathkal"),
      m("Prof. Anand Darji", "Professor, SVNIT Surat"),
      m("Prof. Shilpi Birla", "Professor, Manipal University Jaipur"),
      m("Prof. Rajesh Kumar", "University of Johannesburg, SA & MNIT Jaipur"),
      m("Prof. Deepti Saxena", "Professor, MNIT Jaipur"),
      m("Prof. Anil Singh", "Professor, NIT Allahabad"),
      m("Dr. Sandeep Saini", "Associate Professor, LNMIIT Jaipur"),
      m("Dr. M. Santosh Kumar", "Scientist-F, CEERI Pilani"),
      m("Prof. Rahul Goyal", "Professor, Manipal University Jaipur"),
      m("Dr. Satyabrata Roy", "Manipal University Jaipur"),
    ],
  },

  {
    title: "TPC Co-chairs",
    members: [
      m("Prof. Renu Kumawat", "Professor, Manipal University Jaipur"),
      m("Dr. Hemant Kumar Meena", "Associate Professor, MNIT Jaipur"),
      m("Dr. Lintu Rajan", "Associate Professor, NIT Calicut"),
      m("Dr. Niketa Sharma", "Associate Professor, SKIT Jaipur"),
      m("Dr. Anjan Kumar", "Associate Professor, GLA University, Mathura"),
      m("Dr. Sunanda Sinha", "Assistant Professor, MNIT Jaipur"),
      m("Dr. Bharat Choudhary", "Assistant Professor, MNIT Jaipur"),
      m("Dr. Sushil Kumar Jain", "Assistant Professor, TIET Patiala"),
      m("Dr. Ashvinee Deo Meshram", "Assistant Professor, Manipal University Jaipur"),
      m("Dr. Akshay Moudgil", "Assistant Professor, IIT Jodhpur"),
      m("Dr. Rahul Kumar", "Assistant Professor, BITS Pilani"),
      m("Dr. Shruti Jain", "Joint Secretary, IEEE Delhi Section"),
      m("Dr. Kavita Verma", "Research Scientist, IISc Bangalore"),
      m("Dr. Nitesh Mudgal", "Associate Professor, Dept. of ECE, PCE Jaipur"),
      m("Dr. Ambika Prasad Shah", "Associate Professor, IIT Jammu"),
      m("Dr. Abir Jyoti Mondal", "Assistant Professor, Dept. of ECE, NIT Arunachal Pradesh"),
      m("Dr. Nitin Chaturvedi", "BITS Pilani, Jaipur"),
      m("Prof. Rashmi Aggarwal", "Associate Professor, Dept. of EEE, JC Bose University"),
      m("Dr. Manpreet Kaur", "Professor, Dept. of CSE, MRU Faridabad"),
      m("Dr. Amit Ved", "Associate Professor, Dept. of CSE, Marwadi University Rajkot"),
      m("Dr. Mitul Kumar Ahirwal", "MANIT Bhopal"),
      m("Dr. Indu Joshi", "IIT Mandi"),
      m("Prof. Suwadesh Ray", "IIT Delhi"),
      m("Prof. Parul Garg", "Professor, Dept. of ECE, NSUT Delhi"),
      m("Dr. Mithilesh Kumar", "Professor, Dept. of ECE, RTU"),
      m("Dr. Anurag Singh", "NIT Delhi"),
      m("Dr. Satyendra Singh Chouhan", "MNIT Jaipur"),
      m("Prof. Sukumar Mishra", "IIT Delhi"),
      m("Prof. Rachna Garg", "Electrical Engineering, DTU"),
      m("Dr. Anuradha Tomar", "Associate Professor, Dept. of Electrical Engineering, DU"),
    ],
  },

  {
    title: "Track 1: Sustainable AI & Green Technologies",
    members: [
      m("Dr. Mohit P. Tahiliani", "NIT Surathkal"),
      m("Dr. Kavita Verma", "Research Scientist, IISc Bangalore"),
      m("Dr. Sumit Srivastava", "Manipal University Jaipur"),
      m("Dr. Durgesh Nandan", "Dean, SR University Hyderabad"),
    ],
  },

  {
    title: "Track 2: Semiconductors, Nanoelectronics and Next Generation Computing",
    members: [
      m("Prof. Jawar Singh", "IIT Patna"),
      m("Dr. Ambika Prasad Shah", "Associate Professor, IIT Jammu"),
      m("Dr. Abir Jyoti Mondal", "Assistant Professor, Department of ECE, NIT Andhra Pradesh"),
      m("Dr. Balvinder Raj", "NIT Jalandhar"),
    ],
  },

  {
    title: "Track 3: Humanitarian Technology & AI for Social Goods",
    members: [
      m("Prof. A. Q. Ansari", "Vice-Chair HTA, IEEE IC"),
      m("Dr. Sudeep Tanwar", "Nirma University"),
      m("Dr. Manpreet Kaur", "Professor, Department of CSE, MRU Faridabad"),
      m("Dr. Amit Ved", "Associate Professor, Department of CSE, Marwadi University Rajkot"),
    ],
  },

  {
    title: "Track 4: Intelligent Systems, IoT & Industrial Applications",
    members: [
      m("Dr. Ajay Aggarwal", "Professor, ECE, IIT Jodhpur"),
      m("Dr. Mitul Kumar Ahirwal", "MANIT Bhopal"),
      m("Dr. Indu Joshi", "IIT Mandi"),
      m("Dr. Shakshi Dhanker", "IIT Jodhpur"),
    ],
  },

  {
    title: "Track 5: Communication Systems & Network Technologies",   members: [
      m("Prof. Ranjan Kumar Mallik", "Professor, IIT Delhi"),
      m("Prof. Suwadesh Ray", "IIT Delhi"),
      m("Prof. Parul Garg", "Professor, Department of ECE, NSUT Delhi"),
      m("Dr. Mithilesh Kumar", "Professor, Department of ECE, RTU"),
    ],
  },

  {
    title: "Track 6: Signal Processing, Computing & Data Science",
    members: [
      m("Prof. D. K. Yadav", "MNNIT Allahabad"),
      m("Dr. Anurag Singh", "NIT Delhi"),
      m("Dr. Satyendra Singh Chouhan", "MNIT Jaipur"),
      m("Dr. Deepak Gupta", "MNNIT Allahabad"),
    ],
  },

  {
    title: "Track 7: Power, Energy & Electrical System",
    members: [
      m("Prof. B. K. Panigrahi", "IIT Delhi"),
      m("Prof. Sukumar Mishra", "IIT Delhi"),
      m("Prof. Rachna Garg", "Department of Electrical Engineering, DTU"),
      m("Dr. Anuradha Tomar", "Associate Professor, Department of Electrical Engineering, DU"),
    ],
  },

  {
    title: "Track 8: Special Session on Drone Technology",
    members: [
      m("Prof. Anand Darji", "SVNIT Surat"),
      m("Dr. Sumit Gautam", "IIT Indore"),
    ],
  },

  {
    title: "Track 9: Women In Engineering",
    members: [
      m("Dr. Rashmi Aggarwal", "Women In Engineering"),
      m("Dr. Ashwini Appaji", "Women In Engineering"),
      m("Dr. Renu Sharma", "Women In Engineering"),
      m("Dr. Y. Padma Sai", "Women In Engineering"),
    ],
  },

]


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