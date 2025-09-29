import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Footer from "../components/Home/Footer";
import { AnimatedCard } from "../components/shared/AnimatedCard";
import { PageHero } from '../components/shared/pageHero';
import { SectionTitle } from '../components/shared/SecondTitle';

// Project interface
interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  category: string;
  tags: string[];
  image: string;
  gallery?: string[];
  client: string;
  timeline: string;
  services: string[];
  challenges: string[];
  solutions: string[];
  results: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

// Category interface
interface ProjectCategory {
  id: string;
  name: string;
  count: number;
}

// Mock projects data
const projects: Project[] = [
  {
    id: 1,
    title: "EcoMarket",
    subtitle: "Sustainable E-commerce Platform",
    description: "A modern e-commerce platform promoting sustainable living through eco-friendly products and carbon-neutral shopping.",
    fullDescription: "EcoMarket is a comprehensive e-commerce platform designed to make sustainable shopping accessible and engaging. The platform features advanced filtering for eco-certifications, carbon footprint tracking, and a rewards program for environmentally conscious purchases.",
    category: "E-commerce",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe", "TypeScript", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop&auto=format",
    gallery: [
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&auto=format"
    ],
    client: "GreenEarth Co.",
    timeline: "4 months",
    services: ["UI/UX Design", "Frontend Development", "Backend Development", "Payment Integration"],
    challenges: [
      "Complex product filtering system",
      "Real-time inventory management",
      "Carbon footprint calculation algorithms",
      "Multi-vendor payment processing"
    ],
    solutions: [
      "Implemented advanced search with faceted filtering",
      "Built real-time sync with inventory management system",
      "Developed custom carbon calculation API",
      "Integrated multi-vendor Stripe Connect solution"
    ],
    results: [
      "40% increase in user engagement",
      "25% higher conversion rate",
      "Reduced cart abandonment by 30%",
      "Successfully processed $2M+ in eco-friendly purchases"
    ],
    liveUrl: "https://ecomarket-demo.digitx.com",
    featured: true
  },
  {
    id: 2,
    title: "HealthTracker Pro",
    subtitle: "Comprehensive Health Management App",
    description: "A mobile-first health tracking application that helps users monitor vital signs, medications, and wellness goals.",
    fullDescription: "HealthTracker Pro is a comprehensive health management solution that combines wearable device integration, AI-powered insights, and healthcare provider connectivity to deliver personalized health tracking and recommendations.",
    category: "Mobile App",
    tags: ["React Native", "Firebase", "Machine Learning", "HealthKit", "REST API"],
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&auto=format",
    gallery: [
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop&auto=format"
    ],
    client: "HealthTech Innovations",
    timeline: "6 months",
    services: ["Mobile App Development", "API Integration", "UI/UX Design", "Data Analytics"],
    challenges: [
      "HIPAA compliance requirements",
      "Wearable device data synchronization",
      "Complex medication reminder system",
      "Healthcare provider integration"
    ],
    solutions: [
      "Implemented end-to-end encryption for patient data",
      "Built unified SDK for multiple wearable platforms",
      "Developed smart reminder algorithm with ML",
      "Created secure API for healthcare provider access"
    ],
    results: [
      "10,000+ active monthly users",
      "95% user satisfaction rating",
      "Integrated with 15+ healthcare providers",
      "Featured in App Store Health & Fitness category"
    ],
    liveUrl: "https://healthtracker-pro.com",
    featured: true
  },
  {
    id: 3,
    title: "FinanceFlow",
    subtitle: "Personal Finance Management Dashboard",
    description: "An intelligent personal finance dashboard with budgeting tools, expense tracking, and investment portfolio management.",
    fullDescription: "FinanceFlow provides users with comprehensive financial oversight through automated bank connections, AI-powered spending insights, and goal-based saving strategies. The platform includes advanced visualizations and predictive analytics.",
    category: "Web App",
    tags: ["Vue.js", "Python", "Django", "Chart.js", "Plaid API", "Docker"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&auto=format",
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1460472178825-e5240623afd5?w=800&h=600&fit=crop&auto=format"
    ],
    client: "Personal Finance Startup",
    timeline: "5 months",
    services: ["Web Development", "Data Visualization", "API Integration", "Security Implementation"],
    challenges: [
      "Secure bank data integration",
      "Real-time financial data processing",
      "Complex budgeting algorithm development",
      "Multi-currency support"
    ],
    solutions: [
      "Implemented Plaid API with encryption",
      "Built event-driven architecture for real-time updates",
      "Developed ML-based budget recommendation engine",
      "Created dynamic currency conversion system"
    ],
    results: [
      "Users save average of 23% more money",
      "Reduced financial stress scores by 40%",
      "99.9% uptime with secure data processing",
      "Supported 50+ currencies and 200+ banks"
    ],
    featured: false
  },
  {
    id: 4,
    title: "EduConnect",
    subtitle: "Online Learning Platform",
    description: "A comprehensive learning management system connecting educators and students through interactive courses and assessments.",
    fullDescription: "EduConnect revolutionizes online education by providing intuitive course creation tools, interactive assessments, real-time collaboration features, and detailed analytics for both instructors and students.",
    category: "Web App",
    tags: ["Angular", "Spring Boot", "MySQL", "WebRTC", "AWS", "WebSocket"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&auto=format",
    gallery: [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop&auto=format"
    ],
    client: "Education Institute",
    timeline: "8 months",
    services: ["Platform Development", "Video Integration", "Assessment Tools", "Analytics Dashboard"],
    challenges: [
      "Scalable video streaming for large classes",
      "Interactive whiteboard functionality",
      "Automated grading system",
      "Multi-tenant architecture"
    ],
    solutions: [
      "Implemented WebRTC with CDN optimization",
      "Built collaborative canvas with real-time sync",
      "Developed AI-powered auto-grading algorithms",
      "Designed scalable multi-tenant database architecture"
    ],
    results: [
      "Served 50,000+ students across 100+ courses",
      "Improved learning outcomes by 35%",
      "Reduced instructor workload by 50%",
      "Achieved 99.5% platform availability"
    ],
    featured: false
  },
  {
    id: 5,
    title: "RestaurantOS",
    subtitle: "Complete Restaurant Management System",
    description: "An all-in-one restaurant management solution covering POS, inventory, staff scheduling, and customer analytics.",
    fullDescription: "RestaurantOS streamlines restaurant operations through integrated point-of-sale, inventory management, staff scheduling, customer relationship management, and detailed analytics dashboard all in one comprehensive platform.",
    category: "Web App",
    tags: ["React", "Express.js", "MongoDB", "Socket.io", "Stripe", "PWA"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop&auto=format",
    gallery: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1552566273-98a3c8b3d32d?w=800&h=600&fit=crop&auto=format"
    ],
    client: "Restaurant Chain Group",
    timeline: "7 months",
    services: ["System Architecture", "POS Development", "Inventory Management", "Analytics Dashboard"],
    challenges: [
      "Real-time order management across locations",
      "Complex inventory tracking with perishables",
      "Staff scheduling optimization",
      "Integration with existing payment systems"
    ],
    solutions: [
      "Built real-time order sync with WebSocket",
      "Developed FIFO inventory system with expiration tracking",
      "Created AI-powered scheduling algorithm",
      "Implemented universal payment gateway adapter"
    ],
    results: [
      "Reduced order processing time by 45%",
      "Decreased food waste by 30%",
      "Improved staff scheduling efficiency by 60%",
      "Increased customer satisfaction scores by 28%"
    ],
    featured: false
  },
  {
    id: 6,
    title: "TravelGuide AI",
    subtitle: "AI-Powered Travel Planning Assistant",
    description: "An intelligent travel planning platform that creates personalized itineraries using AI and real-time travel data.",
    fullDescription: "TravelGuide AI leverages machine learning algorithms to analyze user preferences, budget constraints, and real-time travel data to generate personalized travel itineraries with booking integration and local recommendations.",
    category: "Web App",
    tags: ["Next.js", "OpenAI", "Prisma", "Stripe", "Maps API", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop&auto=format",
    gallery: [
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop&auto=format"
    ],
    client: "Travel Tech Startup",
    timeline: "6 months",
    services: ["AI Integration", "Full-Stack Development", "API Development", "UI/UX Design"],
    challenges: [
      "Training AI model for travel recommendations",
      "Integration with multiple booking APIs",
      "Real-time price tracking and alerts",
      "Scalable recommendation engine"
    ],
    solutions: [
      "Fine-tuned GPT model with travel data",
      "Built unified API layer for travel services",
      "Implemented real-time price monitoring system",
      "Designed microservices architecture for recommendations"
    ],
    results: [
      "Generated 10,000+ personalized itineraries",
      "Achieved 92% user satisfaction with recommendations",
      "Processed $5M+ in travel bookings",
      "Reduced trip planning time by 75%"
    ],
    featured: true
  }
];

const categories: ProjectCategory[] = [
  { id: "all", name: "All Projects", count: projects.length },
  { id: "web-app", name: "Web Applications", count: projects.filter(p => p.category === "Web App").length },
  { id: "e-commerce", name: "E-commerce", count: projects.filter(p => p.category === "E-commerce").length },
  { id: "mobile-app", name: "Mobile Apps", count: projects.filter(p => p.category === "Mobile App").length }
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

// const projectCardVariants = {
//   hidden: {
//     opacity: 0,
//     y: 40,
//     scale: 0.95
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       type: "spring" as const,
//       stiffness: 80,
//       damping: 12,
//       duration: 0.6
//     }
//   }
// };

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Refs for scroll animations
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const featuredRef = useRef<HTMLDivElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);

  // In-view hooks
  const isProjectsInView = useInView(projectsRef, { once: true, margin: "-100px" });
  const isFeaturedInView = useInView(featuredRef, { once: true, margin: "-100px" });
  const isCtaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  // Filter projects
  const filteredProjects = projects.filter(project =>
    selectedCategory === "all" ||
    project.category.toLowerCase().replace(/[^a-z0-9]/g, '-') === selectedCategory
  );

  const featuredProjects = projects.filter(project => project.featured);

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  return (
    <div className="md:px-12">
      {/* Hero Section */}
      <PageHero
        title="Our"
        subtitle="Projects"
        description="Explore our portfolio of innovative digital solutions. From e-commerce platforms to mobile applications, each project represents our commitment to excellence and creative problem-solving."
        ctaText="View Featured Work"
        onCtaClick={() => {
          const featuredSection = document.getElementById('featured');
          featuredSection?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Featured Projects */}
      <section id="featured" className="mt-16 md:mt-24 mx-4 md:mx-12">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="Featured"
            subtitle="Projects"
            description="Highlighting some of our most impactful and innovative digital solutions."
            className="mb-16"
          />

          <motion.div
            ref={featuredRef}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isFeaturedInView ? "visible" : "hidden"}
          >
            {featuredProjects.map((project) => (
              <AnimatedCard
                key={project.id}
                className="group cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-[#2a2a2a]"
                hoverScale={1.02}
              >
                <div onClick={() => openProjectModal(project)}>
                  {/* Project Image */}
                  <div className="relative h-64 md:h-80 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Featured Badge */}
                    <div className="absolute top-6 left-6">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm px-4 py-2 rounded-full font-medium">
                        Featured
                      </span>
                    </div>

                    {/* Category */}
                    <div className="absolute top-6 right-6">
                      <span className="bg-white/10 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>

                    {/* Project Info Overlay */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-white text-2xl font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-lg mb-4">
                        {project.subtitle}
                      </p>
                      <p className="text-gray-400 text-sm line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-6">
                    <div className="flex items-center justify-between text-sm text-[#666666] mb-4">
                      <span>{project.client}</span>
                      <span>{project.timeline}</span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="bg-[#262626] text-[#999999] text-xs px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="text-[#666666] text-xs">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>

                    {/* CTA */}
                    <motion.div
                      className="flex items-center text-white text-sm font-medium group-hover:text-[#e0e0e0] transition-colors"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      View Project Details
                      <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-4 h-4 ml-2"
                        whileHover={{ x: 2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </motion.svg>
                    </motion.div>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* All Projects */}
      <section className="mt-20 md:mt-32 mx-4 md:mx-12">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="All"
            subtitle="Projects"
            description="Browse our complete portfolio of digital solutions across various industries and technologies."
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
                key={category.id}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category.id
                  ? 'bg-white text-black'
                  : 'bg-[#1a1a1a] text-[#808080] border border-[#404040] hover:border-[#666666] hover:text-white'
                  }`}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {category.name} ({category.count})
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            ref={projectsRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isProjectsInView ? "visible" : "hidden"}
          >
            {filteredProjects.map((project) => (
              <AnimatedCard
                key={project.id}
                className="group cursor-pointer overflow-hidden rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-[#2a2a2a]"
                hoverScale={1.03}
              >
                <div onClick={() => openProjectModal(project)}>
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/10 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>

                    {project.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs px-2 py-1 rounded-full">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between text-[#666666] text-sm mb-3">
                      <span>{project.client}</span>
                      <span>{project.timeline}</span>
                    </div>

                    <h3 className="text-white text-xl font-semibold mb-2 line-clamp-1">
                      {project.title}
                    </h3>

                    <p className="text-[#999999] text-sm mb-1">
                      {project.subtitle}
                    </p>

                    <p className="text-[#808080] text-sm mb-4 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="bg-[#262626] text-[#999999] text-xs px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="text-[#666666] text-xs">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>

                    {/* View Details */}
                    <motion.div
                      className="flex items-center text-white text-sm font-medium group-hover:text-[#e0e0e0] transition-colors"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      View Details
                      <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-4 h-4 ml-2"
                        whileHover={{ x: 2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </motion.svg>
                    </motion.div>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-20 md:mt-32 mx-4 md:mx-12">
        <motion.div
          ref={ctaRef}
          className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-2xl p-8 md:p-16 border border-[#2a2a2a] max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 60 }}
          animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.01 }}
        >
          <motion.h2
            className="font-semibold text-[24px] md:text-[36px] text-white sora-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Let's collaborate to bring your vision to life. Whether you need a complete digital transformation or a specific solution, we're here to help you succeed.
          </motion.h2>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.button
              className="btn bg-white text-black hover:bg-[#e0e0e0]"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Start Your Project
            </motion.button>
            <motion.button
              className="btn bg-transparent text-white border border-[#404040] hover:border-[#666666]"
              whileHover={{ scale: 1.02, y: -2, backgroundColor: "rgba(64, 64, 64, 0.1)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Schedule Consultation
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Project Modal */}
      {isModalOpen && selectedProject && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeProjectModal}
        >
          <motion.div
            className="bg-[#1a1a1a] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-[#404040] my-8"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              <motion.button
                className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                onClick={closeProjectModal}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>

              <div className="absolute bottom-6 left-6 right-16">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full">
                    {selectedProject.category}
                  </span>
                  {selectedProject.featured && (
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm px-3 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                <h1 className="text-white text-3xl md:text-4xl font-bold mb-2">
                  {selectedProject.title}
                </h1>
                <p className="text-gray-300 text-xl">
                  {selectedProject.subtitle}
                </p>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              {/* Project Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div>
                  <h3 className="text-white font-semibold mb-2">Client</h3>
                  <p className="text-[#808080]">{selectedProject.client}</p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Timeline</h3>
                  <p className="text-[#808080]">{selectedProject.timeline}</p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Services</h3>
                  <p className="text-[#808080]">{selectedProject.services.join(", ")}</p>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="text-white text-xl font-semibold mb-4">Project Overview</h3>
                <p className="text-[#808080] leading-relaxed">
                  {selectedProject.fullDescription}
                </p>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h3 className="text-white text-xl font-semibold mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#262626] text-white text-sm px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Challenges & Solutions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-white text-xl font-semibold mb-4">Challenges</h3>
                  <ul className="space-y-2">
                    {selectedProject.challenges.map((challenge, index) => (
                      <li key={index} className="text-[#808080] text-sm flex items-start">
                        <span className="text-red-400 mr-2 mt-1">•</span>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-white text-xl font-semibold mb-4">Solutions</h3>
                  <ul className="space-y-2">
                    {selectedProject.solutions.map((solution, index) => (
                      <li key={index} className="text-[#808080] text-sm flex items-start">
                        <span className="text-green-400 mr-2 mt-1">•</span>
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Results */}
              <div className="mb-8">
                <h3 className="text-white text-xl font-semibold mb-4">Results & Impact</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedProject.results.map((result, index) => (
                    <div key={index} className="bg-[#262626] p-4 rounded-lg">
                      <p className="text-white text-sm">{result}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Links */}
              {(selectedProject.liveUrl || selectedProject.githubUrl) && (
                <div className="flex gap-4">
                  {selectedProject.liveUrl && (
                    <motion.a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn bg-white text-black hover:bg-[#e0e0e0]"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View Live Site
                    </motion.a>
                  )}
                  {selectedProject.githubUrl && (
                    <motion.a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn bg-transparent text-white border border-[#404040] hover:border-[#666666]"
                      whileHover={{ scale: 1.02, y: -2, backgroundColor: "rgba(64, 64, 64, 0.1)" }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View Code
                    </motion.a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}

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

export default Projects;