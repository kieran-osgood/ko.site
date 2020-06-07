import React from 'react'
import { css } from 'twin.macro'
import Image from 'components/Image'

const ImageSlider = () => (
	<div
		css={[
			css`
				font-family: Amatica SC;
			`,
		]}
	>
		<Image />
		<p>don’t be confused, i wasn’t on the inbetweeners!</p>
	</div>
)

export default ImageSlider
