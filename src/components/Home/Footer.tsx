
import { motion, useInView,type Variants } from "framer-motion";
import { useRef } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import logo from "../../assets/Logo.png";

const footerItems = [
    { title: "Home", link: "/", subtitle: ["Benefits", "Our Testimonials", "Partners"] },
    { title: "Service", link: "/services", subtitle: ["Consulting", "Sales", "Support"] },
    { title: "Project", link: "/projects", subtitle: ["Web Development", "App Development", "SEO"] },
    { title: "About Us", link: "/about", subtitle: ["Our Story", "Team", "Careers"] },
    { title: "Career", link: "/career", subtitle: ["Job Openings", "Internships", "Culture"] },
    { title: "Blog", link: "/blog", subtitle: ["Latest Posts", "Categories", "Archives"] },
];

/**
 * NOTE:
 * - Using `as any` for `ease` is a pragmatic TS fix so you can keep named easings (e.g. "easeOut").
 * - For spring animations we use a literal `type: "spring" as const` to satisfy TS.
 * - We removed invalid `hover` inside transition and put hover-specific transition into whileHover targets.
 */

/* --------- Variants (typed) ---------- */
const headerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            // cast easing so TS accepts the named easing string
            ease: "easeOut" as any,
        },
    },
};

const logoVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut" as any,
        },
    },
};

const socialContainerVariants: Variants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut" as any,
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const socialIconVariants: Variants = {
    hidden: { opacity: 0, scale: 0, rotate: 45 },
    visible: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: {
            // literal 'spring' and numeric props satisfy TS
            type: "spring" as const,
            stiffness: 200,
            damping: 15,
        },
    },
};

const footerLinksVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.4,
        },
    },
};

const linkColumnVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut" as any,
        },
    },
};

const bottomBarVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut" as any,
            delay: 0.8,
        },
    },
};

const Footer = () => {
    // typed refs for useInView
    const headerRef = useRef<HTMLDivElement | null>(null);
    const footerRef = useRef<HTMLDivElement | null>(null);
    const bottomRef = useRef<HTMLDivElement | null>(null);

    const isHeaderInView = useInView(headerRef, { once: true, margin: "-50px" });
    const isFooterInView = useInView(footerRef, { once: true, margin: "-100px" });
    const isBottomInView = useInView(bottomRef, { once: true, margin: "-50px" });

    return (
        <div className="relative overflow-hidden">
            {/* Background floating elements */}
            <motion.div
                className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-full blur-xl"
                animate={{
                    x: [0, -50, 0],
                    y: [0, 40, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    // cast easing so TS doesn't complain
                    ease: "easeInOut" as any,
                }}
            />

            {/* Header Section with Logo and Social Media */}
            <motion.div
                ref={headerRef}
                className="mt-24 md:mt-48 flex items-center justify-between mx-6"
                variants={headerVariants}
                initial="hidden"
                animate={isHeaderInView ? "visible" : "hidden"}
            >
                {/* Logo */}
                <motion.div variants={logoVariants} whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                    <img src={logo} alt="logo" className="max-w-32 md:max-w-40" />
                </motion.div>

                {/* Social Media Section */}
                <motion.div
                    className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 md:justify-end"
                    variants={socialContainerVariants}
                >
                    <motion.p
                        className="text-white font-light text-sm"
                        initial={{ opacity: 0, y: 10 }}
                        animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        Follow Us On Social Media
                    </motion.p>

                    <div className="flex gap-4 items-center">
                        {[
                            { icon: FaLinkedin, delay: 0.1, color: "from-blue-600 to-blue-800" },
                            { icon: FaSquareInstagram, delay: 0.2, color: "from-pink-600 to-purple-600" },
                            { icon: FaTwitter, delay: 0.3, color: "from-sky-500 to-blue-600" },
                        ].map(({ icon: Icon, delay, color }, index) => (
                            <motion.div
                                key={index}
                                className={`bg-gradient-to-b ${color} p-4 w-fit text-white text-xl rounded-full cursor-pointer`}
                                variants={socialIconVariants}
                                // move hover-specific transition into the hover target
                                whileHover={{
                                    scale: 1.2,
                                    rotate: [0, -10, 10, 0],
                                    y: -3,
                                    boxShadow: "0 10px 25px rgba(255, 255, 255, 0.1)",
                                    transition: { duration: 0.3 },
                                }}
                                whileTap={{ scale: 0.9 }}
                                // keep the visible-state spring separately (handled by variants)
                                custom={delay}
                            >
                                <Icon />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>

            {/* Footer Links Section */}
            <motion.footer
                ref={footerRef}
                className="text-white py-12 px-4 my-12"
                variants={footerLinksVariants}
                initial="hidden"
                animate={isFooterInView ? "visible" : "hidden"}
            >
                <div className="max-w-6xl mx-auto">
                    <motion.div className="grid grid-cols-2 md:grid-cols-6 gap-6 text-center md:text-left" variants={footerLinksVariants}>
                        {footerItems.map((item, index) => (
                            <motion.div key={index} variants={linkColumnVariants} whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                                {/* Main Link */}
                                <motion.a
                                    href={item.link}
                                    className="text-base font-medium hover:underline block mb-3"
                                    whileHover={{
                                        color: "#ffffff",
                                        scale: 1.02,
                                        transition: { duration: 0.2 },
                                    }}
                                >
                                    {item.title}
                                </motion.a>

                                {/* Sub Links */}
                                <ul className="mt-2 space-y-1">
                                    {item.subtitle.map((subItem, subIndex) => (
                                        <motion.li
                                            key={subIndex}
                                            className="text-sm text-[#8C8C8C] hover:text-white transition-colors duration-200"
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={isFooterInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                                            transition={{
                                                duration: 0.4,
                                                delay: 0.6 + index * 0.1 + subIndex * 0.05,
                                            }}
                                            whileHover={{ x: 2 }}
                                        >
                                            <a href={`${item.link}#${subItem.toLowerCase().replace(/\s+/g, "-")}`} className="hover:underline">
                                                {subItem}
                                            </a>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.footer>

            {/* Bottom Bar */}
            <motion.div
                ref={bottomRef}
                className="text-[#8C8C8C] text-xs md:text-sm py-6 px-4 flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 pb-16 border-t border-[#262626]"
                variants={bottomBarVariants}
                initial="hidden"
                animate={isBottomInView ? "visible" : "hidden"}
            >
                <motion.p
                    className="text-center md:text-base"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isBottomInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    © {new Date().getFullYear()} Aerassky. All rights reserved.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isBottomInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Version 1.0
                </motion.p>

                <motion.div
                    className="flex items-center justify-center gap-2 md:gap-6"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isBottomInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    {["Privacy", "Terms & Condition", "Cookie and Policies"].map((item, index) => (
                        <motion.p
                            key={index}
                            className="hover:text-white transition-colors cursor-pointer"
                            whileHover={{ y: -1, color: "#ffffff" }}
                            transition={{ duration: 0.2 }}
                            initial={{ opacity: 0 }}
                            animate={isBottomInView ? { opacity: 1 } : { opacity: 0 }}
                            style={{ transitionDelay: `${0.4 + index * 0.1}s` }}
                        >
                            {item}
                        </motion.p>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Footer;
