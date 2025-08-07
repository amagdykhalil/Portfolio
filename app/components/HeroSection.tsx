'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

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
	"REST APIs"
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
	const [selectedStack, setSelectedStack] = useState<'frontend' | 'backend' | 'database' | 'other'| null>(null);

	return (
		<section className="min-h-screen relative overflow-hidden py-14 md:py-24">
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
			</div>

			<div className="relative z-10 min-h-screen flex flex-col items-center justify-start px-4 pt-8 md:pt-0">
				<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8 md:mb-12">
					<div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
						<h1 className="text-4xl md:text-7xl pb-2 md:pb-5 font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600">
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
							{/* Frontend Layer */}
							<div
								className={`min-h-64 p-4 md:p-6 rounded-lg transition-colors border-2 ${
									selectedStack === 'frontend' ? 'bg-blue-50 border-blue-200' : 'bg-gray-50 hover:bg-gray-100 border-transparent'
								}`}
								onMouseEnter={() => setSelectedStack('frontend')}
								onMouseLeave={() => setSelectedStack(null)}
							>
								<h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-blue-600">Frontend Development</h3>
								<ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-600">
								  {frontendSkills.map((skill, index) => (
								    <li key={index} className="flex items-center gap-2">
								      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
								      {skill}
								    </li>
								  ))}
								</ul>

							</div>

							{/* Backend Layer */}
							<div
								className={`min-h-64 p-4 md:p-6 rounded-lg transition-colors border-2 ${
									selectedStack === 'backend' ? 'bg-purple-50 border-purple-200' : 'bg-gray-50 hover:bg-gray-100 border-transparent'
								}`}
								onMouseEnter={() => setSelectedStack('backend')}
								onMouseLeave={() => setSelectedStack(null)}
							>
								<h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-purple-600">Backend Development</h3>
								<ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-600">
								  {backendSkills.map((skill, index) => (
								    <li key={index} className="flex items-center gap-2">
								      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
								      {skill}
								    </li>
								  ))}
								</ul>

							</div>

							{/* Database Layer */}
							<div
								className={`min-h-64 p-4 md:p-6 rounded-lg transition-colors border-2 ${
									selectedStack === 'database' ? 'bg-teal-50 border-teal-200' : 'bg-gray-50 hover:bg-gray-100 border-transparent'
								}`}
								onMouseEnter={() => setSelectedStack('database')}
								onMouseLeave={() => setSelectedStack(null)}
							>
								<h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-teal-600">Database & Cloud</h3>
								<ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-600">
								  {databaseSkills.map((skill, index) => (
								    <li key={index} className="flex items-center gap-2">
								      <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
								      {skill}
								    </li>
								  ))}
								</ul>

							</div>

							{/* Tools Layer */}
							<div
								className={`min-h-64 p-4 md:p-6 rounded-lg transition-colors border-2 ${
									selectedStack === 'other' ? 'bg-orange-50 border-orange-200' : 'bg-gray-50 hover:bg-gray-100 border-transparent'
								}`}
								onMouseEnter={() => setSelectedStack('other')}
								onMouseLeave={() => setSelectedStack(null)}
							>
								<h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-orange-600">Other</h3>
								<ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-600">
								  {otherSkills.map((skill, index) => (
								    <li key={index} className="flex items-center gap-2">
								      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
								      {skill}
								    </li>
								  ))}
								</ul>

							</div>
						</div>
					</motion.div>
				</div>

				
			</div>
		</section>
	);
}
