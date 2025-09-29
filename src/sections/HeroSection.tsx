import React from 'react';
import { MapPin, Mail, Phone, Linkedin } from 'lucide-react';

export default function HeroSection() {
    return (
        <section id="hero" className="pt-32 pb-20 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                    Full-Stack Developer
                </h2>
                <p className="text-xl md:text-2xl text-slate-300 mb-4">
                    Building scalable web applications with modern technologies
                </p>
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
    );
}
