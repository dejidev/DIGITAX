import { motion, useInView } from 'framer-motion';
import { useRef, useState, type ReactNode } from 'react';
import Footer from "../components/Home/Footer";
import { AnimatedCard } from "../components/shared/AnimatedCard";
import { ContactForm } from "../components/shared/ContactForm";
import { PageHero } from '../components/shared/pageHero';
import { SectionTitle } from '../components/shared/SecondTitle';

// Service interface
interface Service {
  id: number;
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  deliverables: string[];
  timeline: string;
  startingPrice: string;
  icon: ReactNode;
  category: string;
  popular?: boolean;
}

// Process step interface
interface ProcessStep {
  id: number;
  title: string;
  description: string;
  duration: string;
  icon: ReactNode;
}

// FAQ interface
interface ServiceFAQ {
  id: number;
  question: string;
  answer: string;
}

// Mock services data
import { Laptop, Smartphone, Paintbrush, BarChart2, ShoppingCart, Wand, Search, Settings, Rocket } from "lucide-react";

const services: Service[] = [
  {
    id: 1,
    title: "Web Development",
    description: "Custom web applications built with modern technologies, optimized for performance, security, and scalability.",
    features: [
      "Responsive design for all devices",
      "Progressive Web App (PWA) capabilities",
      "SEO optimization and performance tuning",
      "Content Management System integration",
      "E-commerce functionality",
      "Third-party API integrations"
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
    deliverables: [
      "Fully functional website/web application",
      "Source code and documentation",
      "Content management system",
      "Performance optimization report",
      "SEO setup and analytics integration",
      "3 months of technical support"
    ],
    timeline: "4-12 weeks",
    startingPrice: "$5,000",
    icon: <Laptop className="text-white w-6 h-6" />,
    category: "Development",
    popular: true
  },
  {
    id: 2,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications designed to engage users and drive business growth.",
    features: [
      "iOS and Android compatibility",
      "Offline functionality support",
      "Push notifications and real-time sync",
      "Payment gateway integration",
      "Analytics and crash reporting",
      "App Store optimization"
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Redux"],
    deliverables: [
      "Complete mobile application",
      "App Store and Play Store deployment",
      "Backend API and database setup",
      "Admin dashboard for content management",
      "User analytics and reporting system",
      "6 months of maintenance support"
    ],
    timeline: "8-16 weeks",
    startingPrice: "$8,000",
    icon: <Smartphone className="text-white w-6 h-6" />,
    category: "Development"
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "User-centered design solutions that create intuitive and engaging experiences for your digital products.",
    features: [
      "User research and persona development",
      "Wireframing and prototyping",
      "Visual design and branding",
      "Usability testing and iteration",
      "Design system creation",
      "Accessibility compliance (WCAG)"
    ],
    technologies: ["Figma", "Adobe Creative Suite", "Principle", "InVision", "Miro", "Hotjar"],
    deliverables: [
      "Complete UI/UX design files",
      "Interactive prototypes",
      "Design system and style guide",
      "User research findings report",
      "Usability testing results",
      "Design handoff documentation"
    ],
    timeline: "6-10 weeks",
    startingPrice: "$3,000",
    icon: <Paintbrush className="text-white w-6 h-6" />,
    category: "Design",
    popular: true
  },
  {
    id: 4,
    title: "Digital Marketing",
    description: "Data-driven marketing strategies to increase your online presence, engage customers, and drive conversions.",
    features: [
      "Search Engine Optimization (SEO)",
      "Pay-per-click (PPC) advertising",
      "Social media marketing and management",
      "Content marketing and copywriting",
      "Email marketing automation",
      "Analytics and conversion tracking"
    ],
    technologies: ["Google Analytics", "Google Ads", "Facebook Ads", "HubSpot", "Mailchimp", "SEMrush"],
    deliverables: [
      "Comprehensive marketing strategy",
      "Campaign setup and optimization",
      "Content calendar and creative assets",
      "Monthly performance reports",
      "SEO audit and implementation plan",
      "Ongoing campaign management"
    ],
    timeline: "Ongoing",
    startingPrice: "$2,000/month",
    icon: <BarChart2 className="text-white w-6 h-6" />,
    category: "Marketing"
  },
  {
    id: 5,
    title: "E-commerce Solutions",
    description: "Complete e-commerce platforms with secure payment processing, inventory management, and customer analytics.",
    features: [
      "Custom shopping cart and checkout",
      "Payment gateway integration",
      "Inventory management system",
      "Order tracking and fulfillment",
      "Customer account management",
      "Multi-currency and multi-language support"
    ],
    technologies: ["Shopify", "WooCommerce", "Stripe", "PayPal", "Klaviyo", "Google Shopping"],
    deliverables: [
      "Complete e-commerce website",
      "Payment processing setup",
      "Product catalog management system",
      "Customer analytics dashboard",
      "Mobile-optimized shopping experience",
      "Staff training and documentation"
    ],
    timeline: "6-14 weeks",
    startingPrice: "$7,000",
    icon: <ShoppingCart className="text-white w-6 h-6" />,
    category: "Development"
  },
  {
    id: 6,
    title: "Brand Identity Design",
    description: "Comprehensive branding solutions that establish your visual identity and create memorable brand experiences.",
    features: [
      "Logo design and brand mark creation",
      "Color palette and typography selection",
      "Brand guidelines and style guide",
      "Business card and stationery design",
      "Social media branding assets",
      "Brand application across touchpoints"
    ],
    technologies: ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign", "Figma", "Canva Pro"],
    deliverables: [
      "Primary and secondary logo variations",
      "Comprehensive brand guidelines",
      "Color palette and typography system",
      "Business stationery package",
      "Social media template library",
      "Brand asset files in multiple formats"
    ],
    timeline: "4-8 weeks",
    startingPrice: "$2,500",
    icon: <Wand className="text-white w-6 h-6" />,
    category: "Design"
  }
];

const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Discovery & Planning",
    description: "We start by understanding your business goals, target audience, and project requirements through detailed consultation and research.",
    duration: "1-2 weeks",
    icon: <Search className="text-white w-6 h-6" />
  },
  {
    id: 2,
    title: "Design & Prototyping",
    description: "Our team creates wireframes, mockups, and interactive prototypes to visualize your project before development begins.",
    duration: "2-4 weeks",
    icon: <Paintbrush className="text-white w-6 h-6" />
  },
  {
    id: 3,
    title: "Development & Testing",
    description: "We build your solution using modern technologies, conducting thorough testing to ensure quality and performance.",
    duration: "4-12 weeks",
    icon: <Settings className="text-white w-6 h-6" />
  },
  {
    id: 4,
    title: "Launch & Support",
    description: "We deploy your project and provide ongoing support, training, and maintenance to ensure continued success.",
    duration: "Ongoing",
    icon: <Rocket className="text-white w-6 h-6" />
  }
];


