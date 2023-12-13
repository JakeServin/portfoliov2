import { NAV_LINKS } from '@/constants'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='border-2 border-green-500 flexCenter md:flexStart relative z-30 py-4 bg-zinc-700'>
        <ul className='flex padding-container gap-12 h-full lg:pl-12'>
              {NAV_LINKS.map((link) => (
                  <Link
                      href={link.href}
                      key={link.key}
                      className='regular-16 text-gray-200 cursor-pointer flexCenter transition:all hover:font-bold'
                  >
                      {link.label}
                  </Link>
            ))}
        </ul>
    </nav>
  )
}

export default Navbar