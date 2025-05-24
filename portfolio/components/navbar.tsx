import React from "react";

interface NavbarProps {
  theme: "light" | "dark";
}

export default function Navbar({ theme }: NavbarProps) {
  const isDark = theme === "dark";
  const textColor = isDark ? "text-zinc-100" : "text-zinc-900";
  const linkColor = isDark ? "text-zinc-300" : "text-zinc-700";

  return (
    <nav
      className="w-full max-w-xl mx-auto flex items-center justify-between px-8 py-6 z-20 bg-transparent"
      style={{ width: '40vw', minWidth: 384, maxWidth: 618 }}
    >
      <div className={`flex items-center gap-2 font-bold text-2xl ${textColor}`}>
        <span>Abhi</span>
      </div>
      <div className="flex items-center gap-6">
        <a href="#experience" className={`text-lg ${linkColor} hover:underline`}>Experience</a>
        <a href="#skills" className={`text-lg ${linkColor} hover:underline`}>Skills</a>
        <a href="#projects" className={`text-lg ${linkColor} hover:underline`}>Projects</a>
      </div>
    </nav>
  );
} 