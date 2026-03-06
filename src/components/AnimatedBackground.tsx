import React, { useMemo } from 'react';

const createStars = (count: number) => {
    let stars = '';
    for (let i = 0; i < count; i++) {
        const x = Math.floor(Math.random() * 2000);
        const y = Math.floor(Math.random() * 2000);
        stars += `${x}px ${y}px #FFF${i === count - 1 ? '' : ', '}`;
    }
    return stars;
};

const AnimatedBackground: React.FC = () => {
    const starsSmall = useMemo(() => createStars(700), []);
    const starsMedium = useMemo(() => createStars(200), []);
    const starsLarge = useMemo(() => createStars(50), []);

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-[var(--cd-bg)] pointer-events-none">
            <div
                className="star-layer w-[1px] h-[1px] animate-[animStar_50s_linear_infinite]"
                style={{ boxShadow: starsSmall }}
            ></div>
            <div
                className="star-layer w-[2px] h-[2px] animate-[animStar_100s_linear_infinite]"
                style={{ boxShadow: starsMedium }}
            ></div>
            <div
                className="star-layer w-[3px] h-[3px] animate-[animStar_150s_linear_infinite]"
                style={{ boxShadow: starsLarge }}
            ></div>

            {/* Optional grid overlay to enhance the Codedex/Retro vibe */}
            <div className="absolute inset-0 bg-grid opacity-20 mask-gradient-to-b mix-blend-overlay"></div>
        </div>
    );
};

export default AnimatedBackground;
