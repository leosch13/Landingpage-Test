"use client";
import React from "react";
import {
    FileText,
    Twitter,
    Linkedin,
    Github,
    Mail,
} from "lucide-react";
import { cn } from "../lib/utils";

interface FooterLink {
    label: string;
    href: string;
}

interface SocialLink {
    icon: React.ReactNode;
    href: string;
    label: string;
}

interface FooterProps {
    brandName?: string;
    brandDescription?: string;
    socialLinks?: SocialLink[];
    navLinks?: FooterLink[];
    creatorName?: string;
    creatorUrl?: string;
    brandIcon?: React.ReactNode;
    className?: string;
}

export const Footer = ({
    brandName = "Fullstack Marketer",
    brandDescription = "Premium Excellence in Marketing.",
    socialLinks = [],
    navLinks = [],
    creatorName,
    creatorUrl,
    brandIcon,
    className,
}: FooterProps) => {
    return (
        <section className={cn("relative w-full mt-0 overflow-hidden text-white", className)}>
            <footer className="border-t border-white/5 bg-black mt-20 relative">
                <div className="max-w-7xl flex flex-col justify-between mx-auto min-h-[30rem] sm:min-h-[35rem] md:min-h-[40rem] relative p-4 py-10">
                    <div className="flex flex-col mb-12 sm:mb-20 md:mb-0 w-full">
                        <div className="w-full flex flex-col items-center">
                            <div className="space-y-2 flex flex-col items-center flex-1">
                                <div className="flex items-center gap-2">
                                    <span className="text-white text-3xl font-bold">
                                        {brandName}
                                    </span>
                                </div>
                                <p className="text-white/40 font-semibold text-center w-full max-w-sm sm:w-96 px-4 sm:px-0">
                                    {brandDescription}
                                </p>
                            </div>

                            {socialLinks.length > 0 && (
                                <div className="flex mb-8 mt-3 gap-4">
                                    {socialLinks.map((link, index) => (
                                        <a
                                            key={index}
                                            href={link.href}
                                            className="text-white/40 hover:text-white transition-colors"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <div className="w-6 h-6 hover:scale-110 duration-300">
                                                {link.icon}
                                            </div>
                                            <span className="sr-only">{link.label}</span>
                                        </a>
                                    ))}
                                </div>
                            )}

                            {navLinks.length > 0 && (
                                <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-white/40 max-w-full px-4">
                                    {navLinks.map((link, index) => (
                                        <a
                                            key={index}
                                            className="hover:text-white duration-300 hover:font-semibold"
                                            href={link.href}
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="mt-20 md:mt-24 flex flex-col gap-2 md:gap-1 items-center justify-center md:flex-row md:items-center md:justify-between px-4 md:px-0">
                        <p className="text-base text-white/40 text-center md:text-left">
                            ©{new Date().getFullYear()} {brandName}. All rights reserved.
                        </p>
                        {creatorName && creatorUrl && (
                            <nav className="flex gap-4">
                                <a
                                    href={creatorUrl}
                                    target="_blank"
                                    className="text-base text-white/40 hover:text-white transition-colors duration-300 hover:font-medium"
                                >
                                    Crafted by {creatorName}
                                </a>
                            </nav>
                        )}
                    </div>
                </div>

                {/* Large background text - FIXED */}
                <div
                    className="bg-gradient-to-b from-white/20 via-white/10 to-transparent bg-clip-text text-transparent leading-none absolute left-1/2 -translate-x-1/2 bottom-40 md:bottom-32 font-extrabold tracking-tighter pointer-events-none select-none text-center px-4"
                    style={{
                        fontSize: 'clamp(3rem, 12vw, 10rem)',
                        maxWidth: '95vw'
                    }}
                >
                    {brandName.toUpperCase()}
                </div>

                {/* Bottom logo removed */}

                {/* Bottom line */}
                <div className="absolute bottom-32 sm:bottom-34 backdrop-blur-sm h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent w-full left-1/2 -translate-x-1/2"></div>

                {/* Bottom shadow */}
                <div className="bg-gradient-to-t from-black via-black/80 blur-[1em] to-black/40 absolute bottom-28 w-full h-24"></div>
            </footer>
        </section>
    );
};
