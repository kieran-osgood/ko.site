import React from 'react'
import tw, { css, styled } from 'twin.macro'
import Github from 'assets/socials/github.svg'
import Twitter from 'assets/socials/twitter.svg'
import LinkedIn from 'assets/socials/linkedin.svg'

const Footer = () => {
	return (
		<FooterContainer>
			<Socials />
			<Disclaimer />
		</FooterContainer>
	)
}

export default Footer

const FooterContainer = styled.footer(() => [
	tw`flex flex-col items-center justify-center relative w-full bg-secondary-background`,
	css`
		clip-path: ellipse(50% 116% at 50% 128%);
		height: 133px;
	`,
])

const Socials = () => (
	<div tw='flex w-1/3 md:w-1/4 lg:w-1/6 justify-between z-10 pt-8'>
		<SocialLink href='https://github.com/KieranO547'>
			<Github />
		</SocialLink>
		<SocialLink href='https://www.linkedin.com/in/kieranosgood/'>
			<LinkedIn />
		</SocialLink>
		<SocialLink href='https://twitter.com/kieranbosgood'>
			<Twitter />
		</SocialLink>
	</div>
)

const SocialLink = styled.a.attrs(({ href }) => ({
	href,
	rel: 'noreferrer',
	target: 'blank',
}))`
	svg {
		${tw`fill-current text-primary-text w-5/6`}
	}
`

const Disclaimer = () => (
	<div tw='z-10 text-xs md:text-sm pt-4'>
		<span>Kieran Osgood &copy; {new Date().getFullYear()}</span>
		<span>&nbsp;|&nbsp;</span>
		<span>
			Built with&nbsp;
			<a href='https://www.gatsbyjs.org' tw='underline'>Gatsby</a>
		</span>
	</div>
)
