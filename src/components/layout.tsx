import React, { createContext, useState, useEffect } from 'react';
import Link from 'next/link';

import Toggle from 'react-toggle';

import { DEFAULT_THEME } from '../themes';
import { applyTheme } from '../themes/utils';

import Footer from './footer';
import Navigation from './navigation';

import Sun from '../../assets/sun.svg';
import Moon from '../../assets/moon.svg';
import LogoSVG from '../../assets/logo.svg';
import useLocalStorage from '../hooks/useLocalStorage';
import config from 'src/config';

export const Context = createContext<string | null>(null);

type LayoutProps = {
	children: React.ReactNode;
	path: string;
};

const Layout = ({ children, path }: LayoutProps) => {
	const [theme, setTheme] = useLocalStorage('theme', DEFAULT_THEME); // refactor into uselocalstorage

	useEffect(() => {
		applyTheme(theme);
	}, [theme]);

	return (
		<Context.Provider value={path}>
			<div className='bg-primary-background min-h-screen text-primary-text'>
				<main className='w-full h-full relative block mx-auto'>
					<Header />
					<div className='mx-auto pb-6 pt-16 px-8 lg:max-w-screen-md xl:w-3/4 xl:max-w-screen-lg break-words'>
						{children}
					</div>
				</main>
				<Navigation path={path} siteTitle={config.title} />
				<Footer />
			</div>
		</Context.Provider>
	);
};

export default Layout;

// const Main = styled.main(() => [
// 	css`
// 		max-width: 100vw;
// 		min-height: calc(100vh - 184px);
// 		@media (min-width: 1024px) {
// 			min-height: calc(100vh - 119px);
// 		}
// 	`,
// ]);

const Header = () => {
	return (
		<>
			<div className='flex justify-between items-center mx-auto h-36 pt-8 pl-8 pr-16 lg:max-w-screen-md xl:w-3/4 xl:max-w-screen-lg break-words'>
				<Link href='/'>
					<a className='h-full hover:opacity-75'>
						<LogoSVG
							className='w-auto h-full'
							style={{
								fill: 'none',
								rect: {
									stroke: 'var(--color-text-primary)',
								},
								path: {
									fill: 'var(--color-text-primary)',
								},
							}}
						/>
					</a>
				</Link>
				{/* <Toggle
							defaultChecked={!theme}
							onClick={() => setTheme(theme === 'base' ? 'dark' : 'base')}
							icons={{ unchecked: <Moon />, checked: <Sun /> }}
							aria-label='Theme switcher'
							className='dark-mode-toggle'
						/> */}
			</div>
		</>
	);
};
