import React from 'react'

const FilterInput = ({ field, _handleInputChange }) => {
	return (
			<div>
				<span>{field.toUpperCase()} : </span>
        <input name={field} onChange={_handleInputChange} />
      </div>
		)
}

export default FilterInput