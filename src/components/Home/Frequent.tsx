// import React, {useState} from "react";
// type AccordionItem = {
//     id: number;
//     question: string;
//     answer: string;
// };

// const accordionData: AccordionItem[] = [
//     {
//         id: 1,
//         question: "What services does DigitX offer?",
//         answer: "We offer web development, digital strategy, and marketing services.",
//     },
//     {
//         id: 2,
//         question: "How long does a typical project take?",
//         answer: "Timelines vary, but most projects take 4–6 weeks depending on scope.",
//     },
//     {
//         id: 3,
//         question: "Do you provide post-launch support?",
//         answer: "Yes, we provide maintenance, updates, and technical support.",
//     },
//     {
//         id: 4,
//         question: "Can you help with branding?",
//         answer: "Yes, we assist with logos, brand identity, and visual design.",
//     },
//     {
//         id: 5,
//         question: "What services does DigitX offer?",
//         answer: "We offer web development, digital strategy, and marketing services.",
//     },
//     {
//         id: 6,
//         question: "How long does a typical project take?",
//         answer: "Timelines vary, but most projects take 4–6 weeks depending on scope.",
//     },
//     {
//         id: 7,
//         question: "Do you provide post-launch support?",
//         answer: "Yes, we provide maintenance, updates, and technical support.",
//     },
//     {
//         id: 8,
//         question: "Can you help with branding?",
//         answer: "Yes, we assist with logos, brand identity, and visual design.",
//     },
// ];


// const Frequent: React.FC = () => {
//     const [openIndex, setOpenIndex] = useState<number | null>(null);

//     const toggle = (id: number) => {
//         setOpenIndex(prev => (prev === id ? null : id));
//     };
//     return (
//         < section className="mt-16 md:mt-32 " >
//             <h1 className="font-semibold text-[34px] md:text-[58px] text-white sora-bold text-center">
//                 <span className="text-[#666666]">Frequently </span>Asked Questions
//             </h1>
//             <p className="text-[#808080] my-6 max-w-4xl mx-auto text-[14px] md:text-[18px] text-center">
//                 Got questions? We've got answers. Check out our frequently asked questions section to find valuable insights into our processes, pricing, and more. Transparency is at the core of our client interactions.
//             </p>





//             <div className="max-w-xs md:max-w-xl flex items-center mx-auto mt-8  bg-[#1A1A1A] border border-[#262626] rounded-full px-4 py-2 ">

//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5 text-[#666666] mr-2"
//                 >
//                     <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
//                 </svg>

//                 <input
//                     type="text"
//                     placeholder="Search"
//                     className="bg-transparent text-[#666666] placeholder-[#666666] outline-none w-full"
//                 />
//             </div>



//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-8 md:py-16">
//                 {accordionData.map(({ id, question, answer }) => {
//                     const isOpen = openIndex === id;
//                     return (
//                         <div
//                             key={id}
//                             className="  p-4 text-white  "
//                         >
//                             <div
//                                 className="flex justify-between items-center cursor-pointer"
//                                 onClick={() => toggle(id)}
//                             >
//                                 <h3 className="text-white text-base md:text-lg">{question}</h3>
//                                 <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#262626] text-xl font-bold">
//                                     {isOpen ? "−" : "+"}
//                                 </div>
//                             </div>
//                             {isOpen && (
//                                 <p className="text-[#8C8C8C] mt-3 text-sm md:text-base">{answer}</p>
//                             )}
//                         </div>
//                     );
//                 })}
//             </div>
//         </section >

//     )
// }

// export default Frequent;











// import React, { useState, useRef } from "react";
// import { motion, useInView, AnimatePresence } from 'framer-motion';

// type AccordionItem = {
//     id: number;
//     question: string;
//     answer: string;
// };

// const accordionData: AccordionItem[] = [
//     {
//         id: 1,
//         question: "What services does DigitX offer?",
//         answer: "We offer web development, digital strategy, and marketing services.",
//     },
//     {
//         id: 2,
//         question: "How long does a typical project take?",
//         answer: "Timelines vary, but most projects take 4–6 weeks depending on scope.",
//     },
//     {
//         id: 3,
//         question: "Do you provide post-launch support?",
//         answer: "Yes, we provide maintenance, updates, and technical support.",
//     },
//     {
//         id: 4,
//         question: "Can you help with branding?",
//         answer: "Yes, we assist with logos, brand identity, and visual design.",
//     },
//     {
//         id: 5,
//         question: "What services does DigitX offer?",
//         answer: "We offer web development, digital strategy, and marketing services.",
//     },
//     {
//         id: 6,
//         question: "How long does a typical project take?",
//         answer: "Timelines vary, but most projects take 4–6 weeks depending on scope.",
//     },
//     {
//         id: 7,
//         question: "Do you provide post-launch support?",
//         answer: "Yes, we provide maintenance, updates, and technical support.",
//     },
//     {
//         id: 8,
//         question: "Can you help with branding?",
//         answer: "Yes, we assist with logos, brand identity, and visual design.",
//     },
// ];

