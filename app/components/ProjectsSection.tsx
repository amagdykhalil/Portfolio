'use client';

import { motion } from 'framer-motion';
import Project, { ProjectCardProps } from './ui/Project';
import { useState } from 'react';

export default function ProjectsSection() {
	const [filter, setFilter] = useState<'all' | 'ongoing'>('all');
	const projects: ProjectCardProps[] = [
		{
			title: 'Addiction Rehabilitation Center Management System',
			description: 'End-to-end platform for managing inpatient and outpatient care in rehab centers—covering dynamic intake forms, treatment workflows, therapist tracking, and discharge planning.',
			isOngoing: true,
			imagePath: "rms.png",
			backend: [
				'ASP.NET Web API with Clean Architecture',
				'Identity management using ASP Identity & JWT',
				'SQL Server powered by Entity Framework Core',
				'Unit-tested with xUnit & structured logging via Scalar',
				'Containerized services using Docker',
			],
			frontend: [
				'React (TypeScript) with Feature-Sliced Design',
				'Internationalization via i18next',
				'Form validation using zod',
				'State + Query handling with nuqs',
				'Styled with Shadcn & Tailwind CSS',
			],
			links: [
				{ label: 'Watch Video', type: 'video' }, // disabled (no href)
				{ label: 'Frontend Code', type: 'frontend', href: 'https://github.com/amagdykhalil/addiction-rehabilitation-frontend' },
				{ label: 'Backend Code', type: 'backend', href: 'https://github.com/amagdykhalil/addiction-rehabilitation-backend' },
				{ label: 'Live Demo', type: 'demo', href: 'https://arc-care.netlify.app/login' },
			]
		},
		{
			title: 'E-commerce Platform',
			description: 'Sleek full-stack shopping solution with user authentication, advanced product filtering, cart management, and detailed order history—crafted for a seamless online experience.',
			isOngoing: false,
			imagePath: "ecommerce.png",
			backend: [
				'ASP.NET Web API with Clean Architecture',
				'CQRS & Mediator Pattern',
				'SQL Server with Entity Framework',
				'ASP.NET Core Identity with external providers (Google)',
				'JWT Authentication and Serilog for logging'
			],
			frontend: [
				'React (JavaScript) with Tailwind CSS',
				'Routing via React Router',
				'React Hook Form for validation',
				'Redux Toolkit for state management',
				'React Query for data fetching'
			],
			links: [
				{ label: 'Watch Video', type: 'video' },
				{ label: 'Frontend Code', type: 'frontend', href: 'https://github.com/amagdykhalil/Ecommerce-frontend' },
				{ label: 'Backend Code', type: 'backend', href: 'https://github.com/amagdykhalil/Ecommerce-backend' },
				{ label: 'Live Demo', type: 'demo', href: 'https://ecommercecorner.netlify.app' }
			]
		},
		{
			title: 'Driving License Management System',
			description: 'Centralized platform for managing license applications, tests, renewals, and international licenses—streamlining all aspects of vehicle licensing and registration.',
			isOngoing: false,
			imagePath: "dvld.png",
			backend: [
				'ASP.NET Web API with Clean Architecture',
				'SQL Server accessed via ADO.NET',
				'CQRS & Mediator Pattern',
				'JWT Authentication with role-based authorization',
				'Azure Key Vault for securing sensitive credentials'
			],
			frontend: [
				'React (JavaScript) with Tailwind CSS and Vite',
				'Routing via React Router',
				'React Query for efficient data sync',
				'React Hook Form for interactive inputs',
				'Recharts for data visualization and metrics'
			],
			links: [
				{ label: 'Watch Video', type: 'video' },
				{ label: 'Frontend Code', type: 'frontend', href: 'https://github.com/amagdykhalil/DVLD-frontend' },
				{ label: 'Backend Code', type: 'backend', href: 'https://github.com/amagdykhalil/DVLD-backend' },
				{ label: 'Live Demo', type: 'demo', href: 'https://licensemanagment.netlify.app/login' }
			]
		},
	];
	const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.isOngoing);
	return (
		<section id='work' className="py-20 px-4 bg-gray-100">
			<div className="max-w-6xl mx-auto">
				<motion.h2
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="text-3xl font-bold mb-8 text-center text-gray-900"
				>
					Full Stack Projects
				</motion.h2>

				<div className="flex justify-center gap-4 mb-12">
					<button
						onClick={() => setFilter('all')}
						className={`px-6 py-2 rounded-full border transition ${filter === 'all'
							? 'bg-white text-gray-900 border-gray-300 shadow'
							: 'bg-gray-100 text-gray-600 hover:bg-gray-200'
							}`}
					>
						All Projects
					</button>
					<button
						onClick={() => setFilter('ongoing')}
						className={`px-6 py-2 rounded-full border transition ${filter === 'ongoing'
							? 'bg-white text-gray-900 border-gray-300 shadow'
							: 'bg-gray-100 text-gray-600 hover:bg-gray-200'
							}`}
					>
						Ongoing Only
					</button>
				</div>

				<div className="flex flex-col gap-8 ">
					{filteredProjects.map((project, index) => (
						<Project key={index} {...project} />
					))}
				</div>
			</div>
		</section>
	);
}
