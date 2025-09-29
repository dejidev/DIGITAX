import { motion, useInView } from 'framer-motion';
import { useRef, type ReactNode } from 'react';
import Footer from "../components/Home/Footer";
import { ChartSpline, Handshake, Lightbulb, Star } from 'lucide-react';

// Team member interface
interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  avatar: string;
}

// Company stats interface
interface CompanyStat {
  id: number;
  number: string;
  label: string;
  description: string;
}

// Values interface
interface CompanyValue {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
}

// Mock data - replace with actual content
const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Founder & CEO",
    description: "Visionary leader with 12+ years in digital transformation",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face&auto=format"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO",
    description: "Technical architect specializing in scalable solutions",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Creative Director",
    description: "Award-winning designer with expertise in brand identity",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&auto=format"
  },
  {
    id: 4,
    name: "David Kim",
    role: "Lead Developer",
    description: "Full-stack engineer passionate about clean code",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format"
  }
];

const companyStats: CompanyStat[] = [
  {
    id: 1,
    number: "150+",
    label: "Projects Completed",
    description: "Successful digital transformations"
  },
  {
    id: 2,
    number: "98%",
    label: "Client Satisfaction",
    description: "Consistent quality delivery"
  },
  {
    id: 3,
    number: "5+",
    label: "Years Experience",
    description: "Industry expertise"
  },
  {
    id: 4,
    number: "24/7",
    label: "Support Available",
    description: "Always here for you"
  }
];

const companyValues: CompanyValue[] = [
  {
    id: 1,
    title: "Innovation",
    description: "We embrace cutting-edge technologies and creative solutions to stay ahead of industry trends.",
    icon: <Lightbulb className='text-white' />
  },
  {
    id: 2,
    title: "Quality",
    description: "Every project receives meticulous attention to detail, ensuring exceptional results that exceed expectations.",
    icon: <Star className='text-white' />
  },
  {
    id: 3,
    title: "Transparency",
    description: "Open communication and honest partnerships form the foundation of our client relationships.",
    icon: <Handshake className='text-white' />
  },
  {
    id: 4,
    title: "Growth",
    description: "We're committed to continuous learning and evolving alongside the digital landscape.",
    icon: <ChartSpline className='text-white' />
  }
];

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
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
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
      ease: "easeOut" as const
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
    y: 40,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 12,
      duration: 0.6
    }
  }
};

const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const
    }
  }
};

// Floating animation for background elements
const floatingVariants = {
  animate: {
    y: [-15, 15, -15],
    x: [-8, 8, -8],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  }
};

