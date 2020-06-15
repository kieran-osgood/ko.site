import React from 'react'
import 'twin.macro'

import Layout from 'components/layout'
import SEO from 'components/seo'
import HighlightedLine from 'components/HighlightedLine'

import PoopIcon from 'images/navigation/poop.svg'

const Uses = ({ path }) => (
	<Layout path={path}>
		<SEO title='Uses' />
		<div tw=''>
			<div tw=''>
				<HighlightedLine highlightText={`/Uses`} />

				<div tw='grid md:grid-cols-2 row-gap-8 col-gap-8'>
					{usesData.map(block => (
						<UsesBlock key={block.title} data={block} />
					))}
				</div>
			</div>

			<WesBosCallout />
		</div>
	</Layout>
)

export default Uses

const UsesBlock = ({ data: { title, items } }) => {
	return (
		<div>
			<h2 tw='text-3xl'>{title}</h2>
			{items.map(text => (
				<p key={text}>{text}</p>
			))}
		</div>
	)
}
const WesBosCallout = () => (
	<div tw='pt-16'>
		<div tw='flex flex-col justify-center text-center text-2xl'>
			<img src={PoopIcon} alt='poop icon' />
			<h4>Inspired by Wes Bos</h4>
			<h4>
				<a href='uses.tech/' tw='underline'>uses.tech/</a>
			</h4>
			<h4>
				<a href='github.com/wesbos/awesome-uses/' tw='underline'>
					github.com/wesbos/awesome-uses/
				</a>
			</h4>
		</div>
	</div>
)

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
			"You don't know JS - Kyle Simpson https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/get-started/foreword.md",
			'2ality JavaScript and more - https://2ality.com/index.html',
			'Kent C. Dodds Blog - https://kentcdodds.com/blog',
		],
	},
]
