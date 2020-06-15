import React from 'react'
import 'twin.macro'
import { useQuery } from 'react-query'

import Layout from 'components/layout'
import SEO from 'components/seo'
// import { ProfileCard } from 'components/profilecard'
import HighlightedLine from 'components/highlightedline'

import Spotify from 'assets/spotify.svg'

const AboutPage = ({ path }) => {
	const anime = useQuery('todos', 'myanimelist.com')
	const spotify = useQuery('todos', 'spotify.com')
	//https://github.com/tannerlinsley/react-query#usequery
	return (
		<Layout path={path}>
			<SEO title='About' />

			<HighlightedLine highlightText={`About`} />

			<div tw='w-1/2'>
				<p>
					I currently work for Analog Republic Ltd. as a Web Developer,
					specialising in React/Node development.
				</p>
				{/* <ProfileCard /> */}
			</div>

			<div tw='flex'>
				<Card
					spotify
					sectionTitle={`Music I'm Jammin' to`}
					name={`Dance of the Clairvoyants`}
					author={`Pearl Jam`}
				/>
				<Card
					anime
					sectionTitle={`Anime I'm seshin'`}
					name={`Devilman: Crybaby`}
					author={`Science SARU`}
				/>
			</div>
		</Layout>
	)
}

export default AboutPage

const Card = ({ sectionTitle, name, author, spotify }) => (
	<div tw='p-4 w-full h-full'>
		<div tw='px-8 py-4 bg-sec-background max-w-lg flex flex-col'>
			<div tw='flex justify-between'>
				<div tw=' pt-8'>
					<h2 tw='text-xs'>{sectionTitle}</h2>

					<p tw='font-bold text-sm pt-8'>{name}</p>
					<p tw='text-sm'>-&nbsp;{author}</p>
				</div>
				<div tw='pt-8'>
					{spotify ? (
						<Spotify />
					) : (
						<img src='../images/devil.png' alt='anime cover' />
					)}
				</div>
			</div>

			<a
				href='https://open.spotify.com/track/3Y1'
				tw='text-primary-text underline pt-8'
			>
				https://open.spotify.com/track/3Y1...
			</a>
		</div>
	</div>
)
