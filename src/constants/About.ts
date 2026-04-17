
import { FiEye, FiTarget } from "react-icons/fi";

export type AboutMSItem = {
	id: number;
  	title: string;
  	icon?: any;
  	text: string;
}

export const AboutMSRow: AboutMSItem[] = 
[
	{
		id: 1,
      	title: "Vision",
      	icon: FiEye,
      	text: "To be recognized and respected as one of the premier members of the academic community that provides excellence in technological education.",
    },
    {
    	id: 2,
      	title: "Mission",
      	icon: FiTarget,
      	text: "The College for Research & Technology of Cabanatuan is a nurturing community devoted in providing accessible and affordable technological education by being a catalyst of innovation in the promotion of holistic development to empower individuals discovers their true worth and become productive members of the society.",
    },
];


export type AboutStoryItem = {
	id: number;
  	text: string;
}

export const AboutStoryRow: AboutStoryItem[] = 
[
	{
		id: 1,
      	text: "The College for Research and Technology of Cabanatuan (CRT) started as a computer school and has been known to be the first computer school in Nueva Ecija. It pioneered in applying a different approach in education like embedding competency courses to baccalaureate course that even the more established colleges and universities followed. After the main campus was established in 1988 at Cabanatuan City, a strategic plan was laid-out by its president, Dr. Reynato C. Arimbuyutan to establish campuses in all of the four districts of Nueva Ecija. In this way, it was envisioned to contend with the growing desire of students to study in their places of abode but with the quality of education comparable to its main campus. The first Branch established after its Main Campus was the Gapan Branch which opened in 1997. Currently, it is located at Abad Santos Street, Barangay Santo Nino, Gapan City with the hope that the college-owned campus will be built on its lot along Maharlika Highway, Bayanihan, Gapan City in the near future. After three years Guimba Campus was built, located at Parairo St., Saranay Dist., Guimba, Nueva Ecija and followed by San Jose Campus located at Sanchez St., San Jose City. The Gapan, Guimba and San Jose branches are Extension Campuses of the Main Branch that offers two years Technical Courses preparatory to a degree course applying the ladderized education approach. TechVoc courses are embedded in all of its curricular courses. This system had been institutionalized by CHED and TESDA to produce more skilled students and increase the chance for employment of graduates. Presently, CRT had been given by the Department of Education permit to operate the Senior High School in all of its branches. Its expertise in TechVoc education for the past two decades had been considered. In this instance, CRT had been given permits and recognition of the trifocalized system of education in the Philippines: CHED, TESDA and DepEd. The last four years had been a tremendous moment for the college with the completion of three additional buildings in Guimba, San Jose and Cabanatuan and the Gymnasium in Gapan. Winning back to back Championship in Cheerdance Competition at the Nueva Ecija Collegiate Students League (NECSL), Championship at NECSL Women Volleyball Competition, the provincial Step-Up Dance Competition championship, and many more representing the best of a true Crtian. Also, the college witnessed the first batch of BTTE graduates who passed the Licensure Examination for Teachers (LET). All the baccalaureate degrees offered by the college: B.S. in Information Technology, B.S. in Hotel and Restaurant Management, B.S. in Tourism Management, B.S. in Accounting Technology, and Bachelor in Technical Teacher Education had been recognized by the Commission on Higher Education (CHED). Scholarships, the quality of education and the everimproving facilities provided by the college had been the main reason why CRT continuously grow and develop.",
    }
];