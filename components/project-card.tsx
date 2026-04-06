

interface ProjectCardProps {
  imageUrl: string;
  title: string;
  description: string;
  tags: string[];
  websiteUrl?: string;
  githubUrl?: string;
}

export default function ProjectCard({ imageUrl, title, description, tags, websiteUrl, githubUrl }: ProjectCardProps) {
  return (
    <div className="flex flex-col group/card w-full rounded-3xl bg-zinc-900/40 backdrop-blur-xl border border-zinc-800/80 hover:border-blue-500/50 transition-all duration-500 shadow-2xl hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(59,130,246,0.15)] overflow-hidden animate-fade-in-up">
      {/* Visual Section */}
      <a 
        href={websiteUrl || githubUrl || "#"} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="relative block overflow-hidden aspect-[16/10] w-full bg-zinc-950 border-b border-zinc-800/80 group/img"
      >
        {/* Subtle inner shadow top gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80 z-10 transition-opacity duration-500 group-hover/img:opacity-40"></div>
        <img 
          src={`${import.meta.env.BASE_URL}/${imageUrl.startsWith('/') ? imageUrl.slice(1) : imageUrl}`}
          alt={title} 
          className="w-full h-full object-cover object-top filter brightness-90 saturate-75 group-hover/img:brightness-105 group-hover/img:saturate-100 group-hover/img:scale-[1.03] transition-all duration-700 will-change-transform" 
        />
        
        {/* Top Right Animated Glow Indicator */}
        <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-blue-500/20 backdrop-blur-md border border-blue-400/30 flex items-center justify-center opacity-0 -translate-y-3 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-500 z-20 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
          <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
        </div>
      </a>
      
      {/* Information Section */}
      <div className="flex flex-col flex-1 p-7 sm:p-9 relative">
        <h3 className="font-display text-3xl font-extrabold tracking-tight text-white mb-3 group-hover/card:text-blue-400 transition-colors duration-300">{title}</h3>
        <p className="text-zinc-400 text-[15px] leading-relaxed mb-8 flex-1">{description}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2.5 mb-8 mt-auto">
          {tags.map((tag, idx) => (
            <span key={idx} className="text-[11px] font-bold tracking-widest uppercase text-blue-300 bg-blue-500/10 px-3.5 py-1.5 rounded-lg border border-blue-500/20 shadow-sm">
              {tag}
            </span>
          ))}
        </div>
        
        {/* Actions */}
        <div className="flex items-center gap-4 pt-6 border-t border-zinc-800/60">
          {websiteUrl && (
            <a href={websiteUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex justify-center items-center gap-2 text-[15px] font-bold tracking-wide bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-3 rounded-xl hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:scale-[1.02] transition-all">
              Live Preview
            </a>
          )}
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex justify-center items-center gap-2 text-[15px] font-bold tracking-wide bg-zinc-800/80 text-zinc-300 border border-zinc-700 px-5 py-3 rounded-xl hover:bg-zinc-700 hover:text-white transition-all">
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}