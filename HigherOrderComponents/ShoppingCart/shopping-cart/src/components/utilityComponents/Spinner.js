import React from 'react'
import spinnerIcon from '../../image/spinner.gif'

const Spinner = () => {

	const style = {
		background: `url("${spinnerIcon}")`,
		backgroundSize: '100% auto',
		backgroundRepeat: 'no-repeat',
		width: 425,
		height: 257
	}

	return (
		<div style={style}></div>
	)
}

export default Spinner