"use client"

import { useState } from "react"
import DaySky from "../components/day-sky"
import NightSky from "../components/night-sky"
import ThemeToggle from "../components/theme-toggle"

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const [transitioning, setTransitioning] = useState(false)

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
    <main className="relative w-full h-screen overflow-hidden">
      {/* Sky Backgrounds */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out z-0 ${
          theme === "light" ? "opacity-100" : "opacity-0"
        } ${transitioning ? "pointer-events-none" : ""}`}
      >
        <DaySky />
      </div>

      <div
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out z-0 ${
          theme === "dark" ? "opacity-100" : "opacity-0"
        } ${transitioning ? "pointer-events-none" : ""}`}
      >
        <NightSky />
      </div>

      {/* Theme Toggle Button */}
      <div className="relative z-10 flex justify-center pt-8">
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>
    </main>
  )
}
