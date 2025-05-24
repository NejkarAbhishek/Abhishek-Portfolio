import React, { useState } from "react";

interface ExperienceSectionProps {
  theme: "light" | "dark";
}

const experiences = [
  {
    company: "Tata Consultancy Services",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
    role: "Software Developement Engineer",
    period: "Sep 2022 - Jul 2024",
    description: "Web Design; Web Development; Wordpress + Elementor.",
    details: "Web Design; Web Development; Wordpress + Elementor.",
    type: "Work",
  },
  {
    company: "Apex technologies",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
    role: "Full Stack Developer Intern",
    period: "Jan 2020 - Mar 2020",
    description: "Mobile Development (Parque D.Carlos I App - Course Final Project [Grade:20/20]); Web Development; Functional testing some company's apps (Lota Digital, Caldas da Rainha - City Guide).",
    details: "Mobile Development (Parque D.Carlos I App - Course Final Project [Grade:20/20]); Web Development; Functional testing some company's apps (Lota Digital, Caldas da Rainha - City Guide).",
    type: "Work",
  },
];

const education = [
  {
    company: "Northeastern University",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png", 
    role: "Master of Science in Information Systems",
    period: "Expected Graduation: Dec 2024",
    description: "Web Design; Web Development; Wordpress + Elementor.",
    details: "Web Design; Web Development; Wordpress + Elementor.",
    type: "Education",
  },
  {
    company: "Pune University",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
    role: "Bachelor of Engineering in Electronics and Telecommunication",
    period: "Aug 2018 - Jul 2022",
    description: "Mobile Development (Parque D.Carlos I App - Course Final Project [Grade:20/20]); Web Development; Functional testing some company's apps (Lota Digital, Caldas da Rainha - City Guide).",
    details: "Mobile Development (Parque D.Carlos I App - Course Final Project [Grade:20/20]); Web Development; Functional testing some company's apps (Lota Digital, Caldas da Rainha - City Guide).",
    type: "Work",
  },
];

export default function ExperienceSection({ theme }: ExperienceSectionProps) {
  const [tab, setTab] = useState<'Work' | 'Education'>('Work');
  const isDark = theme === 'dark';
  const cardBg = isDark ? 'bg-zinc-800 border-zinc-700 text-zinc-100' : 'bg-white border-zinc-200 text-zinc-900';
  const tabActive = isDark ? 'bg-white text-zinc-900' : 'bg-zinc-900 text-white';
  const tabInactive = isDark ? 'bg-zinc-800 text-zinc-400' : 'bg-white text-zinc-400';

  // Select data based on tab
  const data = tab === 'Work' ? experiences : education;

  return (
    <div className={`w-full mt-8 rounded-2xl border ${cardBg} p-6`}>
      <div className="flex mb-6">
        <button
          className={`flex-1 py-2 rounded-l-xl font-semibold transition-colors ${tab === 'Work' ? tabActive : tabInactive}`}
          onClick={() => setTab('Work')}
        >
          Work
        </button>
        <button
          className={`flex-1 py-2 rounded-r-xl font-semibold transition-colors ${tab === 'Education' ? tabActive : tabInactive}`}
          onClick={() => setTab('Education')}
        >
          Education
        </button>
      </div>
     
      <div className="relative">
        {/* Timeline vertical line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-zinc-300 dark:bg-zinc-700" style={{ zIndex: 0 }} />
        <div className="space-y-8 pl-12">
          {data.map((exp, idx) => (
            <div key={idx} className="relative flex gap-4">
              {/* Logo */}
              <div className="absolute -left-12 top-0 flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 shadow" style={{ zIndex: 1 }}>
                <img src={exp.logo} alt={exp.company} className="w-8 h-8 object-contain" />
              </div>
              <div>
                <div className="text-sm text-zinc-400 mb-1">{exp.period}</div>
                <div className="font-bold text-lg mb-0.5">{exp.company}</div>
                <div className="text-sm font-medium text-zinc-500 mb-1">{exp.role}</div>
                <div className="text-sm text-zinc-300 dark:text-zinc-400 mb-1">{exp.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 