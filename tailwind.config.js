/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      colors: {
      black: "#000000",
      white: "#FFFFFF",
      secondary_color: "#804D80",
      indigo: "#352E5B",      
      red: "#FF0000",
      blue: "#F7F5FA",
      assetsgraident: '#E74C3C',
      assetsgraident2: '#333333',
      grey: "#A5A2B8",
    },
    extend: {},
  },
  plugins: [],
}