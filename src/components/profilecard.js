import React from 'react'
import Image from './image'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Github from '../images/socials/Github.svg'
import LinkedIn from '../images/socials/LinkedIn.svg'
import Twitter from '../images/socials/Twitter.svg'

// Pulls * required SVGs + maps to array of objects: {path: ..., file: ...}
const reqSvgs = require.context('../images/languages', true, /\.svg$/)
const svgs = reqSvgs.keys().map(path => ({ path, file: reqSvgs(path) }))

export const ProfileCard = () => {
	return (
		<div style={{ maxHeight: '525px', maxWidth: '429px' }}>
			<div
				className='w-32 h-32 mx-auto relative overflow-visible '
				style={{ top: '64px', height: '128px', width: '128px' }}
			>
				<Image filename='profile.png' />
			</div>
			<div
				className='rounded-tl-md rounded-tr-md overflow-hidden shadow-lg'
				style={{ backgroundColor: '#EDEDED', height: '280px' }}
			>
					<div className='w-4/5 mx-auto text-center text-black relative pt-16'>
						<h3 className='text-2xl text-red-700'>Kieran Osgood</h3>
						<p className='pt-2'>Web Developer</p>
						<p className='pt-2'>London</p>

						<LanguagesList />
					</div>
			</div>

			<div
				className='rounded-bl-lg rounded-br-lg flex justify-center items-center shadow-lg text-red-400'
				style={{ backgroundColor: '#C4C4C4', height: '155px' }}
			>
				<SocialsList />
				{/* <div style={{backgroundColor: '#C4C4C4'}}> */}
				{/* <ContactStrip /> */}
				{/* </div> */}
			</div>
		</div>
	)
}
const LanguagesList = () => {
	const stripPathing = string => string.match(/(?:.\/)+(\w*)+(?:\.svg)/)[1]
	return (
		<div className='flex flex-row justify-around pt-6 h-16 justify-around'>
			{svgs.map(svg => (
				<img src={svg.file} className='h-full px-1' alt={`${stripPathing(svg.path)} logo`} />
			))}
		</div>
	)
}
const SocialsList = () => {
	return (
		<div className='flex flex-row justify-around pt-6 h-32 justify-around w-4/5'>
			{socials.map(social => (
				<a href={social.url} target="_blank" >
					<img src={social.icon} className='h-16 w-16 px-1' alt={`${social.platform} logo`} />
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
