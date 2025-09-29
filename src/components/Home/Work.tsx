
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import ourwork1 from "../../assets/ourworks/icon1.png";
import ourwork2 from "../../assets/ourworks/icon2.png";
import ourwork3 from "../../assets/ourworks/icon3.png";
import ourwork4 from "../../assets/ourworks/icon4.png";
import abstractBg from "../../assets/AbstractDesign.png";
import Arrowbutton from '../Arrowbutton';

export interface CardItem {
    id: number;
    icon: string;
    title: string;
    description: string;
}

interface OurWork extends CardItem {
    date: string;
    category: string
}

const ourWorkItems: OurWork[] = [
    {
        id: 1,
        icon: ourwork1,
        title: "Mobile App Development",
        category: "Category: Web Development.",
        date: "January 2022",
        description: "Witness our groundbreaking e-commerce platform that seamlessly connects buyers and sellers worldwide. With an intuitive user interface and secure payment gateways, this project revolutionizes online shopping.",
    },
    {
        id: 2,
        icon: ourwork2,
        title: "Mobile App for Enhanced Fitness",
        category: "Category: Mobile App Development.",
        date: "March 2022",
        description: "Our fitness app helps users stay fit and motivated with personalized workout plans and progress tracking. Its user-friendly design and comprehensive features make staying healthy an enjoyable experience."
    },
    {
        id: 3,
        icon: ourwork3,
        title: "Modern Corporate Website",
        category: "Category: Web Design.",
        date: "April 2022",
        description: "Check out our sleek and modern corporate website that showcases the client's brand and services. Its responsive design ensures a consistent experience across devices. ",
    },
    {
        id: 4,
        icon: ourwork4,
        title: "Digital Marketing Success Story",
        category: "Category: Digital Marketing.",
        date: "May 2022",
        description: "Discover how our data-driven digital marketing strategies boosted a client's online presence, resulting in a significant increase in website traffic and leads.",
    }
];

// Animation variants
import { type Variants } from "framer-motion";

// Animation variants
const titleVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.42, 0, 0.58, 1] // ✅ TS-safe cubic-bezier
        }
    }
};



const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3
        }
    }
};

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 80,
        rotateX: -15,
        scale: 0.9
    },
    visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        scale: 1,
        transition: {
            type: "spring" as const,
            stiffness: 100,
            damping: 15,
            duration: 0.8
        }
    }
};

const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            type: "spring" as const,
            stiffness: 200,
            damping: 15
        }
    }
};


const Work = () => {
    const titleRef = useRef(null);
    const containerRef = useRef(null);
    const buttonRef = useRef(null);

    const isTitleInView = useInView(titleRef, { once: true, margin: "-100px" });
    const isContainerInView = useInView(containerRef, { once: true, margin: "-100px" });
    const isButtonInView = useInView(buttonRef, { once: true, margin: "-50px" });

    return (
        <section className="mt-16 md:mt-32 relative overflow-hidden">
            {/* Background floating elements */}
            <motion.div
                className="absolute top-20 right-10 w-40 h-40 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-xl"
                animate={{
                    x: [0, 30, 0],
                    y: [0, -20, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Animated Title */}
            <motion.div
                ref={titleRef}
                variants={titleVariants}
                initial="hidden"
                animate={isTitleInView ? "visible" : "hidden"}
            >
                <h1 className="font-semibold text-[34px] md:text-[58px] text-white sora-bold text-center">
                    <motion.span
                        className="text-[#666666]"
                        initial={{ opacity: 0, x: -30 }}
                        animate={isTitleInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        Our{" "}
                    </motion.span>
                    <motion.span
                        initial={{ opacity: 0, x: 30 }}
                        animate={isTitleInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        Works
                    </motion.span>
                </h1>

                <motion.p
                    className="text-[#808080] my-6 max-w-4xl mx-auto text-[14px] md:text-[18px] text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                >
                    Witness the brilliance of our previous projects. Our portfolio showcases the successful collaborations we've had with diverse clients across various industries. Let our work speak for itself.
                </motion.p>
            </motion.div>

            {/* Animated Cards Grid */}
            <motion.div
                ref={containerRef}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4"
                variants={containerVariants}
                initial="hidden"
                animate={isContainerInView ? "visible" : "hidden"}
            >
                {ourWorkItems.map(({ id, icon, title, description, category, date }, index) => (
                    <motion.div
                        key={id}
                        className="relative bg-cover bg-center rounded-xl shadow-lg p-6 text-white overflow-hidden group cursor-pointer"
                        style={{
                            backgroundImage: `url(${abstractBg})`,
                        }}
                        variants={cardVariants}
                        whileHover={{
                            scale: 1.02,
                            y: -8,
                            transition: {
                                type: "spring",
                                stiffness: 300,
                                damping: 20
                            }
                        }}
                        custom={index}
                    >
                        {/* Animated gradient overlay */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/10 to-pink-600/10 rounded-xl opacity-0 group-hover:opacity-100"
                            transition={{ duration: 0.4 }}
                        />

                        <div className="flex flex-col gap-4 relative z-10">
                            {/* Image with button overlay */}
                            <div className="relative w-fit mx-auto">
                                <motion.img
                                    src={icon}
                                    alt="ouricon"
                                    className="block w-full max-w-sm"
                                    variants={imageVariants}
                                    whileHover={{
                                        scale: 1.05,
                                        transition: { duration: 0.3 }
                                    }}
                                />

                                {/* Animated button overlay */}
                                <motion.div
                                    className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 max-w-[90vw]"
                                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: 0.4 + (index * 0.1),
                                        type: "spring",
                                        stiffness: 200
                                    }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Arrowbutton>
                                        <span className="whitespace-nowrap text-xs sm:text-sm md:text-base">
                                            View Project Details
                                        </span>
                                    </Arrowbutton>
                                </motion.div>
                            </div>

                            {/* Title */}
                            <motion.h3
                                className="text-[18px] md:text-[24px] font-semibold mt-8 text-center"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.6 + (index * 0.1)
                                }}
                            >
                                {title}
                            </motion.h3>

                            {/* Category and Date */}
                            <motion.div
                                className="md:flex md:items-center md:justify-between text-[14px] gap-2 md:gap-0 font-light md:font-normal md:px-8"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.7 + (index * 0.1)
                                }}
                            >
                                <p className="text-[#b0b0b0] group-hover:text-white transition-colors duration-300">
                                    {category}
                                </p>
                                <p className="text-[#888] group-hover:text-[#ccc] transition-colors duration-300">
                                    {date}
                                </p>
                            </motion.div>

                            {/* Description */}
                            <motion.p
                                className="text-[#808080] text-[14px] md:text-[16px] md:px-8 group-hover:text-[#b0b0b0] transition-colors duration-300"
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.8 + (index * 0.1)
                                }}
                            >
                                {description}
                            </motion.p>
                        </div>

                        {/* Subtle border animation on hover */}
                        <motion.div
                            className="absolute inset-0 rounded-xl border-2 border-transparent opacity-0 group-hover:opacity-100"
                            style={{
                                background: "linear-gradient(45deg, rgba(147, 51, 234, 0.2), rgba(59, 130, 246, 0.2)) border-box"
                            }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>
                ))}
            </motion.div>

            {/* Animated "View All Projects" Button */}
            <motion.div
                ref={buttonRef}
                className="py-8 flex items-center justify-center"
                initial={{ opacity: 0, y: 30 }}
                animate={isButtonInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <Arrowbutton>View All Projects</Arrowbutton>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Work;