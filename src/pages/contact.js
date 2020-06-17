import React from 'react'
import tw, { styled } from 'twin.macro'

import Layout from 'components/layout'
import SEO from 'components/seo'
import HighlightedLine from 'components/highlightedline'

const Contact = ({ path }) => (
	<Layout path={path}>
		<SEO title='Contact' />
<div tw='grid gap-8'>

		<HighlightedLine highlightText={`Contact`} />

		<p tw='text-base'>
			I currently have some availability for side work alongside my current job,
			so use the form below if you want to discuss!
		</p>

		<Form />
</div>
	</Layout>
)

export default Contact

const Form = () => (
	<form netlify tw='grid sm:grid-cols-2 gap-10 row-gap-6'>
		<Label htmlFor='firstName'>
			First Name
			<Input type='text' name='firstName' placeholder='John' />
		</Label>
		<Label htmlFor='lastName'>
			Last Name
			<Input type='text' name='lastName' placeholder='Smith' />
		</Label>
		<Label htmlFor='email'>
			Email Address:
			<Input type='text' name='email' placeholder='johnsmith@gmail.com' />
		</Label>
		<Label htmlFor='phoneNumber'>
			Phone Number:
			<Input type='text' name='phoneNumber' placeholder='XXX XXX XXXX' />
		</Label>

		<Input type='submit' value="Send" tw='py-6 text-base hover:cursor-pointer text-secondary-text' />
	</form>
)

const Label = styled.label`
	${tw`flex flex-col justify-between text-base`}
`
const Input = styled.input`
	${tw`px-4 py-2 rounded-lg shadow-lg`}
`
