"use client"

import { useState, useEffect } from "react"
import Profile01 from "../components/profile-01"
import DaySky from "../components/day-sky"
import NightSky from "../components/night-sky"
import ThemeToggle from "../components/theme-toggle"
import CardStack from "../components/card-stack"
import ExperienceSection from "../components/experience-section"
import SkillsSection from "../components/skills-section"
import ProjectCard from "../components/project-card"
import "./App.css"

export default function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const [transitioning, setTransitioning] = useState(false)
  
  useEffect(() => {
    console.log("App rendered, theme:", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTransitioning(true)
    setTimeout(() => {
      setTheme(theme === "light" ? "dark" : "light")
      setTimeout(() => {
        setTransitioning(false)
      }, 500)
    }, 300)
  }

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      {/* Sky Backgrounds */}
      <div
        className={`fixed inset-0 transition-opacity duration-1000 ease-in-out z-0 ${
          theme === "light" ? "opacity-100" : "opacity-0"
        } ${transitioning ? "pointer-events-none" : ""}`}
      >
        <DaySky />
      </div>

      <div
        className={`fixed inset-0 transition-opacity duration-1000 ease-in-out z-0 ${
          theme === "dark" ? "opacity-100" : "opacity-0"
        } ${transitioning ? "pointer-events-none" : ""}`}
      >
        <NightSky />
      </div>

      {/* Everything else should be z-10 */}
      <div className="relative z-10">
        {/* Main Content - Centered Column */}
        <div className="w-full flex flex-col items-center justify-center min-h-screen py-16">
          {/* Profile Card - 20% wider */}
          <div className="w-full max-w-2xl" style={{width: '76vw', minWidth: 460, maxWidth: 690}}>
            <Profile01 theme={theme} />
            {/* Heading Badge below Profile Card */}
            <div className="flex justify-start mt-4">
              <span className={`text-lg font-bold px-4 py-2 rounded-lg border shadow-sm ${theme === "dark" ? "bg-zinc-800/70 border-zinc-700 backdrop-blur-md text-zinc-100" : "bg-white/60 border-zinc-200 backdrop-blur-md text-zinc-900"}`}>Experience</span>
            </div>
            {/* Experience Section Timeline */}
            <div className="w-full">
              <ExperienceSection theme={theme} />
            </div>
            {/* Skills Badge below Experience Section */}
            <div className="flex justify-start mt-8">
              <span className={`text-lg font-bold px-4 py-2 rounded-lg border shadow-sm ${theme === "dark" ? "bg-zinc-800/70 border-zinc-700 backdrop-blur-md text-zinc-100" : "bg-white/60 border-zinc-200 backdrop-blur-md text-zinc-900"}`}>Skills</span>
            </div>
            {/* Skills Section Grid */}
            <SkillsSection theme={theme} />
            {/* Projects Badge below Skills Section */}
            <div className="flex justify-start mt-8">
              <span className={`text-lg font-bold px-4 py-2 rounded-lg border shadow-sm ${theme === "dark" ? "bg-zinc-800/70 border-zinc-700 backdrop-blur-md text-zinc-100" : "bg-white/60 border-zinc-200 backdrop-blur-md text-zinc-900"}`}>Projects</span>
            </div>
          </div>
          {/* Projects Grid - 2 columns, 2 rows */}
          <div className="w-full max-w-2xl mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6" style={{width: '76vw', minWidth: 460, maxWidth: 690}}>
            {/* Example Project Cards - Replace with your actual project data */}
            <ProjectCard
              imageUrl="/project1.png"
              title="Scribbly"
              description="A whiteboard collaboration platform"
              tags={["AngularJS", "MongoDB", "ExpressJS", "NodeJs", "Socket.io"]}
              websiteUrl="#"
              theme={theme}
            />
            <ProjectCard
              imageUrl="../assets/MERN.png"
              title="HobbyHub"
              description="A platform for discovering and sharing hobbies"
              tags={["ReactJs", "MongoDB", "ExpressJS", "NodeJS"]}
              websiteUrl="#"
              theme={theme}
            />
            <ProjectCard
              imageUrl="/project3.png"
              title="Project 3"
              description="Description for project 3."
              tags={["React", "NodeJS", "Docker"]}
              websiteUrl="#"
              theme={theme}
            />
            <ProjectCard
              imageUrl="/project4.png"
              title="Project 4"
              description="Description for project 4."
              tags={["GCP", "Spring"]}
              websiteUrl="#"
              theme={theme}
            />
            <ProjectCard
              imageUrl="/project5.png"
              title="Project 5"
              description="Description for project 5."
              tags={["AWS", "HTML"]}
              websiteUrl="#"
              theme={theme}
            />
            <ProjectCard
              imageUrl="/project6.png"
              title="Project 6"
              description="Description for project 6."
              tags={["Python", "Flask"]}
              websiteUrl="#"
              theme={theme}
            />
          </div>
          {/* Footer line and F1 car SVG - now at bottom left, line full width */}
          <div className="w-full mt-16 relative" style={{width: '76vw', minWidth: 460, maxWidth: 690}}>
            {/* Full-width line, moved further down */}
            <hr className="absolute left-0 bottom-0 w-full border-t-2 border-zinc-500 opacity-60" style={{bottom: '-32px'}} />
            {/* SVG at bottom left, absolutely positioned */}
            <div className="absolute left-0" style={{ bottom: '-116px', zIndex: 2 }}>
              <svg fill={theme === 'dark' ? '#fff' : '#000'} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="77" height="77" viewBox="0 0 98.75 98.75" xmlSpace="preserve" stroke={theme === 'dark' ? '#fff' : '#000'} strokeWidth="0.00098751">
                <g> <g> <path d="M22.106,46.936c-3.79,0-6.866,3.071-6.866,6.866c0,0.293,0.024,0.58,0.062,0.862c0.426,3.386,3.307,6.003,6.805,6.003 c3.598,0,6.54-2.761,6.839-6.279c0.017-0.194,0.03-0.389,0.03-0.586C28.976,50.008,25.9,46.936,22.106,46.936z M18.667,51.213 l1.402,1.4c-0.109,0.188-0.196,0.391-0.249,0.605h-1.975C17.947,52.469,18.234,51.789,18.667,51.213z M17.839,54.407h1.988 c0.057,0.212,0.139,0.412,0.25,0.598l-1.404,1.402C18.239,55.836,17.944,55.152,17.839,54.407z M21.512,58.067 c-0.742-0.102-1.419-0.395-1.99-0.824l1.396-1.398c0.182,0.107,0.385,0.186,0.594,0.24V58.067z M21.512,51.516 c-0.214,0.057-0.417,0.144-0.606,0.254l-1.396-1.398c0.573-0.438,1.256-0.726,2.003-0.83L21.512,51.516L21.512,51.516z M22.701,49.542c0.751,0.104,1.433,0.393,2.007,0.831l-1.397,1.397c-0.188-0.11-0.393-0.197-0.609-0.254L22.701,49.542 L22.701,49.542z M22.701,58.067v-1.98c0.212-0.057,0.412-0.135,0.598-0.244l1.395,1.4C24.123,57.674,23.446,57.965,22.701,58.067z M25.547,56.411l-1.407-1.408c0.107-0.185,0.198-0.382,0.255-0.596h1.972C26.263,55.152,25.982,55.84,25.547,56.411z M24.395,53.219c-0.053-0.215-0.139-0.418-0.247-0.605l1.4-1.4c0.435,0.575,0.721,1.256,0.823,2.006H24.395L24.395,53.219z"></path> <path d="M78.029,53.801c0-3.049,1.638-5.717,4.072-7.19l-16.177-7.166H55.775c-0.604,0-1.094,0.49-1.094,1.095v1.438 c0,0.604,0.489,1.095,1.094,1.095h0.72v0.997h-1.841c-0.579,0-1.096,0.371-1.277,0.921L53.23,45.43 c-3.351-0.271-4.945,2.294-6.62,2.294l-1.131-1.361c-0.674-0.813-1.706-1.241-2.758-1.144c-0.32,0.03-0.661,0.094-1.008,0.211 l-0.635,2.294c0,0-5.759-0.335-13.245-0.066c1.648,1.537,2.687,3.72,2.687,6.146c0,0.24,0.039,5.32,0.039,5.32h49.383 c-0.976-1.188-1.637-2.648-1.84-4.266C78.055,54.485,78.029,54.135,78.029,53.801z"></path> <path d="M13.695,53.801c0-1.928,0.659-3.699,1.753-5.12C9.664,49.487,4.044,50.83,0,53.047c0,1.176,5.168,0.019,5.168,2.448H1.181 c-0.402,0-0.728,0.325-0.728,0.728v2.172c0,0.402,0.325,0.729,0.728,0.729h9.969c0.403,0,0.729-0.326,0.729-0.729v-3.354h1.922 c-0.009-0.062-0.024-0.121-0.032-0.185C13.72,54.485,13.695,54.135,13.695,53.801z"></path> <path d="M96.938,38.084H86.284c-1.003,0-1.815,0.812-1.815,1.814v2.376c0,0.48,0.191,0.942,0.531,1.282l1.855,1.854 c4.446,0.218,8,3.893,8,8.391c0,0.111-0.012,0.224-0.017,0.334h3.912V39.899C98.752,38.896,97.939,38.084,96.938,38.084z"></path> <path d="M86.74,46.936c-3.79,0-6.866,3.071-6.866,6.866c0,0.293,0.024,0.58,0.062,0.862c0.426,3.386,3.308,6.003,6.806,6.003 c3.598,0,6.54-2.761,6.84-6.279c0.017-0.194,0.028-0.389,0.028-0.586C93.609,50.008,90.535,46.936,86.74,46.936z M83.302,51.213 l1.401,1.4c-0.109,0.188-0.195,0.391-0.249,0.605h-1.976C82.581,52.469,82.868,51.789,83.302,51.213z M82.473,54.407h1.988 c0.057,0.212,0.139,0.412,0.25,0.598l-1.404,1.402C82.873,55.836,82.578,55.152,82.473,54.407z M86.146,58.067 c-0.742-0.102-1.42-0.395-1.99-0.824l1.396-1.396c0.183,0.106,0.386,0.185,0.595,0.24V58.067z M86.146,51.516 c-0.215,0.057-0.418,0.144-0.606,0.254l-1.396-1.398c0.572-0.438,1.256-0.726,2.004-0.83v1.975H86.146z M87.335,49.542 c0.751,0.104,1.433,0.393,2.007,0.831l-1.396,1.397c-0.188-0.11-0.393-0.197-0.609-0.254L87.335,49.542L87.335,49.542z M87.335,58.067v-1.98c0.212-0.057,0.412-0.135,0.599-0.244l1.396,1.4C88.758,57.674,88.08,57.965,87.335,58.067z M90.182,56.411 l-1.408-1.408c0.107-0.185,0.199-0.382,0.256-0.596h1.972C90.896,55.152,90.616,55.84,90.182,56.411z M89.029,53.219 c-0.055-0.215-0.139-0.418-0.248-0.605l1.4-1.4c0.435,0.575,0.721,1.256,0.822,2.006H89.029L89.029,53.219z"></path> </g> </g>
              </svg>
            </div>
            {/* Last updated text */}
            <div className="absolute right-0 flex items-center" style={{ bottom: '-100px', zIndex: 2 }}>
              <span className={`text-sm italic font-medium px-4 py-1 rounded-full shadow-md ${theme === 'dark' ? 'bg-zinc-800/70 text-zinc-200 border border-zinc-700' : 'bg-white/70 text-zinc-700 border border-zinc-200'} backdrop-blur-md`}>Last updated: 27 May 2025</span>
            </div>
          </div>
        </div>
      </div>

      {/* Theme Toggle - Bottom left corner */}
      <div className="fixed bottom-8 left-8 z-20">
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>
    </main>
  )
}

