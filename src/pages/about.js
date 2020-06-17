import React from 'react'
import { css } from 'twin.macro'
import { useQuery } from 'react-query'

import Layout from 'components/layout'
import SEO from 'components/seo'
import { ProfileCard } from 'components/profilecard'
import HighlightedLine from 'components/highlightedline'

import Spotify from 'assets/spotify.svg'
import TwinMacro from 'images/twinmacro.png'
import Anime from 'images/devil.png'

import * as Api from '../api'

const AboutPage = ({ path }) => {
	// const anime = useQuery('todos', 'myanimelist.com')
	// const spotify = useQuery('todos', 'spotify.com')
	//https://github.com/tannerlinsley/react-query#usequery

	const stackoverflow = useQuery('items', Api.getStackoverflow)
	// let stackoverflow = {
	// 	data: {
	// 		items: [
	// 			{
	// 				has_more: false,
	// 				account_id: 7095009,
	// 				badge_counts: { bronze: 8, silver: 1, gold: 1 },
	// 				creation_date: 1444416602,
	// 				display_name: 'Kieran Osgood',
	// 				is_employee: false,
	// 				last_access_date: 1592403948,
	// 				last_modified_date: 1567374600,
	// 				link: 'https://stackoverflow.com/users/5428936/kieran-osgood',
	// 				location: 'Littlehampton, UK',
	// 				profile_image: 'https://i.stack.imgur.com/FjChe.png?s=128&g=1',
	// 				reputation: 73,
	// 				reputation_change_day: 0,
	// 				reputation_change_month: 2,
	// 				reputation_change_quarter: 2,
	// 				reputation_change_week: 0,
	// 				reputation_change_year: 62,
	// 				user_id: 5428936,
	// 				user_type: 'registered',
	// 				website_url: '',
	// 				length: 1,
	// 				quota_max: 300,
	// 				quota_remaining: 298,
	// 				error: null,
	// 				failureCount: 0,
	// 				isFetching: false,
	// 				isStale: true,
	// 				markedForGarbageCollection: false,
	// 				status: 'success',
	// 				updatedAt: 1592407772227,
	// 			},
	// 		],
	// 	},
	// }
	console.log('stackoverflow: ', stackoverflow)
	return (
		<Layout path={path}>
			<SEO title='About' />

			<HighlightedLine highlightText={`About`} />

			<div tw='w-full text-lg grid gap-6 sm:grid-cols-2'>
				<p tw='pt-16'>
					I currently work for Analog Republic Ltd. as a Web Developer,
					preferring any kind of React/Node in Typescript development.
				</p>
				{/* <p>
					My current personal favourite combination of tech to use is:
					<ul>
						<li>React</li>
						<li>Typescript</li>
						<li>Styled-Components</li>
						<li>Tailwind</li>
						<li>Twin.Macro - This is a cool one, allows combining the declarative nature of tailwind with the all the flexibility of styled-components, leading to nice conditional styling where you don't have to destructure from props each line, such as: 
						<img src={TwinMacro} tw='h-auto w-auto' alt="twin macro code sample"/>
						</li>
					</ul>
				</p> */}
				<ProfileCard />
				<Card
					spotify
					sectionTitle={`I'm listening to...`}
					name={`Dance of the Clairvoyants`}
					author={`Pearl Jam`}
					url={'123'}
				/>
				<Card anime sectionTitle={``} name={``} author={``} url={'123'} />
				{stackoverflow.status === 'success' && <Card
					stackoverflow={stackoverflow.data.items[0]}
					sectionTitle={`Stack Overflow`}
					name={`Reputation`}
					author={stackoverflow.data.items[0].reputation}
					url={stackoverflow.data.items[0].link}
				/>}
				{/* <Card sectionTitle={`Github`} url={stackoverflow.data.items[0].link} /> */}
			</div>
		</Layout>
	)
}

export default AboutPage

const Card = ({
	sectionTitle,
	name,
	author,
	spotify,
	anime,
	stackoverflow,
	url,
}) => (
	<div tw='px-8 py-4 md:px-12 md:py-8 bg-secondary-background rounded-lg shadow-lg '>
		<div tw='flex justify-between '>
			<div tw='text-primary-text pt-8'>
				<h2 tw='text-xs text-secondary-text'>{sectionTitle}</h2>

				<p tw='font-bold text-sm pt-8'>{name}</p>
				<p tw='text-sm'>-&nbsp;{author}</p>
			</div>
			{spotify && <Spotify tw='mt-8' />}
			{anime && <img src={Anime} tw='mt-8' alt='anime cover' />}
			{stackoverflow && <Badges badgeCounts={stackoverflow.badge_counts} />}
		</div>
		<div tw='max-w-xl pt-8'>
			<a
				href={url}
				tw='text-xs text-secondary-text underline relative block truncate'
				target='_blank'
				rel='noreferrer'
			>
				{url}
			</a>
		</div>
	</div>
)

const Badges = ({ badgeCounts }) => (
	<div>
		<span aria-hidden='true'>
			<Badge color='#ab825f' count={badgeCounts.bronze} />
			<Badge color='#b4b8bc' count={badgeCounts.silver} />
			<Badge color='#ffcc01' count={badgeCounts.gold} />
		</span>
	</div>
)

const Badge = ({ color, count }) => (
	<span tw='px-1' style={{ color: color }}>
		<span>●</span>
		<span tw='pl-1'>{count}</span>
	</span>
)
