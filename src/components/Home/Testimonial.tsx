// import { FaTwitter } from "react-icons/fa";
// import { GoTriangleDown } from "react-icons/go";
// import image1 from "../../assets/testimonial/Image.png";
// import image2 from "../../assets/testimonial/Image1.png"

// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import "swiper/css/navigation";

// import { Navigation } from "swiper/modules";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// interface Testimonials {
//     id: number;
//     text: string;
//     name: string;
//     role: string;
//     image: string;
//     twitter: string;
// }

// const testimonials: Testimonials[] = [
//     {
//         id: 1,
//         text: `Working with DigitX was a pleasure. Their web design team created a stunning website that perfectly captured our brand's essence.`,
//         name: "Mark Roberts",
//         role: "Founder of GreenEarth Eco Store",
//         image: image1,
//         twitter: "https://x.com/dejidv"
//     },
//     {
//         id: 2,
//         text: `The mobile app DigitX developed for us exceeded our expectations. Its user-friendly interface and seamless functionality have earned us rave reviews from our users.`,
//         name: "Lisa Williams",
//         role: "Head of Product at HealthTech Innovations",
//         image: image2,
//         twitter: "https://x.com/dejidv"
//     },
//     {
//         id: 3,
//         text: `Working with DigitX was a pleasure. Their web design team created a stunning website that perfectly captured our brand's essence.`,
//         name: "Mike Robert",
//         role: "Founder of GreenEarth Eco Store",
//         image: image1,
//         twitter: "https://x.com/dejidv"
//     },
//     {
//         id: 4,
//         text: `DigitX helped boost our digital presence significantly. Their strategies are modern, effective, and tailored.`,
//         name: "Sandra Lee",
//         role: "CMO, BrightTech Inc.",
//         image: image2,
//         twitter: "https://x.com/dejidv"
//     },
//     {
//         id: 5,
//         text: `Working with DigitX was a pleasure. Their web design team created a stunning website that perfectly captured our brand's essence.`,
//         name: "Mike Robert",
//         role: "Founder of GreenEarth Eco Store",
//         image: image1,
//         twitter: "https://x.com/dejidv"
//     },
//     {
//         id: 6,
//         text: `DigitX helped boost our digital presence significantly. Their strategies are modern, effective, and tailored.`,
//         name: "Sandra Lee",
//         role: "CMO, BrightTech Inc.",
//         image: image2,
//         twitter: "https://x.com/dejidv"
//     },
//     // Add more...
// ];



// const Testimonial = () => {
//     return (
//         <section className="mt-16 md:mt-32 ">
//             <h1 className="font-semibold text-[34px] md:text-[58px] text-white sora-bold text-center">
//                 <span className="text-[#666666]">Our </span>Testimonials
//             </h1>
//             <p className="text-[#808080] my-6 max-w-4xl mx-auto text-[14px] md:text-[18px] text-center">
//                 Don't just take our word for it; hear what our satisfied clients have to say about their experience with DigitX. We take pride in building lasting relationships and delivering exceptional results.
//             </p>




//             <div className="relative w-full">
//                 {/* Swiper Container */}
//                 <Swiper
//                     spaceBetween={30}
//                     slidesPerView={1}
//                     navigation={{
//                         nextEl: ".swiper-button-next",
//                         prevEl: ".swiper-button-prev",
//                     }}
//                     modules={[Navigation]}
//                     breakpoints={{
//                         0: {
//                             slidesPerView: 1,
//                             spaceBetween: 16,
//                         },
//                         768: {
//                             slidesPerView: 2,
//                             spaceBetween: 24,
//                         },
//                         1024: {
//                             slidesPerView: 3,
//                             spaceBetween: 28,
//                         },
//                       }}
//                     className="pb-16"
//                 >
//                     {testimonials.map(({ id, text, name, role, image }) => (
//                         <SwiperSlide key={id}>
//                             <div className="text-white  relative flex flex-col gap-6 md:gap-8">
//                                 <div className="max-w-xl relative mx-auto">
//                                     {/* <div className="bg-gradient-to-b from-[#1A1A1A] to-black  border-b border-[#262626] p-8 relative rounded-2xl " >
//                                         <div className="bg-[#1A1A1A] border border-[#262626] p-[14px] w-fit rounded-2xl text-white mb-4">
//                                             <FaTwitter className="text-[#FFFFFF] " />
//                                         </div>
//                                         <p>
//                                             {text}
//                                         </p>

