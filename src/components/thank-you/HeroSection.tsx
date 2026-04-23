'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, CheckCircle } from 'lucide-react';
import { ShinyButton } from '../ui/ShinyButton';
import { ProgressCard } from './ProgressCard';

export const HeroSection: React.FC = () => {
    return (
        <section className="relative w-full max-w-4xl mx-auto px-4 pt-0 pb-8 md:pb-16 flex flex-col items-center text-center">

            {/* Progress Card Section - Replaces the linear segmented bar */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-12"
            >
                <ProgressCard
                    value={92}
                    progress={92}
                    className="mx-auto"
                />
            </motion.div>

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
            >
                <div>
                    <div className="text-sm md:text-base text-white/60 font-medium tracking-tight mb-4">
                        Die letzten zwei Schritte...
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-2">
                        Schritt 1: Hol dir das <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50 font-serif italic">
                            MetaAds Playbook '25
                        </span>
                    </h1>
                    <p className="text-lg text-white/40 max-w-xl mx-auto">
                        auf WhatsApp
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="max-w-lg mx-auto text-white/60 text-base leading-relaxed"
                >
                    <p>
                        Schreibe mir eine kurze Nachricht auf WhatsApp und ich sende dir das Handbuch zu.
                        <br />
                        <span className="text-yellow-500/80">⚠️ Sobald sich WhatsApp öffnet, sende die Nachricht bitte unverändert ab!</span>
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 }}
                    className="pt-4"
                >
                    <a
                        href="https://wa.me/491752908364?text=Playbook"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block w-full max-w-sm"
                    >
                        <ShinyButton className="w-full group">
                            <span className="flex items-center justify-center gap-3 text-lg font-bold">
                                <MessageCircle className="w-6 h-6 fill-current" />
                                Weiter zu WhatsApp
                            </span>
                        </ShinyButton>
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
};
