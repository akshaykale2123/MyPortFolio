import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, X, Send, AlertCircle, CheckCircle2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

// Load environment variables
const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_YOU_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_YOU_ID;
const TEMPLATE_USER_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_USER_ID;
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

// Toast Component
interface ToastProps {
    message: string;
    type: 'success' | 'error';
    onClose: () => void;
}

function Toast({ message, type, onClose }: ToastProps) {
    React.useEffect(() => {
        const timer = setTimeout(onClose, 4000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className="fixed top-4 right-4 z-[60] animate-slide-in">
            <div className={`flex items-center gap-3 px-6 py-4 rounded-lg shadow-2xl border ${type === 'success'
                ? 'bg-green-900 border-green-500 text-green-100'
                : 'bg-red-900 border-red-500 text-red-100'
                }`}>
                {type === 'success' ? (
                    <CheckCircle2 size={24} className="flex-shrink-0" />
                ) : (
                    <AlertCircle size={24} className="flex-shrink-0" />
                )}
                <p className="font-medium">{message}</p>
                <button onClick={onClose} className="ml-4 hover:opacity-70">
                    <X size={20} />
                </button>
            </div>
        </div>
    );
}

interface FormData {
    email: string;
    message: string;
}

interface FormErrors {
    email: string;
    message: string;
}

interface ToastState {
    message: string;
    type: 'success' | 'error';
}

export default function ContactSection() {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [formData, setFormData] = useState<FormData>({ email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [errors, setErrors] = useState<FormErrors>({ email: '', message: '' });
    const [toast, setToast] = useState<ToastState | null>(null);

    const showToast = (message: string, type: 'success' | 'error') => {
        setToast({ message, type });
    };

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateForm = (): boolean => {
        const newErrors: FormErrors = { email: '', message: '' };
        let isValid = true;

        // Email validation
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
            isValid = false;
        }

        // Message validation
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
            isValid = false;
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    useEffect(() => {
        // Initialize EmailJS
        emailjs.init(PUBLIC_KEY!);

        // Log configuration in development
        if (process.env.NODE_ENV === 'development') {
            console.log('EmailJS Configuration:', {
                SERVICE_ID,
                TEMPLATE_YOU_ID,
                TEMPLATE_USER_ID,
                PUBLIC_KEY
            });
        }
    }, []);

    const handleSubmit = async (): Promise<void> => {
        if (!validateForm()) {
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
                },
                PUBLIC_KEY
            );

            // Send auto-reply to user
            await emailjs.send(
                SERVICE_ID!,
                TEMPLATE_USER_ID!,
                {
                    to_email: formData.email,
                    reply_message: "Thanks for reaching out! I'll get back to you soon."
                },
                PUBLIC_KEY
            );

            showToast('Message sent successfully! 🎉', 'success');
            setFormData({ email: '', message: '' });
            setErrors({ email: '', message: '' });
            setIsModalOpen(false);

        } catch (error) {
            console.error('EmailJS Error:', error);
            showToast('Failed to send message. Please try again.', 'error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Clear error for this field when user starts typing
        if (errors[name as keyof FormErrors]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    return (
        <>
            <style>{`
                @keyframes slide-in {
                    from {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
                .animate-slide-in {
                    animation: slide-in 0.3s ease-out;
                }
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    25% { transform: translateX(-4px); }
                    75% { transform: translateX(4px); }
                }
                .animate-shake {
                    animation: shake 0.3s ease-in-out;
                }
            `}</style>

            {toast && (
                <Toast
                    message={toast.message}
                    type={toast.type}
                    onClose={() => setToast(null)}
                />
            )}

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
            </section >

            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-60 backdrop-blur-sm">
                    <div className="bg-slate-800 rounded-2xl shadow-2xl w-full max-w-2xl h-[600px] flex flex-col transform transition-all border border-slate-700">
                        <div className="flex items-center justify-between p-6 border-b border-slate-700">
                            <div className="flex items-center gap-3">
                                <div className="bg-cyan-500 p-2 rounded-lg">
                                    <Mail size={24} className="text-white" />
                                </div>
                                <h4 className="text-2xl font-bold text-white">Send a Message</h4>
                            </div>
                            <button
                                onClick={() => {
                                    setIsModalOpen(false);
                                    setErrors({ email: '', message: '' });
                                    setFormData({ email: '', message: '' });
                                }}
                                className="text-slate-400 hover:text-white transition-colors p-1 hover:bg-slate-700 rounded-lg"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <div className="p-6 space-y-5 flex-1 overflow-y-auto">
                            <div className="sticky top-0 bg-slate-800 z-10 pb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                                    Your Email *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="you@example.com"
                                    className={`w-full px-4 py-3 bg-slate-900 border rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${errors.email
                                        ? 'border-red-500 focus:ring-red-500'
                                        : 'border-slate-600 focus:ring-cyan-500 focus:border-transparent'
                                        }`}
                                />
                            </div>

                            <div className="sticky top-[88px] bg-slate-800 z-10 pb-4">
                                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={8}
                                    placeholder="Tell me about your project or idea..."
                                    className={`w-full px-4 py-3 bg-slate-900 border rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all resize-none ${errors.message
                                        ? 'border-red-500 focus:ring-red-500'
                                        : 'border-slate-600 focus:ring-cyan-500 focus:border-transparent'
                                        }`}
                                ></textarea>
                            </div>

                            <div className="flex gap-3 pt-2 sticky bottom-0 bg-slate-800 pb-4 border-t border-slate-700">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setIsModalOpen(false);
                                        setErrors({ email: '', message: '' });
                                        setFormData({ email: '', message: '' });
                                    }}
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
