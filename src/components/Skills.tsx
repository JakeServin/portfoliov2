import { SKILLS } from "@/common/constants";
import Image from "next/image";
import React from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

const Skills = () => {
	return (
		<section className="bg-gray-50">
			<div className="container flex flex-col items-center">
				<h1 className="font-bold text-xl text-center pt-10">
					&lt;<span className="text-primary">Skills </span>/&gt;
				</h1>
				<div className="flex flex-wrap gap-4 justify-center mt-4 pb-10 sm:w-6/7">
					{SKILLS.map((skill) => (
						<HoverCard>
              <HoverCardTrigger>
								<Image
									key={skill.name}
									src={skill.src}
									alt={skill.name}
									width={100}
									height={100}
									className="hover:scale-110 transition-all duration-200"
								/>
							</HoverCardTrigger>
							<HoverCardContent className="w-auto">
                {skill.name}
							</HoverCardContent>
						</HoverCard>
						// <div className="group">
						// 	<Image
						// 		key={skill.name}
						// 		src={skill.src}
						// 		alt={skill.name}
						// 		width={100}
						// 		height={100}
						// 		className="group-hover:scale-110 transition-all duration-200"
						// 	/>
						// </div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Skills;
