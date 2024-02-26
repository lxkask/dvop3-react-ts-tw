/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#050705',
        'background': '#f6faf7',
        'primary': '#ABA8BF',
        'secondary': '#F5E9F3',
        'accent': '#8699b3',
        'heading': '#7c9c8c',
       },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}

