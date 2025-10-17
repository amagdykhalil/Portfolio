'use client';

import AOS from 'aos';
import 'aos/dist/aos.css';

import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import CertificationsSection from './components/CertificationsSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import { useEffect } from 'react';
import Header from './components/Header';
export default function FullStackPortfolio() {

	useEffect(() => {
		AOS.init({ duration: 300, easing: "ease-out", once: true });
	}, []);

	return (
		<div>
			<Header />
			<main className="min-h-[970px] bg-gradient-to-b from-gray-50 to-white text-gray-900 [&>*:nth-child(even)]:bg-gray-100 [&>*:nth-child(odd)]:bg-white">
				<HeroSection />
				<ExperienceSection />
				<ProjectsSection />
				<SkillsSection />
				<CertificationsSection />
				<ContactSection />
			</main>
		</div>
	);
}