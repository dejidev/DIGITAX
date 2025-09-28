// import img from "../assets/AbstractDesign.png";
import Footer from "../components/Home/Footer";
import Frequent from "../components/Home/Frequent";
import Patners from "../components/Home/Patners";

import Reason from "../components/Home/Reason";
import Service from "../components/Home/Service";
import Testimonial from "../components/Home/Testimonial";
import Work from "../components/Home/Work";


export interface CardItem {
  id: number;
  icon: string;
  title: string;
  description: string;
}



const Home = () => {
  return (
    <div className="">
      {/* grid grid-cols-1 md:grid-cols-2 */}
      <section className=" mn-h-[100vh]  relative z-20 mx-4 md:mx-12 ">
        {/* Left: Image Background */}
        {/* <div
          className="absolute  h-[100vh] md:h-full md:w-1/2 bg-cover bg-center z-[-10]  "
          style={{
            backgroundImage: `url(${img})`,
          }}
        >
        </div> */}

        <div className=" w-full min-h-[60vh] flex py-24 items-center justify-center px-4 mt-8 md:mt-12  text-center ">
          <div className="mx-auto">
            <h1 className="font-semibold text-[34px] md:text-[58px] text-white sora-bold"> Digital Solutions <span className="text-[#666666]">That Drive Success</span></h1>
            <p className="text-[#808080] mt-6 max-w-4xl mx-auto text-[14px] md:text-[18px]">At DigitX, we believe in the transformative power of digital solutions.
              Our team of experts is dedicated to helping businesses like yours thrive
              in the fast-paced digital landscape. From captivating web design to data-driven
              marketing strategies, we are committed to delivering results that exceed expectations.
            </p>
            <div>
              <p className="text-white text-[14px] md:text-[20px] my-8">Unlock Your Digital Potential Today</p>
              <div className="my-4 flex items-center justify-center gap-4">
                <button className="btn text-black bg-white">Get Started</button>
                <button className="btn bg-[#262626] text-white">Free Consultation</button>
              </div>
            </div>
          </div>


        </div>
      </section>


      {/* Reason */}
      <Reason />


      {/* Our Service */}
      <Service />


      {/* Our Works */}
      <Work />


      <Testimonial />

      <Frequent />

      <Patners />

      <Footer />

    </div>

  )
}

export default Home



//
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


const Reason = () => {
    return (
        <div className="mt-16 md:mt-32 mx-4 md:mx-12">
            <section>
                <h1 className="font-semibold text-[34px] md:text-[58px] text-white sora-bold flex flex-col items-center justify-center text-center">
                    <p>Reasons to Choose Aerassky for</p>
                    <p className="text-[#666666]"> Your Digital Journey</p>
                </h1>
                <p className="text-[#808080] mt-6 max-w-4xl mx-auto text-[14px] md:text-[18px] text-center">
                    Partnering with DigitX offers a multitude of advantages.
                    Experience increased brand visibility, improved customer engagement, and higher ROI. Our tailored solutions are designed to meet your unique business needs, ensuring lasting success.
                </p>


                <div className="mt-8 md:mt-12 lg:mt-16 md:mx-8 border-y border-[#1F1F1F]">
                    <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 ">
                        {cardItems.map((card) => (
                            <div key={card.id} className="flex flex-col justify-center items-center text-center px-4 my-4 md:border-x border-[#1F1F1F] p-4">
                                <img src={card.icon} alt={card.title} className="mb-4" />
                                <h3 className="text-white text-[18px] md:text-[24px] mt-4">{card.title}</h3>
                                <p className="text-[#808080] mt-2 text-[14px] md:text-[18px]">
                                    {card.description}
                                </p>
                                <LearnMore />
                            </div>
                        ))}


                    </div>
                </div>
            </section>
        </div>
    )
}

export default Reason

import abstractBg from "../../assets/AbstractDesign.png";
import ouricon1 from "../../assets/ourservice/Icon1.png";
import ouricon2 from "../../assets/ourservice/Icon2.png";
import ouricon3 from "../../assets/ourservice/Icon3.png";
import ouricon4 from "../../assets/ourservice/Icon4.png";
import LearnMore from '../LearnMore';

export interface CardItem {
    id: number;
    icon: string;
    title: string;
    description: string;
}



