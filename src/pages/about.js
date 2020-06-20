import React from 'react'
import { css } from 'twin.macro'
import { useQuery } from 'react-query'

import Layout from 'components/layout'
import SEO from 'components/seo'
import { ProfileCard } from 'components/profilecard'
import HighlightedLine from 'components/highlightedline'
import LoadingIcon from 'components/loading'
import { getSpotify } from 'src/api'

import TwinMacro from 'images/twinmacro.png'
import AnimeImage from 'images/devil.png'
import SpotifyIcon from 'assets/spotify.svg'

import * as Api from '../api'

const AboutPage = ({ path }) => {
	// const anime = useQuery('todos', 'myanimelist.com')
	const spotify = useQuery('spotify', getSpotify)

	//https://github.com/tannerlinsley/react-query#usequery

	// const stackoverflow = useQuery('items', Api.getStackoverflow)
	let stackoverflow = {
		data: {
			items: [
				{
					has_more: false,
					account_id: 7095009,
					badge_counts: { bronze: 8, silver: 1, gold: 1 },
					creation_date: 1444416602,
					display_name: 'Kieran Osgood',
					is_employee: false,
					last_access_date: 1592403948,
					last_modified_date: 1567374600,
					link: 'https://stackoverflow.com/users/5428936/kieran-osgood',
					location: 'Littlehampton, UK',
					profile_image: 'https://i.stack.imgur.com/FjChe.png?s=128&g=1',
					reputation: 73,
					reputation_change_day: 0,
					reputation_change_month: 2,
					reputation_change_quarter: 2,
					reputation_change_week: 0,
					reputation_change_year: 62,
					user_id: 5428936,
					user_type: 'registered',
					website_url: '',
					length: 1,
					quota_max: 300,
					quota_remaining: 298,
					error: null,
					failureCount: 0,
					isFetching: false,
					isStale: true,
					markedForGarbageCollection: false,
					status: 'success',
					updatedAt: 1592407772227,
				},
			],
		},
	}
	return (
		<Layout path={path}>
			<SEO title='About' />

			<HighlightedLine highlightText={`About`} primary />

			<div tw='w-full text-lg grid gap-6 sm:grid-cols-2'>
				<p tw='pt-16'>
					I currently work for Analog Republic Ltd. as a Web Developer,
					preferring any kind of React/Node in Typescript development.
				</p>
				<ProfileCard />
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

				<Card status={spotify.status}>
					<Spotify spotify={spotify} />
				</Card>
				<Card
					status={stackoverflow.data.items[0].status}
					// status={'loading'}
				>
					<StackOverflow
						stackoverflow={stackoverflow.data.items[0]}
						sectionTitle={`Stack Overflow`}
						name={`Reputation`}
						author={stackoverflow.data.items[0].reputation}
						url={stackoverflow.data.items[0].link}
					/>
				</Card>
				{/* <Card status='success'>
					<Github
						sectionTitle={`Github`}
						url={}
					/>
				</Card> */}
			</div>
		</Layout>
	)
}

export default AboutPage

const Card = ({ status, children }) => (
	<div tw='px-8 py-4 md:px-12 md:py-8 bg-secondary-background rounded-lg shadow-lg flex flex-col justify-center w-full h-64 '>
		{status === 'success' && <>{children}</>}
		{status === 'loading' && (
			<div tw='h-full w-full flex items-center justify-center'>
				<LoadingIcon />
			</div>
		)}
		{status === 'error' && <>Oops, we've had an error! </>}
	</div>
)

const Anime = ({ url, author, name, title }) => (
	<>
		<div tw='flex justify-between '>
			<div tw='text-primary-text pt-8'>
				<h2 tw='text-xs text-secondary-text'>{title}123</h2>

				<p tw='font-bold text-sm pt-8'>{name}</p>
				<p tw='text-sm'>-&nbsp;{author}</p>
			</div>
			<img src={AnimeImage} tw='mt-8' alt='anime cover' />
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
	</>
)

const Spotify = ({ spotify }) => (
	<>
		<div tw='flex justify-between '>
			<div tw='text-primary-text pt-8'>
				<h2 tw='text-xs text-secondary-text'>I'm listening to...</h2>

				<p tw='font-bold text-sm pt-8'>{spotify.data.track.name}</p>
				<p tw='text-sm'>-&nbsp;{spotify.data.track.artists[0].name}</p>
			</div>
			<SpotifyIcon tw='mt-8' />
		</div>
		<div tw='max-w-xl pt-8'>
			<a
				href={spotify.data.track.external_urls.spotify}
				tw='text-xs text-secondary-text underline relative block truncate'
				target='_blank'
				rel='noreferrer'
			>
				Listen with me!
			</a>
		</div>
	</>
)

const StackOverflow = ({ url, author, name, title, stackoverflow }) => (
	<>
		<div tw='flex justify-between '>
			<div tw='text-primary-text pt-8'>
				<h2 tw='text-xs text-secondary-text'>{title}</h2>

				<p tw='font-bold text-sm pt-8'>{name}</p>
				<p tw='text-sm'>-&nbsp;{author}</p>
			</div>
			<Badges badgeCounts={stackoverflow.badge_counts} />
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
	</>
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
