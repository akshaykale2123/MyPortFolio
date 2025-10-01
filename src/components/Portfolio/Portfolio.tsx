import React, { useState, useEffect } from 'react';
import { Code, Briefcase, GraduationCap, Mail, Linkedin, Phone, MapPin, Menu, X } from 'lucide-react';
import AboutSection from '../../sections/AboutSection';
import SkillsSection from '../../sections/SkillsSection';
import ExperienceSection from '../../sections/ExperienceSection';
import ProjectsSection from '../../sections/ProjectsSection';
import EducationSection from '../../sections/EducationSection';
import ContactSection from '../../sections/ContactSection';

export default function Portfolio() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [visibleSections, setVisibleSections] = useState(new Set<string>());

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleSections((prev) => new Set([...prev, entry.target.id]));
                    }
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll('section[id]').forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
    };

    const isVisible = (sectionId: string) => visibleSections.has(sectionId);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
            {/* Navigation */}
            <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm shadow-lg z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        Akshay Kale
                    </h1>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        {['about', 'skills', 'experience', 'projects', 'education', 'contact'].map((item, index) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item)}
                                className="hover:text-cyan-400 transition-colors capitalize"
                            >
                                {item}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 space-y-4 px-4">
                        {['about', 'skills', 'experience', 'projects', 'education', 'contact'].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item)}
                                className="block w-full text-left hover:text-cyan-400 transition-colors capitalize"
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                        Full-Stack Developer
                    </h2>
                    <p className="text-xl md:text-2xl text-slate-300 mb-4">Building scalable web applications with modern technologies</p>
                    <p className="text-lg text-cyan-400 font-semibold mb-8">5+ Years of Experience</p>
                    <div className="flex flex-wrap justify-center gap-4 text-slate-300">
                        <div className="flex items-center gap-2">
                            <MapPin size={20} className="text-cyan-400" />
                            <span>Nagpur, Maharashtra</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Mail size={20} className="text-cyan-400" />
                            <a href="mailto:akshaykale2123@gmail.com" className="hover:text-cyan-400">
                                akshaykale2123@gmail.com
                            </a>
                        </div>
                        <div className="flex items-center gap-2">
                            <Phone size={20} className="text-cyan-400" />
                            <span>+91-8459312406</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Linkedin size={20} className="text-cyan-400" />
                            <a
                                href="https://linkedin.com/in/akshay-kale-34a141187"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-cyan-400"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio Sections */}
            <AboutSection />
            <SkillsSection />
            <ExperienceSection />
            <ProjectsSection />
            <EducationSection />
            <ContactSection />

            {/* Footer */}
            <footer className="py-8 px-4 bg-slate-900 text-center text-slate-400">
                <p>© {new Date().getFullYear()} Akshay Kale. All rights reserved.</p>
            </footer>
        </div>
    );
}
