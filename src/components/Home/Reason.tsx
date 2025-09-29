// import icon1 from "../../assets/random-icon/Icon1.png";
// import icon2 from "../../assets/random-icon/Icon2.png";
// import icon3 from "../../assets/random-icon/Icon3.png";
// import icon4 from "../../assets/random-icon/Icon4.png";
// import icon5 from "../../assets/random-icon/Icon5.png";
// import icon6 from "../../assets/random-icon/Icon.png";
// import LearnMore from "../LearnMore";







// export interface CardItem {
//     id: number;
//     icon: string;
//     title: string;
//     description: string;
// }



// const cardItems: CardItem[] = [
//     {
//         id: 1,
//         icon: icon6,
//         title: "Expertise That Drives Results",
//         description: "Our team of seasoned professionals brings years of experience and expertise to the table.",
//     },
//     {
//         id: 2,
//         icon: icon1,
//         title: "Tailored Business Solutions ",
//         description: "We understand that every business is unique. That's why our solutions are customized.",
//     },
//     {
//         id: 3,
//         icon: icon2,
//         title: "Cutting-Edge Web Design",
//         description: "Leave a lasting impression on your audience with our top-notch web design services.",
//     },
//     {
//         id: 4,
//         icon: icon3,
//         title: "Mobile-First Approach",
//         description: "In today's mobile-centric world, we prioritize mobile-first design to ensure your website.",
//     },
//     {
//         id: 5,
//         icon: icon4,
//         title: "Marketing Strategies",
//         description: "Our data-driven marketing strategies allow us to target the right audience with precision.",
//     },
//     {
//         id: 6,
//         icon: icon5,
//         title: "Search Engine Optimization",
//         description: "(SEO) Mastery Boost your online visibility with our expert SEO techniques.",
//     },
// ];


// const Reason = () => {
//   return (
//     <div className="mt-16 md:mt-32 mx-4 md:mx-12">
//           <section>
//               <h1 className="font-semibold text-[34px] md:text-[58px] text-white sora-bold flex flex-col items-center justify-center text-center">
//                   <p>Reasons to Choose Aerassky for</p>
//                   <p className="text-[#666666]"> Your Digital Journey</p>
//               </h1>
//               <p className="text-[#808080] mt-6 max-w-4xl mx-auto text-[14px] md:text-[18px] text-center">
//                   Partnering with DigitX offers a multitude of advantages.
//                   Experience increased brand visibility, improved customer engagement, and higher ROI. Our tailored solutions are designed to meet your unique business needs, ensuring lasting success.
//               </p>


//               <div className="mt-8 md:mt-12 lg:mt-16 md:mx-8 border-y border-[#1F1F1F]">
//                   <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 ">
//                       {cardItems.map((card) => (
//                           <div key={card.id} className="flex flex-col justify-center items-center text-center px-4 my-4 md:border-x border-[#1F1F1F] p-4">
//                               <img src={card.icon} alt={card.title} className="mb-4" />
//                               <h3 className="text-white text-[18px] md:text-[24px] mt-4">{card.title}</h3>
//                               <p className="text-[#808080] mt-2 text-[14px] md:text-[18px]">
//                                   {card.description}
//                               </p>
//                               <LearnMore />
//                           </div>
//                       ))}


//                   </div>
//               </div>
//           </section>
//     </div>
//   )
// }

// export default Reason




import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import icon1 from "../../assets/random-icon/Icon1.png";
import icon2 from "../../assets/random-icon/Icon2.png";
import icon3 from "../../assets/random-icon/Icon3.png";
import icon4 from "../../assets/random-icon/Icon4.png";
import icon5 from "../../assets/random-icon/Icon5.png";
import icon6 from "../../assets/random-icon/Icon.png";
import LearnMore from "../LearnMore";

export interface CardItem {
    id: number;
    icon: string;
    title: string;
    description: string;
}

