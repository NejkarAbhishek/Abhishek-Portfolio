import { useState, useEffect } from 'react';

const AVATAR_URL = `${import.meta.env.BASE_URL}/images/Profile.jpg`;

export default function Profile01() {
  const [roleText, setRoleText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const roles = ["Software Engineer", "F1 Enthusiast"];

  useEffect(() => {
    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [roleText, isDeleting]);

  const handleType = () => {
    const i = loopNum % roles.length;
    const fullText = roles[i];

    setRoleText(isDeleting ? fullText.substring(0, roleText.length - 1) : fullText.substring(0, roleText.length + 1));
    setTypingSpeed(isDeleting ? 40 : 120);

    if (!isDeleting && roleText === fullText) {
      setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && roleText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }
  };

  return (
    <div className="w-full flex justify-center lg:justify-start items-center relative animate-fade-in-up">
      <div className="w-full flex flex-col lg:flex-row gap-16 items-center justify-between z-10">

        {/* Left Info Column */}
        <div className="flex flex-col gap-6 sm:gap-8 items-center sm:items-start flex-1 min-w-0">

          {/* Avatar & Name Horizontal Row */}
          <div className="flex flex-row items-center gap-6 sm:gap-8 w-full justify-center sm:justify-start">
            {/* Avatar Area */}
            <div className="flex-shrink-0 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-3xl overflow-hidden border border-zinc-700/50 bg-zinc-900 p-1.5 shadow-2xl transform hover:scale-[1.02] transition-transform duration-500 z-10">
                <img src={AVATAR_URL} alt="Abhishek Nejkar" className="w-full h-full object-cover rounded-[20px] filter brightness-95 group-hover:brightness-105 transition-all" />
              </div>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-indigo-300 pb-2">
              Abhishek Nejkar
            </h1>
          </div>

          {/* Info Details (Aligned to left margin of Avatar) */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left w-full">
            <div className="h-10 mt-1 flex items-center">
              <h2 className="text-xl sm:text-2xl font-mono min-h-[1.75rem] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-bold tracking-wide">
                <span className="text-zinc-500">&gt;</span> {roleText}<span className="text-white animate-pulse">_</span>
              </h2>
            </div>

            <div className="flex items-center gap-3 mt-5 text-zinc-300 bg-zinc-900/60 backdrop-blur-md px-5 py-2 rounded-full border border-zinc-800 shadow-xl shadow-black/50 text-sm font-semibold w-fit">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-400"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 11.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19.5 9.5c0 7-7.5 12-7.5 12s-7.5-5-7.5-12a7.5 7.5 0 1115 0z" /></svg>
              <span>Boston, MA</span>
            </div>

            {/* Actions */}
            <div className="flex items-center flex-wrap justify-center sm:justify-start gap-4 mt-10">
              <a
                href={`${import.meta.env.BASE_URL}/images/Resume.pdf`}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl font-bold text-[15px] bg-white text-black hover:scale-105 hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              >
                Download Résumé
              </a>

              <a href="https://www.linkedin.com/in/abhishek-nejkar-3083991b1/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-[52px] h-[52px] rounded-2xl flex items-center justify-center bg-zinc-900/80 border border-zinc-700/80 hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-400 transition-all text-zinc-400 shadow-xl backdrop-blur-md hover:-translate-y-1">
                <svg className="w-[22px] h-[22px]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>

              <a href="https://github.com/NejkarAbhishek" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-[52px] h-[52px] rounded-2xl flex items-center justify-center bg-zinc-900/80 border border-zinc-700/80 hover:border-purple-500 hover:bg-purple-500/10 hover:text-purple-400 transition-all text-zinc-400 shadow-xl backdrop-blur-md hover:-translate-y-1">
                <svg className="w-[24px] h-[24px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
              </a>

              <a href="mailto:nejkar.a@northeastern.edu" aria-label="Mail" className="w-[52px] h-[52px] rounded-2xl flex items-center justify-center bg-zinc-900/80 border border-zinc-700/80 hover:border-emerald-500 hover:bg-emerald-500/10 hover:text-emerald-400 transition-all text-zinc-400 shadow-xl backdrop-blur-md hover:-translate-y-1">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right Terminal Column */}
        <div className="w-full lg:w-[420px] shrink-0 rounded-2xl overflow-hidden border border-zinc-800/80 bg-[#0d0d0f]/90 backdrop-blur-2xl shadow-2xl relative transition-all duration-700 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)] group text-left mt-10 lg:mt-0 lg:ml-8 animate-fade-in-up-delay-2">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

          {/* Header */}
          <div className="px-5 py-3.5 border-b border-zinc-800/80 bg-zinc-900/50 flex items-center gap-2.5">
            <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] shadow-[0_0_10px_rgba(255,95,86,0.4)]"></div>
            <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] shadow-[0_0_10px_rgba(255,189,46,0.4)]"></div>
            <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f] shadow-[0_0_10px_rgba(39,201,63,0.4)]"></div>
            <span className="ml-4 text-[12px] text-zinc-400 font-mono tracking-widest uppercase font-semibold">developer.ts</span>
            <span className="ml-auto text-xs text-zinc-600 font-mono">UTF-8</span>
          </div>

          {/* Code Body - One Dark syntax mimicking */}
          <div className="p-6 font-mono text-[14px] leading-relaxed overflow-x-auto text-zinc-300">
            <span className="text-[#c678dd] font-semibold">const</span> <span className="text-[#61afef] font-semibold">developer</span> <span className="text-[#56b6c2] font-semibold">=</span> {'{'}
            <br />
            &nbsp;&nbsp;<span className="text-[#e06c75]">name</span>: <span className="text-[#98c379]">"Abhishek Nejkar"</span>,
            <br />
            &nbsp;&nbsp;<span className="text-[#e06c75]">location</span>: <span className="text-[#98c379]">"Boston, MA"</span>,
            <br />
            &nbsp;&nbsp;<span className="text-[#e06c75]">skills</span>: [<br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#98c379]">"React"</span>, <span className="text-[#98c379]">"Node.js"</span>,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#98c379]">"Java Spring"</span>, <span className="text-[#98c379]">"AWS"</span><br />
            &nbsp;&nbsp;],
            <br />
            &nbsp;&nbsp;<span className="text-[#e06c75]">isHireable</span>: <span className="text-[#d19a66]">true</span>,
            <br />
            &nbsp;&nbsp;<span className="text-[#61afef] font-semibold">build</span><span className="text-zinc-400">()</span> {'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#c678dd] font-semibold">return</span> <span className="text-[#56b6c2]">this</span>.<span className="text-[#e06c75]">skills</span>.<span className="text-[#61afef]">join</span>(<span className="text-[#98c379]">" & "</span>);
            <br />
            &nbsp;&nbsp;{'}'}
            <br />
            {'}'};
          </div>
        </div>

      </div>
    </div>
  );
}
