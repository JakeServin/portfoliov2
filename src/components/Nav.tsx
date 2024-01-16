import React from 'react'
import { montserrat, roboto } from '@/common/fonts'
import { NAV_LINKS } from '@/common/constants'

const Nav = () => {
  return (
    <nav className={`flex justify-center py-5 ${montserrat.className} sticky`}>
      <ul className='flex justify-around gap-12 border-2 border-gray-50 rounded-full px-6 py-2 shadow-md'>
        {NAV_LINKS.map((link) => (
          <li key={link.name} className='hover:text-primary text-gray-400 font-bold transition-all duration-200 cursor-pointer'>{link.name}</li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav