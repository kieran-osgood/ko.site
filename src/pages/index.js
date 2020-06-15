import React from 'react'
import tw, { styled } from 'twin.macro'
import { Link } from 'gatsby'

import Layout from 'components/Layout'
import SEO from 'components/SEO'
import ImageSlider from 'components/ImageSlider'
import HighlightedLine from "components/HighlightedLine";


const IndexPage = ({ path }) => (
	<Layout path={path}>
		<SEO title='Home' />

		<div tw='sm:text-sm md:text-sm'>
			{/* <div tw='flex items-center '>
				<h1 tw='relative z-30 text-2xl sm:text-3xl md:text-5xl lg:text-6xl md:whitespace-no-wrap'>
					<HighlightedLine text='Kieran' color={'var(--color-primary)'} />
					&nbsp;Osgood
				</h1>
				<ColorBlock primary />
			</div> */}
			<HighlightedLine primary highlightSuffix={`Osgood`} highlightText={`Kieran`} />
			<HighlightedLine secondary highlightPrefix={`Software`} highlightText={`Developer`} />
			{/* <div tw='flex items-center'>
				<ColorBlock secondary />
				<h1 tw='relative z-30 text-2xl sm:text-3xl md:text-5xl lg:text-6xl md:whitespace-no-wrap'>
					Software&nbsp;
					<HighlightedLine text='Developer' color={'var(--color-secondary)'} />
				</h1>
			</div> */}
		</div>

		<div tw='grid md:grid-rows-1 md:grid-cols-2 md:gap-16 pt-16'>
			<div tw='row-span-1'>
				<p tw='text-lg sm:text-2xl'>
					This is a little website built by myself to play around with some
					design, touch on gatsby, and hopefully implement some cool ideas.
				</p>
				<p tw='text-lg sm:text-2xl pt-4'>Enjoy!</p>
			</div>
			<div tw='h-full flex flex-col justify-center row-start-2 w-4/5 sm:w-4/5 md:w-1/2 lg:w-3/4 md:row-start-1 md:col-start-2'>
				<ImageSlider />
			</div>
			{/* <div tw='md:row-start-2'>
				<Link tw='text-2xl pt-8 underline' to='/portfolio'>
					Here's about me
				</Link>
			</div> */}
		</div>
	</Layout>
)

export default IndexPage


