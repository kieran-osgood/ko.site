import React from 'react'
import Toggle from 'react-toggle'
import 'twin.macro'

const Header = () => {
	return (
		<div tw='h-16 w-16 bg-grey-100'>
			<Toggle
				aria-label='No label tag'
				defaultChecked={false}
				onChange={this.handleBaconChange}
			/>
		</div>
	)
}

export default Header
