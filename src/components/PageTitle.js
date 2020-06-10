import tw, { styled, css } from 'twin.macro'
const PageTitle = styled.h1.attrs(({ content }) => ({
	children: content,
}))(() => [tw`sm:text-6xl text-primary-text`, css`font-size: 6.4rem;`])

export default PageTitle
