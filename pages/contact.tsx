import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import ReactTooltip from 'react-tooltip'
import axios from 'axios'
import qs from 'qs'

import Layout from 'src/components/layout'
import HighlightedLine from 'src/components/highlightedline'
import Loading from 'src/components/loading'

import WarningIcon from 'assets/warning.svg'

const Contact = ({ path }) => (
	<Layout path={path}>
		{/* <SEO title='Contact' /> */}
		<div className='grid gap-8'>
			<HighlightedLine highlightText={`Contact`} primary />

			<p className='text-lg'>
				If you want to discuss a potential project or contract work, please fill
				out your details below.
			</p>

			<Form />
		</div>
	</Layout>
)

export default Contact

const Form = () => {
	const [status, setStatus] = useState('form')
	const { handleSubmit, register, errors, getValues } = useForm({
		reValidateMode: 'onSubmit',
		mode: 'onChange',
	})

	const onSubmit = () => {
		setStatus('loading')
		axios('/contact', {
			method: 'POST',
			headers: { 'content-type': 'application/x-www-form-urlencoded' },
			data: qs.stringify({ 'form-name': 'contact', ...getValues() }),
		})
			.then(() => {
				setStatus('success')
			})
			.catch(error => {
				alert(error)
				setStatus('form')
			})
	}
	return (
		<>
			<ReactTooltip />
			{status === 'form' && (
				<form
					name='contact'
					method='post'
					netlify='true'
					data-netlify='true'
					action='/contact'
					data-netlify-honeypot='bot-field'
					onSubmit={handleSubmit(onSubmit)}
					className='sm:grid sm:grid-cols-2 lg:w-full gap-10 row-gap-8'
				>
					<input type='hidden' name='bot-field' />

					<label htmlFor='firstName' className='flex flex-col justify-between text-base text-primary-text relative w-full'>
						<span className='flex items-center h-12'>
							First Name
							<Warning error={errors.firstName} />
						</span>
						<input
						className='px-4 py-2 rounded-lg shadow-lg text-secondary-text w-full'
							type='text'
							name='firstName'
							placeholder='John'
							ref={register({
								required: 'Please enter first name.',
							})}
						/>
					</label>

					<label htmlFor='lastName'className='flex flex-col justify-between text-base text-primary-text relative w-full'>
						<span className='flex items-center h-12'>
							Last Name
							<Warning error={errors.lastName} />
						</span>
						<input
						className='px-4 py-2 rounded-lg shadow-lg text-secondary-text w-full'
							type='text'
							name='lastName'
							placeholder='Smith'
							ref={register({
								required: 'Please enter last name.',
							})}
						/>
					</label>

					<label htmlFor='email'className='flex flex-col justify-between text-base text-primary-text relative w-full'>
						<span className='flex items-center h-12'>
							Email Address:
							<Warning error={errors.email} />
						</span>
						<input
						className='px-4 py-2 rounded-lg shadow-lg text-secondary-text w-full'
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
					</label>

					<label htmlFor='phoneNumber'className='flex flex-col justify-between text-base text-primary-text relative w-full'>
						<span className='flex items-center h-12'>
							Phone Number:
							<Warning error={errors.phoneNumber} />
						</span>
						<input
							type='number'
							name='phoneNumber'
							placeholder='XXX XXX XXXX'
							ref={register({})}
						/>
					</label>

					<label htmlFor='message' className='col-span-2 flex flex-col justify-between text-base text-primary-text relative w-full'>
						<span className='flex items-center h-12'>
							Message:
							<Warning error={errors.message} />
						</span>
						<textarea
							className='px-4 py-2 rounded-lg shadow-lg text-secondary-text'
							rows={3}
							name='message'
							placeholder='A short description of what you need'
							ref={register({
								required: 'Please leave a short message',
							})}
						/>
					</label>
					<div data-netlify-recaptcha></div>
					<input
						type='submit'
						name='submit'
						value='Send'
						className='mt-10 sm:mt-0 py-6 text-base hover:cursor-pointer text-secondary-text col-start-1 col-end-3'
					/>
				</form>
			)}
			{status === 'loading' && (
				<div className='w-full h-80 flex justify-center items-center '>
					<Loading />
				</div>
			)}
			{status === 'success' && (
				<h2 className='w-full h-80 flex justify-center items-center text-2xl'>
					Received, I'll be in touch!
				</h2>
			)}
		</>
	)
}


const Warning = ({ error }) => {
	const [warning, setWarning] = useState('Required')

	useEffect(() => {
		if (typeof error !== 'undefined') setWarning(error.message)
	}, [error])

	return (
		<span data-tip={warning} data-type='error' className={`h-8 w-8 pl-4 ${error ? 'inline-block': 'hidden'}`}>
			<WarningIcon className='h-8 w-8' />
		</span>
	)
}
