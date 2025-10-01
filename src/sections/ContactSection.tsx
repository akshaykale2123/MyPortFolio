import React, { useState } from 'react';
import { Mail, Linkedin, X, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

// Load environment variables
const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_YOU_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_YOU_ID;
const TEMPLATE_USER_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_USER_ID;
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

export default function ContactSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({ email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async () => {
        if (!formData.email || !formData.message) {
            alert('Please fill in all fields');
            return;
        }

        try {
            setIsSubmitting(true);

            // Send email to you
            await emailjs.send(
                SERVICE_ID!,
                TEMPLATE_YOU_ID!,
                {
                    from_email: formData.email,
                    message: formData.message,
                    email: 'akshaykale2123@gmail.com'
                },
                PUBLIC_KEY
            );

            // Send auto-reply to user
            await emailjs.send(
                SERVICE_ID!,
                TEMPLATE_USER_ID!,
                {
                    to_email: formData.email,
                    reply_message: `Thanks for reaching out! I will get back to you soon.`
                },
                PUBLIC_KEY
            );

            alert('Message sent successfully!');
            setFormData({ email: '', message: '' });
            setIsModalOpen(false);

        } catch (error) {
            console.error('EmailJS Error:', error);
            alert('Failed to send the message. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <>
            <section id="contact" className="py-20 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h3 className="text-3xl font-bold mb-8">Let's Connect</h3>
                    <p className="text-xl text-slate-300 mb-8">
                        I'm always open to discussing new projects and opportunities
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg flex items-center gap-2 transition-all hover:transform hover:scale-110"
                        >
                            <Mail size={20} />
                            Email Me
                        </button>
                        <a
                            href="https://linkedin.com/in/akshay-kale-34a141187"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-3 rounded-lg flex items-center gap-2 transition-all hover:transform hover:scale-110"
                        >
                            <Linkedin size={20} />
                            LinkedIn
                        </a>
                    </div>
                </div>
            </section>

            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-60 backdrop-blur-sm">
                    <div className="bg-slate-800 rounded-2xl shadow-2xl w-full max-w-md transform transition-all border border-slate-700">
                        <div className="flex items-center justify-between p-6 border-b border-slate-700">
                            <div className="flex items-center gap-3">
                                <div className="bg-cyan-500 p-2 rounded-lg">
                                    <Mail size={24} className="text-white" />
                                </div>
                                <h4 className="text-2xl font-bold text-white">Send a Message</h4>
                            </div>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="text-slate-400 hover:text-white transition-colors p-1 hover:bg-slate-700 rounded-lg"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <div className="p-6 space-y-5">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="you@example.com"
                                    className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={5}
                                    placeholder="Tell me about your project or idea..."
                                    className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none"
                                ></textarea>
                            </div>

                            <div className="flex gap-3 pt-2">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="flex-1 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors font-medium"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="button"
                                    onClick={handleSubmit}
                                    disabled={isSubmitting}
                                    className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-lg transition-all font-medium flex items-center justify-center gap-2 shadow-lg hover:shadow-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <span className="animate-pulse">Sending...</span>
                                    ) : (
                                        <>
                                            <Send size={18} />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
