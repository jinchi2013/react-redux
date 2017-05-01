import React from 'react'

const StockTitleRow = ({children, _sortStockList}) => {
	return (
		<tr>
			{
				React.Children.map(children, child=>(
					React.cloneElement(child, {
						onClick: _sortStockList,
						style: {
							cursor: 'pointer'
						}
					})
				))
			}
		</tr>
	)
}

export default StockTitleRow
