import React from 'react'
import Image from './image'
import { css } from 'twin.macro'
import { Socials } from 'components/footer'

// Pulls * required SVGs + maps to array of objects: {path: ..., file: ...}
const reqSvgs = require.context('../images/languages', true, /\.svg$/)
const svgs = reqSvgs.keys().map(path => ({ path, file: reqSvgs(path) })).reverse()

export const ProfileCard = () => {
	return (
		<div
			css={[
				css`
					${'' /* max-width: 429px;
					max-height: 525px; */}
					position: relative;
				`,
			]}
		>
			<div tw='w-32 h-32 absolute overflow-visible' css={css`left: 40%;`}>
				<Image />
			</div>
			<div tw='pt-16'>
				<div
					tw='rounded-tl-md rounded-tr-md overflow-hidden shadow-lg bg-secondary-background'
					style={{ height: '230px' }}
				>
					<div tw='w-4/5 mx-auto text-center text-black relative pt-16 text-primary-text'>
						<h3 tw='text-2xl'>Kieran Osgood</h3>
						<p tw='pt-2'>Web Developer</p>
						<p tw='pt-2'>London</p>
						<LanguagesList />
					</div>
				</div>

				<div
					tw='rounded-bl-lg rounded-br-lg flex justify-around items-center shadow-lg bg-tertiary-background'
					style={{ height: '115px' }}
				>
					<Socials />
				</div>
			</div>
		</div>
	)
}

const LanguagesList = () => {
	const stripPathing = string => string.match(/(?:.\/)+(\w*)+(?:\.svg)/)[1]
	return (
		<div tw='flex flex-row justify-around pt-6 h-20 justify-around flex-wrap'>
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
