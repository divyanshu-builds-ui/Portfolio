/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#64ffda',
        accent: '#bd34fe',
        muted: '#8892b0',
        dark: {
          950: '#020617',
          900: '#0a0f1c',
          800: '#111827',
          700: '#1e293b',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 8s ease infinite',
        'orb-1': 'orb1 20s ease-in-out infinite',
        'orb-2': 'orb2 25s ease-in-out infinite',
        'orb-3': 'orb3 18s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(100, 255, 218, 0.2), 0 0 20px rgba(100, 255, 218, 0.1)' },
          '100%': { boxShadow: '0 0 10px rgba(100, 255, 218, 0.4), 0 0 40px rgba(100, 255, 218, 0.2)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        orb1: {
          '0%, 100%': { top: '10%', left: '10%' },
          '25%': { top: '50%', left: '70%' },
          '50%': { top: '70%', left: '30%' },
          '75%': { top: '20%', left: '60%' },
        },
        orb2: {
          '0%, 100%': { top: '60%', right: '10%' },
          '33%': { top: '20%', right: '50%' },
          '66%': { top: '80%', right: '30%' },
        },
        orb3: {
          '0%, 100%': { bottom: '20%', left: '40%' },
          '50%': { bottom: '60%', left: '70%' },
        },
      },
    },
  },
  plugins: [],
}
