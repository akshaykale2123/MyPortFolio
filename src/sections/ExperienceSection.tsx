import React from 'react';
import { Briefcase } from 'lucide-react';

const experiences = [
    {
        company: 'Paramaya Technology Services Pvt Ltd',
        role: 'ReactJS Developer',
        period: 'Oct 2024 – Present',
        achievements: [
            'Engineered high-performance web applications, boosting efficiency by 20%',
            'Created reusable UI components, accelerating feature delivery by 30%',
            'Connected frontend with backend APIs, ensuring 99% accurate data flow',
            'Refined responsiveness, cutting page load times by 25%'
        ]
    },
    {
        company: 'Micronet Solution',
        role: 'Full-Stack Developer',
        period: 'Sep 2023 – Sep 2024',
        achievements: [
            'Designed a geospatial web app with ReactJS, NodeJS, and Python backend for live tracking',
            'Introduced role-based authentication, curbing unauthorized access by 40%',
            'Architected microservices in Python/NodeJS for scalable, reliable systems',
            'Collaborated with designers to revamp UI/UX, raising engagement by 25%'
        ]
    },
    {
        company: 'Infosane LLP Technologies',
        role: 'Full-Stack Java Developer',
        period: 'Feb 2021 – Aug 2023',
        achievements: [
            'Spearheaded both frontend & backend development for enterprise solutions',
            'Delivered REST APIs with Spring Boot & Hibernate',
            'Resolved cross-browser issues and streamlined UI/UX',
            'Authored clean, testable, and maintainable code'
        ]
    }
];

export default function ExperienceSection() {
    return (
        <section id="experience" className="py-20 px-4 bg-slate-800/50">
            <div className="max-w-6xl mx-auto">
                <h3 className="text-3xl font-bold mb-12 flex items-center gap-3">
                    <Briefcase className="text-cyan-400" />
                    Professional Experience
                </h3>
                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <div key={index} className="bg-slate-900/50 rounded-lg p-6 border border-slate-700 hover:border-cyan-400 transition-all hover:transform hover:scale-105">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                <div>
                                    <h4 className="text-2xl font-bold text-cyan-400">{exp.role}</h4>
                                    <p className="text-xl text-slate-300">{exp.company}</p>
                                </div>
                                <span className="text-slate-400 mt-2 md:mt-0">{exp.period}</span>
                            </div>
                            <ul className="space-y-2 text-slate-300">
                                {exp.achievements.map((achievement, i) => (
                                    <li key={i} className="flex gap-2">
                                        <span className="text-cyan-400 mt-1">▹</span>
                                        <span>{achievement}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
