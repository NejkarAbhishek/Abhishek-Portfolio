/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: '#09090b', // zinc-950
        surface: '#18181b', // zinc-900 
        border: '#27272a', // zinc-800
        muted: '#a1a1aa', // zinc-400
        accent: '#e4e4e7', // zinc-200 for hover highlights
        primary: '#ffffff', // pure white for important elements
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        display: ['"Google Sans"', 'Outfit', 'sans-serif'],
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'blob-bounce': {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-20px) scale(1.05)' },
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-up-delay-1': 'fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards',
        'fade-in-up-delay-2': 'fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards',
        'fade-in-up-delay-3': 'fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards',
        'blob': 'blob-bounce 5s infinite ease-in-out',
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
