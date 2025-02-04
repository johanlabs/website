/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        fadeInOut: "fadeInOut 2s ease-in-out infinite",
      },
      keyframes: {
        fadeInOut: {
          "0%": { opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        transitionDuration: {
          DEFAULT: '300ms',
        },
        transitionTimingFunction: {
          DEFAULT: 'ease-in-out',
        },
      },
    },
  },
  plugins: [],
};
