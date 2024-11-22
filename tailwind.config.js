/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-section1': "url('./assets/bg-1.jpg')",
        'bg-section2': "url('./assets/bg-2.jpg')",
        'bg-section3': "url('./assets/bg-3.jpg')",
      }
    },
  },
  plugins: [],
}