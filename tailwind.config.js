/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/hooks/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        // Light Theme Color Palette
        background: {
          DEFAULT: '#FFFFFF',
          light: '#F7FAFC',
          dark: '#EDF2F7'
        },
        text: {
          primary: '#1A202C',    // Dark Gray
          secondary: '#4A5568',  // Medium Gray
          accent: '#3182CE'      // Bright Blue
        },
        brand: {
          50:  '#E6F2FF',   
          100: '#B3DFFF',   
          200: '#80CAFF',   
          300: '#4DB3FF',   
          400: '#1A9DFF',   
          500: '#0077CC',   
          600: '#005FA3',   
          700: '#004080',   
          800: '#002B57',   
          900: '#00162E'    
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #FFFFFF 0%, #F7FAFC 100%)',
        'accent-gradient': 'linear-gradient(135deg, #3182CE 0%, #4299E1 100%)'
      },
      boxShadow: {
        'elegant-sm': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'elegant-md': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'elegant-lg': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'elegant-xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
      },
      animation: {
        // Existing animations with refined timings
        'slide-in-up': 'slideInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'hero-entrance': 'heroEntrance 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'subtle-pulse': 'subtlePulse 3s infinite',
        'gradient-shift': 'gradientShift 10s ease infinite',
        
        // New sophisticated animations
        'tech-hover': 'techHover 0.5s ease-in-out',
        'card-float': 'cardFloat 4s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards'
      },
      keyframes: {
        // Refined keyframes with more natural motion
        slideInUp: {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(30px)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0)' 
          }
        },
        heroEntrance: {
          '0%': { 
            opacity: '0', 
            transform: 'scale(0.95) translateY(20px)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'scale(1) translateY(0)' 
          }
        },
        subtlePulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' }
        },
        gradientShift: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' }
        },
        techHover: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' }
        },
        cardFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        fadeInUp: {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(20px)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0)' 
          }
        }
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      borderRadius: {
        'elegant-sm': '0.375rem',    // Small, subtle radius
        'elegant-md': '0.75rem',     // Medium radius
        'elegant-lg': '1rem',        // Large radius
        'elegant-xl': '1.5rem'       // Extra large radius
      }
    },
  },
  plugins: [],
  darkMode: 'class',
};