//                                     </div> */}
//                                     <div className="bg-gradient-to-b from-[#1A1A1A] to-black border-b border-[#262626] p-8 rounded-2xl h-[300px] sm:h-[250px] flex flex-col justify-between">
//                                         <div>
//                                             <div className="bg-[#1A1A1A] border border-[#262626] p-[14px] w-fit rounded-2xl text-white mb-4">
//                                                 <FaTwitter className="text-[#FFFFFF]" />
//                                             </div>
//                                             <p className="text-white">
//                                                 {text}
//                                             </p>
//                                         </div>
//                                     </div>

//                                     <GoTriangleDown className="
//                         text-[#262626] 
//                         absolute 
//                         -bottom-10.5 
//                         left-1/2 
//                         -translate-x-1/2 
//                         md:left-6 
//                         md:translate-x-0
//                         "
//                                         size={64} />
//                                 </div>
//                                 <div className="flex flex-col  md:flex-row my-4 items-center text-center md:text-start  gap-4">
//                                     <div>
//                                         <img src={image} alt={name} />
//                                     </div>
//                                     <div>
//                                         <p >{name}</p>
//                                         <p className="text-[#808080] text-sm md:text-base font-light">{role}</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>

//                 {/* Navigation Buttons */}
//                 <div className=" bottom-0 right-0 flex gap-4 pr-4">
//                     <button className="swiper-button-prev p-8 text-center bg-[#1A1A1A] rounded-full border border-[#262626] ">
//                         <FaChevronLeft className="text-white " />
//                     </button>
//                     <button className="swiper-button-next p-8 text-center bg-[#1A1A1A] rounded-full border border-[#262626]">
//                         <FaChevronRight />
//                     </button>
//                 </div>
//             </div>










//         </section>
//     )
// }

// export default Testimonial














import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, } from 'framer-motion';
import { ChevronLeft, ChevronRight, Twitter } from 'lucide-react';

// Sample data
const testimonials = [
    {
        id: 1,
        text: "Working with DigitX was a pleasure. Their team delivered a stunning website that perfectly captured our brand's essence. The attention to detail and professionalism throughout the process was outstanding.",
        name: "Mark Roberts",
        role: "Founder of GreenEarth Eco Store",
        image: "https://i.pravatar.cc/150?img=12",
        twitter: "https://twitter.com/example"
    },
    {
        id: 2,
        text: "The mobile app DigitX developed for us exceeded our expectations. Not only did they deliver on time, but the user experience they created has significantly improved our customer engagement.",
        name: "Lisa Williams",
        role: "Head of Product at HealthTech Innovations",
        image: "https://i.pravatar.cc/150?img=45",
        twitter: "https://twitter.com/example"
    },
    {
        id: 3,
        text: "DigitX transformed our digital presence with their innovative solutions. The team's expertise in modern web technologies helped us stand out in a crowded market.",
        name: "Mike Robert",
        role: "CTO at TechFlow Solutions",
        image: "https://i.pravatar.cc/150?img=33",
        twitter: "https://twitter.com/example"
    },
    {
        id: 4,
        text: "DigitX helped boost our digital presence significantly. Their strategic approach and creative execution delivered measurable results that exceeded our business goals.",
        name: "Sandra Lee",
        role: "CMO, BrightTech Inc.",
        image: "https://i.pravatar.cc/150?img=47",
        twitter: "https://twitter.com/example"
    },
    {
        id: 5,
        text: "The redesign DigitX created for our platform increased conversions by 40%. Their understanding of user behavior and modern design principles is exceptional.",
        name: "David Chen",
        role: "CEO at DataSync Pro",
        image: "https://i.pravatar.cc/150?img=68",
        twitter: "https://twitter.com/example"
    },
    {
        id: 6,
        text: "From concept to deployment, DigitX demonstrated exceptional skill and dedication. They're not just developers, they're true digital partners.",
        name: "Emma Thompson",
        role: "Director of Digital Strategy",
        image: "https://i.pravatar.cc/150?img=26",
        twitter: "https://twitter.com/example"
    }
];

