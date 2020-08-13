import React from 'react'
import { css } from 'twin.macro'
import ReactCompareImage from 'react-compare-image'

import Arrow from 'assets/arrow.svg'
import Me from 'images/me.png'
import Will from 'images/will.png'

const ImageSlider = () => (
	<>
		{/* <Image /> */}
		<div tw='h-auto w-full sm:max-w-md shadow-lg rounded-full overflow-hidden'>
			<div tw=''>
				<ReactCompareImage leftImage={Me} rightImage={Will} hover={true} />
			</div>
		</div>

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
