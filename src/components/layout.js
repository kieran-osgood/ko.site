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

import Footer from './footer'
import Navigation from './navigation'

import Sun from 'assets/sun.svg'
import Moon from 'assets/moon.svg'
import LogoSVG from 'assets/logo.svg'
import useLocalStorage from '../hooks/useLocalStorage';

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
	const [theme, setTheme] = useLocalStorage('theme', DEFAULT_THEME) // refactor into uselocalstorage
	
	useEffect(() => {
		applyTheme(theme)
	}, [theme])

	return (
		<Context.Provider value={path}>
			<Page>
				<Main>
					{/* <div tw='w-32 mx-auto'>
							<Sun />
							rotate this upwards for a toggle?
						</div> */}
					<div tw='h-36 lg:w-3/4 flex justify-between items-center pl-8 pr-16 pt-8'>
						<Logo tw='w-auto h-full' />
						<Toggle
							defaultChecked={!theme}
							onClick={() => setTheme(theme === 'base' ? 'dark' : 'base')}
							icons={{ unchecked: <Moon />, checked: <Sun /> }}
							aria-label='Theme switcher'
							className='dark-mode-toggle'
						/>
					</div>
					<div tw='mx-auto pb-6 pt-16 px-8 lg:max-w-screen-md xl:w-3/4 xl:max-w-screen-xl break-words'>
						{children}
					</div>
				</Main>
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
		a {
			${tw`hover:opacity-75`}
		}
	`,
])

const Main = styled.main(() => [
	tw`w-full h-full relative block mx-auto`,
	css`
		max-width: 100vw;
		min-height: calc(100vh - 184px);
		@media (min-width: 1024px) {
			min-height: calc(100vh - 119px);
		}
	`,
])

const Logo = styled(LogoSVG)`
	fill: none;
	rect {
		stroke: var(--color-text-primary);
	}
	path {
		fill: var(--color-text-primary);
	}
`
