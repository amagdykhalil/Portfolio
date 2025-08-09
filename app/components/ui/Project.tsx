'use client';

import { motion } from 'framer-motion';
import React, { useState } from 'react';
import clsx from 'clsx';

type LinkType = 'video' | 'frontend' | 'backend' | 'github' | 'demo';

interface ProjectLink {
    href?: string;            // if undefined/empty => disabled tile
    label: string;
    type: LinkType;
    color?: string;           // override default color
}

export interface ProjectCardProps {
    title: string;
    description: string;
    isOngoing: boolean,
    imagePath: string,
    backend: string[];
    frontend: string[];
    links: ProjectLink[];
    className?: string;       // optional extra classes
}

const Icons: Record<LinkType, React.ReactNode> = {
    video: (
        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none">
            <path fill="red" d="M14.712 4.633a1.754 1.754 0 00-1.234-1.234C12.382 3.11 8 3.11 8 3.11s-4.382 0-5.478.289c-.6.161-1.072.634-1.234 1.234C1 5.728 1 8 1 8s0 2.283.288 3.367c.162.6.635 1.073 1.234 1.234C3.618 12.89 8 12.89 8 12.89s4.382 0 5.478-.289a1.754 1.754 0 001.234-1.234C15 10.272 15 8 15 8s0-2.272-.288-3.367z" />
            <path fill="#fff" d="M6.593 10.11l3.644-2.098-3.644-2.11v4.208z" />
        </svg>
    ),
    github: (
        <svg fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
    ),
    frontend: (
        // using GitHub icon for code links
        <svg fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
    ),
    backend: (
        // using GitHub icon for code links
        <svg fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23 .653 1.653 .242 2.874 .118 3.176 .77 .84 1.235 1.911 1.235 3.221 0 4.609 -2.807 5.624 -5.479 5.921 .43 .372 .823 1.102 .823 2.222v3.293c0 .319 .192 .694 .801 .576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
    ),
    demo: (
        // you can swap to your local asset if preferred
        <img src="browser-www-svgrepo-com.svg" alt="Live Demo" />
    ),
};

const defaultColors: Record<LinkType, string> = {
    video: 'text-red-600',
    github: 'text-gray-800',
    frontend: 'text-gray-800',
    backend: 'text-gray-800',
    demo: 'text-green-700',
};

export default function Project({
    title,
    description,
    isOngoing = true,
    imagePath,
    backend,
    frontend,
    links,
    className,
}: ProjectCardProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={clsx(
                'bg-white rounded-xl overflow-hidden border border-gray-200 shadow-lg h-full grid grid-cols-1 lg:grid-cols-2',
                className
            )}
        >
            <div className="p-8 flex-1 flex flex-col gap-6">

                <div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">{title} {isOngoing ? " (Ongoing)" : ""}</h3>
                    <p className="text-gray-600">{description}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <h4 className="text-sm font-semibold text-purple-600 mb-3">Backend Architecture</h4>
                        <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
                            {backend.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold text-blue-600 mb-3">Frontend Highlights</h4>
                        <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
                            {frontend.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-auto grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                    {links.map(({ href, label, type, color }, idx) => {
                        const isDisabled = !href;
                        const iconColor = color ?? defaultColors[type];
                        const inner = (
                            <>
                                <div className={clsx('w-6 h-6', iconColor)}>{Icons[type]}</div>
                                <span className={clsx('mt-1 text-[11px] font-medium', isDisabled ? 'text-gray-400' : 'text-gray-700')}>
                                    {label}
                                </span>
                            </>
                        );

                        return href ? (
                            <a
                                key={`${label}-${idx}`}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center justify-center gap-2 p-4 bg-white rounded-2xl shadow hover:shadow-lg transition transform hover:-translate-y-1"
                            >
                                {inner}
                            </a>
                        ) : (
                            <div
                                key={`${label}-${idx}`}
                                className="flex flex-col items-center justify-center gap-2 p-4 bg-gray-100 rounded-2xl shadow cursor-not-allowed opacity-50"
                            >
                                {inner}
                            </div>
                        );
                    })}
                </div>

            </div>
            <div
                onClick={() => setIsModalOpen(true)}
                className="cursor-pointer overflow-hidden rounded-r-xl lg:rounded-xl"
            >
                <img
                    src={imagePath}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>

            {isModalOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center"
                    onClick={() => setIsModalOpen(false)} // click outside to close
                >
                    <motion.img
                        src={imagePath}
                        alt={title}
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.8 }}
                        className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-lg"
                        onClick={(e) => e.stopPropagation()} // prevent bubbling
                    />
                </motion.div>
            )}

        </motion.div >
    );
}
