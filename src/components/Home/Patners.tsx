
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import contain1 from "../../assets/patner/Container1.png";
import contain2 from "../../assets/patner/Container2.png";
import contain3 from "../../assets/patner/Container3.png";
import contain4 from "../../assets/patner/Container4.png";
import contain5 from "../../assets/patner/Container5.png";
import contain6 from "../../assets/patner/Container6.png";
import abstractBg from "../../assets/AbstractDesign.png";

export interface CardItem {
    id: number;
    icon: string;
    title: string;
    description: string;
}

const ourWorkItems: CardItem[] = [
    {
        id: 1,
        icon: contain1,
        title: "ABC Tech Solutions",
        description: "A leading technology firm that trusted DigitX to develop their responsive website, showcasing their cutting-edge products and services.",
    },
    {
        id: 2,
        icon: contain2,
        title: "GreenEarth Eco Store",
        description: "DigitX collaborated with GreenEarth Eco Store to create an engaging e-commerce platform that promotes sustainable living and eco-friendly products."
    },
    {
        id: 3,
        icon: contain3,
        title: "HealthTech Innovations",
        description: "DigitX developed a user-centric mobile app for HealthTech Innovations, helping them revolutionize the way people track and manage their health.",
    },
    {
        id: 4,
        icon: contain4,
        title: "GlobalTech Solutions",
        description: "DigitX developed a user-centric mobile app for HealthTech Innovations, helping them revolutionize the way people track and manage their health.",
    },
    {
        id: 5,
        icon: contain5,
        title: "TechGuru Inc.",
        description: "DigitX developed a user-centric mobile app for HealthTech Innovations, helping them revolutionize the way people track and manage their health.",
    },
    {
        id: 6,
        icon: contain6,
        title: "ArtScape Gallery",
        description: "DigitX developed a user-centric mobile app for HealthTech Innovations, helping them revolutionize the way people track and manage their health.",
    }
];

const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.42, 0, 0.58, 1] as [number, number, number, number] // ✅
        }
    }
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.3,
        }
    }
};

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 60,
        scale: 0.8,
        rotateY: -15
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateY: 0,
        transition: {
            stiffness: 100,
            damping: 15,
            duration: 0.7
        }
    }
};

const ctaVariants = {
    hidden: {
        opacity: 0,
        scale: 0.9,
        y: 40
    },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            type: "spring" as const,  // ✅
            stiffness: 100,
            damping: 15,
            duration: 0.8
        }
    }
};

