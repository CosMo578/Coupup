/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'gray-text': '#92939E',
        'dark-bg': '#13141E',
      },
    },
  },
  plugins: [],
};
