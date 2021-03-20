import React from 'react'
import tw, { css } from 'twin.macro'
import { useQuery } from 'react-query'
import GitHubCalendar from 'react-github-calendar'

import Layout from 'src/components/layout'
import { ProfileCard } from 'src/components/profilecard'
import HighlightedLine from 'src/components/highlightedline'
import LoadingIcon from 'src/components/loading'

import TwinMacro from 'images/twinmacro.png'
import SpotifyIcon from 'assets/spotify.svg'

import * as Api from 'src/api'

const AboutPage = ({ path }) => {
	const anime = useQuery('anime', Api.getMyAnimeList)

	const spotify = useQuery('spotify', Api.getSpotify)
	const stackoverflow = useQuery('items', Api.getStackoverflow)

	return (
		<Layout path={path}>
			{/* <SEO title='About' /> */}

			<HighlightedLine highlightText={`About`} primary />

			<div className='w-full text-lg grid gap-6 sm:grid-cols-2'>
				<div>
					<p className='pt-16'>
						I currently work for Analog Republic Ltd. as a Web Developer. My
						favourite language/framework at the moment is React and Node,
						specifically in Typescript.
					</p>
					<p className='pt-4'>
						Aside from coding I like reading manga, listening to a lot of music
						(my Spotify round-up averages 150,000 minutes a year!) and drinking
						good coffee!
					</p>
				</div>
				<ProfileCard />
				{/* <p>
					My current personal favourite combination of tech to use is:
					<ul>
						<li>React</li>
						<li>Typescript</li>
						<li>Styled-Components</li>
						<li>Tailwind</li>
						<li>Twin.Macro - This is a cool one, allows combining the declarative nature of tailwind with the all the flexibility of styled-components, leading to nice conditional styling where you don't have to destructure from props each line, such as: 
						<img src={TwinMacro} className='h-auto w-auto' alt="twin macro code sample"/>
						</li>
					</ul>
				</p> */}

				<Card status='success' row={true}>
					<div className='flex flex-col items-center justify-center w-full h-full text-primary-text'>
						<h3>Commit Activity</h3>
						<GitHubCalendar
							username='kierano547'
							fullYear={false}
							fontSize={16}
							blockSize={14}
							loadingIcon={<LoadingIcon />}
							onErrorChildren={<ApiErrorBlock />}
							hideText={true}
						/>
					</div>
				</Card>
				<Card status={spotify.status}>
					<Spotify spotify={spotify} />
				</Card>
				<Card status={stackoverflow.status}>
					<StackOverflow stackoverflow={stackoverflow} />
				</Card>
				<Card status={anime.status}>
					<Anime anime={anime} />
				</Card>
			</div>
		</Layout>
	)
}

export default AboutPage

const Card = ({ status, children, row = false }) => (
	<div
		className='px-8 py-4 md:px-12 md:py-8 bg-secondary-background rounded-lg shadow-lg flex flex-col justify-center w-full'
		css={[row && tw`sm:col-span-2`]}
	>
		{status === 'success' && <>{children}</>}
		{status === 'loading' && (
			<div className='h-full w-full flex items-center justify-center'>
				<LoadingIcon />
			</div>
		)}
		{status === 'error' && <ApiErrorBlock />}
	</div>
)

const Anime = ({
	anime: {
		data: { title, rating, url, image_url },
	},
}) => (
	<>
		<div className='flex justify-between relative h-64'>
			<div className='flex justify-between flex-col py-4 text-primary-text'>
				<h2 className='text-xs text-secondary-text'>Latest Anime</h2>

				<div>
					<p className='font-bold text-sm'>{title}</p>
					<p className='text-sm'>Rated&nbsp;-&nbsp;{rating}</p>
				</div>

				<a
					href={url}
					className='text-xs text-secondary-text underline relative block truncate'
					target='_blank'
					rel='noreferrer'
				>
					Here's the MAL page!
				</a>
			</div>
			<img
				src={image_url}
				className='w-auto h-full relative overflow-hidden pl-2 py-4 md:py-0'
				alt='anime cover'
			/>
		</div>
	</>
)

const Spotify = ({
	spotify: {
		data: {
			track: { name, artists, external_urls },
		},
	},
}) => (
	<>
		<div className='flex justify-between '>
			<div className='text-primary-text pt-8'>
				<h2 className='text-xs text-secondary-text'>I'm listening to...</h2>

				<p className='font-bold text-sm pt-8'>{name}</p>
				<p className='text-sm'>-&nbsp;{artists[0].name}</p>
			</div>
			<SpotifyIcon className='mt-8' />
		</div>
		<div className='max-w-xl pt-8'>
			<a
				href={external_urls.spotify}
				className='text-xs text-secondary-text underline relative block truncate'
				target='_blank'
				rel='noreferrer'
			>
				Listen with me!
			</a>
		</div>
	</>
)

const StackOverflow = ({
	stackoverflow: {
		data: {
			items: [{ reputation, badge_counts, link }],
		},
	},
}) => (
	<>
		<div className='flex justify-between pt-8'>
			<div className='text-primary-text '>
				<h2 className='text-xs text-secondary-text'>Stack Overflow</h2>

				<p className='font-bold text-sm pt-8'>
					Reputation
					<span className='text-sm font-normal'>&nbsp;-&nbsp;{reputation}</span>
				</p>
			</div>
			<Badges badgeCounts={badge_counts} />
		</div>
		<div className=' pt-8 pb-4'>
			<a
				href={link}
				className='text-xs text-secondary-text underline block truncate'
				css={css`
					max-width: 70vw;
				`}
				target='_blank'
				rel='noreferrer'
			>
				{link}
			</a>
		</div>
	</>
)

const Badges = ({ badgeCounts }) => (
	<div className='flex flex-wrap' aria-hidden='true'>
		<Badge color='#ab825f' count={badgeCounts.bronze} />
		<Badge color='#b4b8bc' count={badgeCounts.silver} />
		<Badge color='#ffcc01' count={badgeCounts.gold} />
	</div>
)

const Badge = ({ color, count }) => (
	<div className='px-1 ml-auto' style={{ color: color }}>
		<span>●</span>
		<span className='pl-1'>{count}</span>
	</div>
)

const ApiErrorBlock = () => <>Oops, we've had an error! </>
