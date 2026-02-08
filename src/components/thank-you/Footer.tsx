'use client';

import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="w-full border-t border-white/5 bg-[#0a0a0a] py-8 md:py-12 mt-12">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex gap-6 text-sm text-white/40">
                    <a href="#" className="hover:text-white transition-colors">Impressum</a>
                    <a href="#" className="hover:text-white transition-colors">AGB</a>
                    <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
                    {/* Note: In a real app these would be Link components to actual routes */}
                </div>

                <div className="flex items-center gap-4">
                    <span className="text-white/20 text-xs text-right">
                        © 2025<br />All rights reserved
                    </span>
                    {/* Simplified "Design by" placeholder or just omit if no assets */}
                </div>
            </div>
        </footer>
    );
};
