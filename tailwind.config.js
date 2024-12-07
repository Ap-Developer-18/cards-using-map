/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "10px",
          sm: "24px",
        },
        screens: {
          sm: "576px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1536px",
        },
      },
      colors: {
        body: "#1f2122",
        dark: "#27292a",
        "dark-light": "#666666",
        pink: "#ec6090",
      },
      lineHeight: {
        100: "110%",
        120: "120%",
        130: "130%",
        140: "140%",
        150: "150%",
        160: "160%",
      },
      fontSize: {
        "custom-xl": "28px",
      },
    },
  },
  plugins: [],
};
