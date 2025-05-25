import React from "react";

interface ProjectCardProps {
  imageUrl: string;
  title: string;
  description: string;
  tags: string[];
  websiteUrl: string;
  theme?: "light" | "dark";
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageUrl, title, description, tags, websiteUrl, theme = "light" }) => {
  const isDark = theme === "dark";
  const cardBg = isDark ? "bg-zinc-800/70 border-zinc-700 backdrop-blur-md" : "bg-white/60 border-zinc-200 backdrop-blur-md";
  const titleColor = isDark ? "text-zinc-100" : "text-zinc-900";
  const descColor = isDark ? "text-zinc-300" : "text-zinc-600";
  const tagBg = isDark ? "bg-zinc-700/80 text-zinc-200 border border-zinc-600" : "bg-white/80 text-zinc-700 border border-zinc-200";
  const btnBg = isDark ? "bg-gradient-to-r from-blue-700 to-purple-700 text-white" : "bg-gradient-to-r from-blue-500 to-purple-500 text-white";

  return (
    <div className={`rounded-3xl border p-5 flex flex-col h-full transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-2 ${cardBg}`}> 
      <div className={`w-full aspect-video rounded-xl overflow-hidden mb-4 flex items-center justify-center group relative ${isDark ? "bg-zinc-900" : "bg-zinc-100"}`}>
        <img src={imageUrl} alt={title} className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl" />
      </div>
      <div className="flex-1 flex flex-col">
        <h3 className={`text-xl font-extrabold mb-1 ${titleColor}`}>{title}</h3>
        <p className={`text-base mb-3 ${descColor}`}>{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, idx) => (
            <span key={idx} className={`text-xs font-semibold px-3 py-1 rounded-full ${tagBg} shadow-sm`}>{tag}</span>
          ))}
        </div>
        <a
          href={websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-auto inline-flex items-center gap-2 px-4 py-2 rounded-full font-bold text-sm shadow-md transition-all duration-300 ${btnBg} hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-400`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 3h7v7m0 0L10 21l-7-7 11-11z" /></svg>
          Website
        </a>
      </div>
    </div>
  );
};

export default ProjectCard; 