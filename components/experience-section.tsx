import { useState } from "react";

interface ExperienceSectionProps {
  theme: "light" | "dark";
}

const experiences = [
  {
    company: "Tata Consultancy Services",
    logo: "images/TCS.jpeg",
    role: "Software Developement Engineer",
    period: "Sep 2022 - Jul 2024",
    description: "Led full‐stack development and deployment of 11+ Java Spring Boot web applications and orchestrating AWS EC2 deployments with load balancing.",
    details: "Web Development",
    type: "Work",
  },
  {
    company: "Apex technologies",
    logo: "images/apex.png",
    role: "Full Stack Developer Intern",
    period: "Sep 2021 - Feb 2022",
    description: "Designed and implemented end-to-end user registration, onboarding flows with Java Spring Boot and integrated Jenkins-driven CI/CD pipelines, cutting deployment time by 40%",
    details: "Full Stack Development",
    type: "Work",
  },
];

const education = [
  {
    company: "Northeastern University",
    logo: "images/northeastern.png", 
    role: "Master of Science in Information Systems",
    period: "Expected Graduation: Dec 2026",
    description: "Coursework: Algorithms, Web Development, Object Oriented Design, Design Patterns ",
    details: "Coursework",
    type: "Education",
  },
  {
    company: "Pune University",
    logo: "images/Sppu.jpeg",
    role: "Bachelor of Engineering in Electronics and Telecommunication",
    period: "Aug 2018 - Jul 2022",
    description: "Coursework: Data Structures, Object Oriented Programming, Computer Networks, Operating Systems, Database Management Systems, Artificial Intelligence.",
    details: "Coursework",
    type: "Work",
  },
];

export default function ExperienceSection({ theme }: ExperienceSectionProps) {
  const [tab, setTab] = useState<'Work' | 'Education'>('Work');
  const isDark = theme === 'dark';
  const cardBg = isDark ? 'bg-zinc-800/70 border-zinc-700 backdrop-blur-md' : 'bg-white/60 border-zinc-200 backdrop-blur-md';
  const tabActive = isDark ? 'bg-white/90 text-zinc-900 shadow' : 'bg-zinc-900 text-white shadow';
  const tabInactive = isDark ? 'bg-zinc-800 text-zinc-400' : 'bg-white/80 text-zinc-400';
  const periodColor = isDark ? 'text-zinc-200' : 'text-zinc-500';
  const companyColor = isDark ? 'text-zinc-100' : 'text-zinc-900';
  const roleColor = isDark ? 'text-zinc-300' : 'text-zinc-700';
  const descColor = isDark ? 'text-zinc-200' : 'text-zinc-700';

  // Select data based on tab
  const data = tab === 'Work' ? experiences : education;

  return (
    <div className={`w-full mt-8 rounded-3xl border ${cardBg} p-8 shadow-2xl`}> 
      {/* Tabs */}
      <div className="flex mb-8 gap-2">
        <button
          className={`flex-1 py-2 rounded-xl font-bold text-lg transition-colors duration-200 ${tab === 'Work' ? tabActive : tabInactive}`}
          onClick={() => setTab('Work')}
        >
          Work
        </button>
        <button
          className={`flex-1 py-2 rounded-xl font-bold text-lg transition-colors duration-200 ${tab === 'Education' ? tabActive : tabInactive}`}
          onClick={() => setTab('Education')}
        >
          Education
        </button>
      </div>
      {/* Timeline */}
      <div className="relative">
        {/* Vertical line for timeline */}
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200/60 via-zinc-200/60 to-purple-200/60 dark:from-zinc-700/60 dark:via-zinc-800/60 dark:to-zinc-900/60 rounded-full z-0" style={{ minHeight: 120, marginLeft: 8 }} />
        <div className="space-y-12 relative z-10">
          {data.map((exp, idx) => (
            <div key={idx} className="flex flex-row gap-6 items-center group transition-all duration-200">
              {/* Timeline and Logo Column */}
              <div className="flex flex-col items-center relative w-20">
                {/* Logo (z-10 to cover the line) */}
                <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-white dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-700 shadow-xl group-hover:scale-105 transition-transform duration-200">
                  <img src={exp.logo} alt={exp.company} className="w-12 h-12 object-contain rounded-full" />
                </div>
              </div>
              {/* Content Column */}
              <div className="flex-1 flex flex-col gap-1 z-10">
                <span className={`text-sm font-semibold mb-0.5 ${periodColor}`}>{exp.period}</span>
                <span className={`font-extrabold text-xl mb-0.5 ${companyColor}`}>{exp.company}</span>
                <span className={`text-base font-semibold mb-0.5 ${roleColor}`}>{exp.role}</span>
                <span className={`text-sm font-normal mb-1 leading-relaxed ${descColor}`}>{exp.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 