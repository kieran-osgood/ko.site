import React from 'react'
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import 'twin.macro'

import config from '../../tailwind.config'
import useWindowSize from 'hooks/useWindowSize'
import HighlightedLine from 'components/highlightedline'
import Layout from 'components/layout'
import SEO from 'components/seo'

export const query = graphql`
	query GithubQuery {
		github {
			user(login: "kierano547") {
				repositories(last: 4, orderBy: { field: PUSHED_AT, direction: ASC }) {
					edges {
						node {
							id
							name
							url
							description
							primaryLanguage {
								name
							}
						}
					}
				}
			}
		}
	}
`
const Portfolio = ({ path, data }) => {
	const { width } = useWindowSize()
	const isMobile = () =>
		width < Number(config.theme.screens.sm.replace('px', ''))

	return (
		<Layout path={path}>
			<SEO title='Page two' />
			<HighlightedLine highlightText={`Portfolio`} secondary />
			<div tw=' max-w-full px-2 pt-2 pb-2 md:flex md:flex-row md:flex-wrap relative'>
				{isMobile() ? (
					<CarouselProvider
						naturalSlideWidth={362}
						naturalSlideHeight={205}
						totalSlides={3}
						infinite
					>
						<Slider>
							{data.github.user.repositories.edges.map((repository, idx) => (
								<Slide key={idx + repository.node.id} index={idx}>
									<ProjectCard repository={repository} />
								</Slide>
							))}
						</Slider>

						<div tw='w-full'>
							<DotGroup dotNumbers={false} />
						</div>
					</CarouselProvider>
				) : (
					<div tw='w-full grid grid-cols-2 gap-4'>
						{data.github.user.repositories.edges.map((repository, idx) => (
							<ProjectCard
								key={repository.node.id + idx}
								repository={repository}
							/>
						))}
					</div>
				)}
			</div>
		</Layout>
	)
}

export default Portfolio

const ProjectCard = ({
	repository: {
		node: { name, url, primaryLanguage, description },
	},
}) => {
	return (
		<div tw='flex flex-col items-center py-8 px-8 bg-secondary-background w-full rounded-md shadow-lg text-primary-text'>
			<h2 tw='md:leading-10 uppercase'>{name}</h2>
			<h3>{primaryLanguage.name}</h3>
			<div tw='bg-tertiary-background h-full h-48 w-11/12 rounded-lg'>
				{/* <img tw='p-4 w-full h-full' src={image} alt={`${title} icon`} /> */}
				<p>{description}</p>
			</div>
			<a href={url} tw='truncate w-64 pt-6 underline'>
				{url}
			</a>
		</div>
	)
}
