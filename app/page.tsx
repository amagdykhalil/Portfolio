'use client';

import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import CertificationsSection from './components/CertificationsSection';
import ExperienceSection from './components/ExperienceSection';

export default function FullStackPortfolio() {
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
