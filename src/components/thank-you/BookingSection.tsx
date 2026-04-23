// BookingSection.tsx
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export const BookingSection: React.FC = () => {
    const widgetRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const initCalendly = () => {
            if ((window as any).Calendly && widgetRef.current) {
                // Clear container to prevent duplicates
                widgetRef.current.innerHTML = '';

                (window as any).Calendly.initInlineWidget({
                    // Use the same event type url as Main Website
                    // Adjusted for Dark Theme: text_color=ffffff, background_color=1a1a1a (or transparent if supported via styling, but passed here for iframe content)
                    url: 'https://calendly.com/ingo-schwaiger/erstgespraech-buchen?hide_gdpr_banner=1&hide_event_type_details=0&primary_color=ff3d00&text_color=ffffff&background_color=1a1a1a',
                    parentElement: widgetRef.current,
                    prefill: {},
                    utm: {}
                });
            }
        };

        if (!(window as any).Calendly) {
            // Check if script is already present (e.g. from Main Website if shared, or add it)
            // Since this is a separate page/app context potentially, we should ensure script is loaded.
            // The Main Website checks for existing script. We should do the same or add it if missing.
            let script = document.querySelector('script[src*="calendly.com/assets/external/widget.js"]');
            if (!script) {
                script = document.createElement('script');
                script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
                script.setAttribute('async', 'true');
                document.head.appendChild(script);
            }
            script.addEventListener('load', initCalendly);
        } else {
            initCalendly();
        }
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
                className="w-full bg-white/5 rounded-3xl border border-white/10 overflow-hidden backdrop-blur-sm"
            >
                {/* Calendly Inline Widget Container */}
                <div
                    ref={widgetRef}
                    className="calendly-inline-widget w-full"
                    style={{ minWidth: '320px', height: '700px' }}
                />
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
