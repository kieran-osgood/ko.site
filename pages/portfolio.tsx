import React from 'react'
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import { css } from 'twin.macro'

import config from '../tailwind.config'
import useWindowSize from 'hooks/useWindowSize'
import HighlightedLine from 'src/components/highlightedline'
import Layout from 'src/components/layout'
import { getNested } from 'src/utils'

const Portfolio = ({ path, data }) => {
	const { width } = useWindowSize()
	const isMobile = () =>
		width < Number(config.theme.screens.sm.replace('px', ''))
	return (
		<Layout path={path}>
			{/* <SEO title='Page two' /> */}
			<HighlightedLine highlightText={`Portfolio`} secondary />
			<div tw=' max-w-full px-2 pt-2 pb-2 md:flex md:flex-row md:flex-wrap relative'>
				{isMobile() ? (
					<div tw='h-80 sm:h-102 relative'>
						<CarouselProvider
							naturalSlideWidth={380}
							naturalSlideHeight={230}
							totalSlides={4}
							infinite
						>
							<Slider>
								{getNested(data, 'github', 'user', 'repositories', 'edges')
									? data.github.user.repositories.edges.map(
											(repository, idx) => (
												<Slide key={idx + repository.node.id} index={idx}>
													<ProjectCard
														key={repository.node.id + idx}
														name={repository.node.name}
														url={repository.node.url}
														primaryLanguageName={getNested(
															repository.node,
															'primaryLanguage',
															'name'
														)}
														description={repository.node.description}
														repositoryTopics={getNested(
															repository.node,
															'repositoryTopics'
														)}
													/>
												</Slide>
											)
									  )
									: null}
							</Slider>

							<div tw='w-full absolute bottom-0'>
								<DotGroup dotNumbers={false} />
							</div>
						</CarouselProvider>
					</div>
				) : (
					<div tw='w-full grid grid-cols-2 gap-4'>
						{getNested(data, 'github', 'user', 'repositories', 'edges')
							? data.github.user.repositories.edges.map((repository, idx) => (
									<ProjectCard
										key={repository.node.id + idx}
										name={repository.node.name}
										url={repository.node.url}
										primaryLanguageName={getNested(
											repository.node,
											'primaryLanguage',
											'name'
										)}
										description={repository.node.description}
										repositoryTopics={getNested(
											repository.node,
											'repositoryTopics'
										)}
									/>
							  ))
							: null}
					</div>
				)}
				<div tw='w-full flex justify-center pt-12 text-xl underline'>
					<a
						href={
							getNested(data, 'github', 'user', 'url')
								? data.github.user.url
								: null
						}
						target='blank'
						rel='noreferrer'
					>
						More...
					</a>
				</div>
			</div>

			{/* TODO: Add Gists here:
			 */}
		</Layout>
	)
}

export default Portfolio

const ProjectCard = ({
	name,
	url,
	primaryLanguageName,
	description,
	repositoryTopics,
}) => {
	return (
		<div tw='flex flex-col items-center justify-between py-8 px-8 bg-secondary-background w-full rounded-md shadow-lg text-primary-text h-68 sm:h-92 relative w-full'>
			<h2 tw='md:leading-10 uppercase text-lg font-bold'>
				{name}
				{primaryLanguageName !== null ? (
					<>
						- <span tw='text-sm capitalize'>{primaryLanguageName}</span>
					</>
				) : null}
			</h2>

			<div tw='bg-secondary-background sm:pt-4 w-11/12 rounded-lg flex items-center flex-col'>
				<p>{description}</p>
			</div>

			<div tw='pt-4 hidden md:block '>
				{repositoryTopics !== undefined
					? repositoryTopics.edges.map(edge => (
							<a
								key={edge.node.id}
								href={edge.node.url}
								tw='text-secondary-text inline-block text-2xs font-bold px-4 whitespace-no-wrap'
								css={css`
									border: 1px solid transparent;
									border-radius: 2em;
									color: #0366d6;
									background-color: #f1f8ff;
									margin: 0.333rem 0.125rem;
								`}
							>
								{edge.node.topic.name}
							</a>
					  ))
					: null}
			</div>
			<div tw='block w-full pt-2'>
				<a
					href={url}
					tw='block truncate underline mx-auto'
					css={css`
						max-width: fit-content;
					`}
				>
					{url}
				</a>
			</div>
		</div>
	)
}

// export const query = graphql`
// 	query GithubQuery {
// 		github {
// 			user(login: "KieranO547") {
// 				repositories(last: 4, orderBy: { field: PUSHED_AT, direction: ASC }) {
// 					edges {
// 						node {
// 							id
// 							name
// 							url
// 							description
// 							primaryLanguage {
// 								name
// 							}
// 							repositoryTopics(first: 10) {
// 								edges {
// 									node {
// 										id
// 										url
// 										topic {
// 											name
// 										}
// 									}
// 								}
// 							}
// 						}
// 					}
// 				}
// 				url
// 			}
// 		}
// 	}
// `
