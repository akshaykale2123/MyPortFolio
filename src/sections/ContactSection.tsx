import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

export default function ContactSection() {
    return (
        <section id="contact" className="py-20 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <h3 className="text-3xl font-bold mb-8">Let's Connect</h3>
                <p className="text-xl text-slate-300 mb-8">
                    I'm always open to discussing new projects and opportunities
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                    <a
                        href="mailto:akshaykale2123@gmail.com"
                        className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg flex items-center gap-2 transition-all hover:transform hover:scale-110"
                    >
                        <Mail size={20} />
                        Email Me
                    </a>
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
    );
}
