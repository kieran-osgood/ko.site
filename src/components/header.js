import React from 'react'
import Toggle from 'react-toggle'
import tw from 'twin.macro'

const Header = () => {
	const handleBaconChange = () => console.log('test')
	return (
		<div className='h-10 w-10 bg-grey-100'>
			<Toggle
				aria-label='No label tag'
				defaultChecked={false}
				onChange={this.handleBaconChange}
			/>
		</div>
	)
}

export default Header
