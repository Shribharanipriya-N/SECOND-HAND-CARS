/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {  
        primary: "#FFFFFF",
        red: "#DC3545",
        tertiary: "#EEEEEE",
        blue: "#0D6EFD",
        placeholder:"#F5F5F5",
        grey:"#888888",
        grey1:"#333333"
      },
      fontFamily: {
        clash: ['Clash Display', 'sans-serif'],
      },

    },
  },
  plugins: [],
};
