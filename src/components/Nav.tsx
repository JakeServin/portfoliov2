import React from 'react'
import { montserrat, roboto } from '@/common/fonts'
import { NAV_LINKS } from '@/constants'

const Nav = () => {
  return (
    <nav className={`flex justify-center py-3 text-lg ${montserrat.className}`}>
      <ul className='flex justify-around gap-10'>
        {NAV_LINKS.map((link) => (
          <li key={link.name} className='hover:text-primary text-gray-500 transition-all duration-200 cursor-pointer'>{link.name}</li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav