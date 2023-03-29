import React, { useState } from "react";
import {
	Deck,
	Slide,
	Text,
	SlideLayout,
	Heading,
	Box,
	FlexBox,
	UnorderedList,
	ListItem,
	Appear,
	CodePane,
} from "spectacle";

import { AnimatePresence, motion, MotionConfig } from "framer-motion";

function App() {
	return (
		<Deck
			theme={{
				colors: {
					primary: "white",
					secondary: "#34d399",
					tertiary: "#1c1917",
				},
			}}
			transition={{
				from: {
					opacity: 1,
				},
				enter: {
					opacity: 1,
				},
				leave: {
					opacity: 1,
				},
			}}
			backgroundImage={`url("/bg.svg")`}
			template={() => (
				<div className="fixed bottom-1 right-3">
					<p className="text-white/30 font-semibold">React Chicago</p>
				</div>
			)}
		>
			<SlideLayout.Center>
				<Heading className="leading-none">
					Building animated mobile navbars w/framer-motion and TailwindCSS
				</Heading>
				<Text textAlign="center">By Shaun Chander</Text>
			</SlideLayout.Center>
			<Slide>
				<Heading>👋 Hey I'm Shaun Chander</Heading>
				<div className="flex flex-1 overflow-hidden gap-x-10">
					<div className="flex-1">
						<img src="/me.webp" alt="Shaun Chander" className="w-full" />
					</div>
					<div className="flex-1">
						<UnorderedList>
							<ListItem>💼 (ex) Engineer @ Milk Road</ListItem>
							<ListItem>🎉 First conference talk</ListItem>
							<ListItem>✍️ I blog on shaunchander.me</ListItem>
						</UnorderedList>
					</div>
				</div>
			</Slide>
			<Slide>
				<Heading className="leading-none">Breakdown</Heading>
				<Box>
					<UnorderedList>
						<ListItem>🤔 Why we care about animations</ListItem>
						<ListItem>📦 "Move a box" with framer-motion</ListItem>
						<ListItem>🚧 Build an animated mobile navbar</ListItem>
					</UnorderedList>
				</Box>
			</Slide>
			<Slide>
				<Heading className="leading-none">Why we care about animations</Heading>
				<div className="flex flex-1 gap-x-10">
					<div className="flex-1">
						<UnorderedList>
							<ListItem>Grab's the users attention</ListItem>
							<ListItem>Prevents a "content flashbang" 💥</ListItem>
							<ListItem>
								Easy way to brighten up and add flair to designs
							</ListItem>
						</UnorderedList>
					</div>
					<Background className="items-center justify-center">
						<motion.div
							transition={{
								duration: 2,
								repeat: Infinity,
								repeatType: "reverse",
								repeatDelay: 0.25,
							}}
							animate={{
								borderRadius: ["100%", "0%"],
								rotate: [0, 180],
								scale: [0.5, 2],
							}}
							className="w-32 h-32 bg-emerald-400 rounded-full"
						></motion.div>
					</Background>
				</div>
			</Slide>
			<Slide>
				<Heading>What is framer-motion</Heading>
				<UnorderedList>
					<ListItem>
						React-based animation library unlike GSAP/Anime.js
					</ListItem>
					<ListItem>Now has multiple utilities and features</ListItem>
					<ListItem>Similar to the Motion One project</ListItem>
					<ListItem>
						It is <strong>NOT</strong> Framer
					</ListItem>
				</UnorderedList>
			</Slide>
			<ContentFlashbangSlide />
			<Slide>
				<Heading>Move a box with framer-motion</Heading>
				<CodePane language="jsx">
					{`import {motion} from "framer-motion"`}
				</CodePane>
			</Slide>
			<Slide>
				<Heading>Move a box with framer-motion</Heading>
				<div className="flex gap-x-10 flex-1">
					<div className="flex-1">
						<CodePane language="jsx">
							{`import {motion} from "framer-motion"

<motion.div className="w-32 h-32 bg-emerald-400" />`}
						</CodePane>
					</div>
					<Background className="items-center p-6">
						<motion.div className="w-32 h-32 bg-emerald-400" />
					</Background>
				</div>
			</Slide>
			<Slide>
				<Heading>Move a box with framer-motion</Heading>
				<div className="flex gap-x-10 flex-1">
					<div className="flex-1">
						<CodePane language="jsx">
							{`import {motion} from "framer-motion"

<motion.div
	className="w-32 h-32 bg-emerald-400"
	animate={{ x: "450px" }}
/>`}
						</CodePane>
					</div>
					<Background className="items-center p-6">
						<motion.div
							className="w-32 h-32 bg-emerald-400"
							whileInView={{ x: "450px" }}
						/>
					</Background>
				</div>
			</Slide>
			<Slide>
				<Heading>Move a box with framer-motion</Heading>
				<div className="flex gap-x-10 flex-1">
					<div className="flex-1">
						<CodePane language="jsx">
							{`import {motion} from "framer-motion"

<motion.div
	className="w-32 h-32 bg-emerald-400"
	transition={{ delay: 1 }}
	animate={{ x: "450px" }}
/>`}
						</CodePane>
					</div>
					<Background className="items-center p-6">
						<motion.div
							className="w-32 h-32 bg-emerald-400"
							transition={{ delay: 1 }}
							whileInView={{ x: "450px" }}
						/>
					</Background>
				</div>
			</Slide>
			<Slide>
				<Heading>Move a box with framer-motion</Heading>
				<div className="flex gap-x-10 flex-1">
					<div className="flex-1">
						<CodePane language="jsx">
							{`import {motion} from "framer-motion"

<motion.div
	className="w-32 h-32 bg-emerald-400"
	variants={{
		right: { x: "450px" },
	}}
	transition={{ delay: 1 }}
	animate="right"
/>`}
						</CodePane>
					</div>
					<Background className="items-center p-6">
						<motion.div
							className="w-32 h-32 bg-emerald-400"
							variants={{
								right: { x: "450px" },
							}}
							transition={{ delay: 1 }}
							whileInView="right"
						/>
					</Background>
				</div>
			</Slide>
			<Slide>
				<Heading>Move a box with framer-motion</Heading>
				<div className="flex gap-x-10 flex-1">
					<div className="flex-1">
						<CodePane language="jsx">
							{`import {motion} from "framer-motion"

<motion.div
	className="w-32 h-32 bg-emerald-400"
	variants={{
		left: {x: "0px"}
		right: { x: "450px" },
	}}
	transition={{ delay: 1 }}
	animate="right"
/>`}
						</CodePane>
					</div>
					<Background className="items-center p-6">
						<motion.div
							className="w-32 h-32 bg-emerald-400"
							variants={{
								left: { x: "0px" },
								right: { x: "450px" },
							}}
							transition={{ delay: 1 }}
							whileInView="right"
						/>
					</Background>
				</div>
			</Slide>
			<Slide>
				<Heading>Move a box with framer-motion</Heading>
				<div className="flex gap-x-10 flex-1">
					<div className="flex-1">
						<CodePane language="jsx">
							{`import {motion} from "framer-motion"

<motion.div
	className="w-32 h-32 bg-emerald-400"
	variants={{
		left: {x: "0px"}
		right: { x: "450px" },
	}}
	
	initial="left"
	animate="left"
/>`}
						</CodePane>
					</div>
					<Background className="items-center p-6">
						<motion.div
							className="w-32 h-32 bg-emerald-400"
							variants={{
								left: { x: "0px" },
								right: { x: "450px" },
							}}
							transition={{ delay: 1 }}
							initial="left"
							whileInView="left"
						/>
					</Background>
				</div>
			</Slide>
			<MoveABoxComplicatedSlide />
			<SlideLayout.Statement>
				<Heading>Let's go build a navbar!</Heading>
			</SlideLayout.Statement>
			<Slide>
				<Heading>Thank you 😄</Heading>
				<UnorderedList>
					<ListItem>🌐 Find me at www.shaunchander.me</ListItem>
					<ListItem>🐦 Twitter: @shaunchander</ListItem>
					<ListItem>📹 YouTube: @shaunchander</ListItem>
					<ListItem>Psst... I'm available for an engineering role!</ListItem>
				</UnorderedList>
			</Slide>
		</Deck>
	);
}

