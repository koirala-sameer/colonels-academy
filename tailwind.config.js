/* tailwind.config.js */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Oswald', 'sans-serif'],
        mono: ['Rajdhani', 'monospace'],
      },
      colors: {
        // Sophisticated, desaturated palettes
        army: {
          light: '#F4F7F5', // Very light green-grey
          main: '#4F772D', 
          dark: '#1F3325',
          accent: '#D4AF37', // Gold
        },
        police: {
          light: '#F0F4F8', // Very light blue-grey
          main: '#1E3A8A', // Deep Blue
          dark: '#0F172A',
          accent: '#38BDF8', // Sky
        },
        apf: {
          light: '#FFF5F5', // Very light warm grey
          main: '#B91C1C', // Deep Red
          dark: '#450A0A',
          accent: '#F97316', // Orange
        },
        surface: {
          glass: 'rgba(255, 255, 255, 0.7)',
          glassDark: 'rgba(15, 28, 21, 0.8)',
        }
      },
      backgroundImage: {
        'grid-pattern': "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.05' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E\")",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scale-in': 'scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: 0, transform: 'scale(0.95)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        }
      }
    },
  },
  plugins: [],
}