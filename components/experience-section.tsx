import { useState } from "react";

const experiences = [
  {
    company: "Clear Lakes Dental",
    logo: "images/cld.jpg",
    role: "Software Engineer Intern",
    period: "Sep 2025 - Dec 2025",
    description: "Developed a patient reminder system that reduced missed clinic appointments by 40% and accelerated the development team's productivity through AI-assisted tools.",
    details: "Full Stack Development",
    type: "Work",
  },
  {
    company: "Tata Consultancy Services",
    logo: "images/TCS.jpeg",
    role: "Software Developement Engineer",
    period: "Sep 2022 - Jul 2024",
    description: "Built and maintained financial transaction systems processing 50K+ daily operations with 99.9% reliability, improving system stability and reducing cascading failures through modern architecture and testing practices.",
    details: "Web Development",
    type: "Work",
  },
];

const education = [
  {
    company: "Northeastern University",
    logo: "images/Northeastern.png",
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

export default function ExperienceSection() {
  const [tab, setTab] = useState<'Work' | 'Education'>('Work');

  const tabActive = 'bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent shadow-[0_0_20px_rgba(59,130,246,0.5)]';
  const tabInactive = 'bg-zinc-900/60 text-zinc-400 border-zinc-800 hover:bg-zinc-800 hover:text-white';
  const data = tab === 'Work' ? experiences : education;

  return (
    <div className="w-full flex justify-start">
      <div className="flex flex-col w-full">
        {/* Tabs */}
        <div className="flex mb-12 gap-4">
          <button
            className={`px-8 py-3 rounded-xl font-bold text-[15px] tracking-wide border transition-all duration-300 ${tab === 'Work' ? tabActive : tabInactive}`}
            onClick={() => setTab('Work')}
          >
            Experience
          </button>
          <button
            className={`px-8 py-3 rounded-xl font-bold text-[15px] tracking-wide border transition-all duration-300 ${tab === 'Education' ? tabActive : tabInactive}`}
            onClick={() => setTab('Education')}
          >
            Education
          </button>
        </div>

        {/* Timeline List */}
        <div className="space-y-12 relative mt-4">
          <div className="absolute left-[31px] top-8 bottom-8 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500/30 to-transparent z-0 opacity-50" />

          {data.map((exp, idx) => (
            <div key={idx} className="flex gap-8 items-start relative group animate-fade-in-up" style={{ animationDelay: `${idx * 150}ms` }}>
              <div className="flex-shrink-0 z-10 relative mt-1">
                <div className="w-16 h-16 border border-zinc-700/80 rounded-2xl bg-zinc-900/90 backdrop-blur-xl flex items-center justify-center overflow-hidden p-[3px] shadow-lg group-hover:border-blue-400 group-hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] transition-all duration-500 relative ring-4 ring-[#050505]">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img src={`${import.meta.env.BASE_URL}/${exp.logo.startsWith('/') ? exp.logo.slice(1) : exp.logo}`} alt={exp.company} className="w-full h-full object-contain rounded-[10px] relative z-10 bg-zinc-950 p-1" />
                </div>
              </div>
              <div className="flex flex-col flex-1 pt-1 gap-1">
                <span className="text-xs font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 uppercase mb-1">{exp.period}</span>
                <span className="font-display font-extrabold text-2xl text-white group-hover:text-blue-100 transition-colors">{exp.company}</span>
                <span className="text-[16px] font-semibold text-zinc-300 mt-1">{exp.role}</span>
                <p className="text-[15px] text-zinc-400 mt-3 leading-relaxed max-w-3xl border-l-2 border-zinc-800/60 pl-4">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}