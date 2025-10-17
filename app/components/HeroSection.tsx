'use client';

import { motion } from 'framer-motion';


export default function HeroSection() {
	return (
		<section id="main" className="relative overflow-hidden py-20 bg-white">
			{/* Background Grid */}
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
			</div>

			{/* Content */}
			<div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4"
				>
					Ahmed Magdy
				</motion.h1>

				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.1 }}
					className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6"
				>
					Full Stack Developer · .NET Backend · React Frontend
				</motion.h2>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2 }}
					className="text-gray-600 text-lg md:text-xl space-y-6 mb-10 max-w-3xl mx-auto leading-relaxed"
				>
					<p>
						.NET developer with hands-on experience building scalable end-to-end web applications using ASP.NET Core, React, and Next.js.
					</p>
					<p>
						I’ve delivered client projects such as real estate management system, property sales system, vehicle license management system, and rehabilitation center system—handling frontend, backend, database design, and deployment with Azure and Docker.
					</p>
					<p>
						Quick to adapt to new technologies, I focus on delivering real results that help clients grow and improve user experience.
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3 }}
				>
					<a
						href="#contact"
						className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition"
					>
						Let’s Build Something Together
					</a>
				</motion.div>
			</div>
		</section>


	);
}
