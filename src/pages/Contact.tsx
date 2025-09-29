import { motion, useInView } from 'framer-motion';
import { useRef, useState, type ReactNode } from 'react';
import Footer from "../components/Home/Footer";

import { AnimatedCard } from "../components/shared/AnimatedCard";
import { ContactForm } from "../components/shared/ContactForm";
import { SectionTitle } from '../components/shared/SecondTitle';
import { PageHero } from '../components/shared/pageHero';

// Contact method interface
interface ContactMethod {
  id: number;
  title: string;
  description: string;
  value: string;
  icon: ReactNode;
  link?: string;
}

// Office location interface
interface OfficeLocation {
  id: number;
  city: string;
  country: string;
  address: string;
  phone: string;
  email: string;
  timezone: string;
  image: string;
}

// Mock contact data
import { Mail, Phone, MessageCircle, Calendar } from "lucide-react";

const contactMethods: ContactMethod[] = [
  {
    id: 1,
    title: "Email Us",
    description: "Send us a message and we'll respond within 24 hours",
    value: "hello@digitx.com",
    icon: <Mail className="text-white w-6 h-6" />,
    link: "mailto:hello@digitx.com"
  },
  {
    id: 2,
    title: "Call Us",
    description: "Speak directly with our team during business hours",
    value: "+234 (0) 813 456 7890",
    icon: <Phone className="text-white w-6 h-6" />,
    link: "tel:+2348134567890"
  },
  {
    id: 3,
    title: "WhatsApp",
    description: "Quick questions? Message us on WhatsApp",
    value: "+234 (0) 813 456 7890",
    icon: <MessageCircle className="text-white w-6 h-6" />,
    link: "https://wa.me/2348134567890"
  },
  {
    id: 4,
    title: "Schedule a Call",
    description: "Book a free consultation to discuss your project",
    value: "calendly.com/digitx",
    icon: <Calendar className="text-white w-6 h-6" />,
    link: "https://calendly.com/"
  }
];


const officeLocations: OfficeLocation[] = [
  {
    id: 1,
    city: "Lagos",
    country: "Nigeria",
    address: "123 Herbert Macaulay Way, Yaba, Lagos State",
    phone: "+234 (0) 813 456 7890",
    email: "lagos@digitx.com",
    timezone: "WAT (UTC+1)",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop&auto=format"
  },
  {
    id: 2,
    city: "Abuja",
    country: "Nigeria",
    address: "45 Ademola Adetokunbo Crescent, Wuse 2, FCT",
    phone: "+234 (0) 902 345 6789",
    email: "abuja@digitx.com",
    timezone: "WAT (UTC+1)",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop&auto=format"
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

const Contact = () => {
  const [selectedInquiry, setSelectedInquiry] = useState("general");

  // Refs for scroll animations
  const methodsRef = useRef<HTMLDivElement | null>(null);
  const formRef = useRef<HTMLDivElement | null>(null);
  const officesRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<HTMLDivElement | null>(null);

  // In-view hooks
  const isMethodsInView = useInView(methodsRef, { once: true, margin: "-100px" });
  const isFormInView = useInView(formRef, { once: true, margin: "-100px" });
  const isOfficesInView = useInView(officesRef, { once: true, margin: "-100px" });
  const isMapInView = useInView(mapRef, { once: true, margin: "-100px" });

  const inquiryTypes = [
    { id: "general", name: "General Inquiry" },
    { id: "project", name: "New Project" },
    { id: "support", name: "Support" },
    { id: "partnership", name: "Partnership" }
  ];

  const handleContactSubmit = async (formData: any) => {
    console.log('Contact form submission:', { ...formData, inquiryType: selectedInquiry });
  };

  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="md:px-12">
      {/* Hero Section */}
      <PageHero
        title="Get in"
        subtitle="Touch"
        description="Ready to start your next digital project? We'd love to hear from you. Whether you have a specific project in mind or just want to explore possibilities, our team is here to help."
        ctaText="Send us a Message"
        onCtaClick={scrollToForm}
      />

      {/* Contact Methods */}
      <section className="mt-16 md:mt-24 mx-4 md:mx-12">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="Ways to"
            subtitle="Connect"
            description="Choose the communication method that works best for you."
            className="mb-16"
          />

          <motion.div
            ref={methodsRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isMethodsInView ? "visible" : "hidden"}
          >
            {contactMethods.map((method) => (
              <AnimatedCard
                key={method.id}
                className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-xl p-6 border border-[#2a2a2a] text-center cursor-pointer"
                hoverScale={1.05}
              >
                <motion.a
                  href={method.link}
                  target={method.link?.startsWith('http') ? '_blank' : undefined}
                  rel={method.link?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Method Icon */}
                  <div className="text-3xl mb-4">{method.icon}</div>

                  {/* Method Title */}
                  <h3 className="text-white text-lg font-semibold mb-3">
                    {method.title}
                  </h3>

                  {/* Method Description */}
                  <p className="text-[#808080] text-sm mb-4 leading-relaxed">
                    {method.description}
                  </p>

                  {/* Method Value */}
                  <div className="text-white text-sm font-medium border-t border-[#404040] pt-4">
                    {method.value}
                  </div>
                </motion.a>
              </AnimatedCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="mt-20 md:mt-32 mx-4 md:mx-12">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            title="Send us a"
            subtitle="Message"
            description="Tell us about your project and we'll get back to you with a detailed proposal."
            className="mb-12"
          />

          <motion.div
            ref={formRef}
            className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-2xl p-8 md:p-12 border border-[#2a2a2a]"
            initial={{ opacity: 0, y: 60 }}
            animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{ duration: 0.8 }}
          >
            {/* Inquiry Type Selection */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <label className="block text-white text-sm mb-4">
                What can we help you with? *
              </label>
              <div className="flex flex-wrap gap-3">
                {inquiryTypes.map((type) => (
                  <motion.button
                    key={type.id}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedInquiry === type.id
                        ? 'bg-white text-black'
                        : 'bg-[#262626] text-[#808080] hover:bg-[#404040] hover:text-white'
                      }`}
                    onClick={() => setSelectedInquiry(type.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {type.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <ContactForm onSubmit={handleContactSubmit} />

            {/* Additional Info */}
            <motion.div
              className="mt-8 p-6 bg-[#262626] rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl mb-2">⚡</div>
                  <h4 className="text-white font-medium mb-1">Quick Response</h4>
                  <p className="text-[#999999] text-sm">We respond within 24 hours</p>
                </div>
                <div>
                  <div className="text-2xl mb-2">🔒</div>
                  <h4 className="text-white font-medium mb-1">Confidential</h4>
                  <p className="text-[#999999] text-sm">Your information is secure</p>
                </div>
                <div>
                  <div className="text-2xl mb-2">💡</div>
                  <h4 className="text-white font-medium mb-1">Free Consultation</h4>
                  <p className="text-[#999999] text-sm">No obligations, just ideas</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="mt-20 md:mt-32 mx-4 md:mx-12">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="Our"
            subtitle="Locations"
            description="Visit us at one of our offices or connect with our remote team."
            className="mb-16"
          />

          <motion.div
            ref={officesRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isOfficesInView ? "visible" : "hidden"}
          >
            {officeLocations.map((office) => (
              <AnimatedCard
                key={office.id}
                className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-xl overflow-hidden border border-[#2a2a2a]"
              >
                {/* Office Image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={office.image}
                    alt={`${office.city} office`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Office Details */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white text-xl font-semibold">
                      {office.city}
                    </h3>
                    <span className="text-[#666666] text-sm">
                      {office.country}
                    </span>
                  </div>

                  <div className="space-y-3">
                    {/* Address */}
                    <div className="flex items-start">
                      <span className="text-[#666666] mr-3 mt-1">📍</span>
                      <div>
                        <p className="text-[#999999] text-sm">
                          {office.address}
                        </p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center">
                      <span className="text-[#666666] mr-3">📞</span>
                      <a
                        href={`tel:${office.phone.replace(/\D/g, '')}`}
                        className="text-white text-sm hover:text-[#e0e0e0] transition-colors"
                      >
                        {office.phone}
                      </a>
                    </div>

                    {/* Email */}
                    <div className="flex items-center">
                      <span className="text-[#666666] mr-3">📧</span>
                      <a
                        href={`mailto:${office.email}`}
                        className="text-white text-sm hover:text-[#e0e0e0] transition-colors"
                      >
                        {office.email}
                      </a>
                    </div>

                    {/* Timezone */}
                    <div className="flex items-center">
                      <span className="text-[#666666] mr-3">🕐</span>
                      <span className="text-[#999999] text-sm">
                        {office.timezone}
                      </span>
                    </div>
                  </div>

                  {/* Get Directions Button */}
                  <motion.button
                    className="btn bg-transparent text-white border border-[#404040] hover:border-[#666666] w-full mt-6"
                    whileHover={{
                      scale: 1.02,
                      y: -2,
                      backgroundColor: "rgba(64, 64, 64, 0.1)"
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    onClick={() => {
                      const query = encodeURIComponent(office.address);
                      window.open(`https://maps.google.com/?q=${query}`, '_blank');
                    }}
                  >
                    Get Directions
                  </motion.button>
                </div>
              </AnimatedCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="mt-20 md:mt-32 mx-4 md:mx-12">
        <motion.div
          ref={mapRef}
          className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-2xl p-8 border border-[#2a2a2a] text-center"
          initial={{ opacity: 0, y: 60 }}
          animate={isMapInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="font-semibold text-[24px] md:text-[32px] text-white sora-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isMapInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Find Us on the Map
          </motion.h2>

          <motion.p
            className="text-[#808080] text-[16px] mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isMapInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Located in the heart of Lagos and Abuja, we're easily accessible and ready to meet in person.
          </motion.p>

          {/* Placeholder for Map */}
          <motion.div
            className="bg-[#262626] rounded-xl h-96 flex items-center justify-center border border-[#404040]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isMapInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="text-center">
              <div className="text-4xl mb-4">🗺️</div>
              <p className="text-[#666666] text-lg mb-4">Interactive Map</p>
              <p className="text-[#999999] text-sm max-w-md">
                Map integration would show our office locations with interactive pins and directions.
              </p>
              <motion.button
                className="btn bg-white text-black hover:bg-[#e0e0e0] mt-6"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={() => {
                  window.open('https://maps.google.com/?q=Lagos,+Nigeria', '_blank');
                }}
              >
                View on Google Maps
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Business Hours */}
      <section className="mt-16 mx-4 md:mx-12">
        <div className="max-w-2xl mx-auto">
          <motion.div
            className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-2xl p-8 border border-[#2a2a2a] text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-white text-xl font-semibold mb-6">Business Hours</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="text-white font-medium mb-2">Monday - Friday</h4>
                <p className="text-[#999999]">9:00 AM - 6:00 PM WAT</p>
              </div>
              <div>
                <h4 className="text-white font-medium mb-2">Weekend</h4>
                <p className="text-[#999999]">Emergency support only</p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-[#262626] rounded-lg">
              <p className="text-[#999999] text-sm">
                For urgent matters outside business hours, please use WhatsApp or email.
                We'll respond as soon as possible.
              </p>
            </div>
          </motion.div>
        </div>
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

export default Contact;