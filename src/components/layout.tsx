import * as React from 'react';
import Link from 'next/link';
import Footer from 'src/components/footer';
import LogoSVG from 'assets/logo.svg';

export const Context = React.createContext<string | null>(null);

type LayoutProps = {
	children: React.ReactNode;
	path: string;
};
const Layout = ({ children, path }: LayoutProps) => {
	return (
		<Context.Provider value={path}>
			<div className='bg-primary-background min-h-screen text-primary-text'>
				<Header />
				<main className='w-full h-full relative block mx-auto'>
					<div className='mx-auto pb-6 pt-16 px-8 lg:max-w-screen-md xl:w-3/4 xl:max-w-screen-lg break-words'>
						{children}
					</div>
				</main>
				<Footer />
			</div>
		</Context.Provider>
	);
};

export default Layout;

const Header = () => {
	return (
		<div className='flex justify-between items-center mx-auto pt-8 pl-8 pr-16 lg:max-w-screen-md xl:w-3/4 xl:max-w-screen-lg break-words'>
			<Link href='/'>
				<a className='h-10 hover:opacity-75'>
					<LogoSVG className='h-full w-auto'/>
				</a>
			</Link>
			{/* <HeaderNavigation /> */}
		</div>
	);
};

const HeaderNavigation = () => {
	return (
		<div className='text-2xl font-semibold'>
			{navigation.map((nav,idx) => (
				<Link key={idx} href={nav.url}>
					<a className='mr-12'>{nav.name}</a>
				</Link>
			))}
		</div>
	);
};

type NavItems = {
	name:string;
	url:string;
}[];
const navigation: NavItems = [
	{
		name: 'Home',
		url: '/',
	},
	{
		name: 'About',
		url: '/about',
	},
	{
		name: 'Portfolio',
		url: '/portfolio',
	},
	{
		name: 'Blog',
		url: '/blog',
	},
	{
		name: 'Uses',
		url: '/uses',
	},
	{
		name: 'Contact',
		url: '/contact',
	},
];