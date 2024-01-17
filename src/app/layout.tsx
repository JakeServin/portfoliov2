import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { roboto, montserrat } from "@/common/fonts";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
	title: "Jake Servin | Developer Portfolio",
	description: "Jake Servin's developer portfolio",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
    <html lang="en">
      
      <body className={montserrat.className}>
        <div id="home"/>
				<Nav />
				{children}
				<Footer />
			</body>
		</html>
	);
}
