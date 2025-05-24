"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, Bed, Users, DollarSign, Plus } from "lucide-react"
import ColorThief from "colorthief"

interface CardData {
  id: number
  title: string
  subtitle: string
  description: string
  imageUrl: string
  icon: string
  colors: {
    primary: string
    secondary: string
    text: string
    shadow: string
  }
  isMoreCard?: boolean
}

// 5 unique cards
const originalCards: CardData[] = [
  {
    id: 1,
    title: "MAGNA COASTAL",
    subtitle: "Invest in Future",
    description: "An undiscovered coastal jewel on the Gulf of Aqaba near the Red Sea, Magna will be a place like nothing on earth.",
    imageUrl: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
    icon: "bed",
    colors: {
      primary: "#1a1a1a",
      secondary: "#333333",
      text: "#ffffff",
      shadow: "rgba(0, 0, 0, 0.5)",
    },
  },
  {
    id: 2,
    title: "NEOM",
    subtitle: "Smart City",
    description: "A vision of a new future, NEOM is a planned cross-border city in the Tabuk Province of northwestern Saudi Arabia.",
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    icon: "users",
    colors: {
      primary: "#0a192f",
      secondary: "#112240",
      text: "#ffffff",
      shadow: "rgba(10, 25, 47, 0.5)",
    },
  },
  {
    id: 3,
    title: "THE LINE",
    subtitle: "Urban Revolution",
    description: "A 170km linear city designed to have no cars, streets or carbon emissions, part of Saudi Vision 2030.",
    imageUrl: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    icon: "dollar",
    colors: {
      primary: "#22223b",
      secondary: "#4a4e69",
      text: "#ffffff",
      shadow: "rgba(34, 34, 59, 0.5)",
    },
  },
  {
    id: 4,
    title: "OXAGON",
    subtitle: "Industrial Hub",
    description: "A floating industrial complex, OXAGON will be the largest floating structure in the world.",
    imageUrl: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=800&q=80",
    icon: "plus",
    colors: {
      primary: "#22223b",
      secondary: "#9a8c98",
      text: "#ffffff",
      shadow: "rgba(154, 140, 152, 0.5)",
    },
  },
  {
    id: 5,
    title: "TROJENA",
    subtitle: "Mountain Destination",
    description: "A year-round mountain destination with outdoor skiing, part of NEOM.",
    imageUrl: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
    icon: "bed",
    colors: {
      primary: "#22223b",
      secondary: "#c9ada7",
      text: "#ffffff",
      shadow: "rgba(201, 173, 167, 0.5)",
    },
  },
];

interface CardStackProps {
  theme?: "light" | "dark"
}

export default function CardStack({ theme = "light" }: CardStackProps) {
  const [cards, setCards] = useState<CardData[]>(originalCards)
  const [loading, setLoading] = useState(true)
  const [extractedColors, setExtractedColors] = useState<boolean>(false)

  // Extract colors from images when component mounts
  useEffect(() => {
    const extractColors = async () => {
      if (extractedColors) return

      try {
        const updatedCards = [...cards]
        const colorThief = new ColorThief()

        for (let i = 0; i < updatedCards.length; i++) {
          const card = updatedCards[i]
          // Skip the "More Projects" card
          if (card.isMoreCard) continue;
          
          try {
            const img = new Image()
            img.crossOrigin = "Anonymous"
            img.src = card.imageUrl

            await new Promise((resolve) => {
              img.onload = () => {
                try {
                  const palette = colorThief.getPalette(img, 3)

                  // Convert RGB to hex and create color scheme
                  const primaryColor = `rgb(${palette[0][0]}, ${palette[0][1]}, ${palette[0][2]})`
                  const secondaryColor = `rgb(${palette[1][0]}, ${palette[1][1]}, ${palette[1][2]})`
                  const shadowColor = `rgba(${palette[0][0]}, ${palette[0][1]}, ${palette[0][2]}, 0.6)`

                  // Determine if text should be white or black based on primary color brightness
                  const brightness = (palette[0][0] * 299 + palette[0][1] * 587 + palette[0][2] * 114) / 1000
                  const textColor = brightness < 128 ? "#ffffff" : "#000000"

                  updatedCards[i].colors = {
                    primary: primaryColor,
                    secondary: secondaryColor,
                    text: textColor,
                    shadow: shadowColor,
                  }
                } catch (error) {
                  console.error("Error extracting colors:", error)
                }
                resolve(null)
              }
              
              img.onerror = () => {
                console.error("Failed to load image:", card.imageUrl)
                resolve(null)
              }
              
              // Set a timeout in case the image never loads
              setTimeout(() => {
                resolve(null)
              }, 5000)
            })
          } catch (error) {
            console.error("Error loading image:", error)
          }
        }

        setCards(updatedCards)
        setExtractedColors(true)
      } catch (e) {
        console.error("Error in extractColors:", e)
      } finally {
        setLoading(false)
      }
    }

    extractColors()
  }, [extractedColors])

  const removeCard = (id: number) => {
    setCards((prevCards) => {
      const filtered = prevCards.filter((card) => card.id !== id);
      // If all cards are removed, reset to originalCards
      if (filtered.length === 0) {
        setTimeout(() => setCards(originalCards), 300); // Small delay for animation
      }
      return filtered;
    });
  }

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "bed":
        return <Bed className="h-5 w-5" />
      case "users":
        return <Users className="h-5 w-5" />
      case "dollar":
        return <DollarSign className="h-5 w-5" />
      case "plus":
        return <Plus className="h-5 w-5" />
      case "arrowUpRight":
      default:
        return <ArrowUpRight className="h-5 w-5" />
    }
  }

  if (loading) {
    return <div className="flex h-96 w-full items-center justify-center">Loading cards...</div>
  }

  return (
    <div className={`relative w-full h-[600px] ${theme === "dark" ? "dark" : ""}`}>
      <AnimatePresence>
        {cards.map((card: CardData, index: number) => (
          <Card
            key={card.id}
            card={card}
            index={index}
            removeCard={removeCard}
            getIconComponent={getIconComponent}
            totalCards={cards.length}
            theme={theme}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}

interface CardProps {
  card: CardData
  index: number
  removeCard: (id: number) => void
  getIconComponent: (iconName: string) => JSX.Element
  totalCards: number
  theme?: "light" | "dark"
}

function Card({ card, index, removeCard, getIconComponent, totalCards, theme = "light" }: CardProps) {
  const zIndex = totalCards - index
  const yOffset = index * 15 // Card stacking vertical offset
  const xOffset = index * 3 // Card stacking horizontal offset

  const isDark = theme === "dark"
  
  // Card styles with full opacity in dark mode
  const cardStyle = {
    backgroundColor: isDark ? "#1a1a1a" : "rgba(255, 255, 255, 0.9)",
    color: isDark ? "#ffffff" : card.colors.text,
    boxShadow: isDark 
      ? "0 10px 15px -3px rgba(0, 0, 0, 0.7), 0 4px 6px -4px rgba(0, 0, 0, 0.7)" 
      : `0 10px 15px -3px ${card.colors.shadow}, 0 4px 6px -4px ${card.colors.shadow}`,
  }

  const gradientStyle = {
    background: isDark 
      ? `linear-gradient(to bottom, rgba(26, 26, 26, 0) 0%, rgba(26, 26, 26, 1) 100%)` 
      : `linear-gradient(to bottom, ${card.colors.secondary}00 0%, ${card.colors.primary} 100%)`,
  }

  const iconBoxStyle = {
    backgroundColor: isDark ? "#333" : card.colors.primary,
    color: isDark ? "#fff" : card.colors.text,
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 100, x: xOffset }}
      animate={{
        opacity: 1,
        y: yOffset,
        x: xOffset,
        scale: 1 - index * 0.04,
        rotateZ: index * -2, // Slight rotation for each card
      }}
      exit={{
        opacity: 0,
        transition: { duration: 0.2 },
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 50,
        mass: 1,
      }}
      style={{
        zIndex,
        ...cardStyle,
      }}
      className="absolute left-0 top-0 h-full w-full cursor-grab overflow-hidden rounded-2xl active:cursor-grabbing"
      drag={index === 0} // Allow drag in all directions for the top card
      dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
      dragElastic={0.6}
      onDragEnd={(_, info) => {
        if (index === 0) {
          const distance = Math.sqrt(Math.pow(info.offset.x, 2) + Math.pow(info.offset.y, 2))
          if (distance > 150) {
            // Adjust this threshold as needed
            removeCard(card.id)
          }
        }
      }}
      whileDrag={{
        scale: 1.05,
        boxShadow: `0 ${15 + index * 5}px ${40 + index * 10}px ${card.colors.shadow}`,
      }}
    >
      <motion.div
        className="relative flex h-full flex-col overflow-hidden rounded-2xl"
        style={{ ...gradientStyle }}
      >
        {/* Card Header */}
        <div className="flex items-center justify-between p-4">
          <div className="rounded-full bg-opacity-20 p-2" style={iconBoxStyle}>
            {getIconComponent(card.icon)}
          </div>
          <div className="rounded-full bg-opacity-20 p-2" style={iconBoxStyle}>
            <ArrowUpRight className="h-5 w-5" />
          </div>
        </div>

        {/* Card Title */}
        <div className="px-4 py-2">
          <h2 className="text-3xl font-bold">{card.title}</h2>
          <h3 className="text-xl font-medium" style={{ color: isDark ? "#d1d5db" : `${card.colors.text}99` }}>
            {card.subtitle}
          </h3>
        </div>

        {/* Card Image */}
        <div className="mt-2 overflow-hidden px-4">
          <div
            className="aspect-video w-full overflow-hidden rounded-xl bg-cover bg-center"
            style={{
              backgroundImage: `url(${card.imageUrl})`,
              backgroundColor: isDark ? "#2a2a2a" : undefined,
            }}
          />
        </div>

        {/* Card Footer */}
        <div className="mt-auto p-4">
          <div
            className="rounded-full px-3 py-1 text-sm"
            style={{
              backgroundColor: isDark ? "rgba(255, 255, 255, 0.1)" : `${card.colors.text}20`,
              display: "inline-flex",
              alignItems: "center",
              gap: "0.25rem",
            }}
          >
            <DollarSign className="h-4 w-4" />
            {card.subtitle}
          </div>
          <p className="mt-3 text-sm opacity-80">{card.description}</p>
        </div>

        {/* Drag indicator for the top card */}
        {index === 0 && (
          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 flex-col items-center">
            <motion.div
              className="h-1 w-10 rounded-full"
              style={{ backgroundColor: isDark ? "rgba(255, 255, 255, 0.4)" : `${card.colors.text}40` }}
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
            />
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}
