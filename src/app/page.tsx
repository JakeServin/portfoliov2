"use client";
import { useEffect, useState } from "react";

const EMAIL = "jakeservin@gmail.com";
const RESUME = "/Jake_Servin_Resume.pdf";
const LINKEDIN = "https://www.linkedin.com/in/jakeservin/";
const GITHUB = "https://github.com/JakeServin";

type PlayerId = "recruiter" | "engineer" | "founder";

const PLAYERS: { id: PlayerId; sprite: string; name: string; mode: string; brief: { title: string; points: string[] } }[] = [
	{
		id: "recruiter",
		sprite: "»",
		name: "Recruiter",
		mode: "Speedrun: the 20-second version",
		brief: {
			title: "Senior web + iOS engineer. Four years of shipping, three consumer apps live.",
			points: [
				"Led the backend and built the web clients for Simmy (4.8★, #3 in Books on the US App Store) and Wasabi (4.7★ from 10,000+ ratings), and worked across the iOS apps.",
				"Owns features end to end: TypeScript/Node APIs, native Swift iOS, React web, and the AI layer.",
				"Shipped a full web port of an iOS game solo in 12 days.",
				"Based in Los Angeles: open to hybrid in LA or remote. Looking at senior web, iOS and full-stack roles.",
			],
		},
	},
	{
		id: "engineer",
		sprite: "{}",
		name: "Engineer",
		mode: "Deep dive: how I build",
		brief: {
			title: "Real-time systems, AI pipelines, and enough tests to sleep at night.",
			points: [
				"Real-time multiplayer on Socket.IO, Redis and BullMQ: lobbies, voting, reconnect recovery, and bot players that keep rooms alive.",
				"Multi-provider LLM and media generation (Claude, Gemini, OpenAI, Grok) with timeouts, fallbacks and automatic refunds when a job fails.",
				"I measure before I optimize: I instrumented every AI call so we could see what each feature actually costs, then moved the expensive ones.",
				"Postgres and Prisma APIs with 1,700+ automated tests, deployed on AWS. The web port alone has about 1,400 tests.",
			],
		},
	},
	{
		id: "founder",
		sprite: "+",
		name: "Founder",
		mode: "Co-op: what I'd do on your team",
		brief: {
			title: "Give me a fuzzy idea and a small team. I'll come back with something people use.",
			points: [
				"Take a feature from schema to App Store build without a hand-off.",
				"Plan big work in shippable phases. Simmy Web went from empty repo to payments and analytics in 12 days.",
				"Build the money loop: subscriptions, in-app economies, paywalls and web checkout.",
				"Keep an eye on cost and risk: I run security reviews of my own APIs and track what the AI spend buys.",
			],
		},
	},
];

