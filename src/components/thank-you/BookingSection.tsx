'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { getCalApi } from "@calcom/embed-react";

export const BookingSection: React.FC = () => {

    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "sdlp-erstgespraech" });
            cal("ui", { "theme": "dark", "cssVarsPerTheme": { "dark": { "cal-brand": "#C1FE00" } }, "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, []);

    return (
        <section className="w-full max-w-6xl mx-auto px-4 py-16 md:py-24" id="booking">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
            >
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                    Buche dir jetzt dein Kennenlerngespräch
                </h2>
                <p className="text-white/40 text-lg">
                    Lass uns gemeinsam herausfinden, wie wir dich unterstützen können.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="w-full h-[600px] md:h-[700px] bg-white/5 rounded-3xl border border-white/10 overflow-hidden backdrop-blur-sm"
            >
                <iframe
                    src="https://cal.com/fullstack-marketer/sdlp-erstgespraech?embed=true"
                    style={{ width: "100%", height: "100%", border: "none" }}
                ></iframe>
            </motion.div>

            <div className="mt-20 text-center">
                <p className="text-white/40 text-sm uppercase tracking-widest mb-8">Erfahrung aus über 250 Mio. Umsatz</p>
                {/* Trust Logos Placeholder - Using simple text/icons if no images available, or placeholders */}
                <div className="flex flex-wrap justify-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Placeholder logos */}
                    <div className="h-8 w-24 bg-white/20 rounded"></div>
                    <div className="h-8 w-24 bg-white/20 rounded"></div>
                    <div className="h-8 w-24 bg-white/20 rounded"></div>
                    <div className="h-8 w-24 bg-white/20 rounded"></div>
                </div>
            </div>
        </section>
    );
};
