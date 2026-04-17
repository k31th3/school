
import { useState } 		from "react";
import { motion } 		 	from "motion/react";
import { 
		AboutMSRow, 
		AboutStoryRow } 	from "@/constants";

import { LiaSchoolSolid }   from "react-icons/lia";
import { 
		SlideLeft, 
		SlideRight } 		from "@/utility/HomeAnimation";


const About = () => {

	const [expandedId, setExpandedId] = useState<number | null>(null);

	return (
		<>
			<div id="sectionAbout" className="relative">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

					<motion.div 
							variants={SlideRight(0.3)}
					    	initial="hidden"
					    	whileInView={"visible"} 
					    	div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
					  	<div 
					  		className="bg-white/90 backdrop-blur px-8 py-5 rounded-xl shadow-xl border border-gray-100 text-center 
					  		h-20 w-80 flex items-center justify-center">
					    	<h2 className="text-2xl font-bold tracking-wide">
					      		ABOUT US?
					    	</h2>
					  	</div>
					</motion.div>

					<motion.div 
							variants={SlideLeft(0.6)}
					    	initial="hidden"
					    	whileInView={"visible"}  
						className="bg-[#F9FAFC] px-8 py-16 rounded-lg 
						shadow-xl border border-gray-100 w-[90%] md:w-[80%] m-auto flex flex-col md:flex-row items-center md:items-start justify-center gap-10">

						{AboutMSRow.map((item, index) => {
					        const Icon = item.icon;

					        return (
					          	<div key={item.id} className="flex-1 text-center md:text-left">
					            	<div className="flex items-center justify-center md:justify-start gap-3 mb-4">
					              		<Icon className="text-2xl text-gray-700" />
					              		<h3 className="text-xl font-semibold">{item.title}</h3>
					            	</div>
					            	<p className="text-[#878594] leading-relaxed text-sm">
					              		{item.text}
					            	</p>
					          	</div>
					        );
					    })} 

					</motion.div>

					<motion.div 
							variants={SlideRight(0.9)}
					    	initial="hidden"
					    	whileInView={"visible"}  
					    	className="relative -mt-20 z-10 flex justify-center">
					  	<div className="w-full md:w-[90%]">
					    
						    <div className="bg-white/90 backdrop-blur px-8 py-5 rounded-xl shadow-xl border 
						    	border-gray-100 text-sm flex flex-col items-center">
						      
						      	{AboutStoryRow.map((item) => {
							        const isExpanded = expandedId === item.id;

							        return (

							          	<div key={item.id}>
								          	
								          	<div className="flex items-center gap-2 text-xl font-semibold mb-4">
								          		<LiaSchoolSolid />
								          		<span>
								          			CRT Now and Then
								          		</span>
								          	</div>

								            <p className="text-[#878594] leading-relaxed text-left">
								              {isExpanded
								                ? item.text
								                : item.text.slice(0, 200) + "..."}
								            </p>

								            <button
								              onClick={() =>
								                setExpandedId(isExpanded ? null : item.id)
								              }
								              className="mt-2 text-primary font-medium hover:underline cursor-pointer w-full"
								            >
								              {isExpanded ? "See less" : "See more"}
								            </button>
							          	</div>
							        );
						      	})}

						    </div>

					  	</div>
					</motion.div>

				</div>
			</div>
		</>
	)

}

export default About;
