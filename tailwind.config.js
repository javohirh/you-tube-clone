/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        small: "320px",
        lg: "24rem",
      },
    },
  },
  plugins: [],
};