const cardItems: CardItem[] = [
    {
        id: 1,
        icon: icon6,
        title: "Expertise That Drives Results",
        description: "Our team of seasoned professionals brings years of experience and expertise to the table.",
    },
    {
        id: 2,
        icon: icon1,
        title: "Tailored Business Solutions ",
        description: "We understand that every business is unique. That's why our solutions are customized.",
    },
    {
        id: 3,
        icon: icon2,
        title: "Cutting-Edge Web Design",
        description: "Leave a lasting impression on your audience with our top-notch web design services.",
    },
    {
        id: 4,
        icon: icon3,
        title: "Mobile-First Approach",
        description: "In today's mobile-centric world, we prioritize mobile-first design to ensure your website.",
    },
    {
        id: 5,
        icon: icon4,
        title: "Marketing Strategies",
        description: "Our data-driven marketing strategies allow us to target the right audience with precision.",
    },
    {
        id: 6,
        icon: icon5,
        title: "Search Engine Optimization",
        description: "(SEO) Mastery Boost your online visibility with our expert SEO techniques.",
    },
];

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        }
    }
};

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 50,
        scale: 0.8
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring" as const,
            stiffness: 100,
            damping: 12,
            duration: 0.6
        }
    }
};

const titleVariants = {
    hidden: {
        opacity: 0,
        y: 30
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut" as const
        }
    }
};


const Reason = () => {
    const ref = useRef(null);
    const titleRef = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const isTitleInView = useInView(titleRef, { once: true, margin: "-50px" });

    return (
        <div className="mt-16 md:mt-32 mx-4 md:mx-12">
            <section>
                {/* Animated Title */}
                <motion.div
                    ref={titleRef}
                    variants={titleVariants}
                    initial="hidden"
                    animate={isTitleInView ? "visible" : "hidden"}
                >
                    <h1 className="font-semibold text-[34px] md:text-[58px] text-white sora-bold flex flex-col items-center justify-center text-center">
                        <motion.p
                            initial={{ opacity: 0, x: -50 }}
                            animate={isTitleInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Reasons to Choose Aerassky for
                        </motion.p>
                        <motion.p
                            className="text-[#666666]"
                            initial={{ opacity: 0, x: 50 }}
                            animate={isTitleInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            Your Digital Journey
                        </motion.p>
                    </h1>

                    <motion.p
                        className="text-[#808080] mt-6 max-w-4xl mx-auto text-[14px] md:text-[18px] text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        Partnering with DigitX offers a multitude of advantages.
                        Experience increased brand visibility, improved customer engagement, and higher ROI. Our tailored solutions are designed to meet your unique business needs, ensuring lasting success.
                    </motion.p>
                </motion.div>

                {/* Animated Cards Grid */}
                <div className="mt-8 md:mt-12 lg:mt-16 md:mx-8 border-y border-[#1F1F1F]">
                    <motion.div
                        ref={ref}
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                    >
                        {cardItems.map((card) => (
                            <motion.div
                                key={card.id}
                                variants={cardVariants}
                                whileHover={{
                                    y: -8,
                                    scale: 1.02,
                                    transition: { type: "spring", stiffness: 300 }
                                }}
                                className="flex flex-col justify-center items-center text-center px-4 my-4 md:border-x border-[#1F1F1F] p-4 cursor-pointer"
                            >
                                <motion.img
                                    src={card.icon}
                                    alt={card.title}
                                    className="mb-4"
                                    whileHover={{
                                        rotate: [0, -10, 10, -5, 5, 0],
                                        transition: { duration: 0.5 }
                                    }}
                                />
                                <motion.h3
                                    className="text-white text-[18px] md:text-[24px] mt-4"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    {card.title}
                                </motion.h3>
                                <motion.p
                                    className="text-[#808080] mt-2 text-[14px] md:text-[18px]"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    {card.description}
                                </motion.p>
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <LearnMore />
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Reason;