const ourServiceItems: CardItem[] = [
    {
        id: 1,
        icon: ouricon1,
        title: "Web Development",
        description: "Unlock Your Online Potential In today's digital age, a powerful web presence is essential for any business. At DigitX, our web development services empower you to stand out in the crowded online landscape. We create responsive and dynamic websites tailored to your unique needs, ensuring seamless user experiences across all devices. From e-commerce platforms to interactive web applications, our expert developers bring your vision to life, making your online journey a resounding success."
    },
    {
        id: 2,
        icon: ouricon2,
        title: "Mobile App Development",
        description: "Embrace Mobility with Confidence Mobile devices have revolutionized the way we interact with the world. Our mobile app development services enable you to harness this mobility to your advantage. We design and build intuitive and high-performance mobile applications that captivate your audience and boost engagement. Whether it's iOS, Android, or cross-platform development, we ensure that your app delivers a seamless experience, leaving a lasting impression on your users.",
    },
    {
        id: 3,
        icon: ouricon3,
        title: "Web Design",
        description: "Elevate Your Brand Aesthetics Your website's design is a reflection of your brand's identity and values. DigitX's web design services focus on creating visually striking and user-friendly interfaces that leave a lasting impact. Our creative team blends aesthetics with functionality, delivering a captivating user experience that keeps visitors coming back for more. Let us transform your online presence into an immersive journey that showcases your brand's true essence.",
    },
    {
        id: 4,
        icon: ouricon4,
        title: "Digital Marketing",
        description: "Drive Your Business Forward In the vast digital landscape, standing out from the competition is crucial. Our digital marketing services help you rise above the noise and connect with your target audience effectively. From search engine optimization (SEO) to social media marketing and pay-per-click (PPC) campaigns, our data-driven strategies ensure that your message reaches the right people at the right time.",
    }
];
const Service = () => {
    return (
        < section className="mt-16 md:mt-32 " >
            <h1 className="font-semibold text-[34px] md:text-[58px] text-white sora-bold text-center">
                <span className="text-[#666666]">Our </span> Services
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
                {ourServiceItems.map(({ id, icon, title, description }) => (
                    <div
                        key={id}
                        className="relative bg-cover bg-center rounded-xl shadow-lg p-6 text-white"
                        style={{
                            backgroundImage: `url(${abstractBg})`,
                        }}
                    >
                        {/* Foreground content */}
                        <div className="relative z-10 flex flex-col items-center text-center gap-4">
                            <img src={icon} alt={`ouricon-${id}`} className=" " />

                            <h3 className="text-[18px] md:text-[24px] font-semibold">
                                {title}
                            </h3>

                            <p className="text-[#808080] text-[14px] md:text-[16px] max-w-md">
                                {description}
                            </p>

                            <LearnMore />
                        </div>
                    </div>
                ))}
            </div>
        </section >



    )
}

export default Service

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


const Work = () => {
    return (

        <section className="mt-16 md:mt-32 ">
            {/* <h1 className="font-semibold text-[34px] md:text-[58px] text-white sora-bold text-center">
              <span className="text-[#666666]"> </span>
          </h1>
          <p className="text-[#808080] mt-6 max-w-4xl mx-auto text-[14px] md:text-[18px] text-center">
          </p> */}
            <h1 className="font-semibold text-[34px] md:text-[58px] text-white sora-bold text-center">
                <span className="text-[#666666]">Our </span>Works
            </h1>
            <p className="text-[#808080] my-6 max-w-4xl mx-auto text-[14px] md:text-[18px] text-center">
                Witness the brilliance of our previous projects. Our portfolio showcases the successful collaborations we've had with diverse clients across various industries. Let our work speak for itself.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
                {ourWorkItems.map(({ id, icon, title, description, category, date }) => (
                    <div
                        key={id}
                        className="relative bg-cover bg-center rounded-xl shadow-lg p-6 text-white"
                        style={{
                            backgroundImage: `url(${abstractBg})`,
                        }}
                    >
                        <div className="flex flex-col gap-4">
                            <div className="relative w-fit">
                                <img src={icon} alt="ouricon" className="block" />



                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 max-w-[90vw]">
                                    <Arrowbutton>
                                        <span className="whitespace-nowrap text-xs sm:text-sm md:text-base">
                                            View Project Details
                                        </span>
                                    </Arrowbutton>
                                </div>

                            </div>
                            <h3 className="text-[18px] md:text-[24px] font-semibold mt-8 text-center">
                                {title}
                            </h3>
                            <div className="md:flex  md:items-center md:justify-between text-[14px] gap-2 md:gap-0 font-light md:font-normal md:px-8">
                                <p>{category}</p>
                                <p>{date}</p>
                            </div>
                            <p className="text-[#808080] text-[14px] md:text-[16px] md:px-8">
                                {description}
                            </p>


                        </div>
                    </div>
                ))}
            </div>

            <div className="py-8 flex items-center justify-center">
                <Arrowbutton>View All Projects</Arrowbutton>
            </div>

        </section>
    )
}

