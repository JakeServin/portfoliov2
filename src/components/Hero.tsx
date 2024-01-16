'use client'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { Button } from './ui/button'
import Typed from 'typed.js'

const Hero = () => {

  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['Full-Stack Developer', 'Front-End Developer', 'Back-End Developer', 'React Developer'],
      typeSpeed: 60,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, [])
  
  return (
    <section className='container flex items-center justify-center'>

      {/* Left */}
      <div className='w-1/3'>
        <div className='font-bold text-4xl sm:text-5xl'>Hi, I'm Jake!</div>
        <div className='mt-4 text-3xl'>I'm a <span className='text-accent' ref={typedRef} /></div>
        <div className='mt-4'>
          <Button className='rounded-full shadow'>Get in touch</Button>
        </div>
      </div>

      {/* Right */}
      <div className=''>
        <Image
          src='/hero_bg.png'
          alt='Hero'
          width={500}
          height={500}
        />
      </div>
    </section>
  )
}

export default Hero