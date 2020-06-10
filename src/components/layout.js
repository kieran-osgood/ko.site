/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { createContext, useState, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import tw, { css, styled } from 'twin.macro'
import Toggle from 'react-toggle'
import 'react-toggle/style.css' // for ES6 modules

import '../styles/css/tailwind.css'
import { DEFAULT_THEME } from 'themes'
import { applyTheme } from 'themes/utils'

import Footer from './Footer'
import Navigation from './Navigation'

import Sun from 'assets/sun.svg'
import Moon from 'assets/moon.svg'

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
	const [theme, setTheme] = useState(DEFAULT_THEME) // refactor into uselocalstorage

	useEffect(() => {
		applyTheme(theme)
	}, [theme])

	return (
		<Context.Provider value={path}>
			<Page>
				<main tw='w-full relative block mx-auto max-w-5xl py-4 px-6'>
					{/* <div tw='w-32 mx-auto'>
							<Sun />
							rotate this upwards for a toggle?
						</div> */}
					<div tw='w-full flex justify-end'>
						<Toggle
							defaultChecked={!theme}
							onClick={() => setTheme(theme === 'base' ? 'dark' : 'base')}
							icons={{ unchecked: <Moon />, checked: <Sun /> }}
							aria-label='Theme switcher'
							className='dark-mode-toggle'
						/>
					</div>
					<div tw='mx-auto md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl break-words pb-6 pt-16'>
						{children}
					</div>
				</main>
				<Navigation path={path} siteTitle={data.site.siteMetadata.title} />
				<Footer />
			</Page>
		</Context.Provider>
	)
}

export default Layout

const Page = styled.div(() => [
	tw`bg-primary-background min-h-screen text-primary-text`,
	css`
		display: grid;
		grid-template-rows: 13fr 1fr;
		${'' /* Setting some base styled for the general page layout */}
		h1 {
			font-size: 6.4rem;
		}
		p {
			font-size: 1.6rem;
		}
		a {
			${tw`hover:opacity-75`}
		}
	`,
])
