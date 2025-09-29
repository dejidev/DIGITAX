// src/components/shared/PageHero.tsx
import { motion } from 'framer-motion';
// import { useRef } from 'react';

interface PageHeroProps {
    title: string;
    subtitle?: string;
    description: string;
    ctaText?: string;
    onCtaClick?: () => void;
    backgroundElements?: boolean;
}

const floatingVariants = {
    animate: {
        y: [-15, 15, -15],
        x: [-8, 8, -8],
        transition: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut" as const
        }
    }
};

const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2,
        }
    }
};

const titleVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring" as const,
            stiffness: 100,
            damping: 12,
            duration: 0.8
        }
    }
};

const subtitleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut" as const
        }
    }
};

export const PageHero: React.FC<PageHeroProps> = ({
    title,
    subtitle,
    description,
    ctaText,
    onCtaClick,
    backgroundElements = true
}) => {
    return (
        <section className="min-h-[80vh] relative z-20 mx-4 md:mx-12 overflow-hidden">
            {/* Background floating elements */}
            {backgroundElements && (
                <>
                    <motion.div
                        variants={floatingVariants}
                        animate="animate"
                        className="absolute top-32 right-16 w-28 h-28 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl"
                    />
                    <motion.div
                        variants={floatingVariants}
                        animate="animate"
                        className="absolute bottom-32 left-16 w-36 h-36 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-xl"
                        style={{ animationDelay: '4s' }}
                    />
                </>
            )}

            <motion.div
                className="w-full min-h-[60vh] flex py-24 items-center justify-center px-4 mt-8 md:mt-12 text-center"
                variants={heroVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="mx-auto relative z-10 max-w-4xl">
                    {/* Main Title */}
                    <motion.h1
                        className="font-semibold text-[34px] md:text-[58px] text-white sora-bold"
                        variants={titleVariants}
                    >
                        {title}{" "}
                        {subtitle && (
                            <motion.span
                                className="text-[#666666]"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 1.2 }}
                            >
                                {subtitle}
                            </motion.span>
                        )}
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        className="text-[#808080] mt-8 max-w-3xl mx-auto text-[16px] md:text-[20px] leading-relaxed"
                        variants={subtitleVariants}
                    >
                        {description}
                    </motion.p>

                    {/* CTA Button */}
                    {ctaText && onCtaClick && (
                        <motion.div
                            className="mt-12"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.8 }}
                        >
                            <motion.button
                                className="btn text-white bg-transparent border border-[#404040] hover:border-[#666666]"
                                whileHover={{
                                    scale: 1.02,
                                    y: -2,
                                    backgroundColor: "rgba(64, 64, 64, 0.1)"
                                }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                onClick={onCtaClick}
                            >
                                {ctaText}
                            </motion.button>
                        </motion.div>
                    )}
                </div>
            </motion.div>
        </section>
    );
};
