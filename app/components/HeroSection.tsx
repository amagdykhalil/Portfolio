'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import SkillLayerCard from './ui/SkillLayerCard';

const frontendSkills: string[] = [
	"React.js",
	"JavaScript",
	"TypeScript",
	"HTML / HTML5",
	"CSS",
	"SASS",
	"Tailwind CSS",
	"Responsive Web Design",
	"Vite"
];

const backendSkills: string[] = [
	"ASP.NET Web API",
	"ASP Identity",
	"Entity Framework",
	"ADO .NET",
	"C#",
	"JWT",
	"OAuth",
	"OOP",
	"REST APIs",
];

const databaseSkills: string[] = [
	"MS SQL Server",
	"SQL",
	"Transact-SQL (T-SQL)",
	"Azure"
];


const otherSkills: string[] = [
	"GIT",
	"GitHub",
	"PowerShell",
	"Docker",
	"Postman"
];



export default function HeroSection() {
	const [selectedStack, setSelectedStack] = useState<'frontend' | 'backend' | 'database' | 'other' | null>(null);

	return (
		<section className="min-h-[970px] relative  overflow-hidden py-14  bg-white">
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
			</div>

			<div className="relative z-10 flex flex-col items-center justify-start px-4 pt-8 md:pt-0">
				<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8 md:mb-12">
					<div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
						<h1 className="text-4xl md:text-7xl pb-2 md:pb-5 font-bold text-transparent bg-clip-text bg-blue-600">
							Ahmed Magdy
						</h1>
						<h2 className="text-2xl md:text-4xl font-bold text-gray-900">Full Stack Developer</h2>
						<p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
							Results-driven problem solver transforming complex challenges into streamlined, high-impact outcomes.
							Lifelong learner committed to broadening expertise and driving meaningful growth.
						</p>
						{/* <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto">
							Previously Senior Full Stack Developer at <span className="text-blue-600">Stripe</span> and Tech Lead at{' '}
							<span className="text-purple-600">Vercel</span>
						</p> */}
					</div>
					<div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-8">
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-purple-100 rounded-full text-purple-600 text-xs md:text-sm">.NET</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-violet-100 rounded-full text-violet-600 text-xs md:text-sm">C#</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-sky-100 rounded-full text-sky-600 text-xs md:text-sm">React</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-100 rounded-full text-blue-600 text-xs md:text-sm ">TypeScript</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-yellow-100 rounded-full text-yellow-600 text-xs md:text-sm">JavaScript</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-100 rounded-full text-blue-600 text-xs md:text-sm">Azure</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-indigo-100 rounded-full text-indigo-600 text-xs md:text-sm">SQL Server</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-cyan-100 rounded-full text-cyan-600 text-xs md:text-sm">Docker</span>
					</div>
					<div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4 sm:px-0">
						<a href="#work" className="group relative inline-flex items-center justify-center">
							<div className="absolute -inset-0.5 rounded-full blur opacity-50 group-hover:opacity-75 transition"></div>
							<div className="border relative px-6 sm:px-8 py-3 bg-white rounded-full inline-flex items-center justify-center w-full sm:w-auto">
								View My Work
								<svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
								</svg>
							</div>
						</a>
						<a href="#certifications" className="px-6 sm:px-8 py-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors border border-gray-200 hover:border-gray-300 text-center">
							Certifications
						</a>
						<a href="#experience" className="group relative inline-flex items-center justify-center">
							<div className="absolute -inset-0.5 rounded-full blur opacity-50 group-hover:opacity-75 transition"></div>
							<div className="border relative px-6 sm:px-8 py-3 bg-white rounded-full inline-flex items-center justify-center w-full sm:w-auto">
								Experience
								<svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
								</svg>
							</div>
						</a>
						<a href="#contact" className="px-6 sm:px-8 py-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors border border-gray-200 hover:border-gray-300 text-center">
							Get in Touch
						</a>
					</div>

				</motion.div>
				{/* Interactive System Architecture */}
				<div className="w-full max-w-6xl mx-auto relative px-2 md:px-4">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.3 }}
						className="bg-white/50 backdrop-blur-sm rounded-lg border border-gray-200 p-4 md:p-8 shadow-lg"
					>
						<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
							<SkillLayerCard
								title="Frontend Development"
								color="text-blue-600"
								highlight="bg-blue-50"
								skills={frontendSkills}
								isActive={selectedStack === 'frontend'}
								onHover={() => setSelectedStack('frontend')}
								onLeave={() => setSelectedStack(null)}
							/>
							<SkillLayerCard
								title="Backend Development"
								color="text-purple-600"
								highlight="bg-purple-50"
								skills={backendSkills}
								isActive={selectedStack === 'backend'}
								onHover={() => setSelectedStack('backend')}
								onLeave={() => setSelectedStack(null)}
							/>
							<SkillLayerCard
								title="Database & Cloud"
								color="text-teal-600"
								highlight="bg-teal-50"
								skills={databaseSkills}
								isActive={selectedStack === 'database'}
								onHover={() => setSelectedStack('database')}
								onLeave={() => setSelectedStack(null)}
							/>
							<SkillLayerCard
								title="Other"
								color="text-orange-600"
								highlight="bg-orange-50"
								skills={otherSkills}
								isActive={selectedStack === 'other'}
								onHover={() => setSelectedStack('other')}
								onLeave={() => setSelectedStack(null)}
							/>
						</div>
					</motion.div>
				</div>


			</div>
		</section>
	);
}
