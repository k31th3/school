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
    	option: NavbarOption[];
  	};
};

export const NavBarRow: NavbarItem[] = [

	{
		id: 1,
		title: "home",
		link: "#",
		icon: MdHome
	},
	{
		id: 2,
		title: "about",
		link: "#",
		icon: MdInfo
	},
	{
		id: 3,
		title: "course",
		link: "#",
		icon: MdSchool
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
	  	icon: MdAssignment,
		  	dropdown: {
		    	title: "admission",
		    	option: [
			    {
			        id: 1,
			        title: "college",
			        link: "https://docs.google.com/forms/d/e/1FAIpQLSfZOilIA20jzKHsMmVlH8_EBZGBCx5oVHz07QGxs6cWEY5WbA/viewform"
			    },
			    {
			        id: 2,
			        title: "junior high school",
			        link: "https://docs.google.com/forms/d/e/1FAIpQLScgoUFWRhF-1Y4Bpofbg3ysYugTidlQHkFqJgNCMv36L9ZuTg/viewform"
			    },
			    {
			        id: 3,
			        title: "senior high school",
			        link: "https://docs.google.com/forms/d/e/1FAIpQLSf1T9mFINOuS-N7UaxM8RwWz0_aGjAS4j0ieLwYBhw_euFq9Q/viewform"
			    }
		    ]
		}
	},
	{
		id: 6,
		title: "contact us",
		link: "#",
	  icon: MdContactMail
	}

];