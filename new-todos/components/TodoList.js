import React from 'react';
import Todo from './Todo';

let TodoList = function({ todos, onTodoClick }) {
    return(
        <ul>
            {
                todos.map( (todo)=>{
                    return(
                        <Todo
                            onClick={ ()=> onTodoClick(todo.id) }
                            key={ todo.id }
                            {...todo}
                        />
                    );
                })
            }
        </ul>
    );
};

TodoList.propTypes = {
    todos: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            id: React.PropTypes.number.isRequired,
            completed: React.PropTypes.bool.isRequired,
            text: React.PropTypes.string.isRequired
        })
    ).isRequired,
    onTodoClick: React.PropTypes.func.isRequired
}

export default TodoList;