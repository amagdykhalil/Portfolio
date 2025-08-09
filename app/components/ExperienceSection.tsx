'use client';

import { motion } from 'framer-motion';

export default function ExperienceSection() {
    return (
        <section id="experience" className="py-20 px-4 bg-gray-100">
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
                    <div
                        data-aos="flip-left"
                        className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm"
                    >
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">
                            Full Stack Developer Intern – <a href='https://www.linkedin.com/company/clinic-managers/posts/?feedView=all' target="_blank" className='underline'>Clinic Managers</a>
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">
                            <span className="font-medium">Jul 2025 – Present · Remote · Egypt</span>
                        </p>
                        <p className="text-sm text-gray-700">
                            Contributing to full-stack development using .Net and modern web technologies.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
