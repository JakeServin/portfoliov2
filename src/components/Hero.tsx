"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import Typed from "typed.js";
import { useStore } from "@/store";

const Hero = () => {
	const typedRef = useRef(null);
	const { contactRef } = useStore();

	useEffect(() => {
		const typed = new Typed(typedRef.current, {
			strings: [
				"Full-Stack Developer",
				"Front-End Developer",
				"Back-End Developer",
				"React Developer",
			],
			typeSpeed: 60,
			backSpeed: 70,
			loop: true,
		});

		return () => {
			// Destroy Typed instance during cleanup to stop animation
			typed.destroy();
		};
	}, []);

	const scrollIntoView = () => {
		contactRef &&
			contactRef.current &&
			contactRef.current.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<section className="flex flex-col-reverse sm:flex-row items-center justify-center sm:pt-10 pb-8 sm:pb-16 container">
			{/* Left */}
			<div className="w-full sm:w-1/3">
				<div className="text-gray-900 text-center sm:text-left text-4xl md:text-5xl lg:text-6xl font-bold my-4">
					Hi, I'm Jake
				</div>
				<div className="mt-4 text-2xl font-medium text-nowrap z-50">
					I'm a <span className="text-accent z-50 *:z-50" ref={typedRef} />
				</div>
				<div className="mt-4 flex gap-2">
					<Button
						onClick={() => scrollIntoView()}
						className="rounded-full shadow w-full sm:w-auto text-xl sm:text-lg"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6 mr-2"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
							/>
						</svg>
						Contact me
					</Button>
				</div>
			</div>

			{/* Right */}
			<div className="">
				<Image src="/hero_bg.png" alt="Hero" width={500} height={500} />
			</div>
		</section>
	);
};

export default Hero;
