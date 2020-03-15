import React from 'react'
import {
	CarouselProvider,
	Slider,
	Slide,
	ButtonBack,
	ButtonNext,
} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

import config from '../../tailwind.config'
import useWindowSize from 'hooks/useWindowSize'
import Layout from 'components/layout'
import SEO from 'components/seo'

const Portfolio = ({ path }) => {
	const { width } = useWindowSize()
	return (
		<Layout path={path}>
			<SEO title='Page two' />

			{width < config.theme.screens.md && (
				<CarouselProvider
					naturalSlideWidth={100}
					naturalSlideHeight={125}
					totalSlides={3}
				>
					<Slider>
						<Slide index={0}>I am the first Slide.</Slide>
						<Slide index={1}>I am the second Slide.</Slide>
						<Slide index={2}>I am the third Slide.</Slide>
					</Slider>
				</CarouselProvider>
			)}
		</Layout>
	)
}

export default Portfolio
