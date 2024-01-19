"use client";
import React from "react";
import { CarouselItem } from "./ui/carousel";
import Image from "next/image";
import { Button } from "./ui/button";

interface ProjectCardProps {
	imageUrl: string;
	title: string;
  stackIcons: string[];
  portrait?: boolean;
	description: string;
	demoUrl?: string;
	repoUrl?: string;
	videoUrl?: string;
}

const ProjectCard = ({
	imageUrl,
	title,
  stackIcons,
  portrait,
	description,
	demoUrl,
  repoUrl,
  videoUrl
}: ProjectCardProps) => {
  return (
		<div
			className={`flex flex-col-reverse md:flex-row sm:ml-5 bg-gray-50 rounded-xl mb-5 sm:mb-0 shadow-2xl sm:shadow-none `}
		>
			{/* Left */}
			<div className="w-full md:w-4/5 px-5 pb-5 sm:p-6 flex flex-col justify-between">
				<div>
					<h2 className="text-4xl text-primary font-bold">{title}</h2>
					<div className=" sm:text-xl mt-2 whitespace-pre-wrap text-justify">
						{description}
					</div>
				</div>
				<div className="flex flex-col mt-4">
					<h3 className="text-accent mt-4 text-xl font-bold">
						Technologies
					</h3>
					<div className="flex flex-wrap gap-2">
						{stackIcons &&
							stackIcons.map((icon) => (
								<Image
									key={icon}
									src={icon}
									alt="icon"
									width={40}
									height={40}
								/>
							))}
					</div>
					<div className="flex flex-col md:flex-row gap-2 mt-4">
						{videoUrl && (
							<a href={videoUrl} target="_blank">
								<Button className="font-bold font-lg w-full">
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
											d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
										/>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
										/>
									</svg>
									Video Walkthrough
								</Button>
							</a>
						)}
						{demoUrl && (
							<a href={demoUrl} target="_blank">
								<Button className="font-bold font-lg w-full">
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
											d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
										/>
									</svg>
									Live Demo
								</Button>
							</a>
						)}
						{repoUrl && (
							<a href={repoUrl} target="_blank">
								<Button className="font-bold font-lg w-full">
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
											d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
										/>
									</svg>
									Github Repository
								</Button>
							</a>
						)}
					</div>
				</div>
			</div>
			{/* Right */}
			<div className="h-auto w-full md:w-auto object-cover rounded-xl flex justify-center items-center md:mr-5">
				<Image
					src={imageUrl}
					alt={title + ' image'}
					width={500}
					height={400}
					className={`${
						portrait ? "w-auto h-full " : "h-auto w-full "
					} md:w-auto object-cover p-5 ${
						portrait && " md:max-h-full"
					}`}
				/>
			</div>
		</div>
  );
};

export default ProjectCard;
