import React from 'react'

import Layout from 'components/Layout'
import SEO from 'components/SEO'
import { ProfileCard } from 'components/profilecard'

const AboutPage = ({ path }) => (
	<Layout path={path}>
		<SEO title='About' />
		<h1>About</h1>
		<ProfileCard />
	</Layout>
)

export default AboutPage
