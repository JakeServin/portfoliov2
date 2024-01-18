"use client";
import React from "react";
import { montserrat, roboto } from "@/common/fonts";
import { NAV_LINKS } from "@/common/constants";
import { useStore } from "@/store";
import Image from "next/image";

const Nav = () => {
	const { homeRef, aboutRef, skillsRef, projectsRef, contactRef } =
    useStore();
  
  console.log(projectsRef)

	const scrollIntoView = (name: string) => {
		switch (name) {
			case "Home":
				homeRef &&
					homeRef.current &&
					homeRef.current.scrollIntoView({ behavior: "smooth" });
				break;
			case "About":
				aboutRef &&
					aboutRef.current &&
					aboutRef.current.scrollIntoView({ behavior: "smooth" });
				break;
			case "Skills":
				skillsRef &&
					skillsRef.current &&
					skillsRef.current.scrollIntoView({ behavior: "smooth" });
				break;
			case "Projects":
				projectsRef &&
					projectsRef.current &&
					projectsRef.current.scrollIntoView({ behavior: "smooth" });
				break;
			case "Contact":
				contactRef &&
					contactRef.current &&
					contactRef.current.scrollIntoView({ behavior: "smooth" });
				break;
			default:
				break;
		}
	};

	return (
		<nav
			className={`flex w-full justify-center pt-3 ${montserrat.className} sticky top-0 z-50`}
		>
			<ul className="flex justify-around sm:justify-between w-full sm:w-auto sm:gap-2 border-2 border-gray-50 rounded-full mx-2 px-3 sm:px-6 py-2 shadow-md bg-white opacity-95 z-50">
				{NAV_LINKS.map((link) => (
					<li
						key={link.name}
						className="group text-gray-400 font-bold text-sm sm:text-base transition-all duration-400 cursor-pointer"
					>
						<a
							onClick={() => scrollIntoView(link.name)}
							className="group-hover:text-primary"
						>
							<div className="hidden sm:inline-block">
								<span className="text-slate-700 opacity-0 group-hover:opacity-100 transition-all duration-400">
									&lt;
								</span>
								{link.name}
								<span className="text-slate-700 opacity-0 group-hover:opacity-100 transition-all duration-400">
									&nbsp;/&gt;
								</span>
							</div>

							<div className="sm:hidden">
								<img src={link.icon} alt={link.name} height={6} width={6} className="h-6 w-6"/>
							</div>
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Nav;
