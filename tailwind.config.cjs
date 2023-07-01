import preline from 'preline/plugin.js';

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
        './public/**/*.astro',
        'node_modules/preline/dist/*.js',
    ],
    theme: {
        extend: {},
    },
    plugins: [preline],
    darkMode: 'class',
};