const CARTS = [
	{
		key: "simmy",
		name: "Simmy",
		when: "Aug 2025 – now · iOS + web",
		icon: "/simmy_icon.jpg",
		shot: "/simmy_screenshot.jpg",
		shotAlt: "Simmy on the App Store: a story prompt turned into a generated scene",
		genre: "AI interactive fiction. You describe a world, and Simmy turns it into an episodic, choice-driven story with generated chat, photos, video and narration.",
		badges: [["4.8★", "5K+ ratings"], ["#3", "Books, US App Store"]],
		built: [
			"Most of the TypeScript/Prisma API: game engine, stories, characters and the in-app economy.",
			"The multi-provider LLM and generative-media pipelines, with timeouts, fallbacks and automatic refunds.",
			"Simmy Web: a full React 19 port of the iOS game, built solo in 12 days with Stripe checkout and analytics parity.",
			"App Store subscriptions, push and Live Activities, and a lot of the native Swift app.",
		],
		stack: "TypeScript · Node · Prisma · Postgres · Redis · BullMQ · AWS · Swift · React 19 · Claude · Gemini · OpenAI · Grok",
		links: [["App Store", "https://apps.apple.com/us/app/id6749724489"], ["Play on web", "https://play.simmy.gg"]],
	},
	{
		key: "wasabi",
		name: "Wasabi",
		when: "Oct 2024 – Aug 2025 · iOS + web",
		icon: "/wasabi_icon.jpg",
		shot: "/wasabi_screenshot.jpg",
		shotAlt: "Wasabi on the App Store: a Cards Against You round with friends",
		genre: "A party game for your group chat, with an AI host that writes the prompts, judges the answers and runs the room out loud.",
		badges: [["4.7★", "10K+ ratings"], ["Top 100", "Board & Card"]],
		built: [
			"The real-time multiplayer engine: lobbies, PIN join, ready-up, voting and disconnect recovery.",
			"Bot players with human-like timing, so a public room is never empty.",
			"The AI game layer: personalized prompts and AI judging of text, photo and audio answers.",
			"Monetization across iOS and web, and the browser client friends join with a PIN.",
		],
		stack: "TypeScript · Socket.IO · Redis · BullMQ · Postgres · Swift · Next.js · Claude · ElevenLabs · LiveKit · Stripe",
		links: [["App Store", "https://apps.apple.com/us/app/id6737428756"]],
	},
	{
		key: "taptap",
		name: "TapTap Live",
		when: "Feb – Oct 2024 · iOS",
		icon: null,
		shot: null,
		shotAlt: "",
		genre: "Live cash-prize trivia for college campuses, with scheduled games, 1v1 challenges and daily puzzles.",
		badges: [["Live", "cash-prize games"], ["1v1", "challenges"], ["Daily", "puzzles"]],
		built: [
			"1v1 challenges and instant matchmaking.",
			"Daily puzzle games with Apple Music and LLM-generated questions.",
			"Coins, XP, streaks and leaderboards across the API, the live-game server and the iOS app.",
			"The friends graph behind the lobby, leaderboards and friend finder.",
		],
		stack: "TypeScript · Socket.IO · Redis · BullMQ · Postgres · Swift",
		links: [],
	},
] as const;

const TOOLS = [
	{
		who: "EnspireMedia · sawmills",
		name: "TimberTrack",
		what: "Contracts, pricing tables, log and lumber tickets, inventory reconciliation and signed PDF reports for timber companies. I built most of the front end.",
		saves: "Paper tickets and spreadsheets → one live dashboard.",
	},
	{
		who: "EnspireMedia · field service",
		name: "MobileTrack Dispatch",
		what: "Quotes, change orders, invoices and payments, with map-based scheduling. I designed and built its two-way QuickBooks Online sync.",
		saves: "No more double-entry between dispatch and the books.",
	},
	{
		who: "Maestro · internal",
		name: "AI cost recorder",
		what: "Instrumentation at the single point every model call passes through, plus per-session cost breakdowns the whole team could read.",
		saves: "\"What does this feature cost?\" now has an answer.",
	},
	{
		who: "Side project",
		name: "Calmversation",
		what: "A reflective AI chat app built for slower, more thoughtful conversations. Next.js, Supabase and the OpenAI API.",
		saves: "A quieter corner of the internet.",
		link: "https://calmversation.vercel.app/",
	},
];

const STATS = [
	{ name: "Web", sub: "React, Next.js, Vite, Tailwind", lvl: 9, yrs: "4 yrs" },
	{ name: "iOS", sub: "Swift, UIKit, StoreKit, Live Activities", lvl: 8, yrs: "2.5 yrs" },
	{ name: "Backend", sub: "TypeScript, Node, Prisma, Postgres", lvl: 9, yrs: "2.7 yrs" },
	{ name: "Real-time", sub: "Socket.IO, Redis, BullMQ", lvl: 8, yrs: "2.5 yrs" },
	{ name: "AI & LLMs", sub: "Claude, Gemini, OpenAI, Grok", lvl: 8, yrs: "2.3 yrs" },
	{ name: "Payments", sub: "App Store, RevenueCat, Stripe", lvl: 8, yrs: "2.3 yrs" },
	{ name: "Infra", sub: "AWS, Docker, GitHub Actions", lvl: 6, yrs: "2.5 yrs" },
];

