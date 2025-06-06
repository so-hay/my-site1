/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
   white: {
    300: "#F8F8F8",
    500: "#fff",
  },
  gray: {
    100: "#EEEFF2",
    400: "#AFB5C0",
    500: "#DDDDDD",
  },
    },
  },
  plugins: [],
}
