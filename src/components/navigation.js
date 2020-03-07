import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import HomeIcon from "../images/home.svg"
import AboutIcon from "../images/about.svg"
import PortfolioIcon from "../images/portfolio.svg"
import ContactIcon from "../images/contact.svg"
import PoopIcon from "../images/poop.svg"

const Navigation = ({ siteTitle }) => (
  <header
    className="sticky z-10"
    style={{
      bottom: 10,
    }}
  >
    <NavigationLinks />
  </header>
)

const NavigationLinks = () => {
  return(
    <div className='flex justify-between z-100'>
      <NavLink icon={HomeIcon} />
      <NavLink icon={AboutIcon} />
      <NavLink icon={PortfolioIcon} />
      <NavLink icon={ContactIcon} />
      <NavLink icon={PoopIcon} />
      <div className='w-full border-4 mt-5 z-5 border-black absolute' />
    </div>
  )
}
const NavLink = ({ icon }) => {
  return (
    <div className="sticky top-0 z-10">
      <Link to="page-2">
        <div className="w-12 h-12 bg-white rounded-full flex align-center justify-center border-black border-4 z-5">
          <img src={icon} />
        </div>
      </Link>
    </div>
  )
}

Navigation.propTypes = {
  siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
  siteTitle: ``,
}

export default Navigation
