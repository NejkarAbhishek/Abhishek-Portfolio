import React from "react";

interface MoreProjectsCardProps {
  theme?: "light" | "dark";
  href: string;
}

const MoreProjectsCard: React.FC<MoreProjectsCardProps> = ({ theme = "light", href }) => {
  const isDark = theme === "dark";
  const cardBg = isDark ? "bg-zinc-800/70 border-zinc-700 backdrop-blur-md" : "bg-white/60 border-zinc-200 backdrop-blur-md";
  const titleColor = isDark ? "text-zinc-100" : "text-zinc-900";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full w-full"
      tabIndex={0}
    >
      <div
        className={`rounded-3xl border p-5 flex flex-col h-full items-center justify-center transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-2 cursor-pointer ${cardBg}`}
        style={{ minHeight: 320 }}
      >
        <span className={`text-2xl font-extrabold mb-2 ${titleColor}`}>More Projects</span>
        <span className={`text-3xl ${titleColor}`}>→</span>
      </div>
    </a>
  );
};

export default MoreProjectsCard; 