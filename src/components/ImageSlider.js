import React from 'react'
import tw, { css } from 'twin.macro'
import Image from 'components/Image'
import Arrow from 'assets/arrow.svg'

const ImageSlider = () => (
	<div
		css={[
			css`
				font-family: Amatica SC;
			`,
		]}
	>
		<Image />
		<div tw='flex'>
			<Arrow
				css={css`
					g > path {
						stroke: var(--color-text-primary);
					}
				`}
			/>
			<p tw='pl-12 pt-6'>don’t be confused, i wasn’t on the inbetweeners!</p>
		</div>
	</div>
)

export default ImageSlider
