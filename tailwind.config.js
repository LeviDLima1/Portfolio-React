/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-section1': "url('./src/assets/bg-1.jpg')",
        'bg-section2': "url('./src/assets/bg-2.jpg')",
        'bg-section3': "url('./src/assets/bg-3.jpg')",
      }
    },
  },
  plugins: [],
}