import React from 'react'

import Layout from 'components/layout'
import SEO from 'components/seo'
import HighlightedLine from 'components/highlightedline'

const Contact = ({ path }) => (
	<Layout path={path}>
		<SEO title='Contact' />

		<HighlightedLine highlightText={`Contact`} />

	</Layout>
)

export default Contact
