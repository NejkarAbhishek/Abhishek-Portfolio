import React from "react";

interface SkillsSectionProps {
  theme: "light" | "dark";
}

const skills = [
  {
    name: "Java",
    svg: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm0 26C9.373 28 4 22.627 4 16S9.373 4 16 4s12 5.373 12 12-5.373 12-12 12z" fill="#007396"/><path d="M21.5 22.5c-2.5 1.5-8.5 1.5-11 0-.5-.3-.5-.7 0-1 .5-.3 1.3-.6 2.2-.8.2-.1.3-.3.2-.5-.1-.2-.3-.3-.5-.2-1 .2-1.9.5-2.5.9-.8.5-.8 1.3 0 1.8 2.8 1.7 9.2 1.7 12 0 .8-.5.8-1.3 0-1.8-.6-.4-1.5-.7-2.5-.9-.2-.1-.4 0-.5.2-.1.2 0 .4.2.5.9.2 1.7.5 2.2.8.5.3.5.7 0 1z" fill="#007396"/></svg>
    ),
  },
  {
    name: "Python",
    svg: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="16" fill="#3776AB"/><path d="M16 7c-2.2 0-4 1.8-4 4v2h8V11c0-2.2-1.8-4-4-4zm-6 4c0-3.3 2.7-6 6-6s6 2.7 6 6v2c0 1.1-.9 2-2 2h-8c-1.1 0-2-.9-2-2v-2zm2 10c0 2.2 1.8 4 4 4s4-1.8 4-4v-2h-8v2zm6 4c3.3 0 6-2.7 6-6v-2c0-1.1-.9-2-2-2h-8c-1.1 0-2 .9-2 2v2c0 3.3 2.7 6 6 6z" fill="#fff"/></svg>
    ),
  },
  {
    name: "Spring",
    svg: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#6DB33F"/><path d="M23.5 13.5c-1.5-3-5.5-4-8.5-2.5-2.5 1.2-3.5 4.2-2.5 6.5 1.2 2.5 4.2 3.5 6.5 2.5 2.5-1.2 3.5-4.2 2.5-6.5zm-7.5 6c-1.7-.8-2.5-2.8-1.7-4.5.8-1.7 2.8-2.5 4.5-1.7 1.7.8 2.5 2.8 1.7 4.5-.8 1.7-2.8 2.5-4.5 1.7z" fill="#fff"/></svg>
    ),
  },
  {
    name: "GCP",
    svg: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#4285F4"/><path d="M16 8l-6 10.4h12L16 8zm0 2.7l3.6 6.2H12.4L16 10.7z" fill="#fff"/></svg>
    ),
  },
  {
    name: "AWS",
    svg: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#FF9900"/><path d="M10 20c2.7 2.7 9.3 2.7 12 0" stroke="#fff" strokeWidth="2" strokeLinecap="round"/><path d="M16 8v8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
  },
  {
    name: "React",
    svg: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#61DAFB"/><g><ellipse cx="16" cy="16" rx="10" ry="4" stroke="#fff" strokeWidth="2"/><ellipse cx="16" cy="16" rx="4" ry="10" stroke="#fff" strokeWidth="2"/><circle cx="16" cy="16" r="2" fill="#fff"/></g></svg>
    ),
  },
  {
    name: "NextJs",
    svg: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="16" fill="#000"/><path d="M10 22V10h2v12h-2zm10-12v12h-2V10h2z" fill="#fff"/></svg>
    ),
  },
  {
    name: "nodeJS",
    svg: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#339933"/><path d="M16 8l6 3.5v7L16 24l-6-3.5v-7L16 8zm0 2.1l-4.5 2.6v5.2L16 21.9l4.5-2.6v-5.2L16 10.1z" fill="#fff"/></svg>
    ),
  },
  {
    name: "Docker",
    svg: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="16" fill="#2496ED"/><rect x="8" y="16" width="16" height="4" rx="2" fill="#fff"/><rect x="12" y="12" width="8" height="4" rx="2" fill="#fff"/></svg>
    ),
  },
];

export default function SkillsSection({ theme }: SkillsSectionProps) {
  const isDark = theme === "dark";
  const cardBg = isDark ? "bg-zinc-800 border-zinc-700" : "bg-white border-zinc-200";
  const textColor = isDark ? "text-zinc-100" : "text-zinc-900";
  const subTextColor = isDark ? "text-zinc-400" : "text-zinc-500";

  return (
    <div className="grid grid-cols-4 gap-4 mt-6">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className={`flex flex-col items-center justify-center rounded-xl border ${cardBg} p-4 transition-shadow hover:shadow-md`}
        >
          <div className="mb-2">{skill.svg}</div>
          <span className={`text-base font-medium ${textColor}`}>{skill.name}</span>
        </div>
      ))}
    </div>
  );
} 