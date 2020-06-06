import React from 'react'
import tw, { styled } from 'twin.macro'

const Footer = () => {
	return (
		<FooterContainer>
			<span>Kieran Osgood &copy; {new Date().getFullYear()}</span>
			<span>
				Built with &nbsp;
				<a href='https://www.gatsbyjs.org'>Gatsby</a>
			</span>
		</FooterContainer>
	)
}

Footer.propTypes = {}

export default Footer

const FooterContainer = styled.footer`
	${tw`flex flex-col items-center justify-center pt-4`}
	width: 100%;
	height: 70px;
	background-repeat: no-repeat;
	background-image: url('${process.env.PUBLIC_URL}/page-data/footer/oval.svg');
`
