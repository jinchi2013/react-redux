import React, { PropTypes } from 'react'

const Item = ({imgSrc, itemName, price, quantityRemaining}) => {

	const style={
		padding: 10,

		imgStyle: {
			width: '90%',
			height: 'auto'
		},
		productDetails: {
			display: 'inline-block',
			verticalAlign: 'top'
		},
		imgContainer: {
			display: 'inline-block',
			width: '60%'
		},
		label: {
			textTransform: 'uppercase'
		}
	}

	return (
		<div style={style}>
			<div style={style.imgContainer}>
				<img src={`${imgSrc}`} alt={itemName} style={style.imgStyle} />
			</div>
			<div style={style.productDetails}>
				<div><span style={style.label}>Name: </span>{itemName}</div>
				<div><span style={style.label}>Price: </span>{price}</div>
				<div><span style={style.label}>On Stock: </span>{quantityRemaining}</div>
			</div>
		</div>
	)
}

Item.PropTypes = {
	imgSrc: PropTypes.string.isRequired,
	itemName: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	quantityRemaining: PropTypes.number.isRequired
}

export default Item
