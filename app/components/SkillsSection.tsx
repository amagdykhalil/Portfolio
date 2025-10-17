import { useState } from 'react';
import SkillLayerCard from './ui/SkillLayerCard';

import { motion } from 'framer-motion';

const frontendSkills: string[] = [
    "React.js",
    "Next.js",
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
    "REST APIs",
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
    "Docker",
    "Postman",
    "jira"
];


export default function SkillsSection() {
    const [selectedStack, setSelectedStack] = useState<'frontend' | 'backend' | 'database' | 'other' | null>(null);

    return (
        <section id='skills' className="py-14 ">
            <div className="max-w-6xl mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-8 text-center text-gray-900"
                >
                    Tech Stack & Skills
                </motion.h2>

                {/* Skill Badges */}
                <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10">
                    {[".NET", "C#", "React", "Next.js", "TypeScript", "Azure", "SQL Server", "Docker"].map((skill, i) => (
                        <span
                            key={i}
                            className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm ${skill === ".NET" || skill === "C#" ? "bg-purple-100 text-purple-600"
                                : skill === "React" ? "bg-sky-100 text-sky-600"
                                    : skill === "Next.js" ? "bg-gray-100 text-gray-600"
                                        : skill === "TypeScript" ? "bg-blue-100 text-blue-600"
                                            : skill === "Azure" ? "bg-blue-100 text-blue-600"
                                                : skill === "SQL Server" ? "bg-indigo-100 text-indigo-600"
                                                    : "bg-cyan-100 text-cyan-600"
                                }`}
                        >
                            {skill}
                        </span>
                    ))}
                </div>

                {/* Skill Cards */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white/50 backdrop-blur-sm rounded-lg border border-gray-200 p-4 md:p-8 shadow-lg"
                >
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                        <SkillLayerCard
                            title="Frontend Development"
                            color="text-blue-600"
                            highlight="bg-blue-50"
                            skills={frontendSkills}
                            isActive={selectedStack === 'frontend'}
                            onHover={() => setSelectedStack('frontend')}
                            onLeave={() => setSelectedStack(null)}
                        />
                        <SkillLayerCard
                            title="Backend Development"
                            color="text-purple-600"
                            highlight="bg-purple-50"
                            skills={backendSkills}
                            isActive={selectedStack === 'backend'}
                            onHover={() => setSelectedStack('backend')}
                            onLeave={() => setSelectedStack(null)}
                        />
                        <SkillLayerCard
                            title="Database & Cloud"
                            color="text-teal-600"
                            highlight="bg-teal-50"
                            skills={databaseSkills}
                            isActive={selectedStack === 'database'}
                            onHover={() => setSelectedStack('database')}
                            onLeave={() => setSelectedStack(null)}
                        />
                        <SkillLayerCard
                            title="Other"
                            color="text-orange-600"
                            highlight="bg-orange-50"
                            skills={otherSkills}
                            isActive={selectedStack === 'other'}
                            onHover={() => setSelectedStack('other')}
                            onLeave={() => setSelectedStack(null)}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