function ContentFlashbangSlide() {
	const [siteA, setSiteA] = useState(false);
	const [siteB, setSiteB] = useState(false);

	return (
		<Slide>
			<Heading className="leading-none">Content Flashbang</Heading>
			<div className="flex flex-1 gap-x-10">
				<div className="flex-1">
					<Background>
						<div className="min-h-[400px] flex relative items-center p-6 w-full">
							<header className="absolute top-0 p-6 inset-x-0 bg-black/40">
								<button
									onClick={() => setSiteA(!siteA)}
									className="flex flex-col justify-center items-center space-y-1 relative z-10"
								>
									<span className="w-6 h-px bg-white inline-block"></span>
									<span className="w-6 h-px bg-white inline-block"></span>
									<span className="w-6 h-px bg-white inline-block"></span>
								</button>

								{siteA && (
									<div className="absolute w-1/3 top-0 inset-x-0 min-h-[400px] bg-blue-600 flex p-6 items-center">
										<div className="w-full space-y-10">
											<ul className="space-y-6 list-none">
												<li>
													<span className="font-semibold text-2xl">
														Link #1
													</span>
												</li>
												<li>
													<span className="font-semibold text-2xl">
														Link #2
													</span>
												</li>
												<li>
													<span className="font-semibold text-2xl">
														Link #3
													</span>
												</li>
											</ul>
											<div className="w-full h-px bg-white/30"></div>
											<ul className="list-none flex gap-x-3 justify-center">
												<li>
													<span className="w-8 h-8 bg-white/50 block"></span>
												</li>
												<li>
													<span className="w-8 h-8 bg-white/50 block"></span>
												</li>
												<li>
													<span className="w-8 h-8 bg-white/50 block"></span>
												</li>
											</ul>
										</div>
									</div>
								)}
							</header>
							<div className="space-y-6">
								<h1 className="text-4xl font-bold text-left">Site A</h1>
								<p>
									I'm using a regular useState hook to show and hide my navbar
									😔
								</p>
								<button className="p-4 rounded-lg bg-blue-600 text-sm font-semibold">
									Learn More
								</button>
							</div>
						</div>
					</Background>
					<Heading fontSize="h3">Site A</Heading>
				</div>
				<div className="flex-1">
					<Background className="items-center justify-center">
						<div className="min-h-[400px] flex relative items-center p-6 w-full">
							<header className="absolute top-0 p-6 inset-x-0 bg-black/40">
								<button
									onClick={() => setSiteB(!siteB)}
									className="flex flex-col justify-center items-center space-y-1 relative z-10"
								>
									<span className="w-6 h-px bg-white inline-block"></span>
									<span className="w-6 h-px bg-white inline-block"></span>
									<span className="w-6 h-px bg-white inline-block"></span>
								</button>
								<AnimatePresence>
									{siteB && (
										<MotionConfig
											transition={{
												type: "spring",
												damping: 25,
												stiffness: 175,
											}}
										>
											<motion.div
												key="navbar"
												variants={{
													hide: {
														x: "-100%",
														transition: {
															type: "spring",
															damping: 25,
															stiffness: 175,
															when: "afterChildren",
														},
													},
													show: {
														x: "0%",
														transition: {
															type: "spring",
															damping: 25,
															stiffness: 175,
															staggerChildren: 0.25,
															when: "beforeChildren",
														},
													},
												}}
												initial="hide"
												animate="show"
												exit="hide"
												className="absolute w-1/3 top-0 inset-x-0 min-h-[400px] bg-blue-600 flex p-6 items-center"
											>
												<div className="w-full space-y-10">
													<motion.ul
														variants={{
															hide: {
																y: "25%",
																opacity: 0,
															},
															show: {
																y: "0%",
																opacity: 1,
															},
														}}
														className="space-y-6 list-none"
													>
														<li>
															<span className="font-semibold text-2xl">
																Link #1
															</span>
														</li>
														<li>
															<span className="font-semibold text-2xl">
																Link #2
															</span>
														</li>
														<li>
															<span className="font-semibold text-2xl">
																Link #3
															</span>
														</li>
													</motion.ul>
													<motion.div
														variants={{
															hide: {
																opacity: 0,
															},
															show: {
																opacity: 1,
															},
														}}
														className="w-full h-px bg-white/30"
													></motion.div>
													<motion.ul
														variants={{
															hide: {
																y: "25%",
																opacity: 0,
															},
															show: {
																y: "0%",
																opacity: 1,
															},
														}}
														className="list-none flex gap-x-3 justify-center"
													>
														<li>
															<span className="w-8 h-8 bg-white/50 block"></span>
														</li>
														<li>
															<span className="w-8 h-8 bg-white/50 block"></span>
														</li>
														<li>
															<span className="w-8 h-8 bg-white/50 block"></span>
														</li>
													</motion.ul>
												</div>
											</motion.div>
										</MotionConfig>
									)}
								</AnimatePresence>
							</header>
							<div className="space-y-6">
								<h1 className="text-4xl font-bold text-left">Site B</h1>
								<p>I got a framer-motion navbar 🎉</p>
								<button className="p-4 rounded-lg bg-blue-600 text-sm font-semibold">
									Learn More
								</button>
							</div>
						</div>
					</Background>
					<Heading fontSize="h3">Site B</Heading>
				</div>
			</div>
		</Slide>
	);
}

