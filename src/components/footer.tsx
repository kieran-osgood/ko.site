import React from 'react'
import tw, { css, styled } from 'twin.macro'
import Github from 'assets/socials/github.svg'
import Twitter from 'assets/socials/twitter.svg'
import LinkedIn from 'assets/socials/linkedin.svg'

const Footer = () => {
	return (
		<div className='flex flex-col items-center justify-center relative w-screen bg-tertiary-background'>
			<div className='flex w-1/3 md:w-1/4 lg:w-1/6 justify-between z-10 pt-8'>
				<Socials />
			</div>
			<Disclaimer />
		</div>
	)
}

export default Footer

export const Socials = () => (
	<>
		<SocialLink href='https://github.com/KieranO547'>
			<Github />
		</SocialLink>
		<SocialLink href='https://www.linkedin.com/in/kieranosgood/'>
			<LinkedIn />
		</SocialLink>
		<SocialLink href='https://twitter.com/kieranbosgood'>
			<Twitter />
		</SocialLink>
	</>
)

const SocialLink = styled.a.attrs(({ href }: {href: string}) => ({
	href,
	rel: 'noreferrer',
	target: 'blank',
}))`
	svg {
		${tw`fill-current text-primary-text w-5/6 md:w-full`}
	}
`

const Disclaimer = () => (
	<div className='z-10 text-xs md:text-sm pt-4'>
		<span>&copy; {new Date().getFullYear()}, Kieran Osgood</span>
	</div>
)
