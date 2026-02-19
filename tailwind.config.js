/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 40s linear infinite',
        float: 'float 7s ease-in-out infinite',
        'pulse-slow': 'pulse 10s cubic-bezier(0.4, 0, 0.6, 1) infinite',

        'gradient-flow': 'gradientFlow 12s ease-in-out infinite',
        'gradient-shift': 'gradientShift 12s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradientFlow: {
          '0%, 100%': {
            backgroundPosition: '0% 50%'
          },
          '50%': {
            backgroundPosition: '100% 50%'
          },
        },
        gradientShift: {
          '0%': {
            backgroundPosition: '0% 50%'
          },
          '100%': {
            backgroundPosition: '200% 50%'
          },
        },
      },
    },
  },
  plugins: [],
}