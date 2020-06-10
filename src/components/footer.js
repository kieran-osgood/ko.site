import React from 'react'
import tw, { css, styled } from 'twin.macro'
import Github from 'assets/socials/Github.svg'
import Twitter from 'assets/socials/Twitter.svg'
import LinkedIn from 'assets/socials/LinkedIn.svg'

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
	tw`flex flex-col items-center justify-center pt-36 relative bottom-0 absolute w-full bg-sec-background`,
	css`
		clip-path: ellipse(50% 50% at 50% 100%);
		height: 205px;
	`,
])

const Socials = () => (
	<div tw='flex w-1/5 justify-between z-10 pt-8'>
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
		${tw`fill-current text-primary-text`}
	}
`

const Disclaimer = () => (
	<div tw='z-10 text-lg pt-4'>
		<span>Kieran Osgood &copy; {new Date().getFullYear()}</span>
		<span>&nbsp;|&nbsp;</span>
		<span>
			Built with&nbsp;
			<a href='https://www.gatsbyjs.org'>Gatsby</a>
		</span>
	</div>
)
