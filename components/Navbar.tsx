import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import React from "react";
import Button from "./Button";
import Image from "next/image";

const Navbar = () => {
	return (
		<nav className="flex justify-end items-center max-container padding-x relative py-5">
			<ul className="hidden h-full gap-16 lg:flex flex-1 justify-center">
				{NAV_LINKS.map((link) => (
					<Link
						href={link.href}
						key={link.key}
						className="font-montserrat leading-normal text-lg text-slate-gray"
					>
						{link.label}
					</Link>
				))}
			</ul>

			<Image
				src="menu.svg"
				alt="menu"
				width={32}
				height={32}
				className="justify-self-end inline-block cursor-pointer lg:hidden"
			></Image>
		</nav>
	);
};

export default Navbar;
