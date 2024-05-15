/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#f0fff1",
        "gray-50": "#EFE6E6",
        "gray-100": "#DFCCCC",
        "gray-500": "#08240f",
        "primary-100": "#b7efc5",
        "primary-300": "#4ad66d",
        "primary-500": "#10451d",
        "secondary-400": "#a0cc00",
        "secondary-500": "#2dc653",
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred":
          "linear-gradient(90deg, #f0fff1 0%, #b7efc5 100%)"
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        evolvetext: "url('./assets/HomePageText.svg')",
        abstractWaves: "url('./assets/waves.svg')",
        sparkles: "url('./assets/stars.svg')",
        circles: "url('./assets/circles.png')",
      },
    },
    screens: {
      xxs: '280px',
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
