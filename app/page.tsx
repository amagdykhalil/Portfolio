'use client';

import AOS from 'aos';
import 'aos/dist/aos.css';

import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import CertificationsSection from './components/CertificationsSection';
import ExperienceSection from './components/ExperienceSection';
import { useEffect } from 'react';

export default function FullStackPortfolio() {
	useEffect(() => {
		AOS.init({ duration: 300, easing: 'ease-out', once: true });
	}, []);

	return (
		<main className="min-h-[970px] bg-gradient-to-b from-gray-50 to-white text-gray-900">
			<HeroSection />
			<ProjectsSection />
			<CertificationsSection />
			<ExperienceSection />
			<ContactSection />
		</main>
	);
}
