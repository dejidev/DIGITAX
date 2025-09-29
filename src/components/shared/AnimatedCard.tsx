// src/components/shared/AnimatedCard.tsx
import { motion, useInView } from 'framer-motion';
import { useRef, type ReactNode, } from 'react';

interface AnimatedCardProps {
    children: ReactNode;
    className?: string;
    hoverScale?: number;
    delay?: number;
}

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 40,
        scale: 0.95
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring" as const,
            stiffness: 80,
            damping: 12,
            duration: 0.6
        }
    }
};

export const AnimatedCard: React.FC<AnimatedCardProps> = ({
    children,
    className = "",
    hoverScale = 1.02,
    delay = 0
}) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            className={className}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay }}
            whileHover={{
                scale: hoverScale,
                transition: { duration: 0.2 }
            }}
        >
            {children}
        </motion.div>
    );
};
