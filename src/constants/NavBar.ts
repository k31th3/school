import {
  MdHome,
  MdInfo,
  MdSchool,
  MdComputer,
  MdAssignment,
  MdContactMail
} from "react-icons/md";

export type NavBarOption = {
  	id: number | string;
  	title: string;
  	link: string;
  	icon?: any;
};

export type NavBarItem = {
  	id: number | string;
  	title: string;
  	link?: string;
  	icon?: any;
  	dropdown?: {
    	title: string;
  		icon?: any;
    	option: NavBarOption[];
  	};
};

export const NavBarRow: NavBarItem[] = [

	{
		id: 1,
		title: "home",
		link: "#sectionHome",
		icon: MdHome
	},
	{
		id: 2,
		title: "course",
		link: "#sectionReadyToJoinUs",
		icon: MdSchool
	},
	{
		id: 3,
		title: "about",
		link: "#sectionAbout",
		icon: MdInfo
	},
	{
	  	id: 4,
	  	title: "CRT Online",
	  	icon: MdComputer,
	  	dropdown: {
	    	title: "crt online",
	    	option: [
		      	{
		        	id: 1,
		        	title: "crt careers connect",
		        	link: "https://crtcareers.seemeconnect.com/"
		      	},
		      	{
		        	id: 2,
		        	title: "crt lms student",
		        	link: "https://crt.edu.ph/lms/student/#/login"
		      	}
	    	]
	  	}
	},
	{
  	id: 5,
		title: "Admissions",
  	link: "https://app.crteducph.com/",
  	icon: MdAssignment
	},
	{
		id: 6,
		title: "contact us",
		link: "#",
	  icon: MdContactMail
	}

];