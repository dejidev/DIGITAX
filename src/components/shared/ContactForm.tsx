// src/components/shared/ContactForm.tsx
import { motion } from 'framer-motion';
import { useState } from 'react';
import { LoadingSpinner } from './LoadingSpinner';

interface ContactFormProps {
    onSubmit?: (data: FormData) => Promise<void>;
    className?: string;
}

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const formVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            staggerChildren: 0.1
        }
    }
};

const fieldVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.4 }
    }
};

export const ContactForm: React.FC<ContactFormProps> = ({
    onSubmit,
    className = ""
}) => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!onSubmit) return;

        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            await onSubmit(formData);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <motion.form
            className={`space-y-6 ${className}`}
            variants={formVariants}
            initial="hidden"
            animate="visible"
            onSubmit={handleSubmit}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={fieldVariants}>
                    <label htmlFor="name" className="block text-white text-sm mb-2">
                        Name *
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#1a1a1a] border border-[#404040] rounded-lg px-4 py-3 text-white placeholder-[#666666] focus:border-[#666666] focus:outline-none transition-colors"
                        placeholder="Your name"
                    />
                </motion.div>

                <motion.div variants={fieldVariants}>
                    <label htmlFor="email" className="block text-white text-sm mb-2">
                        Email *
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#1a1a1a] border border-[#404040] rounded-lg px-4 py-3 text-white placeholder-[#666666] focus:border-[#666666] focus:outline-none transition-colors"
                        placeholder="your@email.com"
                    />
                </motion.div>
            </div>

            <motion.div variants={fieldVariants}>
                <label htmlFor="subject" className="block text-white text-sm mb-2">
                    Subject *
                </label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#1a1a1a] border border-[#404040] rounded-lg px-4 py-3 text-white placeholder-[#666666] focus:border-[#666666] focus:outline-none transition-colors"
                    placeholder="What's this about?"
                />
            </motion.div>

            <motion.div variants={fieldVariants}>
                <label htmlFor="message" className="block text-white text-sm mb-2">
                    Message *
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-[#1a1a1a] border border-[#404040] rounded-lg px-4 py-3 text-white placeholder-[#666666] focus:border-[#666666] focus:outline-none transition-colors resize-none"
                    placeholder="Tell us more about your project..."
                />
            </motion.div>

            <motion.div variants={fieldVariants}>
                <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn bg-white text-black hover:bg-[#e0e0e0] disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    {isSubmitting && <LoadingSpinner size="sm" />}
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>

                {submitStatus === 'success' && (
                    <motion.p
                        className="text-green-400 text-sm mt-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Message sent successfully!
                    </motion.p>
                )}

                {submitStatus === 'error' && (
                    <motion.p
                        className="text-red-400 text-sm mt-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Something went wrong. Please try again.
                    </motion.p>
                )}
            </motion.div>
        </motion.form>
    );
};