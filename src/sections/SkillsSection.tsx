import React from 'react';

const skills = {
    frontend: ['ReactJS', 'TypeScript', 'HTML5', 'CSS3', 'JavaScript (ES6+)', 'Bootstrap', 'MUI', 'Redux', 'SAAS'],
    backend: ['Java', 'Spring Boot', 'Hibernate', 'RESTful APIs', 'Python', 'NodeJS', 'Express JS'],
    databases: ['SQL', 'MySQL', 'PostgreSQL'],
    tools: ['Git', 'GitLab', 'AWS', 'CI/CD', 'Postman', 'DBeaver', 'VS Code']
};

export default function SkillsSection() {
    return (
        <section id="skills" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <h3 className="text-3xl font-bold mb-12 text-center">Technical Skills</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {Object.entries(skills).map(([category, items], index) => (
                        <div
                            key={category}
                            className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 hover:border-cyan-400 transition-all hover:transform hover:scale-105"
                        >
                            <h4 className="text-xl font-semibold mb-4 text-cyan-400 capitalize">{category}</h4>
                            <div className="flex flex-wrap gap-2">
                                {items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="bg-slate-700 px-3 py-1 rounded-full text-sm hover:bg-cyan-600 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
