"use client";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import Button from "./Button";
import Image from "next/image";

const Hero = () => {
	// const el = useRef(null);

	// useEffect(() => {
	// 	const typed = new Typed(el.current, {
	// 		strings: [
	// 			"a Full-Stack Developer",
	// 			"a Front-End Developer",
	// 			"a Back-End Developer",
	// 			"a React Developer",
	// 		],
	// 		typeSpeed: 35,
	// 		backSpeed: 40,
	// 		loop: true,
	// 	});

	// 	return () => {
	// 		// Destroy Typed instance during cleanup to stop animation
	// 		typed.destroy();
	// 	};
	// }, []);


	return (
		<section className="border-2 border-red-500 container">
			{/* <div className="">
				<h1 className="font-palanquin font-bold text-5xl md:text-6xl lg:text-8xl leading-normal inline-block bg-white pr-5 py-1">
					<span className="animate-wave inline-block mr-4"> 👋🏼 </span>
					I'm Jake!
				</h1>

				<h2 className="font-montserrat mt-5 lg:mt-8 text-slate-gray text-lg md:text-xl lg:text-2xl bg-white">
					I'm <span ref={el} className="text-coral-red" />
				</h2>

				<div className="flex mt-5 lg:mt-8">
					<Button type="button" title="Resume" />
				</div>
			</div>

			<Image
				src={"/hero_bg.png"}
				alt={"hero"}
				width={200}
				height={200}
				className="max-sm:hidden md:w-[300px] md:h-[300px] lg:w-[450px] lg:h-[450px] md:mr-20"
			/> */}
		</section>
	);
};

export default Hero;
