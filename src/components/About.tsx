"use client"
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { roboto, openSans } from "@/common/fonts";
import { useStore } from "@/store";

const About = () => {

	const aboutRef = useRef<null | HTMLElement>(null);
	const { setRef } = useStore();

	useEffect(() => {
		setRef("aboutRef", aboutRef);
	}, []);

	return (
		<section
			ref={aboutRef}
			id="about"
			className="bg-secondary py-10 sm:py-20"
		>
			<div className="container flex flex-col md:flex-row items-center justify-center">
				{/* Avatar LEFT */}
				<div className="">
					<Image
						src="/profile.png"
						alt="Jake Servin profile image"
						width={350}
						height={350}
						className="rounded-full md:mx-10 border-2 border-white"
					/>
				</div>

				{/* About Text */}
				<div className="md:w-1/2 mt-8">
					<div className="text-2xl font-medium">
						A{" "}
						<span className="text-primary">Senior Software Engineer</span>
					</div>
					<p
						className={`${openSans.className} text-base md:text-lg leading-normal my-4`}
					>
						who builds consumer apps end to end: the API, the iOS
						app, the web client and the AI underneath. For the last
						two and a half years I&apos;ve been the primary engineer
						behind three AI consumer apps, including Simmy (4.8★,
						#3 in Books on the US App Store) and Wasabi (4.7★ from
						10,000+ ratings). Before that I built B2B SaaS for
						field-service and sawmill companies. I like small teams,
						real users and shipping fast.
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
