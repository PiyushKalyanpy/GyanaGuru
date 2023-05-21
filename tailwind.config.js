/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        space_mono: ["Space Mono", "monospace"],
        urbanist: ["Urbanist", "sans-serif"],
        archivo: ["Archivo", "sans-serif"],
      },
      colors:{
        "seafoam" : "#C9EEBE",
        "champange" : "#F7EDE3",
        
      }
    },
    plugins: [],
  },
};
