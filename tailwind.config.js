/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Mulish", "sans-serif"]
      },

      colors:{
        BgColor: '#121214',
        TextColor: '#E1E1E6',
        TitleColor: '#02799D',
        BgCard: '#202024'
      }
    },
  },
  plugins: [],
}