export default Work
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
import React, {useState} from "react";
type AccordionItem = {
    id: number;
    question: string;
    answer: string;
};

const accordionData: AccordionItem[] = [
    {
        id: 1,
        question: "What services does DigitX offer?",
        answer: "We offer web development, digital strategy, and marketing services.",
    },
    {
        id: 2,
        question: "How long does a typical project take?",
        answer: "Timelines vary, but most projects take 4–6 weeks depending on scope.",
    },
    {
        id: 3,
        question: "Do you provide post-launch support?",
        answer: "Yes, we provide maintenance, updates, and technical support.",
    },
    {
        id: 4,
        question: "Can you help with branding?",
        answer: "Yes, we assist with logos, brand identity, and visual design.",
    },
    {
        id: 5,
        question: "What services does DigitX offer?",
        answer: "We offer web development, digital strategy, and marketing services.",
    },
    {
        id: 6,
        question: "How long does a typical project take?",
        answer: "Timelines vary, but most projects take 4–6 weeks depending on scope.",
    },
    {
        id: 7,
        question: "Do you provide post-launch support?",
        answer: "Yes, we provide maintenance, updates, and technical support.",
    },
    {
        id: 8,
        question: "Can you help with branding?",
        answer: "Yes, we assist with logos, brand identity, and visual design.",
    },
];


const Frequent: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (id: number) => {
        setOpenIndex(prev => (prev === id ? null : id));
    };
    return (
        < section className="mt-16 md:mt-32 " >
            <h1 className="font-semibold text-[34px] md:text-[58px] text-white sora-bold text-center">
                <span className="text-[#666666]">Frequently </span>Asked Questions
            </h1>
            <p className="text-[#808080] my-6 max-w-4xl mx-auto text-[14px] md:text-[18px] text-center">
                Got questions? We've got answers. Check out our frequently asked questions section to find valuable insights into our processes, pricing, and more. Transparency is at the core of our client interactions.
            </p>





            <div className="max-w-xs md:max-w-xl flex items-center mx-auto mt-8  bg-[#1A1A1A] border border-[#262626] rounded-full px-4 py-2 ">

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5 text-[#666666] mr-2"
                >
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>

                <input
                    type="text"
                    placeholder="Search"
                    className="bg-transparent text-[#666666] placeholder-[#666666] outline-none w-full"
                />
            </div>



            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-8 md:py-16">
                {accordionData.map(({ id, question, answer }) => {
                    const isOpen = openIndex === id;
                    return (
                        <div
                            key={id}
                            className="  p-4 text-white  "
                        >
                            <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() => toggle(id)}
                            >
                                <h3 className="text-white text-base md:text-lg">{question}</h3>
                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#262626] text-xl font-bold">
                                    {isOpen ? "−" : "+"}
                                </div>
                            </div>
                            {isOpen && (
                                <p className="text-[#8C8C8C] mt-3 text-sm md:text-base">{answer}</p>
                            )}
                        </div>
                    );
                })}
            </div>
        </section >

    )
}

export default Frequent;


import contain1 from "../../assets/patner/Container1.png";
import contain2 from "../../assets/patner/Container2.png"
import contain3 from "../../assets/patner/Container3.png"
import contain4 from "../../assets/patner/Container4.png"
import contain5 from "../../assets/patner/Container5.png"
import contain6 from "../../assets/patner/Container6.png"



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
        description: "ODigitX collaborated with GreenEarth Eco Store to create an engaging e-commerce platform that promotes sustainable living and eco-friendly products."
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
        id: 3,
        icon: contain5,
        title: "TechGuru Inc.",
        description: "DigitX developed a user-centric mobile app for HealthTech Innovations, helping them revolutionize the way people track and manage their health.",
    },
    {
        id: 4,
        icon: contain6,
        title: "ArtScape Gallery",
        description: "DigitX developed a user-centric mobile app for HealthTech Innovations, helping them revolutionize the way people track and manage their health.",
    }
];

