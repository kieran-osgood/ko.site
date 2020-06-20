import React, { useContext } from 'react'
import { Link } from 'gatsby'
import tw, { css, styled } from 'twin.macro'

import HomeIcon from 'assets/navigation/home.svg'
import AboutIcon from 'assets/navigation/about.svg'
import PortfolioIcon from 'assets/navigation/portfolio.svg'
import ContactIcon from 'assets/navigation/contact.svg'
import PoopIcon from 'assets/navigation/poop.svg'

import Routes from '../data/routes'

import { Context } from './layout'

const Navigation = () => (
	<Header>
		<NavBar>
			{pages.map(({ url, Icon }) => (
				<NavLink key={url} url={url}>
					<Icon />
				</NavLink>
			))}
			<Connector />
		</NavBar>
	</Header>
)

export default Navigation

const Header = styled.header(() => [
	tw`w-full mx-auto sticky z-10`,
	css`
		bottom: 4px;
		max-width: 450px;

		@media (min-width: 1024px) {
			max-height: 450px;
			height: 50vh;
			width: 65px;
			top: 25vh;
			left: 5vw;
			position: fixed;
		}
	`,
])

const NavBar = styled.div(() => [
	tw`flex justify-between lg:flex-col md:items-center md:h-full`,
])

const Connector = styled.div(() => [
	tw`border-4 border-solid mt-8 md:mt-0 border-black absolute z-10`,
	css`
		width: 98%;
		left: 1%;
		@media (min-width: 1024px) {
			width: 0%;
			top: 1%;
			left: unset;
			height: 98%;
		}
	`,
])

const NavLink = ({ url, children }) => {
	const path = useContext(Context)
	const isCurrentPage = route => {
		return String(route).trim() === String(path).trim() ? 'active' : ''
	}
	return (
		<div tw='z-20'>
			<StyledLink to={url} active={isCurrentPage(url)}>
				{children}
			</StyledLink>
		</div>
	)
}

const StyledLink = styled(Link)(({ active }) => [
	tw`w-20 h-20 rounded-full flex justify-center items-center border border-black border-4 z-50 bg-white opacity-100!`,
	active && tw`bg-turq`,
	css`
		&:hover {
			transform: scale(1.1, 1.1);
			transition-duration: 350ms;
			transition-property: transform;
		}
	`,
])

const pages = [
	{
		url: Routes.HOME,
		Icon: HomeIcon,
	},
	{
		url: Routes.ABOUT,
		Icon: AboutIcon,
	},
	{
		url: Routes.PORTFOLIO,
		Icon: PortfolioIcon,
	},
	{
		url: Routes.CONTACT,
		Icon: ContactIcon,
	},
	{
		url: Routes.USES,
		Icon: PoopIcon,
	},
]
