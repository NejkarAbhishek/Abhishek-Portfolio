import Profile01 from "../components/profile-01"
import ExperienceSection from "../components/experience-section"
import SkillsSection from "../components/skills-section"
import ProjectCard from "../components/project-card"
import "./App.css"

export default function App() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#050505] text-zinc-300 antialiased selection:bg-blue-500/30">
      {/* Texture Layer */}
      <div className="fixed inset-0 bg-noise z-40 pointer-events-none mix-blend-screen opacity-[0.15]"></div>

      {/* Ambient Glowing Meshes */}
      <div className="fixed top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none z-0"></div>
      <div className="fixed bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-purple-600/10 blur-[120px] pointer-events-none z-0"></div>

      <div className="relative z-10 w-full flex flex-col items-center justify-center min-h-screen py-16 px-4 sm:px-8">
        <div className="w-full max-w-5xl flex flex-col gap-28 pb-20">

          {/* Hero Section */}
          <section className="pt-10 sm:pt-24">
            <Profile01 />
          </section>

          {/* Experience Section */}
          <section className="flex flex-col gap-10">
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-white flex items-center gap-4">
              <span className="w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
              Experience
            </h2>
            <div className="pl-2 sm:pl-6 pt-4">
              <ExperienceSection />
            </div>
          </section>

          {/* Skills Section */}
          <section className="flex flex-col gap-10">
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-white flex items-center gap-4">
              <span className="w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
              Skills & Stack
            </h2>
            <div className="pt-2">
              <SkillsSection />
            </div>
          </section>

          {/* Projects Section */}
          <section className="flex flex-col gap-12">
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-white flex items-center gap-4">
              <span className="w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
              Selected Work
            </h2>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
              <ProjectCard
                imageUrl="images/Scribbly.png"
                title="Scribbly"
                description="A real-time whiteboard application enabling collaborative drawing, brainstorming, and fluid conceptualization across multiple devices."
                tags={["AngularJS", "MongoDB", "Express", "Node", "Socket.io"]}
                websiteUrl="https://scribbly-omega.vercel.app/"
                githubUrl="https://github.com/NejkarAbhishek/Scribbly"
              />
              <ProjectCard
                imageUrl="images/MERN.png"
                title="HobbyHub"
                description="A social platform for discovering and sharing hobbies, featuring interactive community forums, real-time messaging, and personalized feeds."
                tags={["React", "MongoDB", "Express", "Node"]}
                websiteUrl="https://hobby-hub-h8wb.vercel.app/"
                githubUrl="https://github.com/NejkarAbhishek/Hobby-Hub"
              />
              <ProjectCard
                imageUrl="images/Slate.png"
                title="Slate"
                description="A comprehensive restaurant management portal delivering real-time order tracking, inventory analytics, staff scheduling, and customer insights through intuitive dashboards and actionable operational metrics."
                tags={["Flutter", "Django", "Dart"]}
                githubUrl="https://github.com/NejkarAbhishek/Slate"
              />
              <ProjectCard
                imageUrl="images/Amplify.png"
                title="Amplify"
                description="A cloud-native REST API built with Spring Boot and PostgreSQL, deployed across AWS and GCP using Terraform and Packer with fully automated CI/CD pipelines via GitHub Actions for zero-touch deployment."
                tags={["Spring Boot", "Packer", "Terraform", "AWS", "GCP"]}
              />
            </div>
          </section>

          {/* Footer */}
          <footer className="w-full border-t border-zinc-800/50 pt-10 pb-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-zinc-500 text-sm font-medium">
            <span>© {new Date().getFullYear()} Abhishek Nejkar. All rights reserved.</span>
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span>Available for new opportunities</span>
            </div>
          </footer>

        </div>
      </div>
    </main>
  )
}