// // Animation variants
// const titleVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//         opacity: 1,
//         y: 0,
//         transition: {
//             duration: 0.8,
//             ease: "easeOut"
//         }
//     }
// };

// const searchVariants = {
//     hidden: { opacity: 0, y: 30, scale: 0.9 },
//     visible: {
//         opacity: 1,
//         y: 0,
//         scale: 1,
//         transition: {
//             duration: 0.6,
//             ease: "easeOut",
//             delay: 0.3
//         }
//     }
// };

// const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//         opacity: 1,
//         transition: {
//             staggerChildren: 0.1,
//             delayChildren: 0.5,
//         }
//     }
// };

// const accordionVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//         opacity: 1,
//         y: 0,
//         transition: {
//             duration: 0.5,
//             ease: "easeOut"
//         }
//     }
// };

// const contentVariants = {
//     hidden: {
//         opacity: 0,
//         height: 0,
//         y: -10
//     },
//     visible: {
//         opacity: 1,
//         height: "auto",
//         y: 0,
//         transition: {
//             duration: 0.4,
//             ease: "easeInOut",
//             opacity: { delay: 0.1 }
//         }
//     },
//     exit: {
//         opacity: 0,
//         height: 0,
//         y: -10,
//         transition: {
//             duration: 0.3,
//             ease: "easeInOut"
//         }
//     }
// };

// const iconVariants = {
//     closed: { rotate: 0 },
//     open: { rotate: 180 },
//     hover: { scale: 1.1 }
// };

// const Frequent: React.FC = () => {
//     const [openIndex, setOpenIndex] = useState<number | null>(null);
//     const [searchTerm, setSearchTerm] = useState("");

//     const titleRef = useRef(null);
//     const searchRef = useRef(null);
//     const containerRef = useRef(null);

//     const isTitleInView = useInView(titleRef, { once: true, margin: "-100px" });
//     const isSearchInView = useInView(searchRef, { once: true, margin: "-50px" });
//     const isContainerInView = useInView(containerRef, { once: true, margin: "-100px" });

//     const toggle = (id: number) => {
//         setOpenIndex(prev => (prev === id ? null : id));
//     };

//     // Filter FAQs based on search term
//     const filteredAccordionData = accordionData.filter(item =>
//         item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         item.answer.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     return (
//         <section className="mt-16 md:mt-32 relative overflow-hidden">
//             {/* Background floating elements */}
//             <motion.div
//                 className="absolute top-20 left-10 w-28 h-28 bg-gradient-to-r from-green-500/5 to-blue-500/5 rounded-full blur-xl"
//                 animate={{
//                     x: [0, 50, 0],
//                     y: [0, -40, 0],
//                     scale: [1, 1.4, 1],
//                 }}
//                 transition={{
//                     duration: 12,
//                     repeat: Infinity,
//                     ease: "easeInOut"
//                 }}
//             />

//             {/* Animated Title */}
//             <motion.div
//                 ref={titleRef}
//                 variants={titleVariants}
//                 initial="hidden"
//                 animate={isTitleInView ? "visible" : "hidden"}
//             >
//                 <h1 className="font-semibold text-[34px] md:text-[58px] text-white sora-bold text-center">
//                     <motion.span
//                         className="text-[#666666]"
//                         initial={{ opacity: 0, x: -30 }}
//                         animate={isTitleInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
//                         transition={{ duration: 0.6, delay: 0.3 }}
//                     >
//                         Frequently{" "}
//                     </motion.span>
//                     <motion.span
//                         initial={{ opacity: 0, x: 30 }}
//                         animate={isTitleInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
//                         transition={{ duration: 0.6, delay: 0.5 }}
//                     >
//                         Asked Questions
//                     </motion.span>
//                 </h1>

//                 <motion.p
//                     className="text-[#808080] my-6 max-w-4xl mx-auto text-[14px] md:text-[18px] text-center"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//                     transition={{ duration: 0.6, delay: 0.7 }}
//                 >
//                     Got questions? We've got answers. Check out our frequently asked questions section to find valuable insights into our processes, pricing, and more. Transparency is at the core of our client interactions.
//                 </motion.p>
//             </motion.div>

//             {/* Animated Search Box */}
//             <motion.div
//                 ref={searchRef}
//                 className="max-w-xs md:max-w-xl flex items-center mx-auto mt-8 bg-[#1A1A1A] border border-[#262626] rounded-full px-4 py-2"
//                 variants={searchVariants}
//                 initial="hidden"
//                 animate={isSearchInView ? "visible" : "hidden"}
//                 whileHover={{
//                     borderColor: "#404040",
//                     boxShadow: "0 0 20px rgba(64, 64, 64, 0.2)"
//                 }}
//                 transition={{ duration: 0.3 }}
//             >
//                 <motion.svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth="1.5"
//                     stroke="currentColor"
//                     className="h-5 w-5 text-[#666666] mr-2"
//                     whileHover={{ scale: 1.1, rotate: 10 }}
//                     transition={{ duration: 0.2 }}
//                 >
//                     <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
//                 </motion.svg>

//                 <input
//                     type="text"
//                     placeholder="Search"
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                     className="bg-transparent text-[#666666] placeholder-[#666666] outline-none w-full"
//                 />
//             </motion.div>

//             {/* Animated FAQ Grid */}
//             <motion.div
//                 ref={containerRef}
//                 className="grid grid-cols-1 md:grid-cols-2 gap-4 py-8 md:py-16"
//                 variants={containerVariants}
//                 initial="hidden"
//                 animate={isContainerInView ? "visible" : "hidden"}
//             >
//                 <AnimatePresence>
//                     {filteredAccordionData.map(({ id, question, answer }, index) => {
//                         const isOpen = openIndex === id;
//                         return (
//                             <motion.div
//                                 key={id}
//                                 className="p-4 text-white border border-transparent rounded-xl hover:border-[#262626] transition-colors duration-300"
//                                 variants={accordionVariants}
//                                 layout
//                                 whileHover={{
//                                     backgroundColor: "rgba(26, 26, 26, 0.3)",
//                                     scale: 1.02
//                                 }}
//                                 transition={{ duration: 0.2 }}
//                             >
//                                 {/* Question Header */}
//                                 <motion.div
//                                     className="flex justify-between items-center cursor-pointer"
//                                     onClick={() => toggle(id)}
//                                     whileHover={{ x: 2 }}
//                                     transition={{ duration: 0.2 }}
//                                 >
//                                     <h3 className="text-white text-base md:text-lg pr-4 flex-1">
//                                         {question}
//                                     </h3>

//                                     {/* Animated Plus/Minus Icon */}
//                                     <motion.div
//                                         className="w-8 h-8 flex items-center justify-center rounded-full bg-[#262626] text-xl font-bold cursor-pointer"
//                                         variants={iconVariants}
//                                         animate={isOpen ? "open" : "closed"}
//                                         whileHover="hover"
//                                         whileTap={{ scale: 0.9 }}
//                                         style={{
//                                             backgroundColor: isOpen ? "#404040" : "#262626"
//                                         }}
//                                     >
//                                         <motion.span
//                                             animate={{
//                                                 rotate: isOpen ? 45 : 0,
//                                                 color: isOpen ? "#ffffff" : "#cccccc"
//                                             }}
//                                             transition={{ duration: 0.2 }}
//                                         >
//                                             +
//                                         </motion.span>
//                                     </motion.div>
//                                 </motion.div>

//                                 {/* Animated Answer Content */}
//                                 <AnimatePresence>
//                                     {isOpen && (
//                                         <motion.div
//                                             variants={contentVariants}
//                                             initial="hidden"
//                                             animate="visible"
//                                             exit="exit"
//                                             style={{ overflow: "hidden" }}
//                                         >
//                                             <motion.p
//                                                 className="text-[#8C8C8C] mt-3 text-sm md:text-base pt-2 border-t border-[#333] leading-relaxed"
//                                                 initial={{ opacity: 0 }}
//                                                 animate={{ opacity: 1 }}
//                                                 transition={{ delay: 0.1, duration: 0.3 }}
//                                             >
//                                                 {answer}
//                                             </motion.p>
//                                         </motion.div>
//                                     )}
//                                 </AnimatePresence>
//                             </motion.div>
//                         );
//                     })}
//                 </AnimatePresence>

//                 {/* No results message */}
//                 {filteredAccordionData.length === 0 && searchTerm && (
//                     <motion.div
//                         className="col-span-full text-center py-8"
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.5 }}
//                     >
//                         <p className="text-[#666666] text-lg">
//                             No questions found matching "{searchTerm}"
//                         </p>
//                         <motion.button
//                             className="mt-4 px-6 py-2 bg-[#262626] text-white rounded-full hover:bg-[#404040] transition-colors"
//                             onClick={() => setSearchTerm("")}
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                         >
//                             Clear Search
//                         </motion.button>
//                     </motion.div>
//                 )}
//             </motion.div>
//         </section>
//     );
// };

// export default Frequent;







// src/components/Home/Frequent.tsx
import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence, type Variants } from "framer-motion";

type AccordionItem = {
    id: number;
    question: string;
    answer: string;
};

const accordionData: AccordionItem[] = [
    { id: 1, question: "What services does DigitX offer?", answer: "We offer web development, digital strategy, and marketing services." },
    { id: 2, question: "How long does a typical project take?", answer: "Timelines vary, but most projects take 4–6 weeks depending on scope." },
    { id: 3, question: "Do you provide post-launch support?", answer: "Yes, we provide maintenance, updates, and technical support." },
    { id: 4, question: "Can you help with branding?", answer: "Yes, we assist with logos, brand identity, and visual design." },
    { id: 5, question: "What services does DigitX offer?", answer: "We offer web development, digital strategy, and marketing services." },
    { id: 6, question: "How long does a typical project take?", answer: "Timelines vary, but most projects take 4–6 weeks depending on scope." },
    { id: 7, question: "Do you provide post-launch support?", answer: "Yes, we provide maintenance, updates, and technical support." },
    { id: 8, question: "Can you help with branding?", answer: "Yes, we assist with logos, brand identity, and visual design." },
];

/**
 * Type-safe easing for Framer Motion transitions.
 * Using a cubic-bezier tuple keeps TypeScript happy.
 */
const easeBezier = [0.42, 0, 0.58, 1] as [number, number, number, number];

/* ------------------------ Variants (typed) ------------------------ */
const titleVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeBezier } },
};

const searchVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: easeBezier, delay: 0.3 } },
};

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.5 } },
};

const accordionVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeBezier } },
};

const contentVariants: Variants = {
    hidden: { opacity: 0, height: 0, y: -10 },
    visible: {
        opacity: 1,
        height: "auto",
        y: 0,
        transition: { duration: 0.4, ease: easeBezier, delay: 0.1 },
    },
    exit: {
        opacity: 0,
        height: 0,
        y: -10,
        transition: { duration: 0.32, ease: easeBezier },
    },
};

const iconVariants: Variants = {
    closed: { rotate: 0 },
    open: { rotate: 180 },
};

