import React from 'react'
import { Link } from 'gatsby'

import Layout from 'components/layout'
import SEO from 'components/seo'
import { ProfileCard } from 'components/profilecard'

const AboutPage = ({ path }) => (
	<Layout path={path}>
		<SEO title='About' />
		<h1>About</h1>
		<p>Welcome to your new Gatsby site.</p>
		<p>Now go build something great.</p>
		<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
		<Link to='/page-2/'>Go to page 2</Link>
	</Layout>
)

export default AboutPage
