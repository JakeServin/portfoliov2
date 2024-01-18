"use client";
import { SKILLS } from "@/common/constants";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { useStore } from "@/store";

const Skills = () => {

	const skillsRef = useRef<null | HTMLElement>(null);
	const { setRef } = useStore();

	useEffect(() => {
		setRef("skillsRef", skillsRef);
	}, []);

	return (
		<section ref={skillsRef} id="skills" className="bg-gray-50">
			<div className="container flex flex-col items-center">
				<h1 className="font-bold text-2xl text-center pt-10">
					&lt;<span className="text-primary">Skills </span>/&gt;
				</h1>
				<div className="flex flex-wrap gap-4 justify-center mt-5 pb-10 sm:w-6/7">
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
					))}
				</div>
			</div>
		</section>
	);
};

export default Skills;
