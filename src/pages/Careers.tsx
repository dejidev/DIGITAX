import { motion, useInView } from 'framer-motion';
import { useRef, useState, type ReactNode } from 'react';
import Footer from "../components/Home/Footer";

import { AnimatedCard } from "../components/shared/AnimatedCard";
import { ContactForm } from "../components/shared/ContactForm";
import { SectionTitle } from '../components/shared/SecondTitle';
import { PageHero } from '../components/shared/pageHero';
import { ChartSpline, Handshake, Lightbulb, Star } from 'lucide-react';
import { Home, BookOpen, DollarSign, Heart, Clock, Rocket } from 'lucide-react';

// Job position interface
interface JobPosition {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  salary?: string;
  featured?: boolean;
}

// Company benefit interface
interface CompanyBenefit {
  id: number;
  icon: ReactNode;
  title: string;
  description: string;
}

// Company value interface
interface CompanyValue {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
}

// Mock job positions data
const jobPositions: JobPosition[] = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "Remote / Lagos",
    type: "Full-time",
    experience: "4+ years",
    description: "Join our engineering team to build cutting-edge web applications using React, TypeScript, and modern frontend technologies.",
    requirements: [
      "4+ years of experience with React and TypeScript",
      "Strong understanding of modern CSS and responsive design",
      "Experience with state management (Redux, Zustand, etc.)",
      "Familiarity with testing frameworks (Jest, React Testing Library)",
      "Knowledge of build tools (Vite, Webpack, etc.)"
    ],
    responsibilities: [
      "Develop and maintain high-quality frontend applications",
      "Collaborate with designers to implement pixel-perfect UIs",
      "Optimize applications for maximum speed and scalability",
      "Mentor junior developers and conduct code reviews",
      "Contribute to technical architecture decisions"
    ],
    benefits: [
      "Competitive salary and equity package",
      "Flexible working hours and remote options",
      "Professional development budget",
      "Health insurance and wellness programs"
    ],
    salary: "$80,000 - $120,000",
    featured: true
  },
  {
    id: 2,
    title: "UX/UI Designer",
    department: "Design",
    location: "Lagos / Hybrid",
    type: "Full-time",
    experience: "3+ years",
    description: "Create exceptional user experiences and interfaces for digital products that delight our clients and their users.",
    requirements: [
      "3+ years of experience in UX/UI design",
      "Proficiency in Figma, Sketch, or Adobe Creative Suite",
      "Strong portfolio showcasing web and mobile designs",
      "Understanding of user-centered design principles",
      "Experience with prototyping and user testing"
    ],
    responsibilities: [
      "Design intuitive and engaging user interfaces",
      "Conduct user research and usability testing",
      "Create wireframes, prototypes, and design systems",
      "Collaborate with developers to ensure design implementation",
      "Present design concepts to clients and stakeholders"
    ],
    benefits: [
      "Creative freedom and design leadership opportunities",
      "Access to latest design tools and software",
      "Conference attendance and learning budget",
      "Collaborative and inspiring work environment"
    ],
    salary: "$60,000 - $90,000"
  },
  {
    id: 3,
    title: "Digital Marketing Specialist",
    department: "Marketing",
    location: "Lagos",
    type: "Full-time",
    experience: "2+ years",
    description: "Drive growth through strategic digital marketing campaigns and help our clients achieve their business objectives.",
    requirements: [
      "2+ years of digital marketing experience",
      "Proficiency in Google Analytics, Google Ads, Facebook Ads",
      "Experience with SEO/SEM and content marketing",
      "Strong analytical and data interpretation skills",
      "Excellent written and verbal communication"
    ],
    responsibilities: [
      "Develop and execute digital marketing strategies",
      "Manage social media accounts and content creation",
      "Analyze campaign performance and optimize ROI",
      "Collaborate with clients on marketing objectives",
      "Stay updated with latest marketing trends and tools"
    ],
    benefits: [
      "Performance-based bonuses",
      "Marketing tools and software access",
      "Client interaction and relationship building",
      "Growth opportunities in expanding company"
    ],
    salary: "$45,000 - $70,000"
  },
  {
    id: 4,
    title: "Backend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    experience: "3+ years",
    description: "Build robust and scalable backend systems that power our web applications and client projects.",
    requirements: [
      "3+ years of backend development experience",
      "Proficiency in Node.js, Python, or similar",
      "Experience with databases (PostgreSQL, MongoDB)",
      "Knowledge of API design and microservices",
      "Understanding of cloud platforms (AWS, Azure, GCP)"
    ],
    responsibilities: [
      "Design and develop RESTful APIs and microservices",
      "Optimize database performance and architecture",
      "Implement security best practices",
      "Deploy and maintain applications in cloud environments",
      "Collaborate with frontend developers on integrations"
    ],
    benefits: [
      "Remote-first culture",
      "Technical conference attendance",
      "Learning and certification support",
      "Flexible project assignments"
    ],
    salary: "$70,000 - $100,000"
  },
  {
    id: 5,
    title: "Project Manager",
    department: "Operations",
    location: "Lagos / Remote",
    type: "Full-time",
    experience: "4+ years",
    description: "Lead cross-functional teams to deliver exceptional digital projects on time and within budget.",
    requirements: [
      "4+ years of project management experience",
      "PMP or Scrum Master certification preferred",
      "Experience with digital agency or tech company",
      "Strong leadership and communication skills",
      "Proficiency in project management tools"
    ],
    responsibilities: [
      "Plan and execute project timelines and deliverables",
      "Coordinate between teams and manage resources",
      "Communicate project status to clients and stakeholders",
      "Identify and mitigate project risks",
      "Ensure quality standards and client satisfaction"
    ],
    benefits: [
      "Leadership development opportunities",
      "Client-facing role with business impact",
      "Project management certification support",
      "Competitive compensation package"
    ],
    salary: "$65,000 - $95,000"
  }
];


const companyBenefits: CompanyBenefit[] = [
  {
    id: 1,
    icon: <Home className="text-white w-6 h-6" />,
    title: "Remote-First Culture",
    description: "Work from anywhere with flexible hours and excellent remote collaboration tools."
  },
  {
    id: 2,
    icon: <BookOpen className="text-white w-6 h-6" />,
    title: "Learning & Development",
    description: "Annual learning budget, conference tickets, and certification support for continuous growth."
  },
  {
    id: 3,
    icon: <DollarSign className="text-white w-6 h-6" />,
    title: "Competitive Compensation",
    description: "Market-rate salaries, performance bonuses, and equity participation for full-time employees."
  },
  {
    id: 4,
    icon: <Heart className="text-white w-6 h-6" />,
    title: "Health & Wellness",
    description: "Comprehensive health insurance, mental health support, and wellness program benefits."
  },
  {
    id: 5,
    icon: <Clock className="text-white w-6 h-6" />,
    title: "Work-Life Balance",
    description: "Flexible schedules, unlimited PTO policy, and respect for your personal time."
  },
  {
    id: 6,
    icon: <Rocket className="text-white w-6 h-6" />,
    title: "Growth Opportunities",
    description: "Clear career paths, mentorship programs, and opportunities to lead exciting projects."
  }
];



const cultureValues: CompanyValue[] = [
  {
    id: 1,
    title: "Innovation First",
    description: "We embrace new technologies and creative solutions to stay ahead of the curve.",
    icon: <Lightbulb className='text-white' />
  },
  {
    id: 2,
    title: "Collaborative Spirit",
    description: "We believe the best work happens when diverse minds come together.",
    icon: <Handshake className='text-white' />
  },
  {
    id: 3,
    title: "Quality Focus",
    description: "We take pride in delivering exceptional work that exceeds expectations.",
    icon: <Star className='text-white' />
  },
  {
    id: 4,
    title: "Continuous Learning",
    description: "We invest in our team's growth and encourage experimentation.",
    icon: <ChartSpline className='text-white' />
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

// const jobCardVariants = {
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

const Careers = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);

  // Refs for scroll animations
  const jobsRef = useRef<HTMLDivElement | null>(null);
  const benefitsRef = useRef<HTMLDivElement | null>(null);
  const cultureRef = useRef<HTMLDivElement | null>(null);
  const applicationRef = useRef<HTMLDivElement | null>(null);

  // In-view hooks
  const isJobsInView = useInView(jobsRef, { once: true, margin: "-100px" });
  const isBenefitsInView = useInView(benefitsRef, { once: true, margin: "-100px" });
  const isCultureInView = useInView(cultureRef, { once: true, margin: "-100px" });
  const isApplicationInView = useInView(applicationRef, { once: true, margin: "-100px" });

  // Get unique departments
  const departments = ["all", ...new Set(jobPositions.map(job => job.department.toLowerCase()))];

  // Filter jobs by department
  const filteredJobs = jobPositions.filter(job =>
    selectedDepartment === "all" ||
    job.department.toLowerCase() === selectedDepartment
  );

  const handleJobApplication = async (formData: any) => {
    // Handle job application submission
    console.log('Job application:', formData, selectedJob);
    setIsApplicationModalOpen(false);
    setSelectedJob(null);
  };

  const openApplicationModal = (job: JobPosition) => {
    setSelectedJob(job);
    setIsApplicationModalOpen(true);
  };

  return (
    <div className="md:px-12">
      {/* Hero Section */}
      <PageHero
        title="Join Our"
        subtitle="Team"
        description="Be part of a passionate team that's shaping the future of digital experiences. We're always looking for talented individuals who share our vision of creating exceptional digital solutions."
        ctaText="View Open Positions"
        onCtaClick={() => {
          const jobsSection = document.getElementById('jobs');
          jobsSection?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Company Culture & Values */}
      <section className="mt-16 md:mt-24 mx-4 md:mx-12">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="Why"
            subtitle="DigitX?"
            description="We believe that great work comes from great culture. Here's what makes us different."
            className="mb-16"
          />

          <motion.div
            ref={cultureRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isCultureInView ? "visible" : "hidden"}
          >
            {cultureValues.map((value) => (
              <AnimatedCard
                key={value.id}
                className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-xl p-6 border border-[#2a2a2a] text-center"
                hoverScale={1.05}
              >
                <div className="text-3xl mb-4">{value.icon}</div>
                <h3 className="text-white text-lg font-semibold mb-3">
                  {value.title}
                </h3>
                <p className="text-[#808080] text-sm leading-relaxed">
                  {value.description}
                </p>
              </AnimatedCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mt-20 md:mt-32 mx-4 md:mx-12">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="Benefits &"
            subtitle="Perks"
            description="We take care of our team so they can do their best work."
            className="mb-16"
          />

          <motion.div
            ref={benefitsRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isBenefitsInView ? "visible" : "hidden"}
          >
            {companyBenefits.map((benefit) => (
              <AnimatedCard
                key={benefit.id}
                className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-xl p-6 border border-[#2a2a2a]"
              >
                <div className="text-2xl mb-4">{benefit.icon}</div>
                <h3 className="text-white text-xl font-semibold mb-3">
                  {benefit.title}
                </h3>
                <p className="text-[#808080] text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </AnimatedCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="jobs" className="mt-20 md:mt-32 mx-4 md:mx-12">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="Open"
            subtitle="Positions"
            description="Find your next opportunity and help us build amazing digital experiences."
            className="mb-12"
          />

          {/* Department Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {departments.map((dept) => (
              <motion.button
                key={dept}
                className={`px-6 py-3 rounded-full text-sm font-medium capitalize transition-all duration-300 ${selectedDepartment === dept
                  ? 'bg-white text-black'
                  : 'bg-[#1a1a1a] text-[#808080] border border-[#404040] hover:border-[#666666] hover:text-white'
                  }`}
                onClick={() => setSelectedDepartment(dept)}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {dept === "all" ? "All Departments" : dept}
              </motion.button>
            ))}
          </motion.div>

          {/* Job Listings */}
          <motion.div
            ref={jobsRef}
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate={isJobsInView ? "visible" : "hidden"}
          >
            {filteredJobs.map((job) => (
              <AnimatedCard
                key={job.id}
                className={`bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-xl p-6 border cursor-pointer ${job.featured
                  ? 'border-[#404040] bg-gradient-to-br from-[#1a1a1a] via-[#1a1a1a] to-[#2a2a2a]'
                  : 'border-[#2a2a2a]'
                  }`}
                hoverScale={1.01}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-white text-xl font-semibold">
                            {job.title}
                          </h3>
                          {job.featured && (
                            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs px-2 py-1 rounded-full">
                              Featured
                            </span>
                          )}
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-[#666666] text-sm">
                          <span>{job.department}</span>
                          <span>•</span>
                          <span>{job.location}</span>
                          <span>•</span>
                          <span>{job.type}</span>
                          <span>•</span>
                          <span>{job.experience}</span>
                        </div>
                      </div>
                      {job.salary && (
                        <div className="text-right">
                          <span className="text-white text-lg font-semibold">
                            {job.salary}
                          </span>
                        </div>
                      )}
                    </div>

                    <p className="text-[#808080] text-sm mb-6 leading-relaxed">
                      {job.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {job.requirements.slice(0, 3).map((req, index) => (
                        <span
                          key={index}
                          className="bg-[#262626] text-[#999999] text-xs px-3 py-1 rounded-full"
                        >
                          {req.split(' ').slice(0, 3).join(' ')}...
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:ml-6">
                    <motion.button
                      className="btn bg-white text-black hover:bg-[#e0e0e0] w-full lg:w-auto"
                      onClick={() => openApplicationModal(job)}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      Apply Now
                    </motion.button>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </motion.div>

          {filteredJobs.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#666666] text-lg mb-4">
                No positions available in this department at the moment.
              </p>
              <p className="text-[#808080] text-sm">
                Check back soon or reach out to us directly if you think you'd be a great fit!
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* General Application */}
      <section className="mt-20 md:mt-32 mx-4 md:mx-12">
        <motion.div
          ref={applicationRef}
          className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-2xl p-8 md:p-16 border border-[#2a2a2a] max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 60 }}
          animate={isApplicationInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.01 }}
        >
          <div className="text-center mb-8">
            <motion.h2
              className="font-semibold text-[24px] md:text-[36px] text-white sora-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isApplicationInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Don't See the Perfect Role?
            </motion.h2>

            <motion.p
              className="text-[#808080] text-[16px] md:text-[18px] mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isApplicationInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              We're always looking for talented individuals to join our team. Send us your resume and tell us how you'd like to contribute.
            </motion.p>
          </div>

          <ContactForm
            onSubmit={handleJobApplication}
            className="max-w-2xl mx-auto"
          />
        </motion.div>
      </section>

      {/* Application Modal */}
      {isApplicationModalOpen && selectedJob && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsApplicationModalOpen(false)}
        >
          <motion.div
            className="bg-[#1a1a1a] rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#404040]"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white text-2xl font-semibold">
                Apply for {selectedJob.title}
              </h3>
              <motion.button
                className="text-[#666666] hover:text-white"
                onClick={() => setIsApplicationModalOpen(false)}
                whileHover={{ scale: 1.1 }}
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
            </div>

            <div className="mb-6">
              <p className="text-[#808080] mb-4">{selectedJob.description}</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-[#666666]">Department:</span>
                  <span className="text-white ml-2">{selectedJob.department}</span>
                </div>
                <div>
                  <span className="text-[#666666]">Location:</span>
                  <span className="text-white ml-2">{selectedJob.location}</span>
                </div>
                <div>
                  <span className="text-[#666666]">Type:</span>
                  <span className="text-white ml-2">{selectedJob.type}</span>
                </div>
                <div>
                  <span className="text-[#666666]">Experience:</span>
                  <span className="text-white ml-2">{selectedJob.experience}</span>
                </div>
              </div>
            </div>

            <ContactForm onSubmit={handleJobApplication} />
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

export default Careers;