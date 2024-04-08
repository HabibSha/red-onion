/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screen: {
      screens: {
        ss: "360px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
    extend: {
      colors: {
        active: "#f71747",
        title: "#030712",
        subtitle: "#6b7280",
        bgColor: "#be185d",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        hero: 'url("/src/assets/images/bannerbackground.png")',
      },
    },
  },
  plugins: [],
};
