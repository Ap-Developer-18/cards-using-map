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
          DEFAULT: "24px",
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
        // blue: "#0d6efd",
        // indigo: "#6610f2",
        // purple: "#6f42c1",
        // pink: "#d63384",
        // red: "#dc3545",
        // orange: "#fd7e14",
        // yellow: "#ffc107",
        // green: "#198754",
        // teal: "#20c997",
        // cyan: "#0dcaf0",
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
      backgroundImage: {
        main: "url(/assets/images/png/main.jpg)",
      },
      fontSize: {
        "custom-xl": "45px",
      },
    },
  },
  plugins: [],
};
