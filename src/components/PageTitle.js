import { styled, css } from 'twin.macro'
const PageTitle = styled.h1.attrs(({ content }) => ({
	children: content,
}))(() => [css`font-size: 6.4rem;`])

export default PageTitle
