
import { motion } from 'framer-motion';
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

// Animation variants
const heroVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    }
  }
};

const titleVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,   // ✅ cast
      stiffness: 100,
      damping: 12,
      duration: 0.8
    }
  }
};

const subtitleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const   // ✅ cast
    }
  }
};

const ctaVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const   // ✅ cast
    }
  }
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring" as const,   // ✅ cast
      stiffness: 200,
      damping: 10
    }
  }
};

// Floating animation for background elements
const floatingVariants = {
  animate: {
    y: [-10, 10, -10],
    x: [-5, 5, -5],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut" as const  // ✅ cast
    }
  }
};


const Home = () => {
  return (
    <div className="md:px-12">
      {/* Hero Section with Animations */}
      <section className="min-h-[100vh] relative z-20 mx-4 md:mx-12 overflow-hidden">
        {/* Background floating elements */}
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl"
          style={{ animationDelay: '3s' }}
        />

        <motion.div
          className="w-full min-h-[60vh] flex py-24 items-center justify-center px-4 mt-8 md:mt-12 text-center"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="mx-auto relative z-10">
            {/* Main Title */}
            <motion.h1
              className="font-semibold text-[34px] md:text-[58px] text-white sora-bold"
              variants={titleVariants}
            >
              Digital Solutions{" "}
              <motion.span
                className="text-[#666666]"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                That Drive Success
              </motion.span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-[#808080] mt-6 max-w-4xl mx-auto text-[14px] md:text-[18px]"
              variants={subtitleVariants}
            >
              At DigitX, we believe in the transformative power of digital solutions.
              Our team of experts is dedicated to helping businesses like yours thrive
              in the fast-paced digital landscape. From captivating web design to data-driven
              marketing strategies, we are committed to delivering results that exceed expectations.
            </motion.p>

            {/* CTA Section */}
            <motion.div variants={ctaVariants}>
              <motion.p
                className="text-white text-[14px] md:text-[20px] my-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.5 }}
              >
                Unlock Your Digital Potential Today
              </motion.p>

              <motion.div
                className="my-4 flex items-center justify-center gap-4"
                variants={buttonVariants}
              >
                <motion.button
                  className="btn text-black bg-white"
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                    boxShadow: "0 10px 25px rgba(255, 255, 255, 0.2)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Get Started
                </motion.button>
                <motion.button
                  className="btn bg-[#262626] text-white border border-[#404040]"
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                    backgroundColor: "#404040",
                    borderColor: "#666666"
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

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.5 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border border-white/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-white/50 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Page Sections with Stagger */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <Reason />
        <Service />
        <Work />
        <Testimonial />
        <Frequent />
        <Patners/>
        <Footer />
      </motion.div>
    </div>
  );
};

export default Home;