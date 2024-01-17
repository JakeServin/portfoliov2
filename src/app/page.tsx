import About from '@/components/About'
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import Nav from '@/components/Nav'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="scroll-smooth">
			<Hero />
			<About />
			<Skills />
			<Projects />
			<Contact />
		</main>
  );
}
