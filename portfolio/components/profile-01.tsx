import React from "react";

interface Profile01Props {
  theme?: "light" | "dark";
}

const AVATAR_URL = "https://ferf1mheo22r9ira.public.blob.vercel-storage.com/avatar-02-albo9B0tWOSLXCVZh9rX9KFxXIVWMr.png";

export default function Profile01({ theme = "light" }: Profile01Props) {
  const isDark = theme === "dark";
  const nameColor = isDark ? "text-zinc-100" : "text-zinc-900";
  const roleColor = isDark ? "text-zinc-400" : "text-zinc-600";
  const locationColor = isDark ? "text-zinc-300" : "text-zinc-500";
  const cardBg = isDark ? "bg-zinc-800 border-zinc-700" : "bg-white border-zinc-200";

  return (
    <div className="w-full">
      <div className={`relative overflow-hidden rounded-2xl border ${cardBg} px-9 pt-9 pb-5 flex flex-col gap-4`}>
        {/* Top Row: Avatar, Name, Role */}
        <div className="flex items-center gap-5 mb-2">
          <img
            src={AVATAR_URL}
            alt="John Doe"
            width={90}
            height={90}
            className="rounded-full object-cover"
          />
          <div className="flex flex-col justify-center">
            <span className={`text-[1.575rem] font-bold ${nameColor}`}>Abhishek Nejkar</span>
            <span className={`text-[1.05rem] font-medium ${locationColor}`}>Software Engineer</span>
            {/* Location Row */}
            <div className="flex items-center gap-2 mt-1">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-gray-500"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 9.5c0 7-7.5 12-7.5 12s-7.5-5-7.5-12a7.5 7.5 0 1115 0z"/></svg>
              <span className={`text-[1.05rem] font-normal ${roleColor}`}>Boston, MA</span>
            </div>
          </div>
        </div>
        {/* Divider */}
        <hr className="my-2 border-zinc-200 dark:border-zinc-700" />
        {/* Action Row */}
        <div className="flex items-center gap-3 mt-2">
          {/* Resume Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 border border-zinc-400 rounded-md font-bold text-base bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-700 transition"
          >
            {/* Download SVG */}
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v12m0 0l-4-4m4 4l4-4m-9 8h10"/></svg>
            Resume
          </a>
          {/* LinkedIn */}
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition flex items-center justify-center">
            <svg className="w-7 h-7 grayscale hover:grayscale-0 transition-all" viewBox="0 0 24 24" fill="#0A66C2"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.56v4.75z"/></svg>
          </a>

          {/* GitHub (modern custom SVG) */}
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7 grayscale hover:grayscale-0 transition-all"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.6,5,2.5,9.3,6.9,10.7v-2.3c0,0-0.4,0.1-0.9,0.1c-1.4,0-2-1.2-2.1-1.9
                c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1c0.4,0,0.7-0.1,0.9-0.2
                c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6c0,0,1.4,0,2.8,1.3
                C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3
                c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v3.3c4.1-1.3,7-5.1,7-9.5C22,6.1,16.9,1.4,10.9,2.1z"
              />
            </svg>
          </a>
          {/* Mail (modern custom SVG) */}
          
        </div>
      </div>
    </div>
  );
}
