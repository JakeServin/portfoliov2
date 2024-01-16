/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			keyframes: {
				wave: {
					"0%, 40%, 100%": { transform: "rotate(10deg)" },
					"15%": { transform: "rotate(-5deg)" },
				},
			},
			animation: {
				wave: "2s wave 1.2s ease-in-out infinite",
			},
			fontFamily: {
				palanquin: ["Palanquin", "sans-serif"],
				montserrat: ["Montserrat", "sans-serif"],
			},
			colors: {
				"coral-red": "#FF6452",
				"slate-gray": "#6D6D6D",
				"pale-blue": "#F5F6FF",
				"white-400": "rgba(255, 255, 255, 0.80)",
				green: {
					50: "#30AF5B",
					90: "#292C27",
				},
				gray: {
					10: "#EEEEEE",
					20: "#A2A2A2",
					30: "#7B7B7B",
					50: "#585858",
					90: "#141414",
				},
				orange: {
					50: "#FF814C",
				},
				blue: {
					70: "#021639",
				},
				yellow: {
					50: "#FEC601",
				},
			},
			backgroundImage: {
				"pattern-2": "url('/hero_bg.png')",
			},
		},
	},
	plugins: [],
};
