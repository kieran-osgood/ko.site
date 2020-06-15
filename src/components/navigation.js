import React, { useContext } from 'react'
import { Link } from 'gatsby'
import tw, { css, styled } from 'twin.macro'

import HomeIcon from '../images/navigation/home.svg'
import AboutIcon from '../images/navigation/about.svg'
import PortfolioIcon from '../images/navigation/portfolio.svg'
import ContactIcon from '../images/navigation/contact.svg'
import PoopIcon from '../images/navigation/poop.svg'
import Routes from '../data/routes'

import { Context } from './Layout'

const Navigation = () => (
	<Header>
		<NavBar>
			<NavLink url={Routes.HOME} icon={HomeIcon} />
			<NavLink url={Routes.ABOUT} icon={AboutIcon} />
			<NavLink url={Routes.PORTFOLIO} icon={PortfolioIcon} />
			{/* <NavLink url={Routes.CONTACT} icon={ContactIcon} /> */}
			<NavLink url={Routes.USES} icon={PoopIcon} />
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
		width: 100%;
		@media (min-width: 1024px) {
			width: 0%;
			height: 100%;
		}
	`,
])

const NavLink = ({ url, icon }) => {
	const path = useContext(Context)
	const isCurrentPage = route => (route === path ? 'active' : '')
	return (
		<div tw='z-20'>
			<StyledLink to={url} active={isCurrentPage(url)}>
				<img src={icon} alt={`${url} navigation icon`} />
			</StyledLink>
		</div>
	)
}

const StyledLink = styled(Link)(({ active }) => [
	tw`w-20 h-20 rounded-full flex justify-center border border-black border-4 z-50 bg-white opacity-100!`,
	active && tw`bg-turq`,
	css`
		&:hover {
			transform: scale(1.1, 1.1);
			transition-duration: 350ms;
			transition-property: transform;
		}
	`,
])
