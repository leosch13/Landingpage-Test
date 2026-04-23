'use client';
import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
// ...
import { Facebook, Instagram, Youtube, Linkedin, Frame } from 'lucide-react';

interface FooterLink {
    title: string;
    href: string;
    icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
    label: string;
    links: FooterLink[];
}

const footerLinks: FooterSection[] = [
    {
        label: 'Legal',
        links: [
            { title: 'Impressum', href: '#' },
            { title: 'Datenschutz', href: '#' },
            { title: 'AGB', href: '#' },
        ],
    },
];

export function Footer() {
    return (
        <footer className="md:rounded-t-6xl relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center rounded-t-4xl border-t bg-[radial-gradient(35%_128px_at_50%_0%,rgba(255,255,255,0.08),transparent)] px-6 py-12 lg:py-16">
            <div className="bg-foreground/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

            <div className="flex flex-col md:flex-row justify-between items-center w-full gap-8">
                <AnimatedContainer className="flex items-center gap-4">
                    <Frame className="size-8 text-white" />
                    <p className="text-white/40 text-sm">
                        © {new Date().getFullYear()} Fullstack Marketer. All rights reserved.
                    </p>
                </AnimatedContainer>

                <AnimatedContainer delay={0.2}>
                    <div className="flex gap-6">
                        {footerLinks[0].links.map((link) => (
                            <a
                                key={link.title}
                                href={link.href}
                                className="text-white/40 hover:text-white transition-colors text-sm"
                            >
                                {link.title}
                            </a>
                        ))}
                    </div>
                </AnimatedContainer>
            </div>
        </footer>
    );
};

type ViewAnimationProps = {
    delay?: number;
    className?: ComponentProps<typeof motion.div>['className'];
    children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
    const shouldReduceMotion = useReducedMotion();

    if (shouldReduceMotion) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div
            initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
            whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.8 }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
