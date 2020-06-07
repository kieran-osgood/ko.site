/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { createContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import tw, { styled, css } from 'twin.macro'
import '../styles/css/tailwind.css'

import { DEFAULT_THEME } from 'themes'
import { applyTheme } from 'themes/utils'

import Footer from './Footer'
import Navigation from './Navigation'
import Theme from './Theme'

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
	const [theme] = useState(DEFAULT_THEME)

	useEffect(() => {
		applyTheme(theme)
	}, [theme])

	return (
		<Context.Provider value={path}>
			<Theme>
				<Page themeMode={'light'}>
					<main tw='w-full relative block min-h-screen mx-auto max-w-5xl py-0 px-6'>
						<div tw='mx-auto md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl break-words pb-6'>
							{children}
						</div>
					</main>
					<Navigation path={path} siteTitle={data.site.siteMetadata.title} />
					<Footer />
				</Page>
			</Theme>
		</Context.Provider>
	)
}

export default Layout

const Page = styled.div(() => [tw`bg-primary-background`])
