import React, {Component} from 'react'
//import FilterSearch from './FilterSearch'
import StockTitleRow from './StockTable/StockTitleRow'
import StockDetailRow from './StockTable/StockDetailRow'

class StockLists extends Component {
	constructor(props) {
		super(props);
		this.state = {
			stocks: this.props.stocks
		}

		this._sortStockList = this._sortStockList.bind(this)
	}

	_sortNumber(sortParam) {
		const stocksArrayCopy = this.props.stocks.slice(0)

		stocksArrayCopy.sort( (a, b) => a[sortParam] - b[sortParam] )

		this.setState({
			stocks: stocksArrayCopy
		})
	}

	_sortString(sortParam) {
		const stocksArrayCopy = this.props.stocks.slice(0)

		stocksArrayCopy.sort( (a, b) => {
			const stringA = a[sortParam] + ''
			const stringB = b[sortParam] + ''

			if (stringA < stringB) {
		    return -1
		  }
		  if (stringA > stringB) {
		    return 1
		  }
	  	// names must be equal
	  	return 0
		})

		this.setState({
			stocks: stocksArrayCopy
		})
	}

	_sortingStockTable(sortParam){
		const stocksArrayCopy = this.props.stocks.slice(0);

		if(typeof stocksArrayCopy[0][sortParam] === 'number') {
			this._sortNumber(sortParam)
			
		} else if (typeof stocksArrayCopy[0][sortParam] === 'string') {
			this._sortString(sortParam)
		}
	}

	_sortStockList(e) {
		const sortField = e.target.getAttribute('data-sort')
		this._sortingStockTable(sortField)
	}

	render() {
		const style = {
			table: {
				width: "100%",

				tbody: {
					textAlign: "center"
				}
			}
		}

		const { stocks } = this.state

		return (
			<section>
				<table style={style.table}>
					<thead>
						<StockTitleRow _sortStockList={this._sortStockList}>
							<th data-sort='id'>Id</th>
							<th data-sort='name'>Name</th>
							<th data-sort='val'>Value</th>
							<th data-sort='status'>Status</th>
						</StockTitleRow>
					</thead>
					<tbody style={style.table.tbody}>
						{
							stocks.map( stock => <StockDetailRow key={stock.id} stock={stock} /> )
						}	
					</tbody>
				</table>
			</section>
		)
	}
}

export default StockLists

// <FilterSearch />