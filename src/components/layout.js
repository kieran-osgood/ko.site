/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { createContext } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Footer from './footer'
import Navigation from './navigation'
import '../css/main.css'

export const Context = createContext(null)

const Layout = ({ children, path }) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)

	return (
		<Context.Provider value={path}>
			<div className='mx-auto max-w-5xl py-0 pl-4 pr-4'>
				<main className='w-full relative block min-h-screen'>
					<div className='mx-auto md:max-w-2xl lg:max-w-3xl xl:max-w-5xl break-words pb-4'>
						{children}
					</div>
				</main>
				<Navigation path={path} siteTitle={data.site.siteMetadata.title} />
				<Footer />
			</div>
		</Context.Provider>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
