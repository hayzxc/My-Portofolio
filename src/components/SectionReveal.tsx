import { motion } from 'framer-motion';
import React from 'react';

interface SectionRevealProps {
    children: React.ReactNode;
    className?: string;
    /** Animation direction: 'up' | 'down' | 'left' | 'right' */
    direction?: 'up' | 'down' | 'left' | 'right';
    /** Delay before animation starts (seconds) */
    delay?: number;
    /** Duration of the animation (seconds) */
    duration?: number;
    /** Distance to travel in pixels */
    distance?: number;
    /** Viewport amount (0-1) that must be visible to trigger */
    threshold?: number;
}

const directionOffset = {
    up: { x: 0, y: 1 },
    down: { x: 0, y: -1 },
    left: { x: 1, y: 0 },
    right: { x: -1, y: 0 },
};

export default function SectionReveal({
    children,
    className = '',
    direction = 'up',
    delay = 0,
    duration = 0.6,
    distance = 40,
    threshold = 0.1,
}: SectionRevealProps) {
    const offset = directionOffset[direction];

    return (
        <motion.div
            initial={{
                opacity: 0,
                y: offset.y * distance,
                x: offset.x * distance,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                x: 0,
            }}
            viewport={{ once: true, amount: threshold }}
            transition={{
                duration,
                delay,
                ease: 'easeOut',
            }}
            style={{ willChange: 'opacity, transform' }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

/**
 * A wrapper for staggering children reveals within a section.
 * Wrap each child item with <RevealItem> inside a <StaggerReveal>.
 */
export function StaggerReveal({
    children,
    className = '',
    staggerDelay = 0.1,
    threshold = 0.1,
}: {
    children: React.ReactNode;
    className?: string;
    staggerDelay?: number;
    threshold?: number;
}) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: threshold }}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: staggerDelay,
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function RevealItem({
    children,
    className = '',
    direction = 'up',
    distance = 25,
}: {
    children: React.ReactNode;
    className?: string;
    direction?: 'up' | 'down' | 'left' | 'right';
    distance?: number;
}) {
    const offset = directionOffset[direction];

    return (
        <motion.div
            variants={{
                hidden: {
                    opacity: 0,
                    y: offset.y * distance,
                    x: offset.x * distance,
                },
                visible: {
                    opacity: 1,
                    y: 0,
                    x: 0,
                    transition: {
                        duration: 0.45,
                        ease: 'easeOut',
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
