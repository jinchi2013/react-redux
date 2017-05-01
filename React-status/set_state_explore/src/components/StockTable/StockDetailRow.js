import React from 'react'

const StockDetailRow = ({stock}) => {
	return (
		<tr>
			<td>{stock.id}</td>
			<td>{stock.name}</td>
			<td>{stock.val}</td>
			<td>{stock.status > 0 ? `+${stock.status}%` : `${stock.status}%`}</td>
		</tr>
	)
}

export default StockDetailRow
