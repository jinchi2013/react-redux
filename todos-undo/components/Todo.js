/**
 * Created by chi on 7/26/16.
 */
import React from 'react';

const Todo = ( { onClick, completed, text } ) => {
    return (
        <li
            onClick = {onClick}
            style = {
                {
                    textDecoration: completed ? 'line-through' : 'none'
                }
            }
        >
            {text}
        </li>
    );
};

Todo.propTypes = {
    onClick: React.PropTypes.func.isRequired,
    completed: React.PropTypes.bool.isRequired,
    text: React.PropTypes.string.isRequired
};

export default Todo;