import React from 'react'
import tw, { styled } from 'twin.macro'
import { useForm } from 'react-hook-form'

import Layout from 'components/layout'
import SEO from 'components/seo'
import HighlightedLine from 'components/highlightedline'

const Contact = ({ path }) => (
	<Layout path={path}>
		<SEO title='Contact' />
		<div tw='grid gap-8'>
			<HighlightedLine highlightText={`Contact`} primary />

			<p tw='text-base'>
				I currently have some availability for work alongside my current job, so
				use the form below if you want to discuss!
			</p>

			<Form />
		</div>
	</Layout>
)

export default Contact

const Form = () => {
	const { handleSubmit, register, errors } = useForm({
		reValidateMode: 'onChange',
	})
	return (
		<form
			// netlify
			onSubmit={handleSubmit()}
			tw='grid sm:grid-cols-2 sm:w-2/3 gap-10 row-gap-8'
		>
			<Label htmlFor='firstName'>
				First Name
				<Input
					type='text'
					name='firstName'
					placeholder='John'
					ref={register({
						required: 'Please enter first name.',
					})}
				/>
				{errors.firstName && (
					<span tw='text-red-400'>{errors.firstName.message}</span>
				)}
			</Label>

			<Label htmlFor='lastName'>
				Last Name
				<Input
					type='text'
					name='lastName'
					placeholder='Smith'
					ref={register({
						required: 'Please enter last name.',
					})}
				/>
			</Label>

			<Label htmlFor='email'>
				Email Address:
				<Input
					type='text'
					name='email'
					placeholder='johnsmith@gmail.com'
					ref={register({
						required: 'Required',
						pattern: {
							value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
							message: 'Invalid email address',
						},
					})}
				/>
				{errors.email && <span tw='text-red-400'>{errors.email.message}</span>}
			</Label>

			<Label htmlFor='phoneNumber'>
				Phone Number:
				<Input
					type='text'
					name='phoneNumber'
					placeholder='XXX XXX XXXX'
					ref={register({})}
				/>
			</Label>

			<Label htmlFor='message'>
				Description of what you need:
				<textarea
					tw='px-4 py-2 rounded-lg shadow-lg text-secondary-text'
					rows={3}
					name='message'
					placeholder='Message...'
					ref={register({
						required: 'Please leave a short message',
					})}
				/>
			</Label>

			<Input
				type='submit'
				value='Send'
				tw='py-6 text-base hover:cursor-pointer text-secondary-text'
			/>
		</form>
	)
}

const Label = styled.label`
	${tw`flex flex-col justify-between text-base text-primary-text `}
`
const Input = styled.input`
	${tw`px-4 py-2 rounded-lg shadow-lg text-secondary-text`}
`
