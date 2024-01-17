import Image from "next/image";
import React from "react";
import { roboto, openSans } from "@/common/fonts";

const About = () => {
	return (
		<section id="about" className="bg-secondary py-10 sm:py-20">
			<div className="container flex flex-col sm:flex-row items-center justify-center">
        {/* Avatar LEFT */}
        <div className="">
          <Image
            src="/profile.png"
            alt="Jake Servin profile image"
            width={350}
            height={350}
            className="rounded-full sm:mx-10 border-2 border-white"
          />

        </div>

				{/* About Text */}
				<div className="sm:w-1/2 mt-8">
					<div className="text-2xl font-medium">A <span className="text-primary">Software Engineer</span></div>
					<p className={`mt-2 ${openSans.className} text-pretty`}>
						with a passion for crafting exceptional web
						applications. My journey in full-stack development has
						honed my skills in planning, designing, and delivering
						dynamic solutions. I'm dedicated to staying on the
						cutting edge of current technologies, and I thrive in
						collaborative environments where we can build efficient,
						user-centric applications. Looking forward to
						contributing to your team's success.
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