const serviceFAQs: ServiceFAQ[] = [
  {
    id: 1,
    question: "How do you determine project pricing?",
    answer: "Our pricing is based on project scope, complexity, timeline, and required features. We provide detailed quotes after understanding your specific requirements during our discovery phase."
  },
  {
    id: 2,
    question: "What is included in ongoing support?",
    answer: "Our support includes bug fixes, security updates, performance monitoring, content updates, and technical assistance. We offer different support tiers based on your needs."
  },
  {
    id: 3,
    question: "Can you work with our existing systems?",
    answer: "Yes, we specialize in integrating with existing systems, databases, and third-party services. We'll assess your current setup during the discovery phase."
  },
  {
    id: 4,
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity and scope. Simple websites may take 4-6 weeks, while complex applications can take 3-6 months. We provide detailed timelines during planning."
  },
  {
    id: 5,
    question: "Do you provide training for our team?",
    answer: "Absolutely! We provide comprehensive training sessions, documentation, and video tutorials to ensure your team can effectively manage and maintain your solution."
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
};

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  // Refs for scroll animations
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const processRef = useRef<HTMLDivElement | null>(null);
  const faqRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  // In-view hooks
  const isServicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
  const isProcessInView = useInView(processRef, { once: true, margin: "-100px" });
  const isFaqInView = useInView(faqRef, { once: true, margin: "-100px" });
  const isContactInView = useInView(contactRef, { once: true, margin: "-100px" });

  // Get unique categories
  const categories = ["all", ...new Set(services.map(service => service.category.toLowerCase()))];

  // Filter services by category
  const filteredServices = services.filter(service =>
    selectedCategory === "all" ||
    service.category.toLowerCase() === selectedCategory
  );

  const handleContactSubmit = async (formData: any) => {
    console.log('Contact form submission:', formData);
  };

  const toggleFAQ = (id: number) => {
    setOpenFAQ(prev => prev === id ? null : id);
  };

  return (
    <div className="md:px-12">
      {/* Hero Section */}
      <PageHero
        title="Our"
        subtitle="Services"
        description="We offer comprehensive digital solutions tailored to your business needs. From web development to digital marketing, our expert team delivers results that drive growth and success."
        ctaText="View Our Services"
        onCtaClick={() => {
          const servicesSection = document.getElementById('services');
          servicesSection?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Services Grid */}
      <section id="services" className="mt-16 md:mt-24 mx-4 md:mx-12">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="What We"
            subtitle="Offer"
            description="Explore our range of digital services designed to help your business thrive in the digital landscape."
            className="mb-12"
          />

          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                className={`px-6 py-3 rounded-full text-sm font-medium capitalize transition-all duration-300 ${selectedCategory === category
                  ? 'bg-white text-black'
                  : 'bg-[#1a1a1a] text-[#808080] border border-[#404040] hover:border-[#666666] hover:text-white'
                  }`}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {category === "all" ? "All Services" : category}
              </motion.button>
            ))}
          </motion.div>

          {/* Services Grid */}
          <motion.div
            ref={servicesRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isServicesInView ? "visible" : "hidden"}
          >
            {filteredServices.map((service) => (
              <AnimatedCard
                key={service.id}
                className={`bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-xl p-6 border relative ${service.popular
                  ? 'border-[#404040] bg-gradient-to-br from-[#1a1a1a] via-[#1a1a1a] to-[#2a2a2a]'
                  : 'border-[#2a2a2a]'
                  }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-6">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center">
                  {/* Service Icon */}
                  <div className="text-4xl mb-4">{service.icon}</div>

                  {/* Service Title */}
                  <h3 className="text-white text-xl font-semibold mb-3">
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="text-[#808080] text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="text-left mb-6">
                    <h4 className="text-white font-medium mb-3 text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="text-[#666666] text-xs flex items-start">
                          <span className="text-green-400 mr-2 mt-1">✓</span>
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-[#666666] text-xs">
                          +{service.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Pricing and Timeline */}
                  <div className="border-t border-[#404040] pt-4 mb-6">
                    <div className="flex justify-between items-center text-sm mb-2">
                      <span className="text-[#666666]">Starting from:</span>
                      <span className="text-white font-semibold">{service.startingPrice}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-[#666666]">Timeline:</span>
                      <span className="text-white font-semibold">{service.timeline}</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    className="btn bg-white text-black hover:bg-[#e0e0e0] w-full"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Get Started
                  </motion.button>
                </div>
              </AnimatedCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="mt-20 md:mt-32 mx-4 md:mx-12">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="Our"
            subtitle="Process"
            description="We follow a proven methodology to ensure successful project delivery and client satisfaction."
            className="mb-16"
          />

          <motion.div
            ref={processRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isProcessInView ? "visible" : "hidden"}
          >
            {processSteps.map((step, index) => (
              <AnimatedCard
                key={step.id}
                className="relative text-center"
                delay={index * 0.1}
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center text-sm font-bold">
                    {step.id}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-xl p-6 pt-8 border border-[#2a2a2a]">
                  {/* Step Icon */}
                  <div className="text-3xl mb-4">{step.icon}</div>

                  {/* Step Title */}
                  <h3 className="text-white text-lg font-semibold mb-3">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-[#808080] text-sm mb-4 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Duration */}
                  <div className="text-[#666666] text-xs">
                    Duration: {step.duration}
                  </div>
                </div>

                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-[#404040] to-transparent"></div>
                  </div>
                )}
              </AnimatedCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mt-20 md:mt-32 mx-4 md:mx-12">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            title="Frequently Asked"
            subtitle="Questions"
            description="Get answers to common questions about our services and process."
            className="mb-16"
          />

          <motion.div
            ref={faqRef}
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            animate={isFaqInView ? "visible" : "hidden"}
          >
            {serviceFAQs.map((faq) => (
              <AnimatedCard
                key={faq.id}
                className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-xl border border-[#2a2a2a] overflow-hidden"
              >
                <motion.div
                  className="p-6 cursor-pointer"
                  onClick={() => toggleFAQ(faq.id)}
                  whileHover={{ backgroundColor: "rgba(26,26,26,0.5)" }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-white text-lg font-medium pr-8">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openFAQ === faq.id ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex-shrink-0"
                    >
                      <div className="w-8 h-8 bg-[#404040] rounded-full flex items-center justify-center text-white">
                        +
                      </div>
                    </motion.div>
                  </div>

                  {openFAQ === faq.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-[#808080] mt-4 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              </AnimatedCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mt-20 md:mt-32 mx-4 md:mx-12">
        <motion.div
          ref={contactRef}
          className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-2xl p-8 md:p-16 border border-[#2a2a2a] max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 60 }}
          animate={isContactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.01 }}
        >
          <div className="text-center mb-8">
            <motion.h2
              className="font-semibold text-[24px] md:text-[36px] text-white sora-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isContactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Ready to Get Started?
            </motion.h2>

            <motion.p
              className="text-[#808080] text-[16px] md:text-[18px] mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isContactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Let's discuss your project and find the perfect solution for your business needs.
              Get in touch with our team today for a free consultation.
            </motion.p>
          </div>

          <ContactForm
            onSubmit={handleContactSubmit}
            className="max-w-2xl mx-auto"
          />
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

export default Services;