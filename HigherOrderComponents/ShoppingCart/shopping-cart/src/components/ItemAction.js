import React, { PropTypes } from 'react'

const ItemAction = ({productId, addToCart}) => {
	const style = {
		textAlign: 'center'	,
		backgroundColor: '#3498db',
		width: '100%',
		height: 45,
		color: 'white',
		border: 0
	}

	return <button style={style} onClick={addToCart} >Add To Cart</button>
}

ItemAction.PropTypes = {
	productId: PropTypes.string.isRequired,
	addToCart: PropTypes.func.isRequired
}

export default ItemAction
