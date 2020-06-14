import React from 'react'
import { css } from 'twin.macro'
import Image from 'components/Image'
import Arrow from 'assets/arrow.svg'

const ImageSlider = () => (
		<Image />
	<>
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
