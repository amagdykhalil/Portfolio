'use client';

import { motion } from 'framer-motion';


export default function ExperienceSection() {
    return (
        <section id="experience" className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-12 text-center text-gray-900"
                >
                    Experience
                </motion.h2>

                <div className="space-y-6">
                    {/* Internship */}
                    <div
                        data-aos="flip-left"
                        className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm"
                    >
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">
                            Full Stack Developer Intern –{" "}
                            <a
                                href="https://www.linkedin.com/company/clinic-managers/posts/?feedView=all"
                                target="_blank"
                                className="underline"
                            >
                                Clinic Managers
                            </a>
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">
                            <span className="font-medium">
                                Jul 2025 – Aug 2025 · Remote · Egypt
                            </span>
                        </p>
                        <p className="text-sm text-gray-700">
                            Contributed to full-stack development using .NET and modern web technologies.
                        </p>
                    </div>

                    {/* Freelance Experience */}
                    <div
                        data-aos="flip-left"
                        className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm"
                    >
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">
                            Freelance Full Stack Developer
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">
                            <span className="font-medium">
                                2025 · Remote · Egypt
                            </span>
                        </p>
                        <p className="text-sm text-gray-700">
                            Delivered full-stack web solutions for 𝐦𝐮𝐥𝐭𝐢𝐩𝐥𝐞 𝐜𝐥𝐢𝐞𝐧𝐭𝐬 using 𝐀𝐒𝐏.𝐍𝐄𝐓 𝐂𝐨𝐫𝐞, 𝐑𝐞𝐚𝐜𝐭, 𝐚𝐧𝐝 𝐍𝐞𝐱𝐭.𝐣𝐬 — focusing on performance, scalability, and client satisfaction. Translate business needs into functional systems, optimize application performance, and ensure timely delivery.
                        </p>
                        <ul className="list-disc list-inside mt-3 text-sm text-gray-700 space-y-1">
                            <li>Improved 𝐰𝐞𝐛𝐬𝐢𝐭𝐞 𝐩𝐞𝐫𝐟𝐨𝐫𝐦𝐚𝐧𝐜𝐞 𝐚𝐧𝐝 𝐫𝐞𝐝𝐮𝐜𝐞𝐝 𝐥𝐚𝐠 through efficient code optimization and visualization tools.</li>
                            <li>Designed 𝐝𝐚𝐭𝐚𝐛𝐚𝐬𝐞 𝐬𝐭𝐫𝐮𝐜𝐭𝐮𝐫𝐞𝐬 to enhance scalability and data integrity.</li>
                            <li>Handled deployments with Azure and Docker.</li>
                            <li>Built scalable web platforms for real estate, licensing, and healthcare sectors.</li>
                            <li>Quickly adapted to new technologies — 𝐟𝐢𝐱𝐞𝐝 𝐛𝐮𝐠𝐬 in a Laravel-based system despite no prior experience in this technology.</li>
                            <li>Collaborated effectively within 𝐜𝐫𝐨𝐬𝐬-𝐟𝐮𝐧𝐜𝐭𝐢𝐨𝐧𝐚𝐥 𝐭𝐞𝐚𝐦𝐬 using agile methodologies and Jira for project tracking.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