const Patners = () => {
    // ✅ typed refs
    const titleRef = useRef<HTMLDivElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const ctaRef = useRef<HTMLDivElement | null>(null);

    const isTitleInView = useInView(titleRef, { once: true, margin: "-100px" });
    const isContainerInView = useInView(containerRef, { once: true, margin: "-100px" });
    const isCtaInView = useInView(ctaRef, { once: true, margin: "-100px" });

    return (
        <section className="mt-16 md:mt-32 relative overflow-hidden">
            {/* Background floating elements */}
            <motion.div
                className="absolute top-10 right-10 w-36 h-36 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-full blur-xl"
                animate={{
                    x: [0, -40, 0],
                    y: [0, 30, 0],
                    scale: [1, 1.3, 1],
                }}
                transition={{
                    duration: 11,
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
                        Partners and Clients
                    </motion.span>
                </h1>

                <motion.p
                    className="text-[#808080] my-6 max-w-4xl mx-auto text-[14px] md:text-[18px] text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                >
                    We are grateful for the opportunity to work with esteemed partners and clients. Our strong relationships are a testament to our dedication and expertise in the digital realm.
                </motion.p>
            </motion.div>

            {/* Animated Partners Grid */}
            <motion.div
                ref={containerRef}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4"
                variants={containerVariants}
                initial="hidden"
                animate={isContainerInView ? "visible" : "hidden"}
            >
                {ourWorkItems.map(({ id, icon, title, description }, index) => (
                    <motion.div
                        key={id}
                        className="bg-gradient-to-b from-[#292929] to-black bg-cover bg-center rounded-xl shadow-lg p-6 text-white relative overflow-hidden group cursor-pointer"
                        style={{
                            backgroundImage: `url(${abstractBg})`,
                        }}
                        variants={cardVariants}
                        whileHover={{
                            scale: 1.03,
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
                            className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100"
                            transition={{ duration: 0.4 }}
                        />

                        <div className="flex flex-col gap-4 relative z-10">
                            {/* Company Logo */}
                            <motion.div
                                className="w-fit mx-auto"
                                initial={{ opacity: 0, scale: 0.5, rotate: 45 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.2 + (index * 0.1),
                                    type: "spring",
                                    stiffness: 150
                                }}
                                whileHover={{
                                    scale: 1.1,
                                    rotate: [0, -5, 5, 0],
                                    transition: { duration: 0.5 }
                                }}
                            >
                                <img
                                    src={icon}
                                    alt="company logo"
                                    className="m-auto max-w-24 max-h-24 object-contain"
                                />
                            </motion.div>

                            {/* Company Name */}
                            <motion.h3
                                className="text-[18px] md:text-[24px] font-semibold mt-8 text-center group-hover:text-cyan-200 transition-colors duration-300"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.4 + (index * 0.1)
                                }}
                            >
                                {title}
                            </motion.h3>

                            {/* Description */}
                            <motion.p
                                className="text-[#808080] text-[14px] md:text-[16px] md:px-8 group-hover:text-[#b0b0b0] transition-colors duration-300 leading-relaxed"
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.6 + (index * 0.1)
                                }}
                            >
                                {description}
                            </motion.p>
                        </div>

                        {/* Subtle border animation on hover */}
                        <motion.div
                            className="absolute inset-0 rounded-xl border-2 border-transparent opacity-0 group-hover:opacity-100"
                            style={{
                                background: "linear-gradient(45deg, rgba(6, 182, 212, 0.3), rgba(147, 51, 234, 0.3)) border-box"
                            }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>
                ))}
            </motion.div>

            {/* Animated CTA Section */}
            <motion.div
                ref={ctaRef}
                className="bg-gradient-to-b from-[#292929] to-black bg-cover bg-center rounded-xl shadow-lg p-6 text-white my-16 py-16 relative overflow-hidden"
                style={{
                    backgroundImage: `url(${abstractBg})`,
                }}
                variants={ctaVariants}
                initial="hidden"
                animate={isCtaInView ? "visible" : "hidden"}
                whileHover={{
                    scale: 1.01,
                    transition: { duration: 0.3 }
                }}
            >
                {/* Animated background pattern */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"
                    animate={{
                        background: [
                            "linear-gradient(0deg, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05), rgba(236, 72, 153, 0.05))",
                            "linear-gradient(120deg, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05), rgba(236, 72, 153, 0.05))",
                            "linear-gradient(240deg, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05), rgba(236, 72, 153, 0.05))",
                            "linear-gradient(360deg, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05), rgba(236, 72, 153, 0.05))"
                        ]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />

                <div className="flex flex-col gap-4 relative z-10">
                    {/* CTA Title */}
                    <motion.h3
                        className="text-[18px] md:text-[24px] font-semibold mt-8 text-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Ready to Transform Your Digital Presence?
                    </motion.h3>

                    {/* CTA Description */}
                    <motion.p
                        className="text-[#808080] text-[14px] md:text-[16px] md:px-8 max-w-4xl mx-auto text-center leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Take the first step towards digital success with DigitX by your side. Our team of experts is eager to craft tailored solutions that drive growth for your business. Whether you need a stunning website, a powerful mobile app, or a data-driven marketing campaign, we've got you covered. Let's embark on this transformative journey together.
                    </motion.p>

                    {/* CTA Buttons Section */}
                    <motion.div
                        className="mt-8"
                        initial={{ opacity: 0, y: 25 }}
                        animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <motion.p
                            className="my-4 text-center text-white text-lg"
                            initial={{ opacity: 0 }}
                            animate={isCtaInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                        >
                            Unlock Your Digital Potential Today
                        </motion.p>

                        <motion.div
                            className="flex items-center justify-center gap-4"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isCtaInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.6, delay: 1.0, type: "spring", stiffness: 100 }}
                        >
                            <motion.button
                                className="btn bg-white text-black px-6 py-3 rounded-full font-medium"
                                whileHover={{
                                    scale: 1.05,
                                    y: -2,
                                    boxShadow: "0 10px 25px rgba(255, 255, 255, 0.2)"
                                }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                Free Consultation
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Patners;