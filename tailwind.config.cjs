
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./public/**/*.astro",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#71C9BD",
        // bg
        // secondary: "#71C9BD",
        // accent
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};
