/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Magenta-led SlimDose Brand Theme
        'theme-bg': '#FFFFFF',        // Pure white background
        'theme-text': '#111111',      // Charcoal black (headings)
        'theme-accent': '#E91E63',    // Primary Magenta (hero color)
        'theme-accent-hover': '#FF4F9A', // Neon pink for hover
        'theme-secondary': '#F4F4F6', // Soft gray (UI backgrounds)
        'text-secondary': '#4A4A4A',  // Cool dark gray (body text)

        // Magenta scale (primary brand color)
        magenta: {
          50: '#FCE4EC',
          100: '#F8BBD9',
          200: '#F48FB1',
          300: '#F06292',
          400: '#EC407A',
          500: '#E91E63', // Primary magenta
          600: '#D81B60',
          700: '#C2185B',
          800: '#AD1457',
          900: '#880E4F',
        },
        // Primary scale mapped to magenta for compatibility
        primary: {
          50: '#FCE4EC',
          100: '#F8BBD9',
          200: '#F48FB1',
          300: '#F06292',
          400: '#EC407A',
          500: '#E91E63',
          600: '#D81B60',
          700: '#C2185B',
          800: '#AD1457',
          900: '#880E4F',
        },
        // Accent colors
        accent: {
          light: '#FF4F9A',   // Neon pink
          DEFAULT: '#E91E63', // Magenta
          dark: '#C2185B',
          white: '#FFFFFF',
          black: '#111111',
        },
        // Teal for biotech credibility (optional contrast)
        teal: {
          50: '#E0F7F5',
          100: '#B2EBE5',
          200: '#80DED3',
          300: '#4DD0C1',
          400: '#26C6B3',
          500: '#00B3A4', // Main teal
          600: '#00A396',
          700: '#009085',
          800: '#007D73',
          900: '#005C55',
        },
        // Navy kept for backward compatibility, mapped to magenta tones
        navy: {
          50: '#FCE4EC',
          100: '#F8BBD9',
          200: '#F48FB1',
          300: '#F06292',
          400: '#EC407A',
          500: '#E91E63',
          600: '#D81B60',
          700: '#C2185B',
          800: '#AD1457',
          900: '#880E4F',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 10px rgba(0, 0, 0, 0.03)',
        'medium': '0 4px 15px rgba(0, 0, 0, 0.05)',
        'hover': '0 8px 25px rgba(0, 0, 0, 0.08)',
      },
      animation: {
        'fadeIn': 'fadeIn 0.5s ease-out',
        'slideIn': 'slideIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(5px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-10px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
