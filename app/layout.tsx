import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Ahmed Magdy - Full-Stack Developer',
	description:
		'Welcome to my portfolio! I am a passionate full-stack developer who bridges the gap between frontend and backend development. Specializing in creating complete web solutions, from beautiful user interfaces to robust server architectures.',
	keywords: [
		'Full-Stack Developer',
		'Software Engineer',
		'Frontend Development',
		'Backend Development',
		'React',
		'.Net',
		'JavaScript',
		'TypeScript',
		'Database Design',
		'API Development',
		'Cloud Solutions',
		'Database',
		'System Architecture',
		'Web Development',
		'Ahmed Magdy',
	],
	authors: [{ name: 'Ahmed Magdy' }],
	creator: 'Ahmed Magdy',
	openGraph: {
		title: 'Ahmed Magdy - Full-Stack Developer Portfolio',
		description:
			'Passionate full-stack developer creating complete web solutions. Explore my projects and technical expertise across the entire development stack.',
		url: 'https://ahmedmagdy-portfolio.netlify.app',
		siteName: 'Ahmed Magdy - Portfolio',
		images: [
			{
				url: 'https://ahmedmagdy-portfolio.netlify.app/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Ahmed Magdy - Full-Stack Developer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
