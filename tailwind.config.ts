import type { Config } from 'tailwindcss';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        foreground: '#ffffff',
        muted: '#1c1c1e',
        'muted-foreground': '#9ca3af',
        accent: '#ff3d00',
        'accent-glow': '#d4ff00',
        black: '#000000',
        'black-surface': '#080809',
      },
      fontFamily: {
        sans: ['"SF Pro Text"', 'Inter', 'sans-serif'],
        display: ['"SF Pro Display"', 'sans-serif'],
      },
      animation: {
        'scroll': 'scroll-left 30s linear infinite',
        'flow': 'flow 4s infinite linear',
        'sound-wave': 'soundWave 1.2s ease-in-out infinite',
      },
      keyframes: {
        'scroll-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        flow: {
          '0%': { left: '-150%' },
          '30%': { left: '150%' },
          '100%': { left: '150%' },
        },
        soundWave: {
          '0%, 100%': { height: '4px' },
          '50%': { height: '16px' },
        }
      }
    },
  },
  plugins: [],
} satisfies Config;
