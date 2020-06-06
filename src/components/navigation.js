import React, { useContext } from 'react'
import { Link } from 'gatsby'
import tw, { styled } from 'twin.macro'

import HomeIcon from '../images/navigation/home.svg'
import AboutIcon from '../images/navigation/about.svg'
import PortfolioIcon from '../images/navigation/portfolio.svg'
import ContactIcon from '../images/navigation/contact.svg'
import PoopIcon from '../images/navigation/poop.svg'
import Routes from '../data/routes'

import { Context } from './layout'

const Navigation = () => {
	return (
		<Header className='md-vert-nav'>
			<NavigationLinks />
		</Header>
	)
}
const Header = styled.header`
	${tw`mx-auto sticky z-10 transform lg:rotate-90 p-2`}
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
`
const NavigationLinks = () => {
	return (
		<div className='flex justify-between z-100'>
			<NavLink url={Routes.HOME} icon={HomeIcon} />
			<NavLink url={Routes.ABOUT} icon={AboutIcon} />
			<NavLink url={Routes.PORTFOLIO} icon={PortfolioIcon} />
			<NavLink url={Routes.CONTACT} icon={ContactIcon} />
			<NavLink url={Routes.USES} icon={PoopIcon} />
			<div
				className='border-4 mt-5 z-5 border-black absolute'
				style={{ width: '95%' }}
			/>
		</div>
	)
}

const NavLink = ({ url, icon }) => {
	const path = useContext(Context)
	const isCurrentPage = route => (route === path ? 'active' : '')
	return (
		<div className='sticky top-0 z-10 transform lg:-rotate-90'>
			<Link to={url}>
				<LinkDiv active={isCurrentPage(url)} className={``}>
					<img src={icon} alt={`${url} navigation icon`} />
				</LinkDiv>
			</Link>
		</div>
	)
}

Navigation.propTypes = {}

Navigation.defaultProps = {}

export default Navigation

const LinkDiv = styled.div`
	${props => props.active && tw`bg-turq`}
	${tw` w-12 h-12 bg-white rounded-full flex justify-center border border-4 z-10`}
	&:hover {
		transform: scale(1.1, 1.1);
		transition-duration: 350ms;
		transition-property: transform;
	}
`
