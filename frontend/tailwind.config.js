/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#252525',
        black2: '#424242',
        white: '#f5f5f5',
      },
      boxShadow: {
        'glow': '0 0 2px #424242', 
      },
    },
  },
  plugins: [],
}