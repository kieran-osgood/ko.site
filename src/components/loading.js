import React from 'react'
import { PulseLoader } from 'react-spinners'

const Loading = ({ loading }) => {
	return (
		<PulseLoader
			size={30}
			color={'var(--color-primary)'}
			loading={loading}
		/>
	)
}

export default Loading
