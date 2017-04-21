/**
 * Created by chi on 7/26/16.
 */
import React from 'react';
import FilterLink from '../containers/FilterLink';

const Footer = () => {
    return (
        <p>
            Show:
            {" "}
            <FilterLink filter="SHOW_ALL">
                All
            </FilterLink>
            {" , "}
            <FilterLink filter="SHOW_COMPLETED">
                Completed
            </FilterLink>
            {" , "}
            <FilterLink filter="SHOW_ACTIVE">
                Active
            </FilterLink>
        </p>
    );
};

export default Footer;