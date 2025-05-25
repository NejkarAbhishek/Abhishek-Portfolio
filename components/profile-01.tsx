//import React from "react";

interface Profile01Props {
  theme?: "light" | "dark";
}

const AVATAR_URL = "/images/Profile.jpg";

export default function Profile01({ theme = "light" }: Profile01Props) {
  const isDark = theme === "dark";
  const nameColor = isDark ? "text-zinc-100" : "text-zinc-900";
  const roleColor = isDark ? "text-zinc-400" : "text-zinc-600";
  const locationColor = isDark ? "text-zinc-300" : "text-zinc-500";
  const cardBg = isDark
    ? "bg-zinc-800/70 border-zinc-700 backdrop-blur-md"
    : "bg-white/60 border-zinc-200 backdrop-blur-md";
  const shadow = isDark
    ? "shadow-[0_8px_32px_0_rgba(0,0,0,0.45)]"
    : "shadow-[0_8px_32px_0_rgba(0,0,0,0.12)]";

  return (
    <div className="w-full flex justify-center">
      <div
        className={`relative overflow-hidden rounded-3xl border ${cardBg} ${shadow} px-12 pt-10 pb-7 flex flex-col sm:flex-row gap-8 items-center transition-all duration-500`}
        style={{ minWidth: 400, maxWidth: 700, width: '100%' }}
      >
        <div className="relative mb-2 group flex-shrink-0">
          <div className="w-36 h-36 rounded-full bg-gradient-to-tr from-blue-400 via-purple-400 to-blue-400 p-1 shadow-lg group-hover:scale-105 transition-transform duration-300">
            <img
              src={AVATAR_URL}
              alt="Abhishek Nejkar"
              width={144}
              height={144}
              className="rounded-full object-cover w-full h-full border-4 border-white dark:border-zinc-900 shadow-md"
            />
          </div>
        </div>
        <div className="flex flex-col items-center sm:items-start flex-1 w-full sm:ml-4 ml-0">
          <span className={`text-2xl sm:text-3xl font-bold ${nameColor} drop-shadow-sm`}>Abhishek Nejkar</span>
          <span className={`text-xl sm:text-2xl font-medium ${roleColor} mt-1`}>Software Engineer</span>
          <div className="flex items-center gap-2 mt-2">
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-500"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 9.5c0 7-7.5 12-7.5 12s-7.5-5-7.5-12a7.5 7.5 0 1115 0z"/></svg>
            <span className={`text-lg font-normal ${locationColor}`}>Boston, MA</span>
          </div>
          <hr className="my-4 border-zinc-200 dark:border-zinc-700 w-full" />
          <div className="flex items-center gap-4 mt-2">
            <a
              href="/Abhishek-Portfolio/portfolio/assets/Resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 rounded-full font-bold text-base bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v12m0 0l-4-4m4 4l4-4m-9 8h10"/></svg>
              Resume
            </a>
            <a href="https://www.linkedin.com/in/abhishek-nejkar-3083991b1/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition flex items-center justify-center">
              <span className="w-11 h-11 rounded-full flex items-center justify-center shadow-lg bg-gradient-to-br from-[#0A66C2] to-[#004182] hover:scale-110 hover:shadow-xl transition-transform duration-300">
                <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="16" fill="#0A66C2" />
                  <circle cx="16" cy="16" r="15" fill="none" stroke="#fff" strokeWidth="1.2" opacity="0.18" />
                  <path d="M12.667 13.333h2.222v1.111h.032c.309-.586 1.064-1.204 2.19-1.204 2.344 0 2.778 1.543 2.778 3.551v4.209h-2.222v-3.733c0-.89-.016-2.037-1.241-2.037-1.241 0-1.431.97-1.431 1.971v3.799h-2.222v-7.667zm-3.111 0h2.222v7.667h-2.222v-7.667zm1.111-3.556c.714 0 1.111.476 1.111 1.095 0 .603-.381 1.095-1.079 1.095h-.013c-.698 0-1.111-.492-1.111-1.095 0-.619.397-1.095 1.092-1.095z" fill="#fff" />
                </svg>
              </span>
            </a>
            <a href="https://github.com/NejkarAbhishek" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition flex items-center justify-center">
              <span className="w-11 h-11 rounded-full flex items-center justify-center shadow-lg bg-gradient-to-br from-zinc-700 to-zinc-900 hover:scale-110 hover:shadow-xl transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="#fff"><path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.6,5,2.5,9.3,6.9,10.7v-2.3c0,0-0.4,0.1-0.9,0.1c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v3.3c4.1-1.3,7-5.1,7-9.5C22,6.1,16.9,1.4,10.9,2.1z"/></svg>
              </span>
            </a>
            <a href="mailto:nejkar.a@northeastern.edu" aria-label="Mail" className="transition flex items-center justify-center">
              <span className="w-11 h-11 rounded-full flex items-center justify-center bg-gradient-to-br from-pink-500 to-indigo-500 hover:scale-110 hover:shadow-xl transition-transform duration-300">
                <svg className="w-7 h-7" fill="none" stroke="#fff" strokeWidth="1.7" viewBox="0 0 24 24">
                  <rect x="3.5" y="6.5" width="17" height="11" rx="2.5" fill="none" stroke="#fff" strokeWidth="1.7" />
                  <path d="M4 7l8 6 8-6" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
