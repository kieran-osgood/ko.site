import tw, { styled } from 'twin.macro'
const PageTitle = styled.h1.attrs(({ content }) => ({
	children: content,
}))(() => [tw`text-6xl`])

export default PageTitle
