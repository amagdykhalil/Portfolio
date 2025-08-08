'use client';

import { motion } from 'framer-motion';

interface SkillLayerCardProps {
    title: string;
    color: string;
    highlight: string;
    skills: string[];
    isActive: boolean;
    onHover: () => void;
    onLeave: () => void;
}

export default function SkillLayerCard({
    title,
    color,
    highlight,
    skills,
    isActive,
    onHover,
    onLeave,
}: SkillLayerCardProps) {
    return (
        <div
            className={`min-h-64 p-4 md:p-6 rounded-lg transition-colors border-2 ${isActive ? `${highlight} border-${highlight.split('-')[0]}-200` : 'bg-gray-50 hover:bg-gray-100 border-transparent'
                }`}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
        >
            <h3 className={`text-lg md:text-xl font-semibold mb-3 md:mb-4 ${color}`}>{title}</h3>
            <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-600">
                {skills.map((skill, index) => (
                    <li key={index} className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 ${color.replace('text-', 'bg-')} rounded-full`} />
                        {skill}
                    </li>
                ))}
            </ul>
        </div>
    );
}
