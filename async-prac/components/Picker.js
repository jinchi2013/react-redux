/**
 * Created by chi on 7/28/16.
 */
import React from 'react';

export default class Picker extends React.Component{
    render() {
        const { value, onChange, options } = this.props;
        return (
            <span>
                <h1>{value}</h1>
                <select
                    onchange={ (e)=>{ onChange(e.target.value) } }
                    value   ={value}
                >
                    {
                        options.map( (option) => {
                            return (
                                <option value={option} key={option}>
                                    {option}
                                </option>
                            );
                        } )
                    }
                </select>
            </span>
        );
    }
}

Picker.propTypes = {
    options: React.PropTypes.arrayOf(
        React.PropTypes.string.isRequired
    ).isRequired,
    value: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired
};