import React from 'react'
import Image from './Image'
import {css} from 'twin.macro'

import Github from 'assets/socials/Github.svg'
import LinkedIn from 'assets/socials/LinkedIn.svg'
import Twitter from 'assets/socials/Twitter.svg'

// Pulls * required SVGs + maps to array of objects: {path: ..., file: ...}
const reqSvgs = require.context('../images/languages', true, /\.svg$/)
const svgs = reqSvgs.keys().map(path => ({ path, file: reqSvgs(path) }))

export const ProfileCard = () => {
	return (
		<div
			css={[
				css`
					max-width: 429px;
					max-height: 525px;
				`,
			]}
		>
			<div tw='w-32 h-32 pt-16 mx-auto relative overflow-visible'>
				<Image />
			</div>
			<div
				tw='rounded-tl-md rounded-tr-md overflow-hidden shadow-lg bg-gray-100'
				style={{ backgroundColor: '#EDEDED', height: '280px' }}
			>
				<div tw='w-4/5 mx-auto text-center text-black relative pt-16'>
					<h3 tw='text-black text-2xl'>
						Kieran Osgood
					</h3>
					<p tw='text-black pt-2'>
						Web Developer
					</p>
					<p tw='text-black pt-2'>
						London
					</p>

					<LanguagesList />
				</div>
			</div>

			<div
				tw='rounded-bl-lg rounded-br-lg flex justify-center items-center shadow-lg text-red-400'
				style={{ backgroundColor: '#C4C4C4', height: '155px' }}
			>
				<SocialsList />
			</div>
		</div>
	)
}

const LanguagesList = () => {
	const stripPathing = string => string.match(/(?:.\/)+(\w*)+(?:\.svg)/)[1]
	return (
		<div tw='flex flex-row justify-around pt-6 h-16 justify-around flex-wrap'>
			{/* // ! TODO re-order so that preferred languages are first */}
			{svgs.map((svg, idx) => (
				<img
					key={idx}
					src={svg.file}
					tw='h-full px-1'
					alt={`${stripPathing(svg.path)} logo`}
				/>
			))}
		</div>
	)
}

const SocialsList = () => {
	return (
		<div tw='flex flex-row justify-around pt-6 h-32 justify-around w-4/5'>
			{socials.map((social, idx) => (
				<a
					key={idx}
					href={social.url}
					target='_blank'
					rel='noopener noreferrer'
				>
					<img
						src={social.icon}
						tw='h-16 w-16 px-1'
						alt={`${social.platform} logo`}
					/>
				</a>
			))}
		</div>
	)
}

const socials = [
	{
		platform: 'twitter',
		url: 'https://github.com/kierano547',
		icon: Github,
	},
	{
		platform: 'linkedin',
		url: 'https://linkedin.com/kieranosgood',
		icon: LinkedIn,
	},
	{
		platform: 'twitter',
		url: 'https://twitter.com/kieranbosgood',
		icon: Twitter,
	},
]
