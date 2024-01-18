'use client'
import React, { useEffect, useRef } from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '@/common/constants';
import { useStore } from '@/store';

const Projects = () => {

  const projectsRef = useRef<null | HTMLElement>(null);
  const { setRef } = useStore();

  useEffect(() => {
		setRef("projectsRef", projectsRef);
  }, []);

  return (
		<section ref={projectsRef} id="projects" className="bg-secondary">
			<div className="pb-10">
				<h2 className="font-bold text-2xl text-center pt-10 pb-5">
					&lt;<span className="text-primary">Projects </span>/&gt;
				</h2>

				<div className="mb-5 px-5 sm:px-16 flex justify-center">
					<div className="hidden sm:inline-block rounded-2xl px-0 bg-gray-50 shadow-2xl container  xl:-w-4/6">
						<Carousel className="w-full z-0">
							<CarouselContent className="base-1/2 items-center w-full">
								{PROJECTS.map((project) => (
									<CarouselItem className="w-full">
										<ProjectCard
											key={project.title}
											{...project}
										/>
									</CarouselItem>
								))}
							</CarouselContent>
							<CarouselPrevious />
							<CarouselNext />
						</Carousel>
					</div>
          <div className="sm:hidden">
            {PROJECTS.map((project) => (
              <ProjectCard
                key={project.title}
                {...project}
              />
            ))}
          </div>
				</div>
			</div>
		</section>
  );
}

export default Projects