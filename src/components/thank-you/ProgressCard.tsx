'use client';

import React from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ProgressCardProps {
    /** The primary numerical value to display. */
    value: number;
    /** The progress percentage (0-100) for the radial bar. */
    progress: number;
    /** Optional className. */
    className?: string;
}

export const ProgressCard: React.FC<ProgressCardProps> = ({
    value,
    progress,
    className,
}) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const progressValue = useMotionValue(0);

    React.useEffect(() => {
        // Animate the numerical value
        const valueAnimation = animate(count, value, {
            duration: 1.5,
            ease: [0.43, 0.13, 0.23, 0.96],
        });

        // Animate the progress bar
        const progressAnimation = animate(progressValue, progress, {
            duration: 1.5,
            ease: [0.43, 0.13, 0.23, 0.96],
        });

        return () => {
            valueAnimation.stop();
            progressAnimation.stop();
        };
    }, [value, progress, count, progressValue]);

    // SVG circle properties
    const radius = 80;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = useTransform(
        progressValue,
        (v) => circumference - (v / 100) * circumference
    );

    return (
        <div
            className={cn(
                'relative flex w-full max-w-[200px] flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-6 text-white shadow-2xl backdrop-blur-sm overflow-hidden',
                className
            )}
        >
            {/* Subtle decorative glow */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-32 h-32 bg-green-500/20 rounded-full blur-2xl -z-10" />

            {/* Radial Progress and Value */}
            <div className="relative flex h-28 w-28 items-center justify-center">
                <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 200 200"
                    className="-rotate-90"
                    role="progressbar"
                    aria-valuenow={progress}
                    aria-valuemin={0}
                    aria-valuemax={100}
                >
                    {/* Background track */}
                    <circle
                        cx="100"
                        cy="100"
                        r={radius}
                        strokeWidth="12"
                        fill="transparent"
                        className="stroke-white/10"
                        strokeDasharray="8 12" // Creates the segmented look
                        strokeLinecap="round"
                    />
                    {/* Foreground progress */}
                    <motion.circle
                        cx="100"
                        cy="100"
                        r={radius}
                        strokeWidth="12"
                        fill="transparent"
                        className="stroke-green-500"
                        strokeDasharray={`${circumference} ${circumference}`}
                        strokeLinecap="round"
                        style={{ strokeDashoffset }}
                    />
                </svg>

                {/* Central Text Content */}
                <div className="absolute flex flex-col items-center justify-center">
                    <div className="flex items-baseline">
                        <motion.span className="text-4xl font-bold tracking-tighter text-white">
                            {rounded}
                        </motion.span>
                        <span className="text-lg font-bold text-white/60 ml-0.5">%</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
