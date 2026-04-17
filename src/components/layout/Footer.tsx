

import { 
	FaMapMarkerAlt, FaEnvelope, 
	FaPhoneAlt, FaPaperPlane, FaFacebook } from "react-icons/fa";

const Footer = () => {

	const email = "crtcabanatuan@crt.edu.ph";

	return (
		<>
			<div className="bg-[#F9FAFC]" id="sectionContact">
					
				<div className="grid md:grid-cols-2 gap-0 items-stretch">

					<div className="grid gap-4">
						<div className="w-full h-full">
					      	<iframe
					      		title="CRT Main location"
					        	src="https://maps.google.com/maps?q=College%20for%20Research%20and%20Technology%20of%20Cabanatuan&z=12&output=embed"
					        	className="w-full h-full border-0"
					        	loading="lazy"
					      	/>
					    </div>
					</div>
					
					<div className="h-full">
						<div className="bg-gray-100 py-10 px-6 md:px-20">
					      	<div className="grid md:grid-cols-2 gap-10">
					        
						        {/* Left Column */}
						        <div className="space-y-8">
						          
						          	{/* Main Campus */}
						          	<div className="flex items-start gap-4">
							            <FaMapMarkerAlt className="text-primary text-2xl mt-1" />
							            <div>
							              	<h2 className="text-lg font-semibold text-gray-800">Main Campus</h2>
							              	<p className="text-gray-600 text-xs">
							               		Burgos Ave., Cabanatuan City
							              	</p>
							              	<p className="text-gray-600 text-xs">
							                	Del Pilar St., Cabanatuan City
							              	</p>
							            </div>
						          	</div>

						          	{/* Contact Numbers */}
						          	<div className="flex items-start gap-4">
						            	<FaPhoneAlt className="text-primary text-2xl mt-1" />
						            	<div>
						              		<h2 className="text-lg font-semibold text-gray-800">Contact Numbers</h2>
						              		<p className="text-gray-600 text-xs">(044) 463-2735</p>
						            	</div>
						          	</div>

						        </div>

						        {/* Right Column */}
						        <div className="space-y-8">
						          
						          	{/* Email */}
						          	<div className="flex items-start gap-4">
							            <FaEnvelope className="text-primary text-2xl mt-1" />
							            <div>
							              	<h2 className="text-lg font-semibold text-gray-800">E-mail Address</h2>
							              	<a
								            	href={`mailto:${email}`}
								            	className="text-primary hover:underline text-xs">
								            	{email}
								          	</a>
								            <div className="flex items-center gap-2 mt-1 text-gray-600 text-xs">
								              	<a
												  	href="https://www.facebook.com/crtcab1988/"
												  	target="_blank"
												  	rel="noopener noreferrer"
												  	className="flex items-center gap-2 mt-1 text-gray-600 text-xs hover:underline text-primary">
												  	<FaFacebook />
												  	<span>/CRTCabanatuan</span>
												</a>
								            </div>
						            	</div>
						        	</div>

							        {/* Other Campuses */}
							        <div className="flex items-start gap-4">
							            <FaPaperPlane className="text-primary text-2xl mt-1" />
							            <div>
							              	<h2 className="text-lg font-semibold text-gray-800">Other Campuses</h2>
						              		<ul className="text-gray-600 text-xs space-y-1">
						                		<li>Gapan Campus</li>
						                		<li>Guimba Campus</li>
						                		<li>San Jose Campus</li>
						              		</ul>
							            </div>
							        </div>

					        	</div>

					      	</div>
					    </div>	
					</div>

				</div>

				<div className="bg-primary">
					<div className="text-center py-4 text-xs text-white">
						College for Research & Technology
						@Copyright 2026
					</div>
				</div>
			</div>

			
		</>
	)
}

export default Footer;
