import { FaTwitter } from "react-icons/fa";
import { GoTriangleDown } from "react-icons/go";
import image1 from "../../assets/testimonial/Image.png";
import image2 from "../../assets/testimonial/Image1.png"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Testimonials {
    id: number;
    text: string;
    name: string;
    role: string;
    image: string;
    twitter: string;
}

const testimonials: Testimonials[] = [
    {
        id: 1,
        text: `Working with DigitX was a pleasure. Their web design team created a stunning website that perfectly captured our brand's essence.`,
        name: "Mark Roberts",
        role: "Founder of GreenEarth Eco Store",
        image: image1,
        twitter: "https://x.com/dejidv"
    },
    {
        id: 2,
        text: `The mobile app DigitX developed for us exceeded our expectations. Its user-friendly interface and seamless functionality have earned us rave reviews from our users.`,
        name: "Lisa Williams",
        role: "Head of Product at HealthTech Innovations",
        image: image2,
        twitter: "https://x.com/dejidv"
    },
    {
        id: 3,
        text: `Working with DigitX was a pleasure. Their web design team created a stunning website that perfectly captured our brand's essence.`,
        name: "Mike Robert",
        role: "Founder of GreenEarth Eco Store",
        image: image1,
        twitter: "https://x.com/dejidv"
    },
    {
        id: 4,
        text: `DigitX helped boost our digital presence significantly. Their strategies are modern, effective, and tailored.`,
        name: "Sandra Lee",
        role: "CMO, BrightTech Inc.",
        image: image2,
        twitter: "https://x.com/dejidv"
    },
    {
        id: 5,
        text: `Working with DigitX was a pleasure. Their web design team created a stunning website that perfectly captured our brand's essence.`,
        name: "Mike Robert",
        role: "Founder of GreenEarth Eco Store",
        image: image1,
        twitter: "https://x.com/dejidv"
    },
    {
        id: 6,
        text: `DigitX helped boost our digital presence significantly. Their strategies are modern, effective, and tailored.`,
        name: "Sandra Lee",
        role: "CMO, BrightTech Inc.",
        image: image2,
        twitter: "https://x.com/dejidv"
    },
    // Add more...
];



const Testimonial = () => {
    return (
        <section className="mt-16 md:mt-32 ">
            <h1 className="font-semibold text-[34px] md:text-[58px] text-white sora-bold text-center">
                <span className="text-[#666666]">Our </span>Testimonials
            </h1>
            <p className="text-[#808080] my-6 max-w-4xl mx-auto text-[14px] md:text-[18px] text-center">
                Don't just take our word for it; hear what our satisfied clients have to say about their experience with DigitX. We take pride in building lasting relationships and delivering exceptional results.
            </p>




            <div className="relative w-full">
                {/* Swiper Container */}
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}
                    modules={[Navigation]}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 16,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 24,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 28,
                        },
                      }}
                    className="pb-16"
                >
                    {testimonials.map(({ id, text, name, role, image }) => (
                        <SwiperSlide key={id}>
                            <div className="text-white  relative flex flex-col gap-6 md:gap-8">
                                <div className="max-w-xl relative mx-auto">
                                    {/* <div className="bg-gradient-to-b from-[#1A1A1A] to-black  border-b border-[#262626] p-8 relative rounded-2xl " >
                                        <div className="bg-[#1A1A1A] border border-[#262626] p-[14px] w-fit rounded-2xl text-white mb-4">
                                            <FaTwitter className="text-[#FFFFFF] " />
                                        </div>
                                        <p>
                                            {text}
                                        </p>

                                    </div> */}
                                    <div className="bg-gradient-to-b from-[#1A1A1A] to-black border-b border-[#262626] p-8 rounded-2xl h-[300px] sm:h-[250px] flex flex-col justify-between">
                                        <div>
                                            <div className="bg-[#1A1A1A] border border-[#262626] p-[14px] w-fit rounded-2xl text-white mb-4">
                                                <FaTwitter className="text-[#FFFFFF]" />
                                            </div>
                                            <p className="text-white">
                                                {text}
                                            </p>
                                        </div>
                                    </div>

                                    <GoTriangleDown className="
                        text-[#262626] 
                        absolute 
                        -bottom-10.5 
                        left-1/2 
                        -translate-x-1/2 
                        md:left-6 
                        md:translate-x-0
                        "
                                        size={64} />
                                </div>
                                <div className="flex flex-col  md:flex-row my-4 items-center text-center md:text-start  gap-4">
                                    <div>
                                        <img src={image} alt={name} />
                                    </div>
                                    <div>
                                        <p >{name}</p>
                                        <p className="text-[#808080] text-sm md:text-base font-light">{role}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Navigation Buttons */}
                <div className=" bottom-0 right-0 flex gap-4 pr-4">
                    <button className="swiper-button-prev p-8 text-center bg-[#1A1A1A] rounded-full border border-[#262626] ">
                        <FaChevronLeft className="text-white " />
                    </button>
                    <button className="swiper-button-next p-8 text-center bg-[#1A1A1A] rounded-full border border-[#262626]">
                        <FaChevronRight />
                    </button>
                </div>
            </div>










        </section>
    )
}

export default Testimonial
