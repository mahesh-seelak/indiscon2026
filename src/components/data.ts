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
      m("Prof. N. P. Padhy", "Director, MNIT Jaipur","/mnitdir.jpg"),
      m(
        "Prof. Prerna Gaur",
        "Chair, IEEE India Council",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRub3_UMM7LMjkMpiAGe88Lhi6SQiPRaVv9vA&s"
      ),
      m("Prof. Preeti Bajaj", "Chair Elect 2026, IEEE India Council","/Prof. Preeti Bajaj.jpg"),
    ],
  },
]

/* ---------------- ALL OTHER COMMITTEES ---------------- */

export const otherCommittees: Committee[] = [

  {
    title: "Co-Patrons",
    members: [
      m("Prof. Rohit Bhakar", "Professor, MNIT Jaipur","/mnitjas121.png"),
      m("Prof. D. Boolchandani", "Past Chair, IEEE Rajasthan Sub-Section","/mnitjas061.png"),
      m("Prof. M. N. Hoda", "Chair, IEEE Delhi Section","/M-N-Hoda.jpeg"),
      m("Prof. S. M. Sameer", "IEEE R10 Director-Elect", "/smSameer.jpg"),
    ],
  },

  {
    title: "Honorary Chairs",
    members: [
      m("Prof. V. Ramgopal Rao", "IEEE Fellow & Group VC, BITS Pilani","/Pic-4.jpg.webp"),
      m("Prof. Bhim Singh", "IEEE Fellow & Emeritus Professor, IIT Delhi","/faculty_90rdtVACWb.jpg"),
      m("Prof. M. S. Gaur", "Director, IIT Jammu","/1652333276987.png"),
      m("Prof. M. C. Govil", "Director, NIT Sikkim","/mahesh.png"),
      m("Prof. Subrata Mukhopadhyay", "Adjunct Professor, NSUT","/Subrata-Mukhopadhyay.webp"),
      m("Dr. Satya Gupta", "President, VLSI Society","/1688613993566.jpg"),
      m("Prof. B. K. Panigrahi", "Professor, IIT Delhi",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThRKjITwO55dKDIHUrEulkhFbpuvuKp0inHA&s"),
      m("Prof. Vineet Sahula", "Professor, MNIT Jaipur","/mnitjas063.png"),
      m("Prof. Jasdeep Kaur Dhanoa", "Vice Chair, IEEE Delhi Section","/2110099372.jpg"),
    ],
  },

  {
    title: "General Chairs",
    members: [
      m("Prof. Sudeep Mishra", "IIT Kharagpur","/1517731962576.jpg"),
      m("Prof. Lava Bhargava", "Professor, MNIT Jaipur & Chair, IEEE Rajasthan Subsection","/mnitjas097.png"),
      m("Prof. Sandeep Vyas", "Vice-chair, IEEE Rajasthan Subsection","/Prof. Sandeep Vyas.jpeg"),
    ],
  },

  {
    title: "Executive Steering Committee",
    members: [
      m("Mr. Deepak Mathur", "IEEE Past Vice President-MGA",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8AwK73IZlWew38so4ddMSLprBk8ZRgZ3Edw&s"),
      m("Prof. Sandeep Sancheti", "Elsevier India","/SS_Photo_H_S.webp"),
      m("Prof. Debabrata Das", "Immediate Past Chair, IEEE India Council",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKnzniJrVCK2IHkTCQ952FifWpbA32bD2Hnw&s"),
      m("Prof. Suresh Nair", "Past Chair, IEEE India Council",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI8qFEnAViKWyntqryCxH_UxoG35CErxKazg&s"),
      m("Prof. Ashutosh Dutta", "IEEE Fellow, Johns Hopkins University, USA",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx_-K-vlJRAOVfL4j7zHUURjEmbF3JoeofPw&s"),
      m("Prof. Shiban K Koul", "Chair, IEEE MTS","/koul_photo_0-250x330.jpg"),
    ],
  },
  {
    title: "TPC Chairs",
    members: [
      m("Prof. Vijay Janyani", "Professor, MNIT Jaipur","/mnitjas094.png"),
      m("Prof. Shilpi Birla", "Professor, Manipal University Jaipur","/shilpi.jpg"),
      m("Prof. P. Shreehari", "Professor, NIT Warangal","/ec-patri.jpg"),
      m("Prof. Brahmjit Singh", "Professor, NIT Kurukshetra","/1588306734Photo_BJS1.jpg"),
      m("Prof. Virendra Singh", "Professor, IIT Bombay","/VirendraSingh.jpg"),
      m("Prof. Manoj Saxena", "Chair, EDS IEEE Delhi Section","/1691237327810.jpg"),
      m("Prof. Alpana Agarwal", "Professor, TIET Patiala","/1556260806129.jpg"),
      m("Dr. Anurag Singh", "Associate Professor, NIT Delhi","/5380818.jpg"),
      m("Dr. C. Periasamy", "Associate Professor, NIT Calicut","/Dr. C. Periasamy.png"),
      m("Prof. M. S. Bhat", "Professor, NIT Suratkhal","/msb_D.png"),
      m("Prof. A. Darji", "Professor, NIT Surat","/151736751273.jpg"),
      m("Prof. Rajesh Kumar", "University of Johannesburg, SA & MNIT Jaipur","/mnitjas150.png"),
      m("Prof. Deepti Saxena", "Professor, MNIT Jaipur","/Prof. Deepti Saxena.jpg"),
      m("Prof. Anil Singh", "Professor, NIT Allahabad","/55646-Photo.jpeg"),
      m("Dr. Sandeep Saini", "Associate Professor, LNMIIT Jaipur","/Dr. Sandeep Saini.jpeg"),
      m("Dr. M. Santosh Kumar", "Scientist-F, CEERI Pilani","/1713627817-Santosh Kumar.jpg"),
      m("Prof. Rahul Goyal", "Professor, Manipal University Jaipur","/360.jpg"),
    ],
  },

  {
    title: "TPC Vice-Chairs",
    members: [
      m("Prof. Renu Kumawat", "Professor, Manipal University Jaipur","/696.jpg"),
      m("Dr. Ravi Kumar Maddila", "Associate Professor, MNIT Jaipur","/mnitjas193.png"),
      m("Dr. Hemant Kumar Meena", "Associate Professor, MNIT Jaipur","/mnitjas184.png"),
      m("Dr. Lintu Rajan", "Associate Professor, NIT Calicut","/LintuRanjan.jpg"),
      m("Dr. Niketa Sharma", "Associate Professor, SKIT Jaipur","/Niketa.jpg"),
      m("Dr. Anjan Kumar", "Associate Professor, GLA University, Mathura","/AnjanKumar.webp"),
      m("Dr. Sunanda Sinha", "Assistant Professor, MNIT Jaipur","/SunandaSinha.jpg"),
      m("Dr. Bharat Choudhary", "Assistant Professor, MNIT Jaipur","/BharatChoudhary.jpg"),
      m("Dr. Sushil Kumar Jain", "Assistant Professor, TIET Patiala","/SushilKumarJain.webp"),
      m("Dr. Ashvinee Deo Meshram", "Assistant Professor, Manipal University Jaipur","/AshvineeDeoMeshram.jpg"),
      m("Dr. Akshay Moudgil", "Assistant Professor, IIT Jodhpur","/AkshayMoudgil.jpg"),
      m("Dr. Rahul Kumar", "Assistant Professor, BITS Pilani","/dummy.jpg"),
      m("Dr. Shruti Jain", "Joint Secretary, IEEE Delhi Section","/Dr. Shruti Jain.jpg"),
    ],
  },

  {
    title: "International Advisory Committee",
    members: [
      m("Ms. Mary Ellen Randall", "IEEE President","/MaryEllenRandall.jpg"),
      m("Mr. Maurizio Bozzi", "Past IEEE MTS-President","/Mr. Maurizio Bozzi.jpg"),
      m("Ms. Bozenna Pasik-Duncan", "University of Kansas","/bozenna.jpg"),
      m("Mr. Grayson Randall", "IEEE HTB Chair","/Mr. Grayson Randall.jpg"),
      m("Ms. Kathleen Kramer", "Former IEEE President","/Ms. Kathleen Kramer.jpeg"),
      m("Prof. Saraju Mohanty", "University of Texas","/saraju_mohanty.jpg"),
      m("Prof. Anand Nayyar", "Duy Tan University","/Anand_Nayyar.jpg"),
      m("Prof. Sajal Das", "Missouri S&T University",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn3tiubeHnlguDmkR7ptxgeDFPhPcrXaq_CQ&s"),
      m("Prof. Amit Mishra", "Aberystwyth University",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU1o3rDuAbq0PLG0jfl0lnTvJzGBJwD6T82w&s"),
      m("Prof. Ranga Rao V. Prasad", "Delft University of Technology",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6TKe40G6bZhp2Yz531yN9ilTzy-tNpukTrA&s"),
      m("Prof. Akshay Rathore", "Singapore Institute of Technology",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHXEaZS4xXyIVtFvHm2FhcmcjUV99f2_KPYg&s"),
      m("Dr. Nawab Singh", "Institute of Microelectronics Singapore","/NavabSingh.jpg"),
      m("Prof. Shriniwas Katkoori", "University of South Florida","/Prof. Shriniwas Katkoori.jpg"),
      m("Dr. Kriti Bhargava", "University of Connecticut","/k_bhargava.jpg"),
      m("Dr. Andrea Baloo", "University of Catania, Italy","/173.jpg"),
      m("Dr. Furnando Guarin", "IEEE Life Fellow","/guarin.jpg"),
      m("Dr. Daniel Tomaszewski", "Lords University Poland","/daniel.jpg"),
      m("Prof. Richi Nayak", "QUT Australia","/richi.jpg"),
      m("Rafal Mars Zalek", "Chief Editor Scientific Reports SN","/rafal.jpg"),
      m("Dr. Mourad Fakhfakh", "National School of Electronics Tunisia","/mourad.jpg"),
      m("Prof. Ghanshyam Singh", "University of Johannesburg","/ghanshyam.jpg"),   

    ],
  },

  {
    title: "Publication Chairs",
    members: [
        m("Dr. Amit M. Joshi", "MNIT Jaipur" , "/amit-joshi.jpeg"),
      m("Dr. Ravi Kumar Maddila", "MNIT Jaipur" , "/ravi-kumar.jpg"),
      m("Dr. Nitin Chaturvedi", "BITS Pilani" , "/dr-nitin.jpeg"),
      m("Dr. Ankur Saharia", "Manipal University Jaipur" , "/dr-ankur.jpeg"),
      m("Prof. Kusum Lata", "LNMIIT Jaipur" , "/kusum-lata.jpeg"),
      m("Dr. Payal Bansal", "PIET Jaipur" , "/Payal_Bansal.jpg"),
      m("Sabri Naath", "IEEE India Council" , "/sabarinath.jpeg"),
    ],
  },

  {
    title: "Co-Organizing Secretaries",
    members: [
       m("Dr. Dipti Saxena", "MNIT Jaipur" , "/dipti-saxena.jpeg"),
      m("Dr. Deepak Bharti", "MNIT Jaipur" , "/deepak-bharti.jpeg"),
      m("Dr. Rakhee Gupta", "IEEE Delhi Section" , "/Rakhee.jpeg"),
      m("Dr. Shruti Jain", "IEEE Delhi Section" , "/Shruti-Jain.jpg"),
    ],
  },

  {
    title: "Organizing Secretaries",
    members: [
        m("Prof. Namita Mittal", "MNIT Jaipur" , "/namita-mittal.jpeg"),
      m("Dr. Arun Kishor Johar", "IEEE Rajasthan Subsection" , "/arun-johar.jpg"),
      m("Ms. Ritambhara", "Treasurer IEEE Rajasthan Subsection" , "/ritambara1.jpeg"),
      m("Dr. Nandan S.", "IEEE India Council" , "/dr-nandan.jpeg"),
      m("Dr. Sneha Kabra", "IEEE Delhi Section" , "/dr-sneha.jpeg"),
    ],
  },

  {
    title: "WIE Chairs",
    members: [
    m("Dr. Rashmi Aggarwal", "IEEE WIE IC" , "/rashmi-agarwal.jpeg"),
      m("Dr. Pooja Gupta", "IEEE Rajasthan Subsection" , "/dr-pooja.jpeg"),
      m("Dr. Nilam Choudhary", "IEEE Rajasthan Subsection" , "/dr-nilam.jpeg"),
      m("Dr. Jeetu Sharma", "Mody University" , "/dr-jeetu.jpeg"),
      m("Dr. Basudha Dewan", "Manipal University Jaipur" , "/dr-basudha.jpeg"),
      m("Dr. Sharda Tripathi", "BITS Pilani" , "/dr-sharda.jpeg"),
      m("Dr. Chetna Sharma", "IIIT Kota" , "/chetna.jpeg"),
      m("Dr. Richa Gupta", "IEEE Delhi Section" , "/dr-richa.jpeg"),
    ],
  },

  {
    title: "Website Chairs",
    members: [
       m("Dr. Mahesh Jangid", "Manipal University Jaipur","/IMG_0256.jpg"),
       m("Dr. Ramesh Babu Battula", "MNIT Jaipur","/ramesh.jpg"),
      m("Dr. Lavika Goel", "MNIT Jaipur","/lavika.jpg"),
      m("Mr. Digambar Singh Govind", "Research Scholar MNIT Jaipur","/digambar.jpg"),
    ],
  },

  {
    title: "Ground Operations Committee",
    members: [
       m("Dr. Menka Yadav", "MNIT Jaipur","/menka.jpg"),
      m("Dr. Bipin Kumar Saw", "IEEE Rajasthan Subsection","/dummy.jpg"),
      m("Mr. Ankit Garg", "Research Scholar MNIT Jaipur","/dummy.jpg"),
    ],
  },
  {
    title: "National Advisory Committee (Selected Members)",
    members: [
     m("Mr. Sanjay Kar", "Vice-Chair, IEEE India Council Awards","/sanjay.jpg"),
      m("Prof. Abdul Quaaiyum Ansari", "Vice Chair, IEEE India Council HTA","/abdul.jpg"),
      m("Dr. Anuradha Tomar", "Vice Chair, IEEE India Council SAC","/anuradha.jpg"),
      m("Dr. Kasim Sidhiqui", "Chair, IEEE Kerala Section","/kasim.jpg"),
      m("Prof. Ajay Aggarwal", "IIT Jodhpur","/ajay.jpg"),
      m("Prof. Sudeb Dasgupta", "IIT Roorkee","/sudeb.jpg"),
      m("Prof. Rachna Garg", "DTU","/rachna.jpg"),
      m("Prof. Rajendra Patriakar", "VNIT Nagpur","/rajendra.jpg"),
      m("Prof. B. Deshmukh", "VNIT Nagpur","/1516330188309.jpg"),
      m("Prof. Miridula Thakur", "DTU","/dummy.jpg"),
      m("Prof. Mini Shaji Thomas", "Ex-Director, NIT Trichy","/mini.jpg"),
      m("Prof. Preetam Kumar", "IIT Patna","/preetam.jpg"),
      m("Prof. Jawar Singh", "IIT Patna","/jawar.jpg"),
      m("Prof. M. M. Sharma", "MNIT Jaipur","/mm.jpg"),
      m("Prof. Ghanshyam Singh", "MNIT Jaipur","/ghanshyam_mnit.jpg"),
      m("Dr. Santosh Kumar Vishvakarma", "Chief Scientific Advisor, Govt. of MP","/santosh.jpg"),
      m("Prof. Nikhil Gupta", "MNIT Jaipur","/nikhil.jpg"),
      m("Dr. Mushtaq Ahmed", "MNIT Jaipur","/mushtaq.jpg"),
      m("Dr. Yogesh Chauhan", "Chair, IEEE UP Section","/yogesh.jpg"),
      m("Dr. G. S. Tomar", "Chair, IEEE MP Section","/gs.jpg"),
      m("Dr. Chandrakanta Kumar", "Chair, IEEE Bangalore Section","/Chandrakant.jpg"),
      m("Dr. Sadhna Attawar", "Chair, IEEE MOVE India","/sadhana.jpg"),
      m("Dr. Ranjan Kumar Bahera", "IIT Patna","/ranjan.jpg"),

    ],
  },
  {
    title: "Finance Chairs",
    members: [
       m("Dr. S. J. Nanda", "MNIT Jaipur","/sj.jpg"),
      m("Dr. Tejpal Singh", "Manipal University Jaipur","/tejpal.jpg"),
      m("Dr. Rajashree Jain", "Treasurer, IEEE India Council","/rajshree.jpg"),
    ],
  },
  {
    title: "Industry Liaison Chairs",
    members: [
      m("Prof. Arun Kumar Singh", "Punjab Engineering College Chandigarh","/arun.jpg"),
      m("Mr. Nirupam SD", "CEO, Spectra AI","/nirupam.jpg"),
      m("Dr. Jai Gopal Pandey", "Scientist-F, CSIR-CEERI Pilani","/jai.jpg"),
      m("Dr. Vijay Chatarjee", "Scientist-E, CSIR-CEERI Jaipur","/vijay.jpg"),
      m("Dr. Kuldeep Singh", "MNIT Jaipur","/kuldeep.jpg"),
      m("Dr. Harpreet Singh Jatana", "Former Group Head, SCL Mohali" ,"/harpreet-singh.jpg"),
      m("Dr. Mukesh Kumar Gupta", "Scientist-F, NIC Delhi" , "/mukesh-kumar.jpeg"),
      m("Dr. Balwinder Singh", "CDAC Chandigarh" , "/balwinder.jpeg"),
      m("Ms. Chitra Hariharan", "VLSI Society of India" , "/chitra.jpeg"),
      m("Mr. Preet Yadav", "Chair, IEEE CAS Delhi Section" , "/mr-preet.jpeg"),
      m("Mr. Daman Deev Sood", "IEEE Delhi Section" , "/damandeev.jpeg"),
      m("Mr. Navin Bishnoi", "Country Head, Marvell Technology" , "/mr-navin.jpeg"),

    ],
  },
  {
    title: "Special Track / Tutorial Chairs",
    members: [
      // To be announced by organizers
    ],
  },
]
