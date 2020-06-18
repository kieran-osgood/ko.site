import React from 'react'
import 'twin.macro'

import Layout from 'components/layout'
import SEO from 'components/seo'
import HighlightedLine from 'components/highlightedline'

import PoopIcon from 'images/navigation/poop.svg'

const Uses = ({ path }) => (
	<Layout path={path}>
		<SEO title='Uses' />
		<div tw=''>
			<div tw='pb-4'>
				<HighlightedLine highlightText={`/Uses`} secondary />

				<div tw='grid md:grid-cols-2 row-gap-8 col-gap-8 pt-4'>
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
			<h2 tw='text-3xl lg:text-4xl pb-4'>{title}</h2>
			{title !== 'Reading' &&
				items.map(text => (
					<p key={text} tw='text-base lg:text-lg xl:text-xl'>
						{text}
					</p>
				))}
			{title === 'Reading' &&
				items.map(item => (
					<React.Fragment key={item.title + item.author}>
						<p tw='text-base lg:text-lg xl:text-xl'>
							{item.title} - {item.author}
						</p>
						<a
							tw='text-base lg:text-lg xl:text-xl underline'
							href={`https://${item.url}`}
							target='_blank'
							rel='noreferrer'
						>
							{item.url}
						</a>
					</React.Fragment>
				))}
		</div>
	)
}
const WesBosCallout = () => (
	<div tw='pt-16'>
		<div tw='flex flex-col justify-center text-center text-lg lg:text-2xl'>
			<img src={PoopIcon} alt='poop icon' />
			<h4>Inspired by Wes Bos</h4>
			<h4>
				<a href='uses.tech/' tw='underline'>
					uses.tech/
				</a>
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
		title: `Hardware`,
		items: [
			`15” 2018 MacBook Pro - 6 Core i7 - 16GB RAM 2.6GHz`,
			`31.5” BenQ 4k monitor`,
			`Flexispot 3 motor standing desk`,
			`Herman Miller Aeron Chair`,
		],
	},
	{
		title: `Editor`,
		items: [
			`VSCode 99% of the time. Visual Studio 2019 for .Net C# development.`,
			`Vim Keybindings`,
			`Fira code - Font Ligatures`,
			`Dracula`,
			`iTerm 2 with zsh`,
			`Link my extensions?`,
		],
	},
	{
		title: `Software`,
		items: [
			`GitHub for repositories.`,
			`SourceTree for working with Git.`,
			`Postman / Postwoman (websockets!)`,
			`iTerm`,
			`Slack`,
			`Figma`,
			`Notion`,
			`Transmit`,
			`TablePlus`,
		],
	},
	{
		title: 'Reading',
		items: [
			{
				author: `Dan Abramov`,
				title: `JustJavascript`,
				url: `justjavascript.com`,
			},
			{
				author: `Kyle Simpson`,
				title: `You don't know JS`,
				url: `github.com/getify/You-Dont-Know-JS`,
			},
			{
				author: `2ality`,
				title: `JavaScript and more`,
				url: `2ality.com`,
			},
			{
				author: `Kent C. Dodds`,
				title: `Blog`,
				url: `kentcdodds.com/blog`,
			},
		],
	},
]
