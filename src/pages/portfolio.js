import React from 'react'
import {
	CarouselProvider,
	Slider,
	Slide,
	ButtonBack,
	ButtonNext,
} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import {css} from 'twin.macro'

import config from '../../tailwind.config'
import useWindowSize from 'hooks/useWindowSize'
import HighlightedLine from 'components/highlightedline'
import Layout from 'components/layout'
import SEO from 'components/seo'

const Portfolio = ({ path }) => {
	const { width } = useWindowSize()
	const isMobile = () =>
		width < Number(config.theme.screens.sm.replace('px', ''))
	return (
		<Layout path={path}>
			<SEO title='Page two' />
			<HighlightedLine highlightText={`Portfolio`} secondary />
			<div tw='h-64 max-w-full px-2 pt-2 pb-2 md:flex md:flex-row md:flex-wrap relative'>
				{isMobile() ? (
					<CarouselProvider
						naturalSlideWidth={100}
						naturalSlideHeight={125}
						totalSlides={3}
						infinite
					>
						<ButtonBack tw='bg-secondary-background rounded-full py-3 px-6 text-lg absolute z-50 text-primary-text' css={css`top: 50%; left: -2.5%;`} > &lt; </ButtonBack>
						<Slider>
							{portfolioData.map((project, idx) => (
								<Slide key={idx} index={idx}>
									<ProjectCard project={project} />
								</Slide>
							))}
						</Slider>
						<ButtonNext tw='bg-secondary-background rounded-full py-3 px-6 text-lg absolute z-50 text-primary-text' css={css`top: 40%; right: -2.5%;`}> &gt; </ButtonNext>
					</CarouselProvider>
				) : (
					<div tw='w-full grid grid-cols-2 gap-4'>
						{portfolioData.map(project => (
							<ProjectCard project={project} />
						))}
					</div>
				)}
			</div>
		</Layout>
	)
}

export default Portfolio

const ProjectCard = ({ project: { title, url, image } }) => {
	return (
		<div tw='flex flex-col items-center py-8 px-8 bg-secondary-background w-full rounded-md shadow-lg text-primary-text'>
			<h2 tw='md:leading-10 uppercase'>
				{title}
			</h2>
			<div tw='bg-tertiary-background h-full h-48 w-11/12 rounded-lg'>
				<div>
					<img tw='p-4 w-full h-full' src={image} alt={`${title} icon`} />
				</div>
			</div>
			<a href={url} tw='truncate w-64 pt-6 underline'>
				{url}
			</a>
		</div>
	)
}

const portfolioData = [
	{
		title: 'gatsby-site',
		url: 'github.com/KieranO547/gatsby-website',
		image: '../images/profile.png',
	},
	{
		title: 'react-hooks-snippets-and-imports',
		url: 'github.com/KieranO547/gatsby-website',
		image: '',
	},
	{
		title: '',
		url: '',
		image: '',
	},
]
