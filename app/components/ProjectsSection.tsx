'use client';

import { motion } from 'framer-motion';
import Project, { ProjectCardProps } from './ui/Project';
import { useState } from 'react';

export default function ProjectsSection() {
	const [filter, setFilter] = useState<'all' | 'freelance' | 'personal'>('all');
	const projects: ProjectCardProps[] = [
		{
			title: 'Property Booking System',
			description:
				'A full-featured property booking platform allowing landlords to list properties and tenants to book them, with separate dashboards for each user type.',
			type: 'freelance',
			imagePath: 'property-booking.png',
			done: [
				'Developed dual dashboards for landlords and tenants with seamless property management and booking workflows.',
				'Translated Figma designs into responsive, production-ready interfaces.',
			],
			links: [

			],
		},
		{
			title: 'Real Estate Platform',
			description:
				'A property management system where users can list, browse, and purchase properties, featuring both client-facing and admin dashboards.',
			type: 'freelance',
			imagePath: 'elitegate.png',
			done: [
				'Implemented complete website and dashboard from Figma designs.',
				'Designed and optimized database schema for scalability.',
				'Migrated from an old system to a new modern architecture.',
				'Delivered a responsive, high-performance UI and seamless property workflow.',
			],
			links: [
				{ label: 'Live Demo', type: 'demo', href: 'https://elite-gate.vercel.app/' },
			],
		},
		{
			title: 'Clinic Management System',
			description:
				'An internal platform built for managing and optimizing clinic operations, developed collaboratively with a cross-functional team.',
			type: 'freelance',
			imagePath: 'clinic-system.png',
			done: [
				'Implemented new features and optimized workflows to improve system efficiency.',
				'Fixed critical bugs and enhanced performance across multiple modules.',
				'Collaborated with a multidisciplinary team using Jira for project tracking and task management.',
				'Contributed to maintaining clean code and consistent development standards across the team.',
			],
			links: [],
		},
		{
			title: 'Addiction Rehabilitation Center Management System (ongoing)',
			description: 'End-to-end platform for managing inpatient and outpatient care in rehab centers—covering dynamic intake forms, treatment workflows, therapist tracking, and discharge planning.',
			type: 'personal',
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
				// { label: 'Watch Video', type: 'video' }, // disabled (no href)
				{ label: 'Frontend Code', type: 'frontend', href: 'https://github.com/amagdykhalil/addiction-rehabilitation-frontend' },
				{ label: 'Backend Code', type: 'backend', href: 'https://github.com/amagdykhalil/addiction-rehabilitation-backend' },
				{ label: 'Live Demo', type: 'demo', href: 'https://arc-care.netlify.app/login' },
			]
		},

		{
			title: 'Driving License Management System',
			description: 'Centralized platform for managing license applications, tests, renewals, and international licenses—streamlining all aspects of vehicle licensing and registration.',
			type: 'personal',
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
				// { label: 'Watch Video', type: 'video' },
				{ label: 'Frontend Code', type: 'frontend', href: 'https://github.com/amagdykhalil/DVLD-frontend' },
				{ label: 'Backend Code', type: 'backend', href: 'https://github.com/amagdykhalil/DVLD-backend' },
				{ label: 'Live Demo', type: 'demo', href: 'https://licensemanagment.netlify.app/login' }
			]
		},
	];
	const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.type === filter);
	return (
		<section id='work' className="py-20 px-4">
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
						All
					</button>
					<button
						onClick={() => setFilter('freelance')}
						className={`px-6 py-2 rounded-full border transition ${filter === 'freelance'
							? 'bg-white text-gray-900 border-gray-300 shadow'
							: 'bg-gray-100 text-gray-600 hover:bg-gray-200'
							}`}
					>
						Freelance
					</button>
					<button
						onClick={() => setFilter('personal')}
						className={`px-6 py-2 rounded-full border transition ${filter === 'personal'
							? 'bg-white text-gray-900 border-gray-300 shadow'
							: 'bg-gray-100 text-gray-600 hover:bg-gray-200'
							}`}
					>
						Personal
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



// {
// 	title: 'E-commerce Platform',
// 	description: 'Sleek full-stack shopping solution with user authentication, advanced product filtering, cart management, and detailed order history—crafted for a seamless online experience.',
// 	type: 'personal',
// 	imagePath: "ecommerce.png",
// 	backend: [
// 		'ASP.NET Web API with Clean Architecture',
// 		'CQRS & Mediator Pattern',
// 		'SQL Server with Entity Framework',
// 		'ASP.NET Core Identity with external providers (Google)',
// 		'JWT Authentication and Serilog for logging'
// 	],
// 	frontend: [
// 		'React (JavaScript) with Tailwind CSS',
// 		'Routing via React Router',
// 		'React Hook Form for validation',
// 		'Redux Toolkit for state management',
// 		'React Query for data fetching'
// 	],
// 	links: [
// 		{ label: 'Watch Video', type: 'video' },
// 		{ label: 'Frontend Code', type: 'frontend', href: 'https://github.com/amagdykhalil/Ecommerce-frontend' },
// 		{ label: 'Backend Code', type: 'backend', href: 'https://github.com/amagdykhalil/Ecommerce-backend' },
// 		{ label: 'Live Demo', type: 'demo', href: 'https://ecommercecorner.netlify.app' }
// 	]
// },