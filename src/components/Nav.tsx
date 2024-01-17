import React from 'react'
import { montserrat, roboto } from '@/common/fonts'
import { NAV_LINKS } from '@/common/constants'

const Nav = () => {
  return (
    <nav className={`flex w-full justify-center pt-3 ${montserrat.className} sticky top-0`}>
      <ul className='flex justify-between w-full sm:w-auto sm:gap-2 border-2 border-gray-50 rounded-full mx-2 px-6 py-2 shadow-md bg-white opacity-95'>
        {NAV_LINKS.map((link) => (
          <li key={link.name} className='group text-gray-400 font-bold transition-all duration-200 cursor-pointer'>
            <span className='text-slate-700 opacity-0 group-hover:opacity-100 transition-all duration-200'>&lt;</span>
            <a href={link.href} className='group-hover:text-primary'>
            {link.name}
            </a>
            <span className='text-slate-700 opacity-0 group-hover:opacity-100 transition-all duration-200'>&nbsp;/&gt;</span>
            
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav