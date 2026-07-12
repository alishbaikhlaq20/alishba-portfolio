/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#C0F5D8',
          light: '#DFFBEA',
          dark: '#9FE8C3',
        },
        secondary: {
          DEFAULT: '#94E3B1',
          dark: '#6FCB92',
        },
        surface: {
          DEFAULT: '#F7FFF9',
          dark: '#0C1712',
        },
        card: {
          DEFAULT: '#FFFFFF',
          dark: '#132119',
        },
        ink: {
          DEFAULT: '#244234',
          light: '#4A6558',
          dark: '#E5F7EC',
        },
        accent: {
          DEFAULT: '#4F46E5',
          light: '#6D64EC',
          dark: '#8B84F0',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(to right, rgba(36,66,52,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(36,66,52,0.06) 1px, transparent 1px)',
      },
      animation: {
        blob: 'blob 18s infinite ease-in-out',
        'blob-slow': 'blob 26s infinite ease-in-out',
        float: 'float 6s ease-in-out infinite',
        blink: 'blink 1s step-end infinite',
        marquee: 'marquee 28s linear infinite',
        'fade-up': 'fadeUp 0.7s ease forwards',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -40px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 25px) scale(0.95)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        soft: '0 8px 30px rgba(36, 66, 52, 0.08)',
        'soft-lg': '0 20px 60px rgba(36, 66, 52, 0.12)',
        glow: '0 0 0 1px rgba(79,70,229,0.15), 0 8px 30px rgba(79,70,229,0.15)',
      },
    },
  },
  plugins: [],
}
