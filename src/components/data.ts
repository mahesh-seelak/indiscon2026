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
      m("Prof. Sudeep Mishra", "IIT Kharagpur",),
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
      m("Dr. Niketa Sharma", "Associate Professor, SKIT Jaipur"),
      m("Dr. Anjan Kumar", "Associate Professor, GLA University, Mathura","/AnjanKumar.webp"),
      m("Dr. Sunanda Sinha", "Assistant Professor, MNIT Jaipur","/SunandaSinha.jpg"),
      m("Dr. Bharat Choudhary", "Assistant Professor, MNIT Jaipur","/BharatChoudhary.jpg"),
      m("Dr. Sushil Kumar Jain", "Assistant Professor, TIET Patiala","/SushilKumarJain.webp"),
      m("Dr. Ashvinee Deo Meshram", "Assistant Professor, Manipal University Jaipur","/AshvineeDeoMeshram.jpg"),
      m("Dr. Akshay Moudgil", "Assistant Professor, IIT Jodhpur","/AkshayMoudgil.jpg"),
      m("Dr. Rahul Kumar", "Assistant Professor, BITS Pilani"),
      m("Dr. Shruti Jain", "Joint Secretary, IEEE Delhi Section","/Dr. Shruti Jain.jpg"),
    ],
  },

  {
    title: "International Advisory Committee",
    members: [
      m("Ms. Mary Ellen Randall", "IEEE President"),
      m("Mr. Maurizio Bozzi", "Past IEEE MTS-President"),
      m("Ms. Bozenna Pasik-Duncan", "University of Kansas"),
      m("Mr. Grayson Randall", "IEEE HTB Chair"),
      m("Ms. Kathleen Kramer", "Former IEEE President"),
      m("Prof. Saraju Mohanty", "University of Texas"),
      m("Prof. Anand Nayyar", "Duy Tan University"),
      m("Prof. Sajal Das", "Missouri S&T University",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn3tiubeHnlguDmkR7ptxgeDFPhPcrXaq_CQ&s"),
      m("Prof. Amit Mishra", "Aberystwyth University",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU1o3rDuAbq0PLG0jfl0lnTvJzGBJwD6T82w&s"),
      m("Prof. Ranga Rao V. Prasad", "Delft University of Technology",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6TKe40G6bZhp2Yz531yN9ilTzy-tNpukTrA&s"),
      m("Prof. Akshay Rathore", "Singapore Institute of Technology",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHXEaZS4xXyIVtFvHm2FhcmcjUV99f2_KPYg&s"),
      m("Dr. Nawab Singh", "Institute of Microelectronics Singapore"),
      m("Prof. Shriniwas Katkoori", "University of South Florida"),
      m("Dr. Kriti Bhargava", "University of Connecticut"),
      m("Dr. Andrea Baloo", "University of Catania, Italy"),
      m("Dr. Furnando Guarin", "IEEE Life Fellow"),
      m("Dr. Daniel Tomaszewski", "Lords University Poland"),
      m("Prof. Richi Nayak", "QUT Australia"),
      m("Rafal Mars Zalek", "Chief Editor Scientific Reports SN"),
      m("Dr. Mourad Fakhfakh", "National School of Electronics Tunisia"),
      m("Prof. Ghanshyam Singh", "University of Johannesburg"),
    ],
  },

  {
    title: "Publication Chairs",
    members: [
      m("Dr. Amit M. Joshi", "MNIT Jaipur"),
      m("Dr. Ravi Kumar Maddila", "MNIT Jaipur"),
      m("Dr. Nitin Chaturvedi", "BITS Pilani"),
      m("Dr. Ankur Saharia", "Manipal University Jaipur"),
      m("Prof. Kusum Lata", "LNMIIT Jaipur"),
      m("Dr. Payal Bansal", "PIET Jaipur"),
      m("Sabri Naath", "IEEE India Council"),
    ],
  },

  {
    title: "Co-Organizing Secretaries",
    members: [
      m("Dr. Dipti Saxena", "MNIT Jaipur"),
      m("Dr. Deepak Bharti", "MNIT Jaipur"),
      m("Dr. Rakhee Gupta", "IEEE Delhi Section"),
      m("Dr. Shruti Jain", "IEEE Delhi Section"),
    ],
  },

  {
    title: "Organizing Secretaries",
    members: [
      m("Prof. Namita Mittal", "MNIT Jaipur"),
      m("Dr. Arun Kishor Johar", "IEEE Rajasthan Subsection"),
      m("Ms. Ritambhara", "Treasurer IEEE Rajasthan Subsection"),
      m("Dr. Nandan S.", "IEEE India Council"),
      m("Dr. Sneha Kabra", "IEEE Delhi Section"),
    ],
  },

  {
    title: "WIE Chairs",
    members: [
      m("Dr. Rashmi Aggarwal", "IEEE WIE IC"),
      m("Dr. Pooja Gupta", "IEEE Rajasthan Subsection"),
      m("Dr. Nilam Choudhary", "IEEE Rajasthan Subsection"),
      m("Dr. Jeetu Sharma", "Mody University"),
      m("Dr. Basudha Dewan", "Manipal University Jaipur"),
      m("Dr. Sharda Tripathi", "BITS Pilani"),
      m("Dr. Chetna Sharma", "IIIT Kota"),
      m("Dr. Richa Gupta", "IEEE Delhi Section"),
    ],
  },

  {
    title: "Website Chairs",
    members: [
      m("Dr. Ramesh Babu Battula", "MNIT Jaipur"),
      m("Dr. Lavika Goel", "MNIT Jaipur"),
      m("Dr. Mahesh Jangid", "Manipal University Jaipur","/IMG_0256.jpg"),
      m("Mr. Digambar Singh Govind", "Research Scholar MNIT Jaipur"),
    ],
  },

  {
    title: "Ground Operations Committee",
    members: [
      m("Dr. Menka Yadav", "MNIT Jaipur"),
      m("Dr. Bipin Kumar Saw", "IEEE Rajasthan Subsection"),
      m("Mr. Ankit Garg", "Research Scholar MNIT Jaipur"),
    ],
  },
  {
    title: "National Advisory Committee (Selected Members)",
    members: [
      m("Mr. Sanjay Kar", "Vice-Chair, IEEE India Council Awards"),
      m("Prof. Abdul Quaaiyum Ansari", "Vice Chair, IEEE India Council HTA"),
      m("Dr. Anuradha Tomar", "Vice Chair, IEEE India Council SAC"),
      m("Dr. Kasim Sidhiqui", "Chair, IEEE Kerala Section"),
      m("Prof. Ajay Aggarwal", "IIT Jodhpur"),
      m("Prof. Sudeb Dasgupta", "IIT Roorkee"),
      m("Prof. Rachna Garg", "DTU"),
      m("Prof. Rajendra Patriakar", "VNIT Nagpur"),
      m("Prof. B. Deshmukh", "VNIT Nagpur"),
      m("Prof. Miridula Thakur", "DTU"),
      m("Prof. Mini Shaji Thomas", "Ex-Director, NIT Trichy"),
      m("Prof. Preetam Kumar", "IIT Patna"),
      m("Prof. Jawar Singh", "IIT Patna"),
      m("Prof. M. M. Sharma", "MNIT Jaipur"),
      m("Prof. Ghanshyam Singh", "MNIT Jaipur"),
      m("Dr. Santosh Kumar Vishvakarma", "Chief Scientific Advisor, Govt. of MP"),
      m("Prof. Nikhil Gupta", "MNIT Jaipur"),
      m("Dr. Mushtaq Ahmed", "MNIT Jaipur"),
      m("Dr. Yogesh Chauhan", "Chair, IEEE UP Section"),
      m("Dr. G. S. Tomar", "Chair, IEEE MP Section"),
      m("Dr. Chandrakanta Kumar", "Chair, IEEE Bangalore Section"),
      m("Dr. Sadhna Attawar", "Chair, IEEE MOVE India"),
      m("Dr. Ranjan Kumar Bahera", "IIT Patna"),
    ],
  },
  {
    title: "Finance Chairs",
    members: [
      m("Dr. S. J. Nanda", "MNIT Jaipur"),
      m("Dr. Tejpal Singh", "Manipal University Jaipur"),
      m("Dr. Rajashree Jain", "Treasurer, IEEE India Council"),
    ],
  },
  {
    title: "Industry Liaison Chairs",
    members: [
      m("Prof. Arun Kumar Singh", "Punjab Engineering College Chandigarh"),
      m("Mr. Nirupam SD", "CEO, Spectra AI"),
      m("Dr. Jai Gopal Pandey", "Scientist-F, CSIR-CEERI Pilani"),
      m("Dr. Vijay Chatarjee", "Senior Scientist, CSIR-CEERI Jaipur"),
      m("Dr. Kuldeep Singh", "MNIT Jaipur"),
      m("Dr. Harpreet Singh Jatana", "Former Group Head, SCL Mohali"),
      m("Dr. Mukesh Kumar Gupta", "Scientist-F, NIC Delhi"),
      m("Dr. Balwinder Singh", "CDAC Chandigarh"),
      m("Ms. Chitra Hariharan", "VLSI Society of India"),
      m("Mr. Preet Yadav", "Chair, IEEE CAS Delhi Section"),
      m("Mr. Daman Deev Sood", "IEEE Delhi Section"),
      m("Mr. Navin Bishnoi", "Country Head, Marvell Technology"),
    ],
  },
  {
    title: "Special Track / Tutorial Chairs",
    members: [
      // To be announced by organizers
    ],
  },
]