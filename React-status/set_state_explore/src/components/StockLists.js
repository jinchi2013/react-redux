import React, {Component} from 'react'
import FilterSearch from './StockTable/FilterSearch'
import StockTitleRow from './StockTable/StockTitleRow'
import StockDetailRow from './StockTable/StockDetailRow'

class StockLists extends Component {
	constructor(props) {
		super(props);
		this.state = {
			stocks: this.props.stocks,
		}

		this._sortStockList = this._sortStockList.bind(this)
		this._filterStockList = this._filterStockList.bind(this)
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

	_isAllFieldsInFilterStateFalse() {
		return Object.keys(this.props.filterState).filter( state => this.props.filterState[state] === true ).length === 0
	}

	_setStockState(stocks, param, field) {
		this.setState({
			stocks: stocks.filter( stock => stock[field].toString().indexOf(param.toUpperCase()) > -1 )
		})
	}

	_filterStockList(param, field) {
		if(this._isAllFieldsInFilterStateFalse()) {
			const wholeArray = this.props.stocks.slice(0)
			this._setStockState(wholeArray, param, field)
		} else {
			const currentArray = this.state.stocks.slice(0)
			this._setStockState(currentArray, param, field)
		}
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
		const { stockOrder } = this.props

		return (
			<section>
				<FilterSearch  _filterStockList={this._filterStockList} fields={ stockOrder } />
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
