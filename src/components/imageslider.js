import React from 'react'
import { css } from 'twin.macro'
// import Image from 'components/image'
import Arrow from 'assets/arrow.svg'
import Profile from 'images/profile.png'

const ImageSlider = () => (
	<>
		{/* <Image /> */}
		<img src={Profile} tw='h-auto w-full sm:max-w-md shadow-lg rounded-full' alt='profile' />
		<div tw='flex items-end'>
			<Arrow
				css={css`
					g > path {
						stroke: var(--color-text-primary);
					}
				`}
			/>
			<p
				tw='text-lg pl-4'
				css={css`
					font-family: 'Indie Flower';
					line-height: 2.4rem;
				`}
			>
				a nerd, but not the one from the inbetweeners!
			</p>
		</div>
	</>
)

export default ImageSlider
