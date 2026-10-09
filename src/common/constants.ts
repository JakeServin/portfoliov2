export const NAV_LINKS = [
	{
		name: "Home",
		href: "#home",
		icon: "/home.svg",
	},
	{
		name: "About",
		href: "#about",
		icon: "/about.svg",
	},
	{
		name: "Skills",
		href: "#skills",
		icon: "/skills.svg",
	},
	{
		name: "Projects",
		href: "#projects",
		icon: "/projects.svg",
	},
	{
		name: "Contact",
		href: "#contact",
		icon: "/mail.svg",
	},
];

export const SKILLS = [
	{
		name: "TypeScript",
		src: "/typescript.svg",
	},
	{
		name: "JavaScript",
		src: "/javascript.svg",
	},
	{
		name: "Node.js",
		src: "/node.svg",
	},
	{
		name: "express",
		src: "/express.svg",
	},
	{
		name: "postgreSQL",
		src: "/postgres.svg",
	},
	{
		name: "Prisma",
		src: "/prisma.svg",
	},
	{
		name: "Redis",
		src: "/redis.svg",
	},
	{
		name: "Swift",
		src: "/swift.svg",
	},
	{
		name: "React",
		src: "/react.svg",
	},
	{
		name: "Next.js",
		src: "/nextjs.svg",
	},
	{
		name: "TailwindCSS",
		src: "/tailwind.svg",
	},
	{
		name: "Docker",
		src: "/docker.svg",
	},
	{
		name: "Claude",
		src: "/anthropic.svg",
	},
	{
		name: "OpenAI",
		src: "/openai.svg",
	},
	{
		name: "Firebase",
		src: "/firebase.svg",
	},
	{
		name: "mongoDB",
		src: "/mongodb.svg",
	},
	{
		name: "Git",
		src: "/git.svg",
	},
	{
		name: "Github",
		src: "/github.svg",
	},
];

export const PROJECTS = [
	{
		basis: "1/2",
		imageUrl: "/simmy_screenshot.jpg",
		portrait: true,
		title: "Simmy",
		stackIcons: ["/typescript.svg", "/node.svg", "/postgres.svg", "/prisma.svg", "/redis.svg", "/swift.svg", "/react.svg", "/anthropic.svg", "/openai.svg"],
		stack: "TypeScript | Node.js | Express | Prisma | PostgreSQL | Redis | BullMQ | AWS | Swift | React 19 | Claude | Gemini | OpenAI",
		description: `AI interactive fiction for iOS and the web. You describe a world, and Simmy turns it into an episodic, choice-driven story with AI-generated chat, photos, video and narration. Rated 4.8★ on the App Store and reached #3 in Books in the US.

What I built (Aug 2025 – now):
• Most of the TypeScript/Prisma API, with 1,700+ automated tests
• The multi-provider LLM and generative-media pipelines
• The in-app economy and App Store subscriptions
• Simmy Web: a full React port of the iOS game, built solo in 12 days`,
		appStoreUrl: "https://apps.apple.com/us/app/id6749724489",
		demoUrl: "https://play.simmy.gg",
	},
	{
		basis: "1/2",
		imageUrl: "/wasabi_screenshot.jpg",
		portrait: true,
		title: "Wasabi",
		stackIcons: ["/typescript.svg", "/node.svg", "/redis.svg", "/postgres.svg", "/swift.svg", "/nextjs.svg", "/anthropic.svg"],
		stack: "TypeScript | Socket.IO | Redis | BullMQ | PostgreSQL | Swift | Next.js | Claude | ElevenLabs | LiveKit | Stripe",
		description: `A multiplayer party game with an AI host that writes the prompts, judges the answers and runs the room out loud. Rated 4.7★ from 10,000+ App Store ratings and in the Top 100 Board & Card games.

What I built (Oct 2024 – Aug 2025):
• The real-time multiplayer engine: lobbies, PIN join, voting, reconnects and bot players
• The AI game layer and live voice host
• Monetization across iOS and web, and the browser client`,
		appStoreUrl: "https://apps.apple.com/us/app/id6737428756",
	},
	{
		basis: "1/2",
		imageUrl: "/calmversation_screenshot1.png",
		title: "Calmversation",
		stackIcons: ["/typescript.svg", "/react.svg", "/nextjs.svg", "/node.svg", "/openai.svg"],
		stack: "TypeScript | React | Next.js | Zustand | Node.js | Express.js | Supabase | OpenAI API",
		description:
			"A side project: a reflective AI chat app for conversation and personal growth, with an interface built for calm, thoughtful exchanges.",
		demoUrl: "https://calmversation.vercel.app/",
		repoUrl: "https://github.com/JakeServin/calmversation",
	},
];

export const SOCIALS = [
	{
		src: "/github_mono.svg",
		alt: "github",
		href: "https://github.com/JakeServin",
	},
	{
		src: "/linkedin.svg",
		alt: "linkedin",
		href: "https://www.linkedin.com/in/jakeservin/",
	},
	{
		src: "/mail.svg",
		alt: "email",
		href: "mailto:jakeservin@gmail.com",
	},
	{
		src: "/doc.svg",
		alt: "resume",
		href: "/Jake_Servin_Resume.pdf",
	},
];
