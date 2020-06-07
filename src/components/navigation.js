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
			<NavLink url={Routes.CONTACT} icon={ContactIcon} />
			<NavLink url={Routes.USES} icon={PoopIcon} />
			<Connector />
		</NavBar>
	</Header>
)

export default Navigation

const Header = styled.header(() => [
	tw`mx-auto sticky z-10 transform lg:rotate-90 p-3`,
	css`
		bottom: 10px;
		max-width: 700px;
		@media (min-width: 1024px) {
			width: 550px;
			height: 30px;
			top: 507px;
			position: fixed;
		}
		@media (min-width: 1024px) {
			left: calc((100vw / 4) - 27.5rem);
		}
		@media (min-width: 1440px) {
			left: calc((100vw / 4) - 31rem);
		}
	`,
])

const NavBar = styled.div(() => [tw`flex justify-between`])

const Connector = styled.div(() => [
	tw`border-4 border-solid mt-8 border-black absolute z-10`,
	css`
		width: 95%;
	`,
])

const NavLink = ({ url, icon }) => {
	const path = useContext(Context)
	const isCurrentPage = route => (route === path ? 'active' : '')
	return (
		<div tw='z-20 transform lg:-rotate-90'>
			<StyledLink to={url} active={isCurrentPage(url)}>
				<img src={icon} alt={`${url} navigation icon`} />
			</StyledLink>
		</div>
	)
}

const StyledLink = styled(Link)(({ active }) => [
	tw`w-20 h-20 rounded-full flex justify-center border border-black border-4 z-50 bg-white`,
	active && tw`bg-turq`,
	css`
		&:hover {
			transform: scale(1.1, 1.1);
			transition-duration: 350ms;
			transition-property: transform;
		}
	`,
])
