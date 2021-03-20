import React, { createContext, useState, useEffect } from 'react';
import Link from 'next/link';

import tw, { css, styled } from 'twin.macro';
import Toggle from 'react-toggle';

import { DEFAULT_THEME } from '../themes';
import { applyTheme } from '../themes/utils';

import Footer from './footer';
import Navigation from './navigation';

import Sun from '../../assets/sun.svg';
import Moon from '../../assets/moon.svg';
import LogoSVG from '../../assets/logo.svg';
import useLocalStorage from '../hooks/useLocalStorage';

export const Context = createContext(null);

type LayoutProps = {
	children: React.ReactNode;
	path: string;
};

const Layout = ({ children, path }: LayoutProps) => {
	// const data = useStaticQuery(graphql`
	// 	query SiteTitleQuery {
	// 		site {
	// 			siteMetadata {
	// 				title
	// 			}
	// 		}
	// 	}
	// `)
	const [theme, setTheme] = useLocalStorage('theme', DEFAULT_THEME); // refactor into uselocalstorage

	useEffect(() => {
		applyTheme(theme);
	}, [theme]);

	return (
		<Context.Provider value={path}>
			<Page>
				<Main>
					{/* <div tw='w-32 mx-auto'>
							<Sun />
							rotate this upwards for a toggle?
						</div> */}
					<div tw='flex justify-between items-center mx-auto h-36  pt-8 pl-8 pr-16 lg:max-w-screen-md xl:w-3/4 xl:max-w-screen-lg break-words'>
						<Link href='/' tw='h-full'>
							<a>
								<Logo tw='w-auto h-full' />
							</a>
						</Link>
						<Toggle
							defaultChecked={!theme}
							onClick={() => setTheme(theme === 'base' ? 'dark' : 'base')}
							icons={{ unchecked: <Moon />, checked: <Sun /> }}
							aria-label='Theme switcher'
							className='dark-mode-toggle'
						/>
					</div>
					<div tw='mx-auto pb-6 pt-16 px-8 lg:max-w-screen-md xl:w-3/4 xl:max-w-screen-lg break-words'>
						{children}
					</div>
				</Main>
				{/* TODO */}
				<Navigation path={path} siteTitle={'TODO'} />
				<Footer />
			</Page>
		</Context.Provider>
	);
};

export default Layout;

const Page = styled.div(() => [
	tw`bg-primary-background min-h-screen text-primary-text`,
	css`
		a {
			${tw`hover:opacity-75`}
		}
	`,
]);

const Main = styled.main(() => [
	tw`w-full h-full relative block mx-auto`,
	css`
		max-width: 100vw;
		min-height: calc(100vh - 184px);
		@media (min-width: 1024px) {
			min-height: calc(100vh - 119px);
		}
	`,
]);

const Logo = styled(LogoSVG)`
	fill: none;
	rect {
		stroke: var(--color-text-primary);
	}
	path {
		fill: var(--color-text-primary);
	}
`;
