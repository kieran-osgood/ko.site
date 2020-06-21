import React, { useState, useEffect } from 'react'
import tw, { css, styled } from 'twin.macro'
import { useForm } from 'react-hook-form'
import ReactTooltip from 'react-tooltip'

import Layout from 'components/layout'
import SEO from 'components/seo'
import HighlightedLine from 'components/highlightedline'
import Loading from 'components/loading'

import WarningIcon from 'assets/warning.svg'

const Contact = ({ path }) => (
	<Layout path={path}>
		<SEO title='Contact' />
		<div tw='grid gap-8'>
			<HighlightedLine highlightText={`Contact`} primary />

			<p tw='text-lg'>
				I currently have some availability for work alongside my current job, so
				use the form below if you want to discuss!
			</p>

			<Form />
		</div>
	</Layout>
)

export default Contact

const Form = () => {
	const [status, setStatus] = useState('form')
	const { handleSubmit, register, errors } = useForm({
		reValidateMode: 'onChange',
	})

	  
	const onSubmit = () => {setStatus('success')}
	return (
		<>
			{status === 'form' && (
				<form
					name='contact'
					method='post'
					data-netlify='true'
					netlify='true'
					data-netlify-honeypot='bot-field'
					onSubmit={handleSubmit(onSubmit)}
					tw='sm:grid sm:grid-cols-2 lg:w-full gap-10 row-gap-8'
				>
					<ReactTooltip />
					<input type="hidden" name="form-name" value="contact" />
					<input type="hidden" name="bot-field" />

					<Label htmlFor='firstName'>
						<ErrorLabelWrapper>
							First Name
							<Warning error={errors.firstName} />
						</ErrorLabelWrapper>
						<Input
							type='text'
							name='firstName'
							placeholder='John'
							ref={register({
								required: 'Please enter first name.',
							})}
						/>
					</Label>

					<Label htmlFor='lastName'>
						<ErrorLabelWrapper>
							Last Name
							<Warning error={errors.lastName} />
						</ErrorLabelWrapper>
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
						<ErrorLabelWrapper>
							Email Address:
							<Warning error={errors.email} />
						</ErrorLabelWrapper>
						<Input
							type='email'
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
					</Label>

					<Label htmlFor='phoneNumber'>
						<ErrorLabelWrapper>
							Phone Number:
							<Warning error={errors.phoneNumber} />
						</ErrorLabelWrapper>
						<Input
							type='number'
							name='phoneNumber'
							placeholder='XXX XXX XXXX'
							ref={register({})}
						/>
					</Label>

					<Label htmlFor='message' tw='col-span-2'>
						<ErrorLabelWrapper>
							Message:
							<Warning error={errors.message} />
						</ErrorLabelWrapper>
						<textarea
							tw='px-4 py-2 rounded-lg shadow-lg text-secondary-text'
							rows={3}
							name='message'
							placeholder='A short description of what you need'
							ref={register({
								required: 'Please leave a short message',
							})}
						/>
					</Label>

					<Input
						type='submit'
						value='Send'
						tw='mt-10 sm:mt-0 py-6 text-base hover:cursor-pointer text-secondary-text col-start-1 col-end-3'
					/>
				</form>
			)}
			{status === 'loading' && <Loading />}
			{status === 'success' && <h2 tw='text-2xl'>Got it, I'll be in contact!</h2>}
		</>
	)
}

const Label = styled.label`
	${tw`flex flex-col justify-between text-base text-primary-text relative w-full`}
`
const Input = styled.input`
	${tw`px-4 py-2 rounded-lg shadow-lg text-secondary-text w-full`}

	/* Chrome, Safari, Edge, Opera */
	::-webkit-outer-spin-button,
	::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
	/* Firefox */
	[type='number'] {
		-moz-appearance: textfield;
	}
`
const Warning = ({ error }) => {
	const [warning, setWarning] = useState('123')

	useEffect(() => {
		if (typeof error !== 'undefined') setWarning(error.message)
	}, [error])

	return (
		<>
			<WarningWrapper data-tip={warning} data-type='error' error={error}>
				<WarningIcon tw='h-8 w-8' />
			</WarningWrapper>
		</>
	)
}

const WarningWrapper = styled.span(({ error }) => [
	css`
		${'' /* right: -2.2rem; */}
		${'' /* bottom: 1rem; */}
		${'' /* bottom: 50%; */}
	`,
	error ? tw`inline-block` : tw`hidden`,
	tw`h-8 w-8 pl-4`,
])

const ErrorLabelWrapper = styled.span`
	${tw`flex items-center h-12`}
`
