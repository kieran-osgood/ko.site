// eslint-disable-next-line no-undef
module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
		colors: {
			'regal-blue':'hsl(235, 67.8, 53.7)'
		}
	},
	variants: {
		extend: {
			margin: ['last'],
		},
		
	},
	plugins: [],
};
