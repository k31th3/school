
export type HeroItem = {
	id: number;
  	title: string;
  	street: string;
  	link: string;
  	contact_no: string;
  	mobile_no: string;
  	email: string[];
}

export const HeroRow: HeroItem[] = 
[
	{
		id: 1,
		title: "CRT MAIN",
		street: "Burgos Ave., Cabanatuan City",
		contact_no: "(044) 463-2735",
		mobile_no: "0917-652-3284",
		link: "school/cab.png",
		email: [
			"crtcabanatuan@crt.edu.ph"
		]
	},
	{
		id: 2,
		title: "SHS CABANATUAN",
		street: "Del Pilar St., Cabanatuan City",
		contact_no: "(044) 940-2029",
		mobile_no: "0998-980-2398 / 0916-333-6968",
		link: "school/delpilar.png",
		email: [
			"crtcabanatuan@crt.edu.ph",
			"crt.cabanatuan@gmail.com"
		]
	},
	{
		id: 3,
		title: "GAPAN CAMPUS",
		street: "Anamel Village, Brgy. Bayanihan, Gapan City",
		contact_no: "0926-292-8917",
		mobile_no: "0926-292-8917",
		link: "school/gapan.png",
		email: [
			"crtgapan@crt.edu.ph",
			"crtgapancampus@gmail.com"
		]
	},
	{
		id: 4,
		title: "GUIMBA CAMPUS",
		street: "Parairo St., Saranay Guimba, Nueva Ecija",
		contact_no: "(044) 335-1170",
		mobile_no: "0907 864 7949",
		link: "school/guimba.png",
		email: [
			"crtguimba@crt.edu.ph",
			"crtguimbaassesment@gmail.com"
		]
	},
	{
		id: 5,
		title: "SAN JOSE CAMPUS",
		street: "Sanchez St., San Jose City",
		contact_no: "(044) 803-3630",
		mobile_no: "0997-956-4938",
		link: "school/sanjose.png",
		email: [
			"crtsanjose@crt.edu.ph",
			"crt.sanjoseregistrar@gmail.com"
		]
	}
];