const QUESTS = [
	{ when: "Aug 2025", title: "Simmy", text: "AI interactive fiction for iOS and the web. Reached #3 in Books on the US App Store.", c: "var(--simmy)", now: true },
	{ when: "Oct 2024", title: "Wasabi", text: "Real-time party games with an AI host. 4.7★ from 10,000+ ratings.", c: "var(--wasabi)" },
	{ when: "Feb 2024", title: "Joined Maestro · TapTap Live", text: "Live trivia for college campuses. Started on the API and the game server, then moved into iOS.", c: "var(--taptap)" },
	{ when: "Oct 2022", title: "EnspireMedia", text: "Full-stack developer on five B2B products for sawmills and field-service companies.", c: "var(--tools)" },
	{ when: "2022", title: "Press start", text: "Learned full-stack development and went straight into my first engineering job.", c: "var(--gold)" },
];

const ACHIEVEMENTS = [
	{ icon: "#3", title: "Top of the charts", text: "Simmy: #3 in Books, US App Store" },
	{ icon: "★", title: "Crowd favorite", text: "15,000+ App Store ratings at 4.7–4.8★" },
	{ icon: "4P", title: "Full lobby", text: "Real-time multiplayer with bots, so no room sits empty" },
	{ icon: "✓", title: "Test pilot", text: "1,700+ API tests and ~1,400 on the web port" },
	{ icon: "AI", title: "Model wrangler", text: "Four AI providers in production, routed by cost and quality" },
	{ icon: "◎", title: "White hat", text: "Runs security reviews and fixes what turns up" },
	{ icon: "3", title: "Hat trick", text: "Three consumer apps shipped in under three years" },
	{ icon: "?", title: "Next: your team", text: "Locked. Unlocks when we talk.", locked: true },
];

const KONAMI = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];

