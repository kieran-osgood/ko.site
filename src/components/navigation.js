import PropTypes from "prop-types"
import React from "react"
import HomeIcon from "../images/home.svg"

const Navigation = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Icon />
    </div>
  </header>
)

const Icon = () => {
  return (
    <div className='w-1/2' style={{
      backgroundColor: '#fff',
      height: '30px',
      borderRadius: '3'
    }}>
      <img src={HomeIcon} />
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
