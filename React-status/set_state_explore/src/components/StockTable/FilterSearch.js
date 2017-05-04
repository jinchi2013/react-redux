import React, { PureComponent } from 'react'
import FilterInput from './FilterInput'

class FilterSearch extends PureComponent {
  constructor(props) {
    super(props)
    this._handleInputChange = this._handleInputChange.bind(this)
  }

  _handleInputChange(e) {
    const field = e.target.getAttribute('name')
    const value = e.target.value
    this.props._filterStockList(value, field)
  }

  render() {
    const { fields } = this.props

    return (
      <div>
        {
          fields.map( (field, index) => (
              <FilterInput key={index} field={field} _handleInputChange={this._handleInputChange} />
            ) )
        }
      </div>
    )
  }
}

export default FilterSearch
