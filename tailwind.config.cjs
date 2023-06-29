/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {},
    },
    plugins: [],
    corePlugins:{
        preflight: false, // disabling preflight styles
    },
    darkMode: ['class', '[data-theme="dark"]'], // support dark mode 🌑
}
