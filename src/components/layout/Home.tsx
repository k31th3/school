
import { motion } 		 from "motion/react";
import { FaPenToSquare } from "react-icons/fa6";
import { SlideRight } 	 from "@/utility/HomeAnimation";

const Home = () => {
	return (
		<>
		<div id="sectionHome">
			<div className="mt-35">
				
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				  	<div className="grid grid-cols-1 lg:grid-cols-2 relative min-h-[450px] gap-5">
				    
					    {/* LEFT CONTENT */}
					    <div className="flex flex-col justify-center md:pr-16 xl:pr-40 md:py-0 gap-5">
					      	
					      	<motion.h1 
					      		variants={SlideRight(0.4)}
					      		initial="hidden"
					      		animate="visible"
					      		className="text-5xl font-semibold lg:text-6xl !leading-tight">
					        	Build Your Future <span className="text-primary">Today</span>.
					      	</motion.h1>

					      	<motion.p 
					      		variants={SlideRight(0.6)}
					      		initial="hidden"
					      		animate="visible"
					      		className="text-[#878594] font-semibold">
					        	Shape your future today through knowledge, discipline, and passion for learning
					      	</motion.p>

					      	<motion.div 
					      		variants={SlideRight(0.8)}
					      		initial="hidden"
					      		animate="visible"
					      		className="flex flex-row gap-3 justify-center lg:justify-start !my-8">
					        	<a
	                                href="#sectionReadyToJoinUs"
	                                className="bg-primary cursor-pointer font-semibold px-6 py-3 text-white rounded-full hover:!scale-105 duration-300">
	                                Enroll Now
	                            </a>
					        	<a
	                                href="https://crtcareers.seemeconnect.com/"
	                                target="_blank"
                                    rel="noopener noreferrer"
	                                className="flex justify-end items-center font-semibold cursor-pointer">
	                                <span className="w-10 h-10 bg-secondary flex justify-center items-center">
					        			<FaPenToSquare className="text-yellow-300" />	
					        		</span>	
					          		CRT Careers Connect
	                            </a>
					      	</motion.div>
					    </div>

					    {/* RIGHT CONTENT (Hero Image) */}
					    <div className="flex flex-col justify-center items-center">
					     	<motion.img
				              	initial={{ opacity: 0, x: 200 }}
				              	animate={{ opacity: 1, x: 0 }}
				              	transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
				              	src="people.png"
				              	alt="hero image"
				              	className="w-[550px] md:w-[550px] xl:w-[700px]"
				              	onContextMenu={(e) => e.preventDefault()}
								draggable="false"
								onDragStart={(e) => e.preventDefault()}/>
					    </div>

				  	</div>

				</div>

			</div>
		</div>
		</>
	);
}

export default Home;
