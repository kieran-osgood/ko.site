import React from 'react'
import Image from './image'

import Github from '../images/socials/Github.svg'
import LinkedIn from '../images/socials/LinkedIn.svg'
import Twitter from '../images/socials/Twitter.svg'

// Pulls * required SVGs + maps to array of objects: {path: ..., file: ...}
const reqSvgs = require.context('../images/languages', true, /\.svg$/)
const svgs = reqSvgs.keys().map(path => ({ path, file: reqSvgs(path) }))

export const ProfileCard = () => {
	return (
		<div className='profile-card'>
			<div className='w-32 h-32 pt-16 mx-auto relative overflow-visible'>
				<Image />
			</div>
			<div
				className='rounded-tl-md rounded-tr-md overflow-hidden shadow-lg bg-gray-100'
				style={{ backgroundColor: '#EDEDED', height: '280px' }}
			>
				<div className='w-4/5 mx-auto text-center text-black relative pt-16'>
					<h3 style={{ color: 'black'}} className='text-2xl'>Kieran Osgood</h3>
					<p style={{ color: 'black'}} className='pt-2'>Web Developer</p>
					<p style={{ color: 'black'}} className='pt-2'>London</p>

					<LanguagesList />
				</div>
			</div>

			<div
				className='rounded-bl-lg rounded-br-lg flex justify-center items-center shadow-lg text-red-400'
				style={{ backgroundColor: '#C4C4C4', height: '155px' }}
			>
				<SocialsList />
			</div>
		</div>
	)
}
/**
 * .profile-card {
	max-width: 429px;
	max-height: 525px;
}
 */
const LanguagesList = () => {
	const stripPathing = string => string.match(/(?:.\/)+(\w*)+(?:\.svg)/)[1]
	return (
		<div className='flex flex-row justify-around pt-6 h-16 justify-around flex-wrap'>
			{/* // ! TODO re-order so that preferred languages are first */}
			{svgs.map((svg, idx) => (
				<img
					key={idx}
					src={svg.file}
					className='h-full px-1'
					alt={`${stripPathing(svg.path)} logo`}
				/>
			))}
		</div>
	)
}

const SocialsList = () => {
	return (
		<div className='flex flex-row justify-around pt-6 h-32 justify-around w-4/5'>
			{socials.map((social, idx) => (
				<a key={idx} href={social.url} target='_blank' rel="noopener noreferrer">
					<img
						src={social.icon}
						className='h-16 w-16 px-1'
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