function MoveABoxComplicatedSlide() {
	const [dir, setDir] = useState("left");

	return (
		<Slide>
			<Heading>Move a box with framer-motion</Heading>
			<div className="flex gap-x-10 flex-1">
				<div className="flex-1">
					<CodePane language="jsx">
						{`import {motion} from "framer-motion"
import {useState} from "React"

const [dir, setDir] = useState("left")

<motion.div
	className="w-32 h-32 bg-emerald-400"
	variants={{
		left: { x: "0px"}
		right: { x: "450px" },
	}}
	initial="left"
	animate={dir}
/>`}
					</CodePane>
				</div>
				<div className="flex-1 flex flex-col space-y-5">
					<Background className="items-center p-6">
						<motion.div
							className="w-32 h-32 bg-emerald-400"
							variants={{
								right: { x: "450px" },
							}}
							initial="left"
							animate={dir}
						/>
					</Background>
					<ul className="list-none flex justify-center gap-x-4">
						<li>
							<button
								className="flex p-3 bg-blue-600 text-sm font-semibold rounded-lg"
								onClick={() => setDir("left")}
							>
								Move Left
							</button>
						</li>
						<li>
							<button
								className="flex p-3 bg-blue-600 text-sm font-semibold rounded-lg"
								onClick={() => setDir("right")}
							>
								Move Right
							</button>
						</li>
					</ul>
				</div>
			</div>
		</Slide>
	);
}

function Background(props) {
	return (
		<div
			className={`flex flex-1 bg-black/30 rounded-2xl border-gray-700 border overflow-hidden ${props.className}`}
		>
			{props.children}
		</div>
	);
}

export default App;
