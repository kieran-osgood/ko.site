import React from 'react'
import { Link } from 'gatsby'

import Layout from 'components/Layout'
import SEO from 'components/SEO'
import HighlightedLine from 'components/HighlightedLine'

const Contact = ({ path }) => (
	<Layout path={path}>
		<SEO title='Contact' />
		<h1>Contact</h1>
		<p>Welcome to page 2</p>
		<Link to='/'>Go back to the homepage</Link>
	</Layout>
)

export default Contact