/* ------------------------ Component ------------------------ */
const Frequent: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [searchTerm, setSearchTerm] = useState("");

    // typed refs so useInView doesn't complain
    const titleRef = useRef<HTMLDivElement | null>(null);
    const searchRef = useRef<HTMLDivElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    const isTitleInView = useInView(titleRef, { once: true, margin: "-100px" });
    const isSearchInView = useInView(searchRef, { once: true, margin: "-50px" });
    const isContainerInView = useInView(containerRef, { once: true, margin: "-100px" });

    const toggle = (id: number) => {
        setOpenIndex((prev) => (prev === id ? null : id));
    };

    // Filter FAQs based on search term
    const filteredAccordionData = accordionData.filter((item) =>
        item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section className="mt-16 md:mt-32 relative overflow-hidden">
            {/* Background floating element */}
            <motion.div
                className="absolute top-20 left-10 w-28 h-28 bg-gradient-to-r from-green-500/5 to-blue-500/5 rounded-full blur-xl"
                animate={{ x: [0, 50, 0], y: [0, -40, 0], scale: [1, 1.4, 1] }}
                transition={{ duration: 12, repeat: Infinity, ease: easeBezier }}
                aria-hidden
            />

            {/* Title */}
            <motion.div ref={titleRef} variants={titleVariants} initial="hidden" animate={isTitleInView ? "visible" : "hidden"}>
                <h1 className="font-semibold text-[34px] md:text-[58px] text-white sora-bold text-center">
                    <motion.span
                        className="text-[#666666]"
                        initial={{ opacity: 0, x: -30 }}
                        animate={isTitleInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        Frequently{" "}
                    </motion.span>
                    <motion.span
                        initial={{ opacity: 0, x: 30 }}
                        animate={isTitleInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        Asked Questions
                    </motion.span>
                </h1>

                <motion.p
                    className="text-[#808080] my-6 max-w-4xl mx-auto text-[14px] md:text-[18px] text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.7, ease: easeBezier }}
                >
                    Got questions? We've got answers. Check out our frequently asked questions section to find valuable insights into our processes, pricing, and more. Transparency is at the core of our client interactions.
                </motion.p>
            </motion.div>

            {/* Search */}
            <motion.div
                ref={searchRef}
                className="max-w-xs md:max-w-xl flex items-center mx-auto mt-8 bg-[#1A1A1A] border border-[#262626] rounded-full px-4 py-2"
                variants={searchVariants}
                initial="hidden"
                animate={isSearchInView ? "visible" : "hidden"}
                whileHover={{ borderColor: "#404040", boxShadow: "0 0 20px rgba(64,64,64,0.2)" }}
                transition={{ duration: 0.3 }}
            >
                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5 text-[#666666] mr-2"
                    whileHover={{ scale: 1.06, rotate: 8 }}
                    transition={{ duration: 0.18 }}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </motion.svg>

                <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="bg-transparent text-[#666666] placeholder-[#666666] outline-none w-full"
                />
            </motion.div>

            {/* FAQ Grid */}
            <motion.div
                ref={containerRef}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 py-8 md:py-16"
                variants={containerVariants}
                initial="hidden"
                animate={isContainerInView ? "visible" : "hidden"}
            >
                <AnimatePresence>
                    {filteredAccordionData.map((item) => {
                        const isOpen = openIndex === item.id;
                        return (
                            <motion.div
                                key={item.id}
                                className="p-4 text-white border border-transparent rounded-xl hover:border-[#262626] transition-colors duration-300"
                                variants={accordionVariants}
                                layout
                                whileHover={{ backgroundColor: "rgba(26,26,26,0.3)", scale: 1.02 }}
                                transition={{ duration: 0.18 }}
                            >
                                {/* header */}
                                <motion.div
                                    className="flex justify-between items-center cursor-pointer"
                                    onClick={() => toggle(item.id)}
                                    whileHover={{ x: 2 }}
                                    transition={{ duration: 0.12 }}
                                    aria-expanded={isOpen}
                                >
                                    <h3 className="text-white text-base md:text-lg pr-4 flex-1">{item.question}</h3>

                                    {/* icon */}
                                    <motion.button
                                        className="w-8 h-8 flex items-center justify-center rounded-full bg-[#262626] text-xl font-bold cursor-pointer"
                                        variants={iconVariants}
                                        animate={isOpen ? "open" : "closed"}
                                        whileHover={{ scale: 1.08 }}
                                        whileTap={{ scale: 0.95 }}
                                        style={{ backgroundColor: isOpen ? "#404040" : "#262626" }}
                                        aria-label={isOpen ? "Collapse" : "Expand"}
                                    >
                                        <motion.span animate={{ rotate: isOpen ? 45 : 0, color: isOpen ? "#ffffff" : "#cccccc" }} transition={{ duration: 0.18 }}>
                                            +
                                        </motion.span>
                                    </motion.button>
                                </motion.div>

                                {/* answer (animated height) */}
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div variants={contentVariants} initial="hidden" animate="visible" exit="exit" style={{ overflow: "hidden" }}>
                                            <motion.p
                                                className="text-[#8C8C8C] mt-3 text-sm md:text-base pt-2 border-t border-[#333] leading-relaxed"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.1, duration: 0.3, ease: easeBezier }}
                                            >
                                                {item.answer}
                                            </motion.p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>

                {/* No results */}
                {filteredAccordionData.length === 0 && searchTerm && (
                    <motion.div className="col-span-full text-center py-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <p className="text-[#666666] text-lg">No questions found matching "{searchTerm}"</p>
                        <motion.button
                            className="mt-4 px-6 py-2 bg-[#262626] text-white rounded-full hover:bg-[#404040] transition-colors"
                            onClick={() => setSearchTerm("")}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Clear Search
                        </motion.button>
                    </motion.div>
                )}
            </motion.div>
        </section>
    );
};

export default Frequent;
