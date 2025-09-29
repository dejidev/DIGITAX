
// import abstractBg from "../../assets/AbstractDesign.png";
// import ouricon1 from "../../assets/ourservice/Icon1.png";
// import ouricon2 from "../../assets/ourservice/Icon2.png";
// import ouricon3 from "../../assets/ourservice/Icon3.png";
// import ouricon4 from "../../assets/ourservice/Icon4.png";
// import LearnMore from '../LearnMore';

// export interface CardItem {
//     id: number;
//     icon: string;
//     title: string;
//     description: string;
// }



// const ourServiceItems: CardItem[] = [
//     {
//         id: 1,
//         icon: ouricon1,
//         title: "Web Development",
//         description: "Unlock Your Online Potential In today's digital age, a powerful web presence is essential for any business. At DigitX, our web development services empower you to stand out in the crowded online landscape. We create responsive and dynamic websites tailored to your unique needs, ensuring seamless user experiences across all devices. From e-commerce platforms to interactive web applications, our expert developers bring your vision to life, making your online journey a resounding success."
//     },
//     {
//         id: 2,
//         icon: ouricon2,
//         title: "Mobile App Development",
//         description: "Embrace Mobility with Confidence Mobile devices have revolutionized the way we interact with the world. Our mobile app development services enable you to harness this mobility to your advantage. We design and build intuitive and high-performance mobile applications that captivate your audience and boost engagement. Whether it's iOS, Android, or cross-platform development, we ensure that your app delivers a seamless experience, leaving a lasting impression on your users.",
//     },
//     {
//         id: 3,
//         icon: ouricon3,
//         title: "Web Design",
//         description: "Elevate Your Brand Aesthetics Your website's design is a reflection of your brand's identity and values. DigitX's web design services focus on creating visually striking and user-friendly interfaces that leave a lasting impact. Our creative team blends aesthetics with functionality, delivering a captivating user experience that keeps visitors coming back for more. Let us transform your online presence into an immersive journey that showcases your brand's true essence.",
//     },
//     {
//         id: 4,
//         icon: ouricon4,
//         title: "Digital Marketing",
//         description: "Drive Your Business Forward In the vast digital landscape, standing out from the competition is crucial. Our digital marketing services help you rise above the noise and connect with your target audience effectively. From search engine optimization (SEO) to social media marketing and pay-per-click (PPC) campaigns, our data-driven strategies ensure that your message reaches the right people at the right time.",
//     }
//   ];
// const Service = () => {
//   return (
//         < section className = "mt-16 md:mt-32 " >
//         <h1 className="font-semibold text-[34px] md:text-[58px] text-white sora-bold text-center">
//           <span className="text-[#666666]">Our </span> Services
//         </h1>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
//           {ourServiceItems.map(({ id, icon, title, description }) => (
//             <div
//               key={id}
//               className="relative bg-cover bg-center rounded-xl shadow-lg p-6 text-white"
//               style={{
//                 backgroundImage: `url(${abstractBg})`,
//               }}
//             >
//               {/* Foreground content */}
//               <div className="relative z-10 flex flex-col items-center text-center gap-4">
//                 <img src={icon} alt={`ouricon-${id}`} className=" " />

//                 <h3 className="text-[18px] md:text-[24px] font-semibold">
//                   {title}
//                 </h3>

//                 <p className="text-[#808080] text-[14px] md:text-[16px] max-w-md">
//                   {description}
//                 </p>

//                 <LearnMore />
//               </div>
//             </div>
//           ))}
//         </div>
//       </section >



//   )
// }

// export default Service















import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
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
    description: "Unlock Your Online Potential In today's digital age, a powerful web presence is essential for any business. At DigitX, our web development services empower you to stand out in the crowded online landscape. We create responsive and dynamic websites tailored to your unique needs, ensuring seamless user experiences across all devices."
  },
  {
    id: 2,
    icon: ouricon2,
    title: "Mobile App Development",
    description: "Embrace Mobility with Confidence Mobile devices have revolutionized the way we interact with the world. Our mobile app development services enable you to harness this mobility to your advantage. We design and build intuitive and high-performance mobile applications that captivate your audience and boost engagement."
  },
  {
    id: 3,
    icon: ouricon3,
    title: "Web Design",
    description: "Elevate Your Brand Aesthetics Your website's design is a reflection of your brand's identity and values. DigitX's web design services focus on creating visually striking and user-friendly interfaces that leave a lasting impact. Our creative team blends aesthetics with functionality, delivering a captivating user experience."
  },
  {
    id: 4,
    icon: ouricon4,
    title: "Digital Marketing",
    description: "Drive Your Business Forward In the vast digital landscape, standing out from the competition is crucial. Our digital marketing services help you rise above the noise and connect with your target audience effectively. From search engine optimization (SEO) to social media marketing and pay-per-click (PPC) campaigns."
  }
];

// Animation variants
const titleVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const
    }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    }
  }
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    rotateY: -15,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateY: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 12,
      duration: 0.8
    }
  }
};

const Service = () => {
  const titleRef = useRef(null);
  const containerRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, margin: "-100px" });
  const isContainerInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="mt-16 md:mt-32">
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
            Services
          </motion.span>
        </h1>
      </motion.div>

      {/* Animated Cards Grid */}
      <motion.div
        ref={containerRef}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4"
        variants={containerVariants}
        initial="hidden"
        animate={isContainerInView ? "visible" : "hidden"}
      >
        {ourServiceItems.map(({ id, icon, title, description }, index) => (
          <motion.div
            key={id}
            className="relative bg-cover bg-center rounded-xl shadow-lg p-6 text-white overflow-hidden group cursor-pointer"
            style={{
              backgroundImage: `url(${abstractBg})`,
            }}
            variants={cardVariants}
            whileHover={{
              scale: 1.02,
              y: -5,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20
              }
            }}
            custom={index}
          >
            {/* Gradient overlay that appears on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-xl opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.3 }}
            />

            {/* Card Content */}
            <div className="relative z-10 flex flex-col items-center text-center gap-4">
              {/* Animated Icon */}
              <motion.div
                whileHover={{
                  rotate: [0, -10, 10, -5, 5, 0],
                  scale: 1.1,
                  transition: { duration: 0.6 }
                }}
              >
                <motion.img
                  src={icon}
                  alt={`ouricon-${id}`}
                  className="w-16 h-16 md:w-20 md:h-20"
                  initial={{ opacity: 0, scale: 0.5, rotate: 180 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2 + (index * 0.1),
                    type: "spring",
                    stiffness: 100
                  }}
                />
              </motion.div>

              {/* Title */}
              <motion.h3
                className="text-[18px] md:text-[24px] font-semibold"
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
                className="text-[#808080] text-[14px] md:text-[16px] max-w-md line-clamp-4 group-hover:text-[#b0b0b0]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.6 + (index * 0.1)
                }}
              >
                {description}
              </motion.p>

              {/* Learn More Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.8 + (index * 0.1),
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <LearnMore />
              </motion.div>
            </div>

            {/* Animated border effect */}
            <motion.div
              className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-blue-500/50 group-hover:via-purple-500/50 group-hover:to-pink-500/50"
              initial={{ opacity: 0 }}
              whileHover={{
                opacity: 1,
                background: "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1))"
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Floating background elements */}
      <motion.div
        className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 20, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />
    </section>
  );
};

export default Service;