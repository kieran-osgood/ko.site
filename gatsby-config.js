const path = require('path')
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = {
	developMiddleware: app => {
		app.use(
			'/.netlify/functions/',
			createProxyMiddleware({
				target: 'http://localhost:8888',
				pathRewrite: {
					// Look into why this doesnt work
					'^/api/': '^/.netlify/functions/',
					'/api/': '/.netlify/functions/',
					'^/.netlify/functions/': '^/api/',
					'/.netlify/functions/': '/api/',
					'/.netlify/functions/': '/',
				},
			})
		)
	},
	siteMetadata: {
		title: `Kieran Osgood Personal Site`,
		description: `This is a personal website for Kieran Osgood, built by Kieran Osgood, utilising Gatsby.js, GraphQL and TailwindCSS and PurgeCSS to maximise performance and SEO.`,
		author: `Kieran Osgood`,
	},
	plugins: [
		{
			resolve: 'gatsby-plugin-web-font-loader',
			options: {
				custom: {
					families: ['CPMono_v07'],
					urls: ['fonts.css'],
				},
			},
		},
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: /assets/,
				},
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/favicon.png`, // This path is relative to the root of the site.
			},
		},
		{
			resolve: 'gatsby-plugin-root-import',
			options: {
				src: path.join(__dirname, 'src'),
				components: path.join(__dirname, 'src/components'),
				hooks: path.join(__dirname, 'src/hooks'),
				pages: path.join(__dirname, 'src/pages'),
				styles: path.join(__dirname, 'src/styles'),
				images: path.join(__dirname, 'src/images'),
				data: path.join(__dirname, 'src/data'),
				themes: path.join(__dirname, 'src/themes'),
				assets: path.join(__dirname, 'assets/'),
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
}
