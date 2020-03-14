import React, { useContext } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import HomeIcon from '../images/navigation/home.svg'
import AboutIcon from '../images/navigation/about.svg'
import PortfolioIcon from '../images/navigation/portfolio.svg'
import ContactIcon from '../images/navigation/contact.svg'
import PoopIcon from '../images/navigation/poop.svg'
import Routes from '../data/routes'

import { Context } from './layout'

const Navigation = () => {
	return (
		<header className='horz-nav md-vert-nav mx-auto sticky z-10 transform lg:rotate-90 p-2'>
			<NavigationLinks />
		</header>
	)
}

const NavigationLinks = () => {
	return (
		<div className='flex justify-between z-100'>
			<NavLink url={Routes.HOME} icon={HomeIcon} />
			<NavLink url={Routes.ABOUT} icon={AboutIcon} />
			<NavLink url={Routes.CONTACT} icon={PortfolioIcon} />
			<NavLink url={Routes.PORTFOLIO} icon={ContactIcon} />
			<NavLink url={Routes.USES} icon={PoopIcon} />
			<div className='border-4 mt-5 z-5 border-black absolute' style={{width: '95%'}}/>
		</div>
	)
}

const NavLink = ({ url, icon }) => {
	const path = useContext(Context)
	const isCurrentPage = route => (route === path ? 'active' : '')
	return (
		<div className='sticky top-0 z-10 transform lg:-rotate-90'>
			<Link to={url}>
				<div
					className={`nav-link ${isCurrentPage(url)} w-12 h-12 bg-white rounded-full flex align-center justify-center border-black border-4 z-5`}
				>
					<img src={icon} />
				</div>
			</Link>
		</div>
	)
}

Navigation.propTypes = {}

Navigation.defaultProps = {}

export default Navigation
