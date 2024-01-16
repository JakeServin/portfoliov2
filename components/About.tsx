import Image from "next/image";
import React from "react";

const About = () => {
	return (
		<section id="about" className="bg-pale-blue padding">
			<div className="flex flex-col md:flex-row justify-center md:justify items-center px-2">
				<div className="w-[400px] h-[400px] rounded-full overflow-hidden flex justify-center items-center">
          <img
            src="/avatar.png"
            alt="avatar"
            className="object-cover rounded-full"
          />
				</div>

				<div className="mt-4 md:ml-10">
					<h2 className="font-palanquin text-2xl font-bold leading-normal">
						A
						<span className="text-coral-red">
							{" "}
							Software Engineer{" "}
						</span>
					</h2>
					<p className="info-text mt-3">
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
