import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList';

let getVisibleTodos = function(toDos, filter) {
    switch(filter) {
        case 'SHOW_ALL':
            return toDos;
        case 'SHOW_COMPLETED':
            return toDos.filter( (t)=>{ return t.completed; } );
        case 'SHOW_ACTIVE':
            return toDos.filter( (t)=>{ return !t.completed; } );
    }
};

let mapStateToProps = function(state) {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
};

let mapDispatchToProps = function(dispatch) {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id))
        }
    }
};

let VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList;