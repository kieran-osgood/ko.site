import React from 'react'

import Layout from 'components/layout'
import SEO from 'components/seo'

import PoopIcon from 'images/navigation/poop.svg'

const Uses = ({ path }) => (
	<Layout path={path}>
		<SEO title='Uses' />
		<h1>/Uses</h1>
		<div className='flex flex-col flex-wrap md:flex-row'>
			{usesData.map(block => (
				<UsesBlock key={block.title} data={block} />
			))}
		</div>
		<div className='flex flex-col justify-center text-center'>
			<img src={PoopIcon} alt='poop icon' />
			<h4>Inspired by Wes Bos</h4>
			<h4>
				<a href='uses.tech/'>uses.tech/</a>
			</h4>
			<h4>
				<a href='github.com/wesbos/awesome-uses/'>
					github.com/wesbos/awesome-uses/
				</a>
			</h4>
		</div>
	</Layout>
)

export default Uses

const UsesBlock = ({ data: { title, items } }) => {
	return (
		<div className='flex flex-col mb-4 md:flex-col md:w-1/2 md:px-4'>
			<h2>{title}</h2>
			{items.map(text => (
				<p key={text}>{text}</p>
			))}
		</div>
	)
}

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
			'Vim Keybindings',
			'Fira code - Font Ligatures',
			'Custom Material Palenight theme with borders added',
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
	{
		title: 'Reading',
		items: [
			'JustJavascript - Dan Abramov',
			'You don\'t know JS - Kyle Simpson https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/get-started/foreword.md',
			'2ality JavaScript and more - https://2ality.com/index.html',
			'Kent C. Dodds Blog - https://kentcdodds.com/blog',
		],
	},
]