const About = () => {
  // Refs for scroll animations
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const valuesRef = useRef(null);
  const teamRef = useRef(null);
  // const statsRef = useRef(null);
  const missionRef = useRef(null);

  // In-view hooks
  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const isStoryInView = useInView(storyRef, { once: true, margin: "-100px" });
  const isValuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
  const isTeamInView = useInView(teamRef, { once: true, margin: "-100px" });
  // const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });
  const isMissionInView = useInView(missionRef, { once: true, margin: "-100px" });

  return (
    <div className="md:px-12">
      {/* Hero Section */}
      <section className="min-h-[100vh] relative z-20 mx-4 md:mx-12 overflow-hidden">
        {/* Background floating elements */}
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-32 right-16 w-28 h-28 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute bottom-32 left-16 w-36 h-36 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-xl"
          style={{ animationDelay: '4s' }}
        />

        <motion.div
          ref={heroRef}
          className="w-full min-h-[80vh] flex py-24 items-center justify-center px-4 mt-8 md:mt-12 text-center"
          variants={heroVariants}
          initial="hidden"
          animate={isHeroInView ? "visible" : "hidden"}
        >
          <div className="mx-auto relative z-10 max-w-4xl">
            {/* Main Title */}
            <motion.h1
              className="font-semibold text-[34px] md:text-[58px] text-white sora-bold"
              variants={titleVariants}
            >
              Crafting Digital Excellence{" "}
              <motion.span
                className="text-[#666666]"
                initial={{ opacity: 0, x: 50 }}
                animate={isHeroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                Since 2019
              </motion.span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-[#808080] mt-8 max-w-3xl mx-auto text-[16px] md:text-[20px] leading-relaxed"
              variants={subtitleVariants}
            >
              We are a passionate team of digital artisans, dedicated to transforming
              ideas into remarkable digital experiences. Our journey began with a simple
              belief: that exceptional design and technology can elevate any business.
            </motion.p>

            {/* Subtle CTA */}
            <motion.div
              className="mt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 1.8 }}
            >
              <motion.button
                className="btn text-white bg-transparent border border-[#404040] hover:border-[#666666]"
                whileHover={{
                  scale: 1.02,
                  y: -2,
                  backgroundColor: "rgba(64, 64, 64, 0.1)"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Discover Our Story
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Our Story Section */}
      <section className="mt-16 md:mt-24 mx-4 md:mx-12">
        <motion.div
          ref={storyRef}
          variants={sectionVariants}
          initial="hidden"
          animate={isStoryInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <motion.h2
                className="font-semibold text-[28px] md:text-[42px] text-white sora-bold"
                initial={{ opacity: 0, x: -30 }}
                animate={isStoryInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6 }}
              >
                Our Story
              </motion.h2>

              <motion.div
                className="mt-6 space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isStoryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p className="text-[#808080] text-[15px] md:text-[18px] leading-relaxed">
                  Founded in the heart of the digital revolution, DigitX emerged from
                  a shared vision among creative minds who believed technology should
                  serve humanity, not the other way around.
                </p>
                <p className="text-[#808080] text-[15px] md:text-[18px] leading-relaxed">
                  What started as a small collective of designers and developers has
                  grown into a trusted partner for businesses seeking meaningful digital
                  transformation. We've had the privilege of working with startups,
                  established enterprises, and everyone in between.
                </p>
                <p className="text-[#808080] text-[15px] md:text-[18px] leading-relaxed">
                  Today, we continue to push boundaries, exploring new technologies
                  while maintaining our commitment to thoughtful, user-centered design.
                </p>
              </motion.div>
            </div>

            {/* Visual Element */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isStoryInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="bg-gradient-to-br from-[#292929] to-black rounded-2xl p-8 border border-[#2a2a2a]">
                <div className="grid grid-cols-2 gap-6">
                  {companyStats.map((stat) => (
                    <motion.div
                      key={stat.id}
                      className="text-center"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="text-[24px] md:text-[32px] font-bold text-white">
                        {stat.number}
                      </div>
                      <div className="text-[#666666] text-[12px] md:text-[14px] mt-1">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="mt-20 md:mt-32 mx-4 md:mx-12">
        <motion.div
          ref={valuesRef}
          variants={sectionVariants}
          initial="hidden"
          animate={isValuesInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Title */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isValuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-semibold text-[28px] md:text-[42px] text-white sora-bold">
              What We{" "}
              <span className="text-[#666666]">Stand For</span>
            </h2>
            <p className="text-[#808080] mt-4 max-w-2xl mx-auto text-[15px] md:text-[18px]">
              Our values guide every decision we make and every project we undertake
            </p>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isValuesInView ? "visible" : "hidden"}
          >
            {companyValues.map((value) => (
              <motion.div
                key={value.id}
                className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-xl p-6 border border-[#2a2a2a]"
                variants={cardVariants}
                whileHover={{
                  scale: 1.02,
                  borderColor: "#404040",
                  transition: { duration: 0.2 }
                }}
              >
                <div className="text-2xl mb-4">{value.icon}</div>
                <h3 className="text-[20px] md:text-[24px] font-semibold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-[#808080] text-[14px] md:text-[16px] leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="mt-20 md:mt-32 mx-4 md:mx-12">
        <motion.div
          ref={teamRef}
          variants={sectionVariants}
          initial="hidden"
          animate={isTeamInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Title */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isTeamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-semibold text-[28px] md:text-[42px] text-white sora-bold">
              Meet the{" "}
              <span className="text-[#666666]">Team</span>
            </h2>
            <p className="text-[#808080] mt-4 max-w-2xl mx-auto text-[15px] md:text-[18px]">
              The talented individuals behind our success
            </p>
          </motion.div>

          {/* Team Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isTeamInView ? "visible" : "hidden"}
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                className="text-center group cursor-pointer"
                variants={cardVariants}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>

                <h3 className="text-[18px] md:text-[20px] font-semibold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-[#666666] text-[14px] mb-2">
                  {member.role}
                </p>
                <p className="text-[#808080] text-[13px] md:text-[14px] leading-relaxed">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Mission Statement */}
      <section className="mt-20 md:mt-32 mx-4 md:mx-12">
        <motion.div
          ref={missionRef}
          className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-2xl p-8 md:p-16 border border-[#2a2a2a] max-w-4xl mx-auto text-center"
          variants={sectionVariants}
          initial="hidden"
          animate={isMissionInView ? "visible" : "hidden"}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
        >
          <motion.h2
            className="font-semibold text-[24px] md:text-[36px] text-white sora-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isMissionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our Mission
          </motion.h2>

          <motion.p
            className="text-[#808080] text-[16px] md:text-[20px] leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isMissionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            To empower businesses with thoughtful digital solutions that not only meet
            today's needs but anticipate tomorrow's opportunities. We believe in creating
            technology that feels natural, designs that inspire, and experiences that
            leave lasting impressions.
          </motion.p>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isMissionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.button
              className="btn text-white bg-transparent border border-[#404040] hover:border-[#666666]"
              whileHover={{
                scale: 1.02,
                backgroundColor: "rgba(64, 64, 64, 0.1)"
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Start Your Journey With Us
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <motion.div
        className="mt-16 md:mt-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <Footer />
      </motion.div>
    </div>
  );
};

export default About;