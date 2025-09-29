// src/components / shared / SectionTitle.tsx
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface SectionTitleProps {
    title: string;
    subtitle?: string;
    description?: string;
    centered?: boolean;
    className?: string;
}

const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.42, 0, 0.58, 1] as [number, number, number, number]
        }
    }
};

export const SectionTitle: React.FC<SectionTitleProps> = ({
    title,
    subtitle,
    description,
    centered = true,
    className = ""
}) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            className={`${centered ? 'text-center' : ''} ${className}`}
            variants={titleVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            <h2 className="font-semibold text-[28px] md:text-[42px] text-white sora-bold">
                {title}{" "}
                {subtitle && (
                    <motion.span
                        className="text-[#666666]"
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        {subtitle}
                    </motion.span>
                )}
            </h2>

            {description && (
                <motion.p
                    className="text-[#808080] mt-4 max-w-3xl mx-auto text-[15px] md:text-[18px] leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {description}
                </motion.p>
            )}
        </motion.div>
    );
};