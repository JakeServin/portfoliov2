"use client"
import About from '@/components/About'
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import { useStore } from '@/store'
import { useEffect, useRef } from 'react'

export default function Home() {

	const homeRef = useRef<null | HTMLElement>(null);
	const { setRef } = useStore();

	useEffect(() => {
		setRef("homeRef", homeRef);
	}, []);

  return (
		<main className="scroll-smooth">
			<span ref={homeRef}/>
			<Hero />
			<div></div>
			<About />
			<Skills />
			<Projects />
			<Contact />
		</main>
  );
}