const Patners = () => {
    return (
        <section className="mt-16 md:mt-32 ">
            <h1 className="font-semibold text-[34px] md:text-[58px] text-white sora-bold text-center">
                <span className="text-[#666666]">Our </span>Partners and Clients
            </h1>
            <p className="text-[#808080] my-6 max-w-4xl mx-auto text-[14px] md:text-[18px] text-center">
                We are grateful for the opportunity to work with esteemed partners and clients. Our strong relationships are a testament to our dedication and expertise in the digital realm.

            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4">
                {ourWorkItems.map(({ id, icon, title, description }) => (
                    <div
                        key={id}
                        className="bg-gradient-to-b from-[#292929] to-black   bg-cover bg-center rounded-xl shadow-lg p-6 text-white"
                        style={{
                            backgroundImage: `url(${abstractBg})`,
                        }}
                    >
                        <div className="flex flex-col gap-4">
                            <div className=" w-fit">
                                <img src={icon} alt="ouricon" className="m-auto" />
                            </div>
                            <h3 className="text-[18px] md:text-[24px] font-semibold mt-8 text-center">
                                {title}
                            </h3>
                            <p className="text-[#808080] text-[14px] md:text-[16px] md:px-8">
                                {description}
                            </p>


                        </div>
                    </div>
                ))}
            </div>



            <div
                className="bg-gradient-to-b from-[#292929] to-black   bg-cover bg-center rounded-xl shadow-lg p-6 text-white my-16 py-16 "
                style={{
                    backgroundImage: `url(${abstractBg})`,
                }}
            >
                <div className="flex flex-col gap-4">
                    <h3 className="text-[18px] md:text-[24px] font-semibold mt-8 text-center">
                        Ready to Transform Your Digital Presence?
                    </h3>
                    <p className="text-[#808080] text-[14px] md:text-[16px] md:px-8">
                        Take the first step towards digital success with DigitX by your side. Our team of experts is eager to craft tailored solutions that drive growth for your business. Whether you need a stunning website, a powerful mobile app, or a data-driven marketing campaign, we've got you covered. Let's embark on this transformative journey together.\
                    </p>

                    <div className="mt-8">
                        <p className="my-4 text-center">Unlock Your Digital Potential Today</p>
                        <div className="flex items-center justify-center gap-4">
                            <button className="btn bg-white text-black ">Get started</button>
                            <button className="btn bg-[#1A1A1A]">Free Consultation</button>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default Patners
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

const Footer = () => {
    return (
        <div>
            <div className="mt-24 md:mt-48 flex items-center justify-between mx-6">
                <div>
                    <img src={logo} alt="logo" />
                </div>
                <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 md:justify-end">
                    <p className="text-white font-light text-sm ">Follow Us On Social Media</p>
                    <div className="flex gap-4 items-center">

                        <div className="bg-gradient-to-b from-[#292929] to-black p-4 w-fit text-white text-xl rounded-full ">
                            <FaLinkedin />
                        </div>
                        <div className="bg-gradient-to-b from-[#292929] to-black p-4 w-fit text-white text-xl rounded-full ">
                            <FaSquareInstagram />
                        </div>
                        <div className="bg-gradient-to-b from-[#292929] to-black p-4 w-fit text-white text-xl rounded-full ">
                            <FaTwitter />
                        </div>
                    </div>

                </div>




            </div>
            <footer className=" text-white py-12 px-4 my-12">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-6 text-center md:text-left">
                        {footerItems.map((item, index) => (
                            <div key={index}>
                                <a
                                    href={item.link}
                                    className="text-base font-medium hover:underline"
                                >
                                    {item.title}
                                </a>

                                <ul className="mt-2 space-y-1">
                                    {item.subtitle.map((subItem, subIndex) => (
                                        <li key={subIndex} className="text-sm text-[#8C8C8C] hover:text-white">
                                            <a href={`${item.link}#${subItem.toLowerCase().replace(/\s+/g, '-')}`}>
                                                {subItem}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                                {/* <p className="text-sm text-[#8C8C8C] mt-1">Explore {item.title}</p> */}
                            </div>
                        ))}
                    </div>
                </div>
            </footer>


            <div className="text-[#8C8C8C] text-xs md:text-sm py-6 px-4 flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 pb-16">

                <p className="text-center   md:text-base">
                    © {new Date().getFullYear()} Aerassky. All rights reserved.
                </p>
                <p>Version 1.0</p>
                <div className="flex items-center justify-center gap-2 md:gap-6">
                    <p>Privacy</p>
                    <p>Terms & Condition</p>
                    <p>Cookie and Policys</p>
                </div>
            </div>


        </div>

    )
}

export default Footer
