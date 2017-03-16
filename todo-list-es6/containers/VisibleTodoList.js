import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import { getVisibleTodos } from '../reducers'
import TodoList from '../components/TodoList'

const mapStateToProps = function(state) {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
};

const mapStateToProps = (state) => ({
    todos: getVisibleTodos(state.todos)
})

const VisibleTodoList = connect(
    mapStateToProps,
    { onTodoClick: toggleTodo }
)(TodoList);

export default VisibleTodoList;