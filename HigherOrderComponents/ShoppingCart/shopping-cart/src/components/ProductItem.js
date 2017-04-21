import React, { PropTypes } from 'react'

import Item from './Item'
import ItemAction from './ItemAction'

import enhanceWithPure from '../HOCs/enhanceWithPure'

const ProductItem = ({product, addToCart}) => {
	const style={
		padding: 10
	}

	const {
		imgSrc,
		itemName,
		price,
		quantityRemaining,
		id
	} = product

	return (
		<div style={style}>
			<Item 
				imgSrc={imgSrc} 
				itemName={itemName}
				price={price}
				quantityRemaining={quantityRemaining}  
			/>
			<ItemAction 
				productId={id} 
				addToCart={addToCart}
			/>
		</div>
	)	
}

ProductItem.PropTypes = {
	product: PropTypes.shape({
		id: PropTypes.string.isRequired,
		imgSrc: PropTypes.string.isRequired,
		itemName: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		quantityRemaining: PropTypes.number.isRequired
	}).isRequired,
	addToCart: PropTypes.func.isRequired
}

export default enhanceWithPure()(ProductItem)
