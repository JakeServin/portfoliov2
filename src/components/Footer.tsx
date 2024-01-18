import { SOCIALS } from '@/common/constants';
import Image from 'next/image';
import React from 'react'

const Footer = () => {
  return (
		<footer className="bg-gray-50 flex justify-center py-3 gap-4">
			{SOCIALS.map((social, index) => (
				<a href={social.href} target="_blank" key={index}>
					<Image
						src={social.src}
						alt={social.alt}
						width={25}
            height={25}
            className='text-primary fill-gray-50'
					/>
				</a>
			))}
		</footer>
  );
}

export default Footer