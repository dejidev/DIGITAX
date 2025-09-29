import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Footer from "../components/Home/Footer";
import { PageHero } from '../components/shared/pageHero';
import { AnimatedCard } from '../components/shared/AnimatedCard';

// Blog post interface
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  featuredImage: string;
  slug: string;
}

// Category interface
interface Category {
  id: string;
  name: string;
  count: number;
}

// Mock blog data
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt: "Explore the emerging technologies and methodologies that are reshaping how we build digital experiences in the modern web landscape.",
    author: "Sarah Johnson",
    date: "2024-03-15",
    readTime: "8 min read",
    category: "Web Development",
    tags: ["React", "TypeScript", "Performance", "Trends"],
    featuredImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&auto=format",
    slug: "future-of-web-development-2024"
  },
  {
    id: 2,
    title: "Designing for Accessibility: A Comprehensive Guide",
    excerpt: "Learn how to create inclusive digital experiences that work for everyone, regardless of their abilities or circumstances.",
    author: "Michael Chen",
    date: "2024-03-10",
    readTime: "12 min read",
    category: "UX/UI Design",
    tags: ["Accessibility", "Design", "WCAG", "Inclusive Design"],
    featuredImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop&auto=format",
    slug: "designing-for-accessibility-guide"
  },
  {
    id: 3,
    title: "Mobile-First Design: Why It Matters More Than Ever",
    excerpt: "Understanding the critical importance of mobile-first design principles in today's increasingly mobile-centric digital world.",
    author: "Emily Rodriguez",
    date: "2024-03-05",
    readTime: "6 min read",
    category: "Mobile Design",
    tags: ["Mobile", "Responsive", "UX", "Performance"],
    featuredImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop&auto=format",
    slug: "mobile-first-design-importance"
  },
  {
    id: 4,
    title: "SEO Best Practices for Modern Websites",
    excerpt: "Discover the latest SEO strategies and techniques that will help your website rank higher and attract more organic traffic.",
    author: "David Kim",
    date: "2024-02-28",
    readTime: "10 min read",
    category: "Digital Marketing",
    tags: ["SEO", "Marketing", "Content Strategy", "Analytics"],
    featuredImage: "https://images.unsplash.com/photo-1562577309-2592ab84b1bc?w=600&h=400&fit=crop&auto=format",
    slug: "seo-best-practices-modern-websites"
  },
  {
    id: 5,
    title: "The Psychology of Color in Digital Design",
    excerpt: "Explore how color choices impact user behavior and emotions, and learn to make strategic color decisions for better UX.",
    author: "Emily Rodriguez",
    date: "2024-02-20",
    readTime: "7 min read",
    category: "UX/UI Design",
    tags: ["Color Theory", "Psychology", "Branding", "UX"],
    featuredImage: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&h=400&fit=crop&auto=format",
    slug: "psychology-of-color-digital-design"
  },
  {
    id: 6,
    title: "Building High-Performance React Applications",
    excerpt: "Learn advanced optimization techniques to create lightning-fast React applications that deliver exceptional user experiences.",
    author: "David Kim",
    date: "2024-02-15",
    readTime: "15 min read",
    category: "Web Development",
    tags: ["React", "Performance", "Optimization", "JavaScript"],
    featuredImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop&auto=format",
    slug: "building-high-performance-react-applications"
  }
];

const categories: Category[] = [
  { id: "all", name: "All Posts", count: blogPosts.length },
  { id: "web-development", name: "Web Development", count: 2 },
  { id: "ux-ui-design", name: "UX/UI Design", count: 2 },
  { id: "mobile-design", name: "Mobile Design", count: 1 },
  { id: "digital-marketing", name: "Digital Marketing", count: 1 }
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

// const postVariants = {
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

const Blogs = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Refs for scroll animations
  const categoriesRef = useRef<HTMLDivElement | null>(null);
  const postsRef = useRef<HTMLDivElement | null>(null);
  const newsletterRef = useRef<HTMLDivElement | null>(null);

  // In-view hooks
  const isCategoriesInView = useInView(categoriesRef, { once: true, margin: "-100px" });
  const isPostsInView = useInView(postsRef, { once: true, margin: "-100px" });
  const isNewsletterInView = useInView(newsletterRef, { once: true, margin: "-100px" });

  // Filter posts
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "all" ||
      post.category.toLowerCase().replace(/[^a-z0-9]/g, '-') === selectedCategory;
    const matchesSearch = searchTerm === "" ||
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // const handleNewsletterSubmit = async (email: string) => {
  //   // Newsletter subscription logic would go here
  //   console.log('Newsletter subscription:', email);
  // };

  return (
    <div className="md:px-12">
      {/* Hero Section */}
      <PageHero
        title="Insights &"
        subtitle="Stories"
        description="Stay updated with the latest trends, tips, and insights from the world of digital design and development. Our blog features expert perspectives, case studies, and practical advice to help you stay ahead in the digital landscape."
        ctaText="Subscribe to Updates"
        onCtaClick={() => {
          const newsletterSection = document.getElementById('newsletter');
          newsletterSection?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Search and Categories */}
      <section className="mx-4 md:mx-12 mb-12">
        <div className="max-w-6xl mx-auto">
          {/* Search Bar */}
          <motion.div
            className="max-w-md mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#1a1a1a] border border-[#404040] rounded-full px-6 py-4 pl-12 text-white placeholder-[#666666] focus:border-[#666666] focus:outline-none transition-colors"
              />
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 text-[#666666] absolute left-4 top-1/2 transform -translate-y-1/2"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </motion.svg>
            </div>
          </motion.div>

          {/* Categories */}
          <motion.div
            ref={categoriesRef}
            className="flex flex-wrap justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isCategoriesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
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
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="mx-4 md:mx-12 mb-20">
        <div className="max-w-6xl mx-auto">
          {filteredPosts.length === 0 ? (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#666666] text-lg mb-4">
                No articles found {searchTerm && `for "${searchTerm}"`}
              </p>
              <motion.button
                className="btn bg-[#262626] text-white border border-[#404040]"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
                whileHover={{ scale: 1.02, backgroundColor: "#404040" }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Clear Filters
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              ref={postsRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate={isPostsInView ? "visible" : "hidden"}
            >
              {filteredPosts.map((post, index) => (
                <AnimatedCard
                  key={post.id}
                  delay={index * 0.1}
                  className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-xl overflow-hidden border border-[#2a2a2a] cursor-pointer"
                  hoverScale={1.03}
                >
                  <div className="group">
                    {/* Featured Image */}
                    <div className="relative overflow-hidden h-48">
                      <img
                        src={post.featuredImage}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/10 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Post Content */}
                    <div className="p-6">
                      {/* Meta Information */}
                      <div className="flex items-center gap-4 text-[#666666] text-sm mb-4">
                        <span>{post.author}</span>
                        <span>•</span>
                        <span>{formatDate(post.date)}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-white text-xl font-semibold mb-3 line-clamp-2 group-hover:text-[#e0e0e0] transition-colors">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-[#808080] text-sm mb-4 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="bg-[#262626] text-[#999999] text-xs px-2 py-1 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                        {post.tags.length > 3 && (
                          <span className="text-[#666666] text-xs">
                            +{post.tags.length - 3} more
                          </span>
                        )}
                      </div>

                      {/* Read More */}
                      <motion.div
                        className="flex items-center text-white text-sm font-medium group-hover:text-[#e0e0e0] transition-colors"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        Read More
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
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section id="newsletter" className="mx-4 md:mx-12 mb-20">
        <motion.div
          ref={newsletterRef}
          className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-2xl p-8 md:p-16 border border-[#2a2a2a] max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 60 }}
          animate={isNewsletterInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.01 }}
        >
          <motion.h2
            className="font-semibold text-[24px] md:text-[36px] text-white sora-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isNewsletterInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Stay Updated
          </motion.h2>

          <motion.p
            className="text-[#808080] text-[16px] md:text-[18px] mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isNewsletterInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Subscribe to our newsletter and get the latest insights, tips, and industry updates delivered straight to your inbox.
          </motion.p>

          <motion.div
            className="max-w-md mx-auto flex flex-col md:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isNewsletterInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-[#262626] border border-[#404040] rounded-lg px-4 py-3 text-white placeholder-[#666666] focus:border-[#666666] focus:outline-none transition-colors"
            />
            <motion.button
              className="btn bg-white text-black hover:bg-[#e0e0e0] whitespace-nowrap  py-2"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Subscribe
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

export default Blogs;