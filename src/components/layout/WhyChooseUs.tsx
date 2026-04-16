
import { motion } from "motion/react";

import { SlideLeft } from "@/utility/HomeAnimation";
import { WhyChooseUsRow } from "@/constants";

const WhyChooseUs = () => {
	return (
		<>
			<div className="bg-[#F9FAFC] py-12">
					
					{/*header section*/}
					<div className="space-y-4 p-6 text-center max-w-[500px] mx-auto mb-5">
						<h1 className="uppercase font-semibold text-orange-600 text-2xl lg:text-md">
							Why Choose Us
						</h1>
						<p className="font-semibold text-1xl lg:text-lg">
							Affordable, quality education that builds skills for real-world success.
						</p>
					</div>

					{/*cards section*/}
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
							
							{WhyChooseUsRow.map((item, index) => (
							    <motion.div
							    	variants={SlideLeft(index * 0.3)}
							    	initial="hidden"
							    	whileInView={"visible"}
								    key={item.id}
								    className="flex overflow-hidden rounded-xl shadow-lg bg-white dark:bg-gray-800">
								    <img
								        src={item.link}
								        alt={item.title}
								        className="w-60 object-cover"/>

							      	<div className="p-4 min-w-0">
							        	<h5 className="text-xl font-bold text-gray-900 dark:text-white">
							          		{item.title}
							        	</h5>

							        	<p className="mt-2 text-gray-700 dark:text-gray-400 break-words text-xs lg:text-sm">
							          		{item.information}
							        	</p>
							      	</div>
							    </motion.div>
							))}

						</div>
						

					</div>

			</div>
		</>
	)
}

export default WhyChooseUs;