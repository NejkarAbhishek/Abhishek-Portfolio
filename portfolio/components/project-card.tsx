import React from "react";

interface ProjectCardProps {
  imageUrl: string;
  title: string;
  description: string;
  tags: string[];
  websiteUrl?: string;
  githubUrl?: string;
  theme?: "light" | "dark";
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageUrl, title, description, tags, websiteUrl, githubUrl, theme = "light" }) => {
  const isDark = theme === "dark";
  const cardBg = isDark ? "bg-zinc-800/70 border-zinc-700 backdrop-blur-md" : "bg-white/60 border-zinc-200 backdrop-blur-md";
  const titleColor = isDark ? "text-zinc-100" : "text-zinc-900";
  const descColor = isDark ? "text-zinc-300" : "text-zinc-600";
  const tagBg = isDark ? "bg-zinc-700/80 text-zinc-200 border border-zinc-600" : "bg-white/80 text-zinc-700 border border-zinc-200";
  const btnBg = isDark ? "bg-zinc-900 text-zinc-100" : "bg-white text-zinc-900";
  const btnActive = isDark ? "hover:bg-zinc-800" : "hover:bg-zinc-200";
  //const btnPrimary = isDark ? "bg-gradient-to-r from-blue-700 to-purple-700 text-white" : "bg-gradient-to-r from-blue-500 to-purple-500 text-white";

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
        <div className="flex gap-2 mt-auto">
          {websiteUrl && (
            <a
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-md font-semibold text-sm shadow-sm border ${btnBg} ${btnActive} transition-all duration-200`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" stroke="currentColor" strokeWidth="2" fill="none"/></svg>
              Website
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-md font-semibold text-sm shadow-sm border ${btnBg} ${btnActive} transition-all duration-200`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.166 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z"/></svg>
              Source
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard; 