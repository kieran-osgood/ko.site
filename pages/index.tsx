import React from 'react'
import { css } from 'twin.macro'

import Layout from 'src/components/layout'
import ImageSlider from 'src/components/imageslider'
import HighlightedLine from 'src/components/highlightedline'

const IndexPage = ({ path }) => (
	<Layout path={path}>
		{/* <SEO title='Home' /> */}

		<div tw='sm:text-sm md:text-sm'>
			{/* <div tw='flex items-center '>
				<h1 tw='relative z-30 text-2xl sm:text-3xl md:text-5xl lg:text-6xl md:whitespace-no-wrap'>
					<HighlightedLine text='Kieran' color={'var(--color-primary)'} />
					&nbsp;Osgood
				</h1>
				<ColorBlock primary />
			</div> */}
			<HighlightedLine
				primary
				highlightSuffix={`Osgood`}
				highlightText={`Kieran`}
			/>
			<HighlightedLine
				secondary
				highlightPrefix={`Software`}
				highlightText={`Developer`}
			/>
			{/* <div tw='flex items-center'>
				<ColorBlock secondary />
				<h1 tw='relative z-30 text-2xl sm:text-3xl md:text-5xl lg:text-6xl md:whitespace-no-wrap'>
					Software&nbsp;
					<HighlightedLine text='Developer' color={'var(--color-secondary)'} />
				</h1>
			</div> */}
		</div>

		<div
			tw='grid md:grid-rows-1 md:grid-cols-2 gap-8 md:gap-16 pt-16'
			css={css`
				justify-items: center;
			`}
		>
			<div tw='row-span-1'>
				<p tw='text-lg'>
					This is a little website built by myself to play around with some
					design, touch on gatsby + GraphQL, and hopefully implement some cool
					ideas.
				</p>
				<p tw='text-lg pt-4'>Enjoy!</p>
			</div>

			<div tw='w-full sm:w-4/5 md:w-1/2 lg:w-3/4 h-full flex flex-col row-start-2 md:row-start-1 md:col-start-2'>
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