export default function Home() {
	const [player, setPlayer] = useState<PlayerId>("recruiter");
	const [progress, setProgress] = useState(0);
	const [copied, setCopied] = useState(false);
	const [cheat, setCheat] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			const max = document.documentElement.scrollHeight - window.innerHeight;
			setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", onScroll);
		return () => {
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", onScroll);
		};
	}, []);

	useEffect(() => {
		let i = 0;
		const onKey = (e: KeyboardEvent) => {
			const k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
			i = k === KONAMI[i] ? i + 1 : k === KONAMI[0] ? 1 : 0;
			if (i === KONAMI.length) {
				i = 0;
				setCheat(true);
				window.setTimeout(() => setCheat(false), 6000);
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);

	const copyEmail = async () => {
		try {
			await navigator.clipboard.writeText(EMAIL);
			setCopied(true);
			window.setTimeout(() => setCopied(false), 2000);
		} catch {
			/* the address stays selectable as a fallback */
		}
	};

	const active = PLAYERS.find((p) => p.id === player)!;
	const xp = Math.round(progress * 100);

	return (
		<>
			<header className="hud">
				<div className="wrap hud-row">
					<a className="hud-id" href="#top">
						<img src="/profile.png" alt="" width={30} height={30} />
						<span>
							<b>Jake Servin</b>
							<br />
							<span className="px">Lvl 4 · Web + iOS</span>
						</span>
					</a>
					<nav className="px" aria-label="Sections">
						<a href="#levels">Levels</a>
						<a href="#tools">Tools</a>
						<a href="#sheet">Stats</a>
						<a href="#quests">Quest log</a>
						<a href="#start">Contact</a>
					</nav>
				</div>
				<div className="xp" role="progressbar" aria-label="Page progress" aria-valuemin={0} aria-valuemax={100} aria-valuenow={xp}>
					<i style={{ ["--p" as string]: progress } as React.CSSProperties} />
				</div>
				<span className="xp-label px" aria-hidden="true">XP {xp}%</span>
			</header>

			<main id="top">
				<section className="wrap hero">
					<p className="hero-eyebrow px">
						<span className="blink" aria-hidden="true" /> Senior web &amp; iOS engineer · Los Angeles · Hybrid or remote
					</p>
					<h1>
						I build <span className="g">games</span> people can&apos;t put down and <span className="t">tools</span> that make life easier.
					</h1>
					<p className="lede">
						Four years of shipping, end to end: the API, the iOS app, the web client and the AI underneath. Most recently I&apos;ve
						been a core engineer behind Simmy and Wasabi, two AI games with a combined 15,000+ App Store ratings: I led the backend and built the web apps.
					</p>

					<div className="select">
						<p className="select-title px" id="select-title">Choose your player</p>
						<div className="players" role="group" aria-labelledby="select-title">
							{PLAYERS.map((p) => (
								<button key={p.id} className="player" aria-pressed={player === p.id} onClick={() => setPlayer(p.id)}>
									<span className="sprite px" aria-hidden="true">{p.sprite}</span>
									<b>
										{p.name}
										<span className="p1 px">P1</span>
									</b>
									<small>{p.mode}</small>
								</button>
							))}
						</div>
						<div className="brief" aria-live="polite">
							<h2>{active.brief.title}</h2>
							<ul>
								{active.brief.points.map((pt) => (
									<li key={pt}>{pt}</li>
								))}
							</ul>
							<div className="actions">
								<a className="btn go" href={RESUME}>Resume (PDF)</a>
								<a className="btn" href="#start">Get in touch</a>
								<a className="btn" href="#levels">See the work</a>
							</div>
						</div>
					</div>
				</section>

				<section className="wrap block" id="levels" aria-labelledby="levels-h">
					<div className="head">
						<div>
							<span className="tag px">World 1 · Shipped</span>
							<h2 id="levels-h">Games people play</h2>
						</div>
						<p>Three consumer apps, each built with a small team and shipped to the App Store.</p>
					</div>
					<div className="carts">
						{CARTS.map((c) => (
							<article key={c.key} className={`cart ${c.key}`}>
								{c.shot ? (
									<div className="screen">
										<img src={c.shot} alt={c.shotAlt} width={600} height={1300} loading="lazy" />
									</div>
								) : (
									<div className="screen retired" aria-hidden="true">
										<b>{c.name}</b>
										<span className="px">Game over · retired 2024</span>
									</div>
								)}
								<div>
									<div className="cart-top">
										{c.icon && <img src={c.icon} alt="" width={56} height={56} />}
										<div>
											<h3>{c.name}</h3>
											<span className="when px">{c.when}</span>
										</div>
									</div>
									<p className="genre">{c.genre}</p>
									<ul className="badges px">
										{c.badges.map(([a, b]) => (
											<li key={b}>
												<b>{a}</b> {b}
											</li>
										))}
									</ul>
									<ul className="built">
										{c.built.map((b) => (
											<li key={b}>{b}</li>
										))}
									</ul>
									<p className="stack px">{c.stack}</p>
									{c.links.length > 0 && (
										<div className="actions">
											{c.links.map(([label, href], i) => (
												<a key={href} className={`btn${i === 0 ? " go" : ""}`} href={href} target="_blank" rel="noopener noreferrer">
													{label} ↗
												</a>
											))}
										</div>
									)}
								</div>
							</article>
						))}
					</div>
				</section>

				<section className="wrap block" id="tools" aria-labelledby="tools-h">
					<div className="head">
						<div>
							<span className="tag px">World 2 · Quality of life</span>
							<h2 id="tools-h">Tools that make life easier</h2>
						</div>
						<p>Not everything needs a leaderboard. Some of my favorite work just removes a chore.</p>
					</div>
					<div className="tools">
						{TOOLS.map((t) => (
							<article key={t.name} className="tool">
								<span className="who px">{t.who}</span>
								<h3>{t.name}</h3>
								<p>{t.what}</p>
								<div className="saves">
									<b className="px">Saves:</b> {t.saves}
									{"link" in t && t.link && (
										<>
											{" "}
											<a href={t.link} target="_blank" rel="noopener noreferrer">Try it ↗</a>
										</>
									)}
								</div>
							</article>
						))}
					</div>
				</section>

				<section className="wrap block" id="sheet" aria-labelledby="sheet-h">
					<div className="head">
						<div>
							<span className="tag px">Character sheet</span>
							<h2 id="sheet-h">Stats &amp; perks</h2>
						</div>
					</div>
					<div className="sheet">
						<div className="card who-card">
							<img className="avatar" src="/profile.png" alt="Jake Servin" width={112} height={112} />
							<h3>Jake Servin</h3>
							<span className="cls px">Class: Full-stack builder</span>
							<dl>
								<dt className="px">Level</dt>
								<dd>4 years shipping</dd>
								<dt className="px">Base</dt>
								<dd>Los Angeles · hybrid or remote</dd>
								<dt className="px">Party</dt>
								<dd>Small teams, big scope</dd>
							</dl>
							<div className="perks">
								<div className="perk"><b>Perk · Solo queue</b>Can carry a whole feature, schema to App Store.</div>
								<div className="perk"><b>Perk · Measure first</b>Instruments before optimizing.</div>
								<div className="perk"><b>Perk · Product sense</b>Builds for the player, not the spec.</div>
							</div>
						</div>
						<div className="card stats">
							{STATS.map((s) => (
								<div key={s.name} className="stat-row">
									<div className="name">
										{s.name}
										<small>{s.sub}</small>
									</div>
									<div className="bar" role="img" aria-label={`${s.name}: ${s.lvl} out of 10`}>
										{Array.from({ length: 10 }, (_, i) => (
											<i key={i} className={i < s.lvl ? "on" : ""} />
										))}
									</div>
									<span className="yrs px">{s.yrs}</span>
								</div>
							))}
						</div>
					</div>
				</section>

				<section className="wrap block" id="quests" aria-labelledby="quests-h">
					<div className="head">
						<div>
							<span className="tag px">Quest log</span>
							<h2 id="quests-h">How I got here</h2>
						</div>
					</div>
					<ol className="quests">
						{QUESTS.map((q) => (
							<li key={q.title} className={`quest${q.now ? " now" : ""}`} style={{ ["--qc" as string]: q.c } as React.CSSProperties}>
								<span className="dot" aria-hidden="true" />
								<div>
									<span className="when px">{q.when}</span>
									<h3>{q.title}</h3>
									<p>{q.text}</p>
								</div>
							</li>
						))}
					</ol>
				</section>

				<section className="wrap block" aria-labelledby="ach-h">
					<div className="head">
						<div>
							<span className="tag px">Achievements</span>
							<h2 id="ach-h">Unlocked so far</h2>
						</div>
					</div>
					<div className="achievements">
						{ACHIEVEMENTS.map((a) => (
							<div key={a.title} className={`ach${a.locked ? " locked" : ""}`}>
								<span className="icon px" aria-hidden="true">{a.icon}</span>
								<div>
									<b>{a.title}</b>
									<small>{a.text}</small>
								</div>
							</div>
						))}
					</div>
				</section>

				<section className="wrap start" id="start" aria-labelledby="start-h">
					<span className="tag px">Insert coin</span>
					<h2 id="start-h">
						Press <span>start</span>.
					</h2>
					<p>I&apos;m looking at senior web, iOS and full-stack roles. If you&apos;re building something people play or rely on, let&apos;s talk.</p>
					<div className="mail">
						<code>{EMAIL}</code>
						<button className="btn go" onClick={copyEmail} type="button">
							{copied ? "Copied" : "Copy email"}
						</button>
					</div>
					<div className="actions">
						<a className="btn" href={`mailto:${EMAIL}`}>Email me</a>
						<a className="btn" href={LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
						<a className="btn" href={GITHUB} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
						<a className="btn" href={RESUME}>Resume (PDF)</a>
					</div>
				</section>
			</main>

			<footer>
				<div className="wrap px">
					<span>© 2026 Jake Servin</span>
					<span>Psst: ↑ ↑ ↓ ↓ ← → ← → B A</span>
				</div>
			</footer>

			{cheat && (
				<div className="cheat px" role="status">
					Cheat code accepted: +30 lives. Also, Jake is open to senior roles.
				</div>
			)}
		</>
	);
}
