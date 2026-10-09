import type { Metadata, Viewport } from "next";
import { Unbounded, Figtree, Silkscreen } from "next/font/google";
import "./globals.css";

const display = Unbounded({ subsets: ["latin"], weight: ["500", "700", "900"], variable: "--font-display" });
const body = Figtree({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-body" });
const pixel = Silkscreen({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-pixel" });

export const metadata: Metadata = {
	title: "Jake Servin · Senior Web & iOS Engineer",
	description:
		"I build games people can't put down and tools that make life easier. Senior web and iOS engineer behind Simmy and Wasabi.",
	openGraph: {
		title: "Jake Servin · Senior Web & iOS Engineer",
		description: "Games people can't put down. Tools that make life easier.",
		images: ["/simmy_screenshot.jpg"],
	},
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	viewportFit: "cover",
	themeColor: [
		{ media: "(prefers-color-scheme: dark)", color: "#131027" },
		{ media: "(prefers-color-scheme: light)", color: "#f6f1e7" },
	],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={`${display.variable} ${body.variable} ${pixel.variable}`}>
			<body>{children}</body>
		</html>
	);
}
