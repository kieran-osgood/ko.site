import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const usesData = [
	{
		title: 'Hardware',
		items: [
			'15” 2018 MacBook Pro - 6 Core i7 - 16GB RAM 2.6GHz',
			'31.5” BenQ 4k monitor',
			'Flexispot 3 motor standing desk',
			'Herman Miller Aeron Chair',
		],
	},
	{
		title: 'Editor',
		items: [
			'VSCode for Most dev. Visual Studio 2019 for my C# Windows development.',
			'Custom Material Palenight theme with borders added',
			'Fira code - Font Ligatures',
			'iTerm 2 with zsh',
			'Link my extensions?',
		],
	},
	{
		title: 'Software',
		items: [
			'GitHub for repositories.',
			'SourceTree and temrinal for working with Git.',
			'Postman / Postwoman (websockets!)',
			'Slack',
			'Figma',
			'Notion',
			'Transmit',
		],
	},
	{ title: 'Reading', items: ['JustJavascript - Dan Abramov'] },
]

const Uses = ({ path }) => (
	<Layout path={path}>
		<SEO title='Uses' />
		<h1>/Uses</h1>
		<div className='flex flex-col flex-wrap md:flex-row'>
			{usesData.map(block => (
				<UsesBlock key={block.title} data={block} />
			))}
		</div>
	</Layout>
)

export default Uses

const UsesBlock = ({ data: { title, items } }) => {
	return (
		<div className='flex flex-col md:flex-col mb-4'>
			<h2>{title}</h2>
			{items.map(text => (
				<p key={text}>{text}</p>
			))}
		</div>
	)
}
