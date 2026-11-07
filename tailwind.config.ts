import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#05060b',
          900: '#080a12',
          850: '#0b0e18',
          800: '#10131f',
          700: '#161a29',
        },
        brand: {
          violet: '#8b5cf6',
          indigo: '#6366f1',
          cyan: '#22d3ee',
        },
        gold: '#f7b32b',
        win: '#34d399',
      },
      fontFamily: {
        sans: [
          'Manrope',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI Variable Display',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(139,92,246,0.35), 0 22px 60px -20px rgba(99,102,241,0.55)',
        card: '0 24px 70px -30px rgba(0,0,0,0.9)',
        cta: '0 14px 34px -12px rgba(139,92,246,0.75)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(120deg, #8b5cf6 0%, #6366f1 45%, #22d3ee 100%)',
        'gold-gradient': 'linear-gradient(120deg, #fde68a 0%, #f7b32b 50%, #f59e0b 100%)',
      },
      keyframes: {
        shine: {
          '0%': { transform: 'translateX(-130%) skewX(-18deg)' },
          '60%,100%': { transform: 'translateX(230%) skewX(-18deg)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%,100%': { opacity: '0.55' },
          '50%': { opacity: '0.95' },
        },
        rise: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        shine: 'shine 3.4s ease-in-out infinite',
        float: 'float 7s ease-in-out infinite',
        pulseGlow: 'pulseGlow 5s ease-in-out infinite',
        rise: 'rise 0.7s cubic-bezier(0.22,1,0.36,1) both',
      },
    },
  },
  plugins: [],
};

export default config;
