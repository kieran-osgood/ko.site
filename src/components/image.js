import React from 'react'
import Img from 'gatsby-image'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = () => {
	// ? TODO pass in a prop for the image to be taken from the images folder, and the fluid attributes?
	// const data = useStaticQuery(graphql`
	// 	query {
	// 		placeholderImage: file(relativePath: { eq: "profile.png" }) {
	// 			childImageSharp {
	// 				fluid(maxWidth: 300) {
	// 					...GatsbyImageSharpFluid
	// 				}
	// 			}
	// 		}
	// 	}
	// `)
return null;
	// return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default Image
