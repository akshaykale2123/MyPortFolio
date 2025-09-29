import React from 'react';
import { GraduationCap } from 'lucide-react';

export default function EducationSection() {
    return (
        <section id="education" className="py-20 px-4 bg-slate-800/50">
            <div className="max-w-6xl mx-auto">
                <h3 className="text-3xl font-bold mb-12 flex items-center gap-3">
                    <GraduationCap className="text-cyan-400" />
                    Education
                </h3>
                <div className="space-y-6">
                    <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700 hover:border-cyan-400 transition-all hover:transform hover:scale-105">
                        <h4 className="text-xl font-bold text-cyan-400">B.E. in Computer Science & Engineering</h4>
                        <p className="text-slate-300">Nagpur University | 2020</p>
                        <p className="text-slate-400">CGPA: 8.3/10</p>
                    </div>
                    <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700 hover:border-cyan-400 transition-all hover:transform hover:scale-105">
                        <h4 className="text-xl font-bold text-cyan-400">Diploma in Computer Technology</h4>
                        <p className="text-slate-300">MSBTE | 2017</p>
                        <p className="text-slate-400">Percentage: 67.41%</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
