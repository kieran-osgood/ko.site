import * as React from 'react';
import Link from 'next/link';
import LogoSVG from 'assets/logo.svg';

const Header = () => (
	<div className="flex justify-between items-center p-8 px-14 pb-0">
		<LogoButton />
		<Navigation />
	</div>
);

export default Header;

const LogoButton = () => (
	<Link href="/">
		<a className="h-10 hover:opacity-50">
			<LogoSVG className="h-full w-auto" />
		</a>
	</Link>
);

const Navigation = () => (
	<div className="text-2xl font-semibold hidden md:block">
		{navItems.map((nav, idx) => (
			<Link key={idx} href={nav.url}>
				<a className="text-base lg:text-lg mr-8 last:mr-0 hover:opacity-50">
					{nav.name}
				</a>
			</Link>
		))}
	</div>
);

type NavItems = { name: string; url: string }[];
const navItems: NavItems = [
	{ name: 'Home', url: '/' },
	{ name: 'About', url: '/about' },
	{ name: 'Portfolio', url: '/portfolio' },
	{ name: 'Blog', url: '/blog' },
	{ name: 'Uses', url: '/uses' },
	{ name: 'Contact', url: '/contact' },
];
