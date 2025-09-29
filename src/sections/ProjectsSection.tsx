import React from 'react';

const projects = [
    {
        name: 'Logistics Management System',
        role: 'Frontend Developer',
        tech: ['ReactJS', 'TypeScript'],
        description: 'Pickup & Delivery Platform',
        highlights: [
            'Crafted responsive dashboards with tailored role-based views',
            'Incorporated real-time driver tracking & route navigation interface',
            'Designed pickup scheduling & shipment monitoring workflows',
            'Enabled digital proof of delivery (signature, photo, email acknowledgment)'
        ]
    },
    {
        name: 'Savance Application',
        role: 'Full-Stack Developer',
        tech: ['ReactJS', 'TypeScript', 'GraphQL', '.NET'],
        description: 'Supermarket Management System',
        highlights: [
            'Built dynamic ReactJS UI using MUI & DevExtreme for large datasets',
            'Applied GraphQL queries for efficient data retrieval, cutting over-fetching',
            'Strengthened APIs, stored procedures, and business logic with .NET backend'
        ]
    },
    {
        name: 'Geopicx',
        role: 'Full-Stack Developer',
        tech: ['ReactJS', 'NodeJS', 'Python'],
        description: 'Geospatial Solutions Platform',
        highlights: [
            'Developed a ReactJS web application with full user-based authentication',
            'Designed a satellite imagery platform with real-time visualization features',
            'Implemented token-based access control for secure, role-specific functionality',
            'Enabled GIS operations on Leaflet maps, including cropping and analyzing specific areas'
        ]
    }
];

export default function ProjectsSection() {
    return (
        <section id="projects" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <h3 className="text-3xl font-bold mb-12 text-center">Featured Projects</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 hover:border-cyan-400 transition-all hover:transform hover:scale-105">
                            <h4 className="text-xl font-bold mb-2 text-cyan-400">{project.name}</h4>
                            <p className="text-sm text-slate-400 mb-2">{project.description}</p>
                            <p className="text-sm text-slate-300 mb-3">{project.role}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((tech) => (
                                    <span key={tech} className="bg-slate-700 px-2 py-1 rounded text-xs hover:bg-cyan-600 transition-colors">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <ul className="space-y-1 text-sm text-slate-300">
                                {project.highlights.slice(0, 2).map((highlight, i) => (
                                    <li key={i} className="flex gap-2">
                                        <span className="text-cyan-400">▹</span>
                                        <span>{highlight}</span>
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
