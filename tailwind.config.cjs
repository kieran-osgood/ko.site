import preline from "preline/plugin.js";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./public/**/*.astro",
    "node_modules/preline/dist/*.js",
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
  plugins: [preline, require("@tailwindcss/typography")],
  darkMode: "class",
};
