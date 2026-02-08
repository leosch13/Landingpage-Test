'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const VideoSection: React.FC = () => {
    return (
        <section className="w-full max-w-5xl mx-auto px-4 py-8 md:py-12">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="space-y-8"
            >
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Schritt 2: Sieh dir die <br className="md:hidden" />
                        <span className="font-serif italic text-white/80">Masterclass</span> von Adis an
                    </h2>
                </div>

                <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#111]">
                    <iframe
                        src="https://www.youtube.com/embed/9irhqNwl9gg?rel=0&controls=1&autoplay=0&mute=0"
                        title="Meta Ads Masterclass 2025"
                        className="absolute inset-0 w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </motion.div>
        </section>
    );
};