export default function TestimonialCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slidesPerView, setSlidesPerView] = useState(1);
    // const [isPaused, setIsPaused] = useState(false);
    const isPaused = false;
    const [isHovering, setIsHovering] = useState(false);
    const autoplayRef = useRef<number | null>(null);

    // Calculate slides per view based on screen size
    useEffect(() => {
        const updateSlidesPerView = () => {
            if (window.innerWidth >= 1024) {
                setSlidesPerView(3);
            } else if (window.innerWidth >= 768) {
                setSlidesPerView(2);
            } else {
                setSlidesPerView(1);
            }
        };

        updateSlidesPerView();
        window.addEventListener('resize', updateSlidesPerView);
        return () => window.removeEventListener('resize', updateSlidesPerView);
    }, []);

    const maxIndex = Math.max(0, testimonials.length - slidesPerView);

    // Navigation functions
    const goToNext = useCallback(() => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, [maxIndex]);

    const goToPrev = useCallback(() => {
        setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    }, [maxIndex]);

    // Autoplay functionality
    useEffect(() => {
        if (isPaused || isHovering) return;

        autoplayRef.current = setInterval(() => {
            goToNext();
        }, 4000);

        return () => {
            if (autoplayRef.current) {
                clearInterval(autoplayRef?.current);
            }
        };
    }, [goToNext, isPaused, isHovering]);

    // Calculate transform based on current index
    // const getTransform = () => {
    //     const slideWidth = 100 / slidesPerView;
    //     return `translateX(-${currentIndex * slideWidth}%)`;
    // };

    return (
        <section className="py-12 md:py-20 px-4 bg-black overflow-hidden relative">
            {/* Animated background decoration */}
            <motion.div
                className="absolute top-20 left-10 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                        <span className="text-gray-600">Our </span>
                        <span className="text-white">Testimonials</span>
                    </h2>
                    <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto">
                        Don't just take our word for it; hear what our satisfied clients have to say about their experience with DigitX.
                    </p>
                </motion.div>

                {/* Carousel Container */}
                <div className="relative">
                    <div
                        className="overflow-hidden"
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                    >
                        <motion.div
                            className="flex"
                            animate={{ x: `${-currentIndex * (100 / slidesPerView)}%` }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 30
                            }}
                            style={{ width: `${(testimonials.length / slidesPerView) * 100}%` }}
                        >
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={testimonial.id}
                                    className="px-3 md:px-4"
                                    style={{ width: `${100 / testimonials.length * slidesPerView}%` }}
                                >
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ y: -8 }}
                                        className="h-full"
                                    >
                                        {/* Card */}
                                        <div className="bg-gradient-to-b from-zinc-900 to-black border border-zinc-800 rounded-2xl p-6 md:p-8 mb-6 min-h-[280px] flex flex-col relative overflow-hidden group">
                                            {/* Hover effect overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                            {/* Twitter icon */}
                                            <motion.div
                                                whileHover={{ scale: 1.1, rotate: 5 }}
                                                className="bg-zinc-800 border border-zinc-700 p-3 w-fit rounded-xl mb-4 relative z-10"
                                            >
                                                <Twitter className="w-5 h-5 text-white" />
                                            </motion.div>

                                            {/* Testimonial text */}
                                            <p className="text-gray-300 leading-relaxed flex-grow relative z-10">
                                                "{testimonial.text}"
                                            </p>

                                            {/* Triangle pointer */}
                                            <div className="absolute -bottom-3 left-8 w-6 h-6 bg-zinc-800 border-l border-b border-zinc-700 transform rotate-45" />
                                        </div>

                                        {/* Author info */}
                                        <div className="flex items-center gap-4 px-2">
                                            <motion.img
                                                whileHover={{ scale: 1.1 }}
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="w-14 h-14 rounded-full object-cover border-2 border-zinc-800"
                                            />
                                            <div>
                                                <p className="text-white font-semibold">{testimonial.name}</p>
                                                <p className="text-gray-500 text-sm">{testimonial.role}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-center md:justify-end gap-3 mt-8 md:mt-0 md:absolute md:bottom-4 md:right-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={goToPrev}
                            disabled={currentIndex === 0}
                            className={`p-3 md:p-4 rounded-full border transition-all ${currentIndex === 0
                                ? 'bg-zinc-900 border-zinc-800 text-zinc-600 cursor-not-allowed'
                                : 'bg-zinc-900 border-zinc-700 text-white hover:bg-zinc-800'
                                }`}
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={goToNext}
                            disabled={currentIndex >= maxIndex}
                            className={`p-3 md:p-4 rounded-full border transition-all ${currentIndex >= maxIndex
                                ? 'bg-zinc-900 border-zinc-800 text-zinc-600 cursor-not-allowed'
                                : 'bg-zinc-900 border-zinc-700 text-white hover:bg-zinc-800'
                                }`}
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </motion.button>
                    </div>

                    {/* Progress indicators */}
                    <div className="flex justify-center gap-2 mt-6 md:mt-8">
                        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`h-2 rounded-full transition-all ${idx === currentIndex
                                    ? 'w-8 bg-white'
                                    : 'w-2 bg-zinc-700 hover:bg-zinc-600'
                                    }`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}