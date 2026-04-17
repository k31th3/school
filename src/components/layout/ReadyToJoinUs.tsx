
import { useState } 			 from "react";
import { 
		motion, 
		AnimatePresence } 		 from "motion/react";
import { List, ListItem } 		 from "flowbite-react";
import { SlideLeft, SlideRight } from "@/utility/HomeAnimation";

import { ReadyToJoinUsRow }      from "@/constants";


const ReadyToJoinUs = () => {

	const [open, setOpen] = useState(false);
  	const [activeVideo, setActiveVideo] = useState(null);

	return (
		<>
			<div id="sectionReadyToJoinUs">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

					<div className="text-center mb-16">
						<h2 className="text-3xl font-bold">
							Ready to Join CRT?
						</h2>

						<p className="text-xl text-[#878594]">
							Choose your education level to enroll
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8 md:gap-0">
						
						{/*JHS*/}
						<motion.div 
							variants={SlideRight(0.3)}
					    	initial="hidden"
					    	whileInView={"visible"} 
							className="p-6 flex flex-col gap-4 shadow-md border border-gray-100 rounded-lg lg:rounded-none lg:rounded-l-lg lg:mt-12 lg:mb-12">
						    
						    <h3 className="text-2xl font-bold mb-2 text-center">Junior High School</h3>
						    
					      	<div className="mb-auto">

						    	<div className="flex flex-col gap-4">
						    		<span className="text-start font-semibold">Grade 7 – 10</span>
								    <List className="text-left mb-6 mx-4 text-xs">
								    	<ListItem>STEAM High School</ListItem>
								    </List>
						    	</div>

						    	<div className="flex flex-col gap-4">
						    		<span className="text-start font-semibold">Admission Requirements</span>
								    <List className="text-left mb-6 mx-4 text-xs text-[#878594]">
								    	<ListItem>Original Form 138 or Form 137 (OTR)</ListItem>
								        <ListItem>Four (4) 1x1 ID Picture</ListItem>
								        <ListItem>Certificate of Good Moral Character</ListItem>
								        <ListItem>Photocopy of Birth Certificate (NSO)</ListItem>
								        <ListItem>Interview</ListItem>
								    </List>
						    	</div>

						    </div>

					      	<div className="text-center mx-4 pb-4">
	                            <a 
	                                href="https://docs.google.com/forms/d/e/1FAIpQLScgoUFWRhF-1Y4Bpofbg3ysYugTidlQHkFqJgNCMv36L9ZuTg/viewform"
	                                target="_blank"
                                    rel="noopener noreferrer"
	                            	className="block w-full bg-primary text-white px-5 py-2 rounded-lg cursor-pointer hover:!scale-105 duration-300">
					        		Enroll Now
					      		</a>
						    </div>
					    </motion.div>

					    <div className="bg-primary text-white shadow-lg rounded-xl p-6 flex flex-col gap-4">
						    
						    <h3 className="text-2xl font-bold mb-2 text-center">College</h3>
						    
						    <div>

						    	<div className="flex flex-col gap-4">
						    		<span className="text-start font-semibold">4 Years Degree Courses</span>
								    <List className="text-left mb-6 mx-4 text-xs text-white">
								    	<ListItem>BS IN INFORMATION TECHNOLOGY</ListItem>
								        <ListItem>BS IN ACCOUNTING INFORMATION SYSTEM</ListItem>
								        <ListItem>BS IN HOSPITALITY MANAGEMENT</ListItem>
								        <ListItem>BS IN TOURISM MANAGEMENT</ListItem>
								        <ListItem>BACHELOR IN TECHNICAL VOCATIONAL TEACHER EDUCATION</ListItem>
								    </List>
						    	</div>
						    	<div className="flex flex-col gap-4">
						    		<span className="text-start font-semibold">3 Years Diploma Courses</span>
								    <List className="text-left mb-6 mx-4 text-xs text-white">
								        <ListItem>DIPLOMA IN HOSPITALITY OPERATIONS TECHNOLOGY</ListItem>
								        <ListItem>DIPLOMA IN HOTEL AND RESTAURANT TECHNOLOGY</ListItem>
								        <ListItem>DIPLOMA IN TOURISM TECHNOLOGY</ListItem>
								        <ListItem>DIPLOMA IN TECHNICAL VOCATIONAL TEACHER EDUCATION TECHNOLOGY</ListItem>
								        <ListItem>DIPLOMA IN ACCOUNTING INFORMATION TECHNOLOGY</ListItem>
								        <ListItem>DIPLOMA IN INFORMATION TECHNOLOGY</ListItem>	
								    </List>
						    	</div>
						    	<div className="flex flex-col gap-4">
						    		<span className="text-start font-semibold">2 Years Non-Degree Courses</span>
								    <List className="text-left mb-6 mx-4 text-xs text-white">
								        <ListItem>ASSOCIATE IN COMPUTER TECHNOLOGY</ListItem>
								        <ListItem>HOTEL AND RESTAURANT SERVICES</ListItem>
								    </List>
						    	</div>
						    	<div className="flex flex-col gap-4">
						    		<span className="text-start font-semibold">Admission Requirements</span>
								    <List className="text-left mb-6 mx-4 text-xs text-white">
								    	<ListItem>Original Form 138 or Form 137 (OTR)</ListItem>
								        <ListItem>Four (4) 1x1 ID Picture</ListItem>
								        <ListItem>Certificate of Good Moral Character</ListItem>
								        <ListItem>Photocopy of Birth Certificate (NSO)</ListItem>
								        <ListItem>Interview</ListItem>
								    </List>
						    	</div>

						    </div>

						    <div className="text-center mx-4 pb-4">
	                            <a 
	                                href="https://docs.google.com/forms/d/e/1FAIpQLSfZOilIA20jzKHsMmVlH8_EBZGBCx5oVHz07QGxs6cWEY5WbA/viewform"
	                                target="_blank"
                                    rel="noopener noreferrer"
	                            	className="block w-full bg-white text-black px-5 py-2 rounded-lg cursor-pointer hover:!scale-105 duration-300">
					        		Enroll Now
					      		</a>
						    </div>
						    
						</div>


					    <motion.div 
					    	variants={SlideLeft(0.6)}
					    	initial="hidden"
					    	whileInView={"visible"}
					    	className="p-6 flex flex-col gap-4 shadow-md border border-gray-100 rounded-lg lg:rounded-none lg:rounded-r-lg lg:mt-12 lg:mb-12">
					      	
					      	<h3 className="text-2xl font-bold mb-2 text-center">Senior High School</h3>

					      	<div className="mb-auto">
						    	
						    	<div className="flex flex-col gap-4">
						    		<span className="text-start font-semibold">Academic Track</span>
								    <List className="text-left mb-6 mx-4 text-xs text-[#878594]">
								        <ListItem>BAE | BUSINESS AND ENTREPRENEURSHIP</ListItem>
								        <ListItem>STEM | SCIENCE, TECHNOLOGY, ENGINERRING AND MATHEMATICS</ListItem>
								        <ListItem>ASSH | ARTS, SOCIAL SCIENCES AND HUMANITIES</ListItem>
								    </List>
						    	</div>
						    	<div className="flex flex-col gap-4">
						    		<span className="text-start font-semibold">Technical-Professional (TechPro) Track</span>
								    <List className="text-left mb-6 mx-4 text-xs text-[#878594]">
								        <ListItem>ICT | INFORMATION AND COMMUNICATIONS TECHNOLOGY</ListItem>
								        <ListItem>FCS | FAMILY AND CONSUMER SCIENCE</ListItem>
								    </List>
						    	</div>
						    	<div className="flex flex-col gap-4">
						    		<span className="text-start font-semibold">Admission Requirements</span>
								    <List className="text-left mb-6 mx-4 text-xs">
								    	<ListItem>Original Form 138 or Form 137 (OTR)</ListItem>
								        <ListItem>Four (4) 1x1 ID Picture</ListItem>
								        <ListItem>Certificate of Good Moral Character</ListItem>
								        <ListItem>Photocopy of Birth Certificate (NSO)</ListItem>
								        <ListItem>Interview</ListItem>
								    </List>
						    	</div>

						    </div>

						    <div className="text-center mx-4 pb-4">
	                            <a 
	                                href="https://docs.google.com/forms/d/e/1FAIpQLSf1T9mFINOuS-N7UaxM8RwWz0_aGjAS4j0ieLwYBhw_euFq9Q/viewform"
	                                target="_blank"
                                    rel="noopener noreferrer"
	                            	className="block w-full bg-primary text-white px-5 py-2 rounded-lg cursor-pointer hover:!scale-105 duration-300">
					        		Enroll Now
					      		</a>
						    </div>

					    </motion.div>
					</div>

				</div>
			</div>

			<div>
				<div className="grid md:grid-cols-2">
			        {ReadyToJoinUsRow.map((video) => (
			          <motion.div
				            key={video.id}
				            className="cursor-pointer relative"
				            whileHover={{ scale: 1.05 }}
				            onClick={() => {
				              setActiveVideo(video.link);
				              setOpen(true);
				            }}>
			            
				        <div className="relative bg-[#525967]">
				        	<img
				              src={video.thumbnail}
				              className="rounded-lg w-full"
				            />
				        	<div className="absolute inset-0 flex items-center justify-center">
				              	<div className="bg-black/50 text-white px-4 py-2 rounded-full">
				                	▶ Play
				              	</div>
				            </div>
				        </div>
			            
			          </motion.div>
			        ))}
			    </div>

			    <AnimatePresence>
			        {open && (
			          	<motion.div
				            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
				            initial={{ opacity: 0 }}
				            animate={{ opacity: 1 }}
				            exit={{ opacity: 0 }}
				            onClick={() => setOpen(false)}>
				            
				            <motion.div
				              	className="w-full max-w-5xl px-4"
				              	initial={{ scale: 0.8, opacity: 0 }}
				              	animate={{ scale: 1, opacity: 1 }}
				              	exit={{ scale: 0.8, opacity: 0 }}
				              	onClick={(e) => e.stopPropagation()}>
				              	
				              	<video
				                	className="w-full rounded-lg"
				                	controls
				                	autoPlay>
				                	<source src={activeVideo} type="video/mp4" />
				              	</video>

				              	<div className="text-center mt-4">
				                	<button
				                  		onClick={() => setOpen(false)}
				                  		className="text-white hover:text-red-400 transition cursor-pointer">
				                  		✕ Close
				                	</button>
				             	</div>
				            </motion.div>
			          	
			          	</motion.div>
			        )}
			    </AnimatePresence>
			</div>	

		</>
	)
}

export default ReadyToJoinUs;
