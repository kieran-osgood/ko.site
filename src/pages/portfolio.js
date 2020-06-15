import React, { Fragment } from 'react'
import {
	CarouselProvider,
	Slider,
	Slide,
	// ButtonBack,
	// ButtonNext,
} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import 'twin.macro'

import config from '../../tailwind.config'
import useWindowSize from 'hooks/useWindowSize'
import Layout from 'components/Layout'
import SEO from 'components/SEO'

const Portfolio = ({ path }) => {
	const { width } = useWindowSize()
	const isUnder768 = () => width < Number(config.theme.screens.md.replace('px', '')) 
	return (
		<Layout path={path}>
			<SEO title='Page two' />
			<div tw='h-64 max-w-full px-2 pt-2 pb-2 md:flex md:flex-row md:flex-wrap '>
				{isUnder768() ? (
					<CarouselProvider
						naturalSlideWidth={100}
						naturalSlideHeight={125}
						totalSlides={3}
						infinite
					>
						<Slider>
							{portfolioData.map((project, idx) => (
								<Slide key={idx} index={idx}>
									<ProjectCard project={project} />
								</Slide>
							))}
						</Slider>
						{/* <ButtonBack> &lt; </ButtonBack>
						<ButtonNext> &gt; </ButtonNext> */}
					</CarouselProvider>
				) : (
					portfolioData.map((project, idx) => (
						<Fragment key={idx}>
							<ProjectCard project={project} />
						</Fragment>
					))
				)}
			</div>
		</Layout>
	)
}

export default Portfolio

const ProjectCard = ({ project: { title, url, image } }) => {
	return (
		<div tw='md:w-1/2 py-4 px-4 mx-auto bg-white w-full rounded-md md:m-1 md:w-5/12 '>
			<h2 tw='mx-auto md:leading-10' style={{ color: 'black' }}>
				{title}
			</h2>
			<div tw='bg-gray-200' style={{ height: '12rem', padding: '1rem' }}>
				<div>
					<img
						tw='p-4 w-full h-full'
						src={image}
						alt={`${title} icon`}
					/>
				</div>
			</div>
			<a href={url}>
				<p tw='p-4 truncate'>{url}</p>
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
