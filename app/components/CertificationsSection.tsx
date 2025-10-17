'use client';

import { motion } from 'framer-motion';

export default function CertificationsSection() {
    return (
        <section id="certifications" className="py-20 px-4 ">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-12 text-center text-gray-900"
                >
                    Certifications
                </motion.h2>

                <div className="space-y-6">
                    <div
                        data-aos="flip-left"
                        className="bg-gray-100 border border-gray-200 rounded-xl p-6 shadow-sm"
                    >
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            SQL (Advanced) Certification – HackerRank
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">
                            Covers topics like query optimization, data modeling, Indexing, window functions, and pivots in SQL.
                        </p>
                        <a
                            href="https://www.hackerrank.com/certificates/699a2bd97f54"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block text-sm text-blue-600 hover:underline"
                        >
                            View Certificate →
                        </a>
                    </div>

                </div>
            </div>
        </section >
    );
}
