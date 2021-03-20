import React from 'react'
import tw, { styled } from 'twin.macro'

type HighlightedTextProps = { 
	text: string
}
const HighlightLine = styled.span.attrs<HighlightedTextProps>(({ text }) => ({ children: text }))`
	position: relative;
	::before {
		${tw`hidden md:block`}
		content: '';
		position: absolute;
		height: 11px;
		width: 97%;
		background-color: ${props => props.color || 'red'};
		bottom: 11%;
		left: 1.5%;
		z-index: -1;
	}
`

type ColorBlockProps = {
	primary?: boolean;
	secondary?: boolean;
}
const ColorBlock = styled.div<ColorBlockProps>(({ primary, secondary }) => [
	tw`h-16 w-16 hidden md:block`,
	primary && tw`bg-primary ml-16`,
	secondary && tw`bg-secondary mr-16`,
])

type HighlightedLineProps = {
	highlightSuffix: string;
	highlightText: string;
	highlightPrefix:string;
	primary: boolean;
	secondary: boolean
}
const HighlightedLine = ({
	highlightSuffix,
	highlightText,
	highlightPrefix,
	primary,
	secondary,
}: HighlightedLineProps) => (
	<div tw='flex items-center '>
		{secondary && <ColorBlock secondary />}
		<h1 tw='relative z-30 text-2xl sm:text-3xl md:text-5xl lg:text-6xl md:whitespace-nowrap'>
			{highlightPrefix && <>{highlightPrefix}&nbsp;</>}
			<HighlightLine
				text={highlightText}
				color={primary ? 'var(--color-primary)' : 'var(--color-secondary)'}
			/>
			{highlightSuffix && <>&nbsp;{highlightSuffix}</>}
		</h1>
		{primary && <ColorBlock primary />}
	</div>
)

export default HighlightedLine
