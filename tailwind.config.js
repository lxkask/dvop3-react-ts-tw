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
        'primary': '#7c9c8c',
        'secondary': '#aac2ca',
        'accent': '#8699b3',
       },
    },
  },
  plugins: [],
}

