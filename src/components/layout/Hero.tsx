
import { Popover } from "flowbite-react";
import { PiBuildingsBold } from "react-icons/pi";

import { HeroRow } from "@/constants";

const PopoverContent = ({ item }) => (
  	<div className="w-64 p-4 text-sm text-[#878594] space-y-3 break-all">
	    <div>
	      	<p className="text-xs font-semibold text-gray-500 uppercase">Street</p>
	      	<p className="text-xs">{item.street || "N/A"}</p>
	    </div>

	    <div>
	      	<p className="text-xs font-semibold text-gray-500 uppercase">Contact</p>
	      	<p className="text-xs">{item.contact_no || "N/A"}</p>
	    </div>

	    <div>
	      	<p className="text-xs font-semibold text-gray-500 uppercase">Mobile</p>
	      	<p className="text-xs">{item.mobile_no || "N/A"}</p>
	    </div>

	    <div>
	      	<p className="text-xs font-semibold text-gray-500 uppercase">Email</p>
	      	<div className="flex flex-col">
		        {item.email?.map((e) => (
		          	<a
		            	key={e}
		            	href={`mailto:${e}`}
		            	className="text-primary hover:underline text-xs">
		            	{e}
		          	</a>
		        ))}
	      	</div>
	    </div>
  	</div>
);

const Hero = () => {

	return (
		<div>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				
				<div className="text-3xl font-semibold !leading-tight 
				  	uppercase text-left mb-12 flex items-center justify-center gap-2">
				  	<PiBuildingsBold /> 
				  	<span>Our Campus</span>
				</div>

				<div className="flex flex-wrap justify-center gap-10">
					{HeroRow.map((item) => (
					    
					    <Popover key={item.id} placement="bottom" content={<PopoverContent item={item} />}>

					      {/* Trigger card */}
					      	<div className="flex flex-col items-center text-center max-w-[250px] cursor-pointer hover:!scale-105 duration-300">
					        	<img
					          		src={item.link}
					          		alt={item.title}
					          		className="w-16 h-16 object-contain mb-3"/>

					        	<h3 className="text-sm font-semibold text-primary">
					          		{item.title}
					        	</h3>
					      	</div>
					    </Popover>
					))}
				</div>

			</div>	
		</div>
	)
}

export default Hero;
