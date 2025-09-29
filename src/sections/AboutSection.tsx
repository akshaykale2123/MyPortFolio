import React from 'react';
import { Code } from 'lucide-react';

export default function AboutSection() {
    return (
        <section id="about" className="py-20 px-4 bg-slate-800/50">
            <div className="max-w-6xl mx-auto">
                <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
                    <Code className="text-cyan-400" />
                    About Me
                </h3>
                <p className="text-lg text-slate-300 leading-relaxed">
                    Results-driven ReactJS Developer with 5 years of experience in Front-End, Back-End, and Full-Stack development.
                    Proficient in ReactJS, TypeScript, with hands-on experience in Java, Spring Boot, Python (Django). Skilled in building
                    scalable microservices architectures, developing high-performance web applications, and optimizing load times by up to 30%.
                    Experienced in intuitive UI/UX design, seamless API integrations, and distributed system design.
                </p>
            </div>
        </section>
    );
}
