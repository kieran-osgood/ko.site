import React from 'react'

import Layout from 'components/layout'
import SEO from 'components/seo'
import { ProfileCard } from 'components/profilecard'

const AboutPage = ({ path }) => (
	<Layout path={path}>
		<SEO title='About' />
		<h1>About</h1>
		<ProfileCard />
	</Layout>
)

export default AboutPage
