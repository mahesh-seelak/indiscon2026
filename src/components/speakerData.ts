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
export const speakers: SpeakerType[] = [
  {
    id: "1",
    designation:"Director of Doctor of Engineering.",
    university:"Johns Hopkins University",
    name: "Dr.Ashutosh Dutta",
    ieeeAffil:"IEEE Fellow",
    bio: "Ashutosh Dutta is Chief 5G Strategist and APL Fellow at Johns Hopkins University’s Applied Physics Labs, USA. He serves as the director of Doctor of Engineering at Johns Hopkins University. In the past, he served as the chair of ECE department of Engineering for Professionals at JHU, Director of Technology Security at AT&T, CTO of Wireless at NIKSUN, Senior Scientist in Telcordia Research, Director of Central Research Facility at Columbia University, and Computer Engineer with TATA Motors. He has authored more than 110 technical papers, one book published by John and Wiley, and 5 book chapters, and has 31 issued patents. Ashutosh is recipient of IEEE MGA’s 2009 Leadership Award, IEEE-USA’s 2010 Professional Leadership Award, 2022 IEEE-USA George F. McClure Citation of Honor and 2022 IEEE North American Region Exceptional Service Award. Ashutosh served as Member-At-Large for IEEE Communications Society for 2020-2026 and Distinguished Lecturer from 2018-2021. Ashutosh was inducted into Internet IPV6 Hall of Famer in 2024. He co-founded the IEEE STEM conference (ISEC) in 2011 and has served its Co-Chair since then. Ashutosh currently serves as the Chair for IEEE Industry Connection’s O-RAN activities and 6G. As the Founding Co-Chair of IEEE Future Networks he led technology roadmap, publications, standardization, testbed, education, industry engagement, conferences and workshops in the area of 5G and 6G, while keeping a focus on humanitarian needs. Ashutosh is a Distinguished Alumnus of NIT Rourkela with a BS in Electrical Engineering, MS in Computer Science from NJIT, and a PhD in EE from Columbia University. Ashutosh is an IEEE Fellow and an ACM Distinguished member.",
    imageUrl: "/Ashutosh.jpg",
    title:"5G/6G Security and AI/ML – Opportunities and Challenges",
    about:`Next generation cellular networks such as 5G and 6G promise to support emerging applications such as enhanced mobile broadband, mission critical applications for the first responder, remote surgery, and industrial IOT among others. While Network Function Virtualization and Software Defined Networking open up the door for programmable networks and rapid service creation, these also offer both security opportunities, and introduces additional challenges and complexities. The talk focuses on various security challenges and opportunities introduced by 5G enablers such as Hypervisor, Virtual Network Functions (VNFs), SDN controller, orchestrator, network slicing, cloud RAN, edge cloud, and virtual security function. This talk introduces threat taxonomy for 5G security from an end-to-end system perspective including, interfaces, protocols, potential threats introduced by these enablers, and associated mitigation techniques. Additionally, this talk highlights how AI/ML can help enhance security features of these networks and elaborates some adverse effects of AI/ML.  Finally, the talk introduces some of the ongoing activities within various standards communities including open source consortiums, large scale NSF testbeds, and illustrates a few deployment use case scenarios.`
    
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
  },
  {
    id: "3",
    designation:"Prof. of Electrical and Computer Engg.",
    university:"Northeastern University(NU)",
    name: "Prof.Josep Miquel Jornet",
    ieeeAffil:"IEEE Fellow",
    bio: `Josep Miquel Jornet is Professor of Electrical and Computer Engineering at Northeastern University (NU), the Associate Dean of Research of the College of Engineering (COE), the Associate Director of the Institute for the Wireless Internet of Things (WIoT), and the Director of the Ultrabroadband Nanonetworking (UN) Laboratory. He received his Ph.D. in Electrical and Computer Engineering from the Georgia Institute of Technology, Atlanta, GA, in August 2013. His research interests are in terahertz communication networks, wireless nano-bio-communication networks, and the Internet of Nano-Things. He has co-authored more than 250 peer-reviewed scientific publications in these areas, including one book and five US patents. His work has received over 20,000 citations (h-index of 65 as of May 2026). He is serving as the lead PI on multiple grants from U.S. federal agencies, including the National Science Foundation, the Air Force Office of Scientific Research, and the Air Force Research Laboratory, and industry. He is the recipient of multiple awards, including the NSF CAREER Award in 2019, the 2022 IEEE ComSoc RCC Early Achievement Award, and the 2022 IEEE Wireless Communications Technical Committee Outstanding Young Researcher Award, among others, as well as eight best paper awards. He is a Fellow of the IEEE (Class of 2024) and served as an IEEE ComSoc Distinguished Lecturer (Class of 2022-2024). He is also the editor-in-chief of the Elsevier Nano Communication Networks journal and Editor for IEEE Transactions on Communications, IEEE Transactions on Molecular, Biological and Multi-scale Communications, and Nature Scientific Reports.`,
    imageUrl: "/JosepMiquelJorne.jpg",
    about:`The need for ever-increasing bandwidth is driving the research community to explore new spectrum frontiers. The sub-terahertz and terahertz bands (0.1–10 THz) offer a vast swath of untapped spectrum that could be used for many innovative communication and sensing applications. Additionally, the shorter wavelengths and the non-negligible photon energy of terahertz radiation open the door to innovative applications across scales. Over the last decade, remarkable progress in electronic, photonic, and plasmonic technologies has narrowed the terahertz technology gap. Moreover, in-depth studies on terahertz signal propagation, combining physics-based and data-driven approaches, have dispelled misconceptions surrounding the terahertz channel. However, several communication roadblocks must be overcome to unleash the spectrum above 100 GHz. This talk will follow a bottom-up approach to highlight innovative solutions and open challenges for terahertz communications and sensing systems on the ground, in the air, and in space. First, we delve into wavefront engineering for near-field THz links, showcasing novel beam types, including self-healing Bessel and curving Airy beams and discuss the unique opportunities these beams offer for short-range, high-capacity networks. Second, we demonstrate the advantageous role of THz frequencies in satellite communication networks, highlighting their potential for high-speed access links, and the upcoming, first-of-its-kind, TeraLink experimental mission.`,
    title:`Terahertz Communications and Sensing: From the Near Field to Space Networks`
  },
  {
    id: "4",
    name: "Dr.Kumar Vijay Mishra",
    designation:"Senior Fellow ",
    university:"United States DEVCOM Army Research Laboratory",
    bio: `Kumar Vijay Mishra is a prominent figure in the field of electrical engineering, with a focus on wireless communication and signal processing. He has made significant contributions to the development of advanced communication systems, including 5G and beyond. Dr. Mishra has published numerous research papers in top-tier journals and conferences, and holds several patents in the area of wireless technologies. He is actively involved in various professional organizations, and has served as a reviewer for leading journals in his field. His work is characterized by a strong emphasis on innovation and practical applications, making him a sought-after speaker at industry events and academic conferences.Kumar Vijay Mishra (S’08-M’15-SM’18) obtained a Ph.D. in electrical engineering and M.S. in mathematics from The University of Iowa in 2015, and M.S. in electrical engineering from Colorado State University in 2012, while working on NASA’s Global Precipitation Mission Ground Validation (GPM-GV) weather radars. He received his B. Tech. summa cum laude (Gold Medal, Honors) in electronics and communication engineering from the National Institute of Technology, Hamirpur (NITH), India in 2003. He is a Senior Fellow at the United States DEVCOM Army Research Laboratory; Research Scientist at the Institute for Systems Research, The University of Maryland, College Park under the ARL-ArtIAMAS program; Technical Adviser to Singapore-based automotive radar start-up Hertzwell and Boston-based imaging radar startup Aura Intelligent Systems; and honorary Research Fellow at SnT - Interdisciplinary Centre for Security, Reliability and Trust, University of Luxembourg. Previously, he had research appointments at the Electronics and Radar Development Establishment (LRDE), Defence Research and Development Organisation (DRDO) Bengaluru; IIHR - Hydroscience & Engineering, Iowa City, IA; Mitsubishi Electric Research Labs, Cambridge, MA; Qualcomm, San Jose; and Technion - Israel Institute of Technology.
   
Dr. Mishra is the Distinguished Lecturer of the IEEE Communications Society (2023-2024), IEEE Aerospace and Electronic Systems Society (AESS) (2023-2024), IEEE Vehicular Technology Society (2023-2024), IEEE Geoscience and Remote Sensing Society (2024-2026), and IEEE Future Networks Initiative (2022). He is the recipient of the IEEE Signal Processing Society Pierre-Simon Laplace Early Career Technical Achievement Award (2024), Special Mention for the IEEE AESS M. Barry Carlton Award (2023), IET Premium Best Paper Prize (2021), IEEE T-AES Outstanding Editor (2021, 2023), U. S. National Academies Harry Diamond Distinguished Fellowship (2018-2021), American Geophysical Union Editors' Citation for Excellence (2019), Royal Meteorological Society Quarterly Journal Editor's Prize (2017), Viterbi Postdoctoral Fellowship (2015, 2016), Lady Davis Postdoctoral Fellowship (2017), DRDO LRDE Scientist of the Year Award (2006), NITH Director’s Gold Medal (2003), and NITH Best Student Award (2003). He has received Best Paper Awards at IEEE MLSP 2019 and IEEE ACES Symposium 2019. 

Dr. Mishra is Chair (2023-2026) of the International Union of Radio Science (URSI) Commission C, Chair (2026-) of IEEE AESS Technical Working Group on Integrated Sensing and Communications (ISAC-TWG), and Vice-Chair (2021-present) of the IEEE Synthetic Aperture Standards Committee, which is the first SPS standards committee. He has been Chair (2023-2026) of the IEEE SPS Synthetic Apertures Technical Working Group. He has been an elected member of three technical committees of IEEE SPS: SPCOM, SAM, and ASPS, and IEEE AESS Radar Systems Panel. He has been Senior Area Editor of IEEE Transactions on Signal Processing (2024-), Associate Editor of IEEE Transactions on Aerospace and Electronic Systems (2020-) and IEEE Transactions on Antennas and Propagation (2023-). He has been a lead/guest editor of several special issues in journals such as IEEE Signal Processing Magazine, IEEE Journal of Selected Topics in Signal Processing, IEEE Journal on Selected Areas in Communications, and IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing. He is the lead co-editor of several books on signal processing and radar: Signal Processing for Joint Radar-Communications (Wiley-IEEE Press, 2024), Next-Generation Cognitive Radar Systems (IET Press Electromagnetics and Radar Series, 2023), Advances in Weather Radar Volumes 1, 2 & 3 (IET Press Electromagnetics and Radar Series, 2023), and Handbook of Statistics 55: Multidimensional Signal Processing (Elsevier). His research interests include radar systems, signal processing, remote sensing, and electromagnetics. 

 


Title: Signal Processing for Integrated Sensing and Communications
Abstract: In this talk, we focus on the recent developments toward integrated sensing and communications (ISAC). We consider a broad definition of coexistence, which covers ISAC, collaborative communications, and sensing with interference. Toward fully realizing the coexistence of the two systems, optimization of resources for both new/futuristic sensing and wireless communications modalities is crucial. These synergistic approaches that exploit the interplay between state sensing and communications are both driving factors and opportunities for many current signal processing and information-theoretic techniques. In addition, a large body of prior works considers colocated ISAC systems while distributed systems remain relatively unexamined. Building on the existing approaches, the talk focuses on highlighting emerging scenarios in collaborative and distributed ISAC, particularly at mm-Wave and THz frequencies, highly dynamic vehicular/automotive environments that would benefit from information exchange between the two systems. It presents the architectures and possible methodologies for mutually beneficial distributed co-existence and co-design, including sensor fusion and heterogeneously distributed radar and communications. The talk also considers recent developments such as the deployment of intelligent reflecting surfaces (IRS) in ISAC, 5G systems, passive internet-of-things, and ISAC secrecy rate optimization. This talk aims to draw the attention of the radar, communications, and signal processing communities toward an emerging area, which can benefit from the cross-fertilization of ideas in distributed systems.

`,
imageUrl: "/KumarVijayMishra.jpg"
  },
  {
    id: "5",
    name:"Dr. Lalit Kumar Singh",
    designation:"Scientist & Head of Artificial Intelligence Applications",
    university:"NPCIL-BARC, Department of Atomic Energy, Government of India",
    bio:` Dr. Lalit Kumar Singh received his Ph.D. degree from Indian Institute of Technology (Banaras Hindu University). He is currently a Scientist & Head of Artificial Intelligence Applications in NPCIL-BARC, Department of Atomic Energy, Government of India, and has distinction of working on Pressurized Heavy Water Reactors (PHWR) and Light Water Reactors (LWR). He is also working as Adjunct Professor in IIT Gandhinagar, Visiting Professor in IIIT Gwalior & BHU and Professor of Practice in VJTI Mumbai. He has an illustrious career and succeeded in several critical jobs assigned to him in his illustrious career, though, each of them was challenging. His assignments over the years range from design, development, testing, IV&V, related research and site validation of the safety critical computer based systems of Indian Nuclear Power Plants. He has published several research papers in journals of high impact factor like IEEE Transactions, IEEE Computer, ACM, etc. He is a Senior Member of IEEE and member on the advisory Board of IEEE Industry Relations & Entrepreneurship Committee. He has been invited for chief guest, keynote speeches, session chair and talks in many international conferences, short term courses, workshops & faculty development programs from many IITs, NITs & other institutes of national importance. He is recipient of many awards like prestigious IEEE K. Shankar award, publication award, group achievement award, etc. He is a reviewer of several SCI indexed journals of high impact factor. He is a life member of Indian Nuclear Society. He is founder member and industrial coordinator of the proposed Center of Dependability at IIT(BHU). He is in the panel of faculty assessment committee for Department of CSE, IIT Roorkee to assess their research profile and give recommendations. He is a member of editorial board of many reputed journals and guest lead editor of many special issues. He is supervising many PhD students of different IITs, NITs and is PhD thesis examiner of IITs, NITs and other reputed institutes. He is an expert member of Industrial policy formation of IIT Ropar, BoS of many autonomous institutes and member on the advisory board of many institutes/universities. He is a reviewer and project collaborator of Research proposals of Board of Research in Nuclear Sciences (BRNS). He is also faculty of Nuclear Training Centre, Department of Atomic Energy, Government of India. He is interfacing with other countries, like Russia, USA, France, etc. for importing nuclear reactors that are based on new technologies. His research interests are in the area of reliability, safety and security of safety critical computer based systems. So far, he has completed 33 projects of Department of Atomic Energy, Government of India. He holds 520 rank in India in the list of World’s scientists released by AD Scientific Index.`,
    imageUrl: "/DrLalitKumarSingh.jpg",
    title:"Artificial Intelligence in Nuclear Power Plants",
    about:`This talk will explore the transformative role of Artificial Intelligence (AI) in the operation and management of Nuclear Power Plants (NPPs), focusing on its applications to enhance safety, efficiency, and sustainability. As the global demand for clean energy rises, nuclear power remains a key player in achieving low-carbon energy production. AI technologies offer substantial opportunities for improving plant performance, predictive maintenance, anomaly detection, and real-time decision-making. The presentation will cover real-world case studies where AI has been successfully integrated into various aspects of NPPs, such as: Predictive Maintenance, Safety and Security, Operational Optimization, Advanced Control Systems. Through these case studies, the talk will demonstrate how AI is driving the next generation of nuclear energy innovation. It will also highlight the challenges, ethical considerations, and future prospects of AI integration in the nuclear industry, aiming to provide a comprehensive understanding of how AI can help shape the future of nuclear energy production and contribute to the global transition to sustainable energy.`
  },
  {
    id: "6",
    name: "Prof. Shuvra S. Bhattacharya",
    designation:"Dept. of Electrical and Computer Engg.",
    university:"University of Maryland, College Park",
    bio: `
Shuvra S. Bhattacharyya
Department of Electrical and Computer Engineering
2311 A. V. Williams Bldg.
University of Maryland
College Park, MD 20742, USA
Phone: (301)405-3638
Email:
ssb@umd.edu
, Web:
http://www.ece.umd.edu/
~
ssb/
March 5, 2026
1 Research Interests
Signal processing, computer vision, cyber-physical syste
ms, embedded systems, machine learning,
wireless communication, and wireless sensor sensor networ
ks.
2 Education
•
Ph.D. in Electrical Engineering and Computer Sciences, Uni
versity of California at Berkeley,
1994
•
M.S. in Electrical Engineering and Computer Sciences, Univ
ersity of California at Berkeley,
1991
•
B.S. in Electrical and Computer Engineering, and Computer S
cience (double major) Univer-
sity of Wisconsin at Madison, 1987
3 Academic Positions
•
2006–present: Professor, Dept. of Electrical and Computer
Engineering, University of Mary-
land, College Park, MD (UMD).
•
1997–present: Joint Faculty Appointment, Institute for Ad
vanced Computer Studies (UMI-
ACS), UMD.
•
2021–2024: Chair of Excellence in Design Methodologies and
Tools (part-time), Institut Na-
tional Des Sciences Appliqu ́ees (INSA), Rennes, France.
•
2019–2020: Chaire Internationale de Recherche (part-time
), INSA/INRIA, Rennes, France.
•
2015–2018: Visiting Professor (part-time), Department of
Pervasive Computing, Tampere
University of Technology, Finland, as part of the Finland Di
stinguished Professor Programme
(FiDiPro).
•
2001–2006: Associate Professor, Dept. of Electrical and Co
mputer Engineering, UMD.
•
1997–2001: Assistant Professor, Dept. of Electrical and Co
mputer Engineering, UMD.
•
1992–1994: Research Assistant, Electronics Research Labo
ratory, University of California,
Berkeley, CA.
•
1987–1991: Research Assistant, Electronics Research Labo
ratory, University of California,
Berkeley, CA.
1
resume.pdf
4 Other Positions
•
2013–2022: Co Editor in Chief, Journal of Signal Processing
Systems, Springer Science +
Business Media, LLC, New York, NY.
•
2021, 2022: Autonomy Technology Research Center (ATRC) Men
tor, Wright State University,
Dayton, OH.
•
2013–2015: President and Chief Technologist, Streamlined
Embedded Technologies, LLC,
Ellicott City, MD.
•
2009: Visiting Faculty Research Program, Air Force Researc
h Laboratory (AFRL), Rome,
NY.
•
1994–1997: Researcher, Semiconductor Research Laborator
y, Hitachi America, San Jose, CA.
•
1991–1992: Compiler Developer, Kuck & Associates, Champai
gn, IL.
5 Honors
•
FiDiPro Professor, Finland Distinguished Professor Progr
amme, TEKES, The Finnish Fund-
ing Agency for Innovation (Finland, 2015–2018).
•
Jimmy Lin Award for Entrepreneurship, University of Maryla
nd (2012).
•
Fellow of the Institute of Electrical and Electronics Engin
eers (IEEE) “for contributions to
design optimization for signal processing” (2011).
•
Invention of the Year Finalist, University of Maryland (201
1).
•
Fulbright Specialist (Austria, 2009 & 2015 and Germany, 200
5).
•
Nokia Distinguished Lecturer (Finland, 2006).
•
National Science Foundation CAREER Award (1998)`,
    imageUrl: "/SurvaSBhattacharya.jpg",
    title: "Software Synthesis from Dataflow Schedule Graphs",
    about: `In dataflow-based design processes for signal processing and machine learning (SPML), scheduling is a critical task that affects practical measures of performance, including latency, throughput, energy consumption, memory requirements, and processor utilization. Dataflow schedule graphs (DSGs) provide a formal abstraction for representing schedules in dataflow-based design processes. The DSG abstraction allows designers to model a schedule as a separate dataflow graph, thereby providing a formal, abstract (platform and language-independent) representation for the schedule. In this presentation, we review the DSG representation, and introduce a design methodology for embedded SPML systems that is based on explicit specifications of application graphs and schedules as cooperating dataflow models. We also develop new software synthesis techniques for automatically deriving efficient implementations from these coupled application and schedule models. We demonstrate the proposed methodology and software synthesis techniques through various experiments, including an example involving real time detection of people and vehicles using acoustic and seismic sensors.`
  },
  {
    id: "7",
    name:"Dr.Tushar Vrind",
    ieeeAffil:"IEEE Senior Member, Past Executive Member of IEEE ComSoc Bangalore chapter",
    designation:"Senior Technical Director",
    university:"Samsung Semiconductor India R&D (SSIR)",
    bio:`Tushar Vrind is a Senior Technical Director at Samsung Semiconductor India R&D (SSIR). He is a member of the Technical Ladder and a past chair of the Communication & Connectivity Center of Excellence at SSIR. He has over 25 years of professional experience in wireless communication (2G to 5G) and the embedded domain, particularly with the Exynos System on Chip (SoC) at Samsung Electronics. He has over 50 applied patents and more than 30 granted patents worldwide in the areas of embedded systems and wireless protocols. He has co-authored over 40 technical contributions, papers, and journal articles with 3GPP and IEEE. Tushar is a notable innovator, intrapreneur, and technology evangelist at SSIR. He is also a Senior Member of IEEE and a past Executive Committee member of the IEEE ComSoc Bangalore Chapter. He has contributed as a TPC member at several IEEE conferences. His research interests include wireless networking, cellular communication, medium access protocols, resource allocation protocols, applications of machine and deep learning, and real-time operating systems. He holds a bachelor's degree in Computer Engineering from Birla Institute of Technology, Mesra, India, and a Master of Science (Research) in Wireless Communication and Networks from the International Institute of Information Technology, Bangalore, India. He also participated in Stanford Ignite, a certification program in Entrepreneurship and Innovation from the Graduate School of Business, Stanford University.`,
    imageUrl: "/TusharVrind.jpg",
    title: "Aerial Edge Intelligence: Algorithms, Protocols, and Deployment Strategies for 6G Non-Terrestrial Networks",
    about:`As 6G networks evolve, Non-Terrestrial Networks (NTNs) powered by Unmanned Aerial Vehicles (UAVs) are emerging as a critical enabler of global connectivity. This talk provides an in-depth exploration of the algorithms, protocols, and deployment strategies necessary for efficient aerial communication. We will discuss key challenges such as dynamic management, energy-efficient operation, and real-time adaptation in time-varying environments. Additionally, we will cover optimization techniques for data transmission, network selection, and seamless integration of aerial platforms with terrestrial infrastructure. By addressing both theoretical and practical aspects, this session offers a comprehensive roadmap for deploying UAV-assisted communication in next-generation wireless networks.`
  },
  {
    id: "8",
    name:"Prof.Ujjwal Maulik",
    designation:"Professor",
    university:"Dept. of Comp. Sc. and Engg., Jadavpur University",
    bio:`Dr. Ujjwal Maulik is a Professor in the Dept. of Comp. Sc. and Engg., Jadavpur University since 2004. He was also the former Head of the same Department. He also held the position of the Principal in charge and the Head of the Dept. of Comp. Sc. and Engg., Kalayni Govt. Engg. College. Dr. Maulik has worked in many universities and research laboratories around the world as visiting Professor/ Scientist including Los Alamos National Lab., USA in 1997, Univ. of New South Wales, Australia in 1999, Univ. of Texas at Arlington, USA in 2001, Univ. of Maryland at Baltimore County, USA in 2004,  Fraunhofer Institute for Autonome Intelligent Systems, St. Augustin, Germany in 2005, Tsinghua Univ., China in 2007, Sapienza Univ., Rome, Italy in 2008, Univ. of Heidelberg, Germany in 2009, German Cancer Research Center (DKFZ), Germany in 2010, 2011 and 2012,  Grenoble INP, France in 2010, 2013 and 2016, University of Warsaw in 2013 and 2019, University of Padova, Italy in 2014 and 2016, Corvinus University, Budapest, Hungary in 2015 and 2016,  University of Ljubljana, Slovenia in 2015 and 2017, International Center for Theoretical Physics (ICTP), Trieste, Italy in 2014, 2017 and 2018. He is the recipient of Alexander von Humboldt Fellowship during 2010, 2011 and 2012 and Senior Associate of ICTP, Italy during 2012-2018 and Fulbright Fellowship in 2024-2026. He is the Fellow of  Indian National Academy of Engineers (INAE), India, National Academy of  Science India (NASI), International Association for Pattern Recognition (IAPR),  USA, The Institute of Electrical and Electronics Engineers (IEEE), USA and Asia-Pacific Artificial Intelligence Association (AAIA), Hongkong. He is also the Distinguish Member of  the ACM. He is a Distinguish Speaker of IEEE as well as  ACM. His research interest include  Machine Learning, Pattern Analysis,  Data Science, Bioinformatics, Multi-objective Optimization, Social Networking, IoT and Autonomous Car. In these areas he has published ten books, more than four hundred papers, mentoring several start-ups, filed several patents and  already guided twenty five doctoral students. His other interest include mentoring young students, traveling extensively around the globe, outdoor Sports and  Music. `,
    imageUrl: "/UjjwalMaulik.jpg",
    title:"Machine Learning for Healthcare ",
    about:`In this lecture first we will discuss the current trends and challenges in Artificial Intelligence (AI) and  Machine Learning (ML). In addition to the fundamentals of ML, we will demonstrate the importance of using Deep Learning (DL), Graph neural network (GNN) and explainable AI. While DL has been used very successfully for image analysis, GNN is being used extensively for unstructured datasets including  biological datasets available in the form of graphs containing the interaction between genes, drugs, diseases etc. 

ML is used in healthcare with the goal for betterment in therapeutic as well as early diagnosis of diseases. Moreover, generally the same therapies are used for patients having similar diseases. However, based on the biological conditions of a patient, use of specific therapy is the key in precision medicine. In the second part of the lecture we will discuss how DL and GNN techniques can be used for developing improved healthcare systems. The explainable AI will also be discussed to address the practical challenges in the medical expert system.   

Finally we will also discuss how Data Science and ML together is changing the research and development road map. These are both advantages and disadvantages of using sophisticated ML techniques. We will discuss the challenges in detail. 
`
  },
  {
    id: "9",
    name:"Prof.David W. Matolack",    
    designation:"Professor",
    university:"University of South Carolina",
    bio:"David W Matolak received the BS degree from The Pennsylvania State University, MS degree from The University of Massachusetts, and PhD degree from The University of Virginia, all in electrical engineering. He has over 25 years’ experience in communication system research, development, and deployment, with industry, government institutions, and academia, including AT&T Bell Labs, L3 Communication Systems, MITRE, and Lockheed Martin. He has over 250 refereed publications and ten patents. He was a professor at Ohio University (1999-2012), and since 2012 has been a professor at the University of South Carolina. He has been Associate Editor for several IEEE journals, is currently the chair of the IEEE VTS Propagation Committee, and has delivered several dozen invited presentations at a variety of international venues. His research interests are radio channel modeling, communication techniques for non-stationary fading channels, and secure and covert communications. Prof. Matolak is a Fellow of the IEEE, a member of standards groups in RTCA and ITU, and a member of Eta Kappa Nu, Sigma Xi, Tau Beta Pi, URSI, ASEE, AAAS, and AIAA.",
    imageUrl: "/DavidMatolak.jpg",
    title:"Reliable Future Aviation Communications",
    about:"Growth in aviation will require advances in air-ground and air-air communications, navigation, and surveillance (CNS). Projects such as NASA’s Advanced Air Mobility (AAM), which is aimed at the transportation of both cargo and people in low-altitude flights in and around urban areas, require extremely high-reliability links, often with low latencies. In this presentation, we provide background on aviation trends and estimated aviation link quality requirements, briefly discuss AAM system requirements, then focus on reliable air-ground (AG) communications. For this we discuss both intrinsic challenges such as wireless channel impairments and spectrum constraints, as well as extrinsic challenges such as interference, both unintentional and intentional (i.e., jamming). We summarize reliability techniques at the network and data link layers, then turn to the physical layer, and discuss in some detail AG channel effects, transmission security (transec), and anti-jam (AJ) techniques. We illustrate that by taking an adversary’s perspective we can improve link design and operation. The talk will conclude with comments on the future potential of machine learning and artificial intelligence, along with other areas for future work."
  },
  {
    id:"10",
    name:"Prof. S.V. Kulkarni",
    ieeeAffil:"IEEE Fellow",
    designation:"Prof. at Department of Electrical Engg.",
    university:"Indian Institute of Technology (IIT) Bombay",
    bio:`Dr. S. V. Kulkarni is a Professor in the Department of Electrical Engineering at IIT Bombay. He was INAE (Indian National Academy of Engineering) Chair Professor in the Department (April 2018 – March 2020).  He is a Fellow of IEEE and INAE. He is also an IEEE PES Distinguished Lecturer. He was Editor of IEEE Transactions on Power Delivery and IEEE Power Engineering Letters (2012-2019). He worked at Crompton Greaves Limited (1990-2001) and specialized in the design and development of transformers up to 400 kV class. He was a recipient of the Young Engineer Award conferred by INAE in 2000 for his contributions to ‘Electromagnetic Field Computations and High Voltage Insulation Design in Transformers’. He was also honoured with the Career Award for Young Teachers from All India Council for Technical Education in 2001. He received Best Paper Awards in international conferences on transformers held in 2002 and 2006. 
He has authored a book, Transformer Engineering: Design, Technology, and Diagnostics, Second Edition, published by CRC Press in September 2012, and he received IIT Bombay Research Dissemination Award 2016 for the book. He has adapted an undergraduate textbook on electromagnetics for Asia, Principles of Electromagnetics, Oxford University Press, published in October 2015. He delivered an NPTEL MOOC Course on ‘Electrical Equipment and Machines: Finite Element Analysis’ in 2020. He has also developed a Virtual Electromagnetics Laboratory to effectively teach involved concepts using real-life practical examples and field visualizations, which has attracted more than 38,000 visitors till now.
His extensive interactions with the transformer and power industries are reflected in his numerous consultancy projects for them. He has organized several training programs on transformers and computational electromagnetics for engineers from industries and academia in India. He has also set up the Field Computation Laboratory and the Insulation Diagnostics Laboratory in the Electrical Engineering Department at IIT Bombay. He contributed to his Institute in infrastructure development and administration through positions of Associate Dean-II (Infrastructure, Planning, and Support) and Dean (Administrative Affairs), respectively. 
He has more than 220 publications in reputed journals and conferences, and has nine Indian and two US patents to his credit. His current areas of research include Analysis and Diagnostics of Transformers, Electromagnetic and Coupled Field Computations, Modelling of Magnetic Materials, Insulation Diagnostics, and Energy Transition.

For more details, see: http://www.ee.iitb.ac.in/wiki/faculty:svk 

`,
    imageUrl: "/SVKulkarni.jpg",
    title:"Magnetics and Insulation Design for Power Electronics",
    about:`In power electronic applications, electromagnetic devices such as transformers and inductors are essential for galvanic isolation, voltage transformation, filtering action, and power flow control.  The size and cost of these devices depend on how efficiently these components are designed and manufactured. The selection of appropriate magnetic and insulating materials is of paramount importance, which is primarily decided by the intrinsic material properties and various kinds of stresses during operation. Hysteresis, eddy, and anomalous components make up the total magnetic loss. Skin and proximity losses can become critical at high frequencies associated with power electronics, and their effect on performance parameters can be significant. Design of insulation in components used in power converter systems with silicon carbide devices is an important aspect due to repetitive voltage pulses with high rise times. To overcome these challenges, a deep understanding of relevant concepts, including the theories of magnetization processes, eddy currents, and partial discharges, is essential. Furthermore, thermal issues impact loading limits of the magnetic and insulating materials, and hence decide reliability and life expectancy of the power electronic converter systems. The talk focuses on challenges in the various aspects of designing the devices, enumerates current practices followed in overcoming them, and highlights emerging trends.`

  },
  {
    id: "11",
    name:"Dr. Sajal K. Das",
    designation:"IEEE Fellow",
    university:"Department of Computer Science, Missouri University of Science and Technology",
    bio:`Dr. Sajal K. Das is the Curators’ Distinguished Professor and Daniel St. Clair Endowed Chair in Computer Science at Missouri University of Science and Technology. He served as a Program Director in the US National Science Foundation (NSF). His interdisciplinary research spans cyber-physical systems, IoT, UAVs, wireless sensor networks, cybersecurity, machine learning, data science, mobile and pervasive computing, smart environments, edge-cloud computing, social and biological networks, applied graph theory and game theory. He has made fundamental contributions to these areas and published extensively in top-tier venues (more than 350 journal articles and more than 450 peer-reviewed conference papers). His h-index is 102 with more than 44,000 citations according to Google Scholar. Dr. Das coauthored 60 book chapters and 4 books – Smart Environments: Technology, Protocols, and Applications; Handbook on Securing Cyber-Physical Critical Infrastructure: Foundations and Challenges; Mobile Agents in Distributed Computing and Networking; and Principles of Cyber-Physical Systems: An Interdisciplinary Approach. A holder of 5 US patents, he directed over USD $24 million funded research projects. He is the founding Editor-in-Chief of Elsevier’s Pervasive and Mobile Computing journal and serves as Associate Editor of IEEE Transactions on Sustainable Computing, IEEE Transactions on Dependable and Secure Computing, ACM Transactions on Sensor Networks, and ACM/IEEE Transactions on Networking. A founder of IEEE PerCom, WoWMoM, SMARTCOMP and ACM ICDCN conferences, he has served as General Chair and Program Chair of reputed conferences. Dr. Das is a recipient of 14 Best Paper Awards in flagship conferences like ACM MobiCom and IEEE PerCom; and numerous awards for teaching, mentoring and research including the IEEE Computer Society’s Technical Achievement award for pioneering contributions to sensor networks, and the University of Missouri System President’s Award for Sustained Career Excellence. He has mentored and graduated 12 postdoctoral fellows, 51 Ph.D. scholars, 31 MS thesis, and numerous undergraduate research students and colleagues around the world. Currently he is supervising 10 Ph.D. students and 4 postdocs. Dr. Das is a Distinguished alumnus of the Indian Institute of Science, Bangalore, and a Fellow of the IEEE, National Academy of Inventors (NAI), and Asia-Pacific Artificial Intelligence Association (AAIA).`,
    imageUrl: "/SDas.jpg",
    title:"From Smart Sensing to Smart Living:The Era of IoT, AI/ML and Data Science",
    about:`We live in an era in which our physical and cyber environments are becoming increasingly intertwined due to the advent of smart devices and sensors, Internet of Things (IoT), cyber-physical systems (CPS), wireless communications, pervasive computing, AI, machine learning, and data science. Alongside, smartphones are empowering the human world to interact with both physical and cyber worlds to collect fine-grained information and opinions via mobile crowdsensing about events of interest, resulting in actionable inferences and decisions. This synergy has led to the development of Smart Living CPS, the goal of which is to improve the quality of life in a variety of environments, such as smart homes and cities, smart grid, smart transportation, industry 4.0 and smart manufacturing, smart health, and smart agriculture. However, such systems pose significant challenges due to the scale, complexity, heterogeneity, uncertainty, interdependence, resource limitations, human behavior randomness, security, privacy, and trust issues. This keynote talk will highlight unique challenges, novel frameworks, and models to design and model secure and trustworthy smart living CPS. Our innovative approaches are based on rich theoretical and practical design principles, such as AI/ML, time-series data analytics, sensor fusion, uncertainty reasoning, information theory, prospect theory, reputation/belief models, online and randomized algorithms, optimization techniques, graph theory, and game theory. Real-world case studies and experimental results will be presented for smart energy, smart transportation, smart agriculture, and smart health applications. The talk will be concluded with directions of future research.`
  },
  {
    id:"12",
    name:"Dr. Alok Ranjan",
    ieeeAffil:"IEEE Senior Member",
    designation:"Senior AI/Research Architect",
    university:"Bosch Global Software Technologies Pvt. Ltd.",
    bio:`Dr. Alok Ranjan is a demonstrated researcher with more than 13+ years of experiences in the area of AIoT, Smart Mobility, Sensing and mobile systems, Wireless communication & data driven ecosystem. He is passionate to build systems around interdisciplinary research & business domains. At present, he is leading research in Edge AI (Edge Intelligence), on device AI for both mobility and non-mobility domains at BGSW. 

Alok has published over 28 peer reviewed scientific research papers across different international journals & conferences. He is the lead inventor for two international patents that have been granted, in addition to having several others that are currently pending approval. He is an active contributor in different journals and peer reviewed international and national conferences in the role of reviewer, mentor and an organizing committee member. He has received several awards for his research excellence, out of which few noteworthy mentions are: Best Graduate Forum Presenter Award, Best Poster Paper Award, LRN Foundation Award, and Best Research Scholar of the Department. His business acumen has been recognized and felicitated among which few significant mentions are "New Business Ideation Award- 2021 (Hitachi Research)" and "Best Performer of the Year- 2023 with BGSW".

Alok received his Ph.D. from NIT Rourkela & has been a Post-Doctoral Researcher with VCU (Virgnia Commonwealth University), USA. He is a Senior Member of IEEE, and a member of ACM and ACM SIGCOM. He is a member of the executive committees of COMSNETS Association and IEEE Computer Society Bangalore Chapter.`,
    imageUrl: "/Alok_profile_pic.jpg",
    about:`Edge Artificial Intelligence is fundamentally transforming different industry verticals, including automotive domain. This talk delves into the integration of Edge AI within Connected, Cooperative, and Automated Mobility (CCAM) systems, focusing on decentralized data processing architectures that meet the stringent latency, reliability, and privacy requirements of next-generation transportation networks. We will first discuss the scientific and technical foundations driving Edge AI innovation in smart mobility, and its potential to revolutionize transportation networks. We examine state-of-the-art edge computing frameworks that enable real-time perception, prediction, and control through collaborative intelligence among vehicles, roadside units, and cloud platforms. In addition, this talk will explore how Edge AI is playing an instrumental role to innovate and develop next-gen mobility solutions.`,
    title:"Edge Artificial Intelligence for Connected, Cooperative & Automated Mobility"
  },
  {
    id: "13",
    name:"Prof. Sanghamitra Bandyopadhyay",
    ieeeAffil:"Fellow of all the National Science Academies and the Engineering Academy of India, IEEE",
    designation:"Director",
    university:"Indian Statistical Institute, Kolkata",
    bio:`Prof. Sanghamitra Bandyopadhyay did her B Tech, M Tech and Ph. D. in Computer Science from Calcutta University, IIT Kharagpur and Indian Statistical Institute respectively. She then joined the Indian Statistical Institute as a faculty member, and became the Director in 2015. Since 2020 she is continuing in her second tenure as the Director of the Institute. Her research interests include computational biology, soft and evolutionary computation, artificial intelligence and machine learning.  She has authored/co-authored several books and numerous articles in journals, book chapters, and conference proceedings and has a citation h-index of 64. Prof. Bandyopadhyay has worked in many Institutes and Universities worldwide. She is the recipient of several awards including the Shanti Swarup Bhatnagar Prize in Engineering Science, TWAS Prize, Infosys Prize, JC Bose Fellowship, Swarnajayanti fellowship, INAE Silver Jubilee award, INAE Woman Engineer of the Year award (academia), IIT Kharagpur Distinguished Alumni Award, Humboldt Fellowship from Germany, Senior Associateship of ICTP, Italy, young engineer/scientist awards from INSA, INAE and ISCA,  and Dr. Shanker Dayal Sharma Gold Medal and Institute Silver from IIT, Kharagpur, India. She is a Fellow of all the National Science Academies and the Engineering Academy of India, IEEE, The World Academy of Sciences (TWAS), and International Association for Pattern Recognition (IAPR). She serves as a member of the Science, Technology and Innovation Advisory Council of the Prime Minister of India (PM-STIAC). In 2022, she was conferred the Padma Shri award of the Government of India. `,
    imageUrl: "/Bandyopadhyay.jpg",
  },
  {
    id: "14",
    name:"Kapil Bhattad",
    designation:"Sr. Director, Engineering",
    university:"Qualcomm India Pvt. Ltd.",
    bio:"Kapil Bhattad received his B. Tech degree in Electrical Engineering from IIT Madras in 2002 and a Ph.D. degree in Electrical Engineering from Texas A&amp;M University in 2007. He has been at Qualcomm Wireless R&amp;D since then in San Diego from 2007 to 2011 and in Bangalore from 2011 onwards. He has contributed extensively to design, standardization, and commercialization of wireless communication technologies and chipsets covering 3G,4G,5G, IoT, and satellite communication systems. He has more than 250 patent applications in these areas.  He currently leads the Bluetooth and UWB modem systems team in India.",
    imageUrl: "/Kapil.png",
  },
  {
    id:"15",
    name:"Dr. Amit Kumar Mishra",
    designation:"Technology & Innovation Manager",
    university:"RC Fornax,UK",
    bio:`Amit Kumar Mishra is currently the Technology & Innovation Manager at RC Fornax, UK. Before this, he has had more than 20 years of academic experience in four continents. His areas of work include radar remote sensing and AI for sensing and measurement. He has worked on co-innovation projects with industries from South Africa, Australia, India, Sweden, and the UK. In addition to more than 250 publications, he holds nine patents and is co-owner of two startups. He is also an Adjunct Professor in the University of Cape Town, a Guest Professor in University West (Sweden), and a Visiting Professor in AGH University Kraków.`,
    imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU1o3rDuAbq0PLG0jfl0lnTvJzGBJwD6T82w&s",
    title:"Bio-inspired Methods for Sensing & Instrumentation using AI",
    about:`In this talk, the speaker shall discuss a few bio-inspired methods that his group has been working on. He will also discuss a machine learning-centric sensing method called Application Specific INstrumentation (ASIN) where inexpensive sensors are used with AI to result in functional instruments.
`
  },
  {
    id:"16",
    name:"Prof. Debabrata Das",
    designation:"Director",
    university:"IIIT BANGALORE",
    bio:`To be Updated`,
    imageUrl:"/speakers/DebabrataDas.jpeg",
    title:"To be Updated",
    about:`To be Updated`
  },
  {
    id:"17",
    name:"Prof. G. Panda",
    designation:"Professor and Research Advisor",
    university:"C. V. Raman Global University, Bhubaneswar",
    bio:`To be Updated`,
    imageUrl:"/speakers/GanapatiPanda.jpeg",
    title:"To be Updated",
    about:`To be Updated`
  },
  {
    id:"18",
    name:"Prof. B. Majhi",
    designation:"Vice Chancellor",
    university:"C. V. Raman Global University, Bhubaneswar ",
    bio:`To be Updated`,
    imageUrl:"/speakers/BanshidharMajhi.jpeg",
    title:"To be Updated",
    about:`To be Updated`
  },
  {
    id:"19",
    name:"Prof. B. Subudhhi",
    designation:"Director",
    university:" NIT Warangal",
    bio:`To be Updated`,
    imageUrl:"/speakers/BidyadharSubudhi.jpg",
    title:"To be Updated",
    about:`To be Updated`
  },
  {
    id:"20",
    name:"Prof. S. K. Patra",
    designation:"Director",
    university:" NIT Agartala",
    bio:`To be Updated`,
    imageUrl:"/speakers/SaratPatra.jpg",
    title:"To be Updated",
    about:`To be Updated`
  },
  {
    id:"21",
    name:"Dr. Debiprasad Priyabrata Acharya",
    designation:"Professor",
    university:"NIT Rourkela",
    bio:"Dr. Debiprasad Priyabrata Acharya is a Professor in the Department of Electronics and Communication Engineering at NIT Rourkela. With a Ph.D. in VLSI Signal Processing from NIT Rourkela, M.E. in Microelectronics from BITS Pilani, and M.Sc. in Physics (Electronics) from IIT Kharagpur, he brings a strong interdisciplinary background.He has over two decades of combined academic and industrial experience, having previously worked with leading organizations such as Tata Elxsi, Wipro, and C-DOT in ASIC, FPGA, and embedded system design.At NIT Rourkela, Dr. Acharya has significantly contributed to research and infrastructure development, establishing state-of-the-art labs including the Analog & Mixed-Signal IC Lab, IoT Lab, PCB Lab, and Reconfigurable System Design Lab. His teaching and research expertise span VLSI design, embedded systems, industrial IoT, and machine intelligence. He has authored and co-authored numerous research publications in reputed journals and conferences, with key contributions in PLL optimization, analog IC design, sparse signal acquisition, and memory architecture. He has also guided several doctoral students and led sponsored projects in advanced electronics and IoT.Recognized for his impactful research, Dr. Acharya has accumulated over 449 citations with an h-index of 13. His academic leadership, coupled with his industry experience, makes him a vital contributor to advancing innovation in VLSI, IoT, and next-generation embedded systems.",
    imageUrl:'/DPAcharya.jpg',
    title:"Chip and Artificial Intelligence: A Symbiosis",
    about:"The accelerating evolution of Artificial Intelligence (AI) is deeply intertwined with rapid advancements in semiconductor technology. A symbiotic relationship between AI and chip design, highlights how each drives progress in the other. On one hand, AI applications demand immense computational power, prompting innovations in chip architectures—such as Graphic Processing Units (GPU), Tensor Processing Units, neuromorphic processors, and edge AI chips—that are optimized for parallel processing and machine learning tasks. Chip design, spec-to-layout flow,  is iterative in nature. Large, complex System on Chips are divided into many modules. Each module proceeds through making of microarchitecture, RTL design and verification, logic synthesis, timing analysis, power analysis, floor-planning, placement, clock tree distribution, routing, and final signoff. AI is increasingly being used to automate and enhance chip design, in all the steps, reducing development time and increasing efficiency. This mutual reinforcement is accelerating both fields, enabling breakthroughs in autonomous systems, healthcare, defence, space and beyond. As AI models grow in complexity and ubiquity, the co-evolution of chips and AI will be central to the next wave of technological innovation."



  }

];
