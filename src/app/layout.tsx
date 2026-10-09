import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { roboto, montserrat } from "@/common/fonts";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
	title: "Jake Servin | Senior Software Engineer",
	description: "Jake Servin: senior full-stack and iOS engineer. Primary engineer behind Simmy and Wasabi.",
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
				<Toaster />
			</body>
		</html>
	);
}
