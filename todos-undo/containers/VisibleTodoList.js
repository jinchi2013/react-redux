/**
 * Created by chi on 7/26/16.
 */
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, filter) =>{
    switch (filter){
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter((t)=>{
                return t.completed;
            });
        case 'SHOW_ACTIVE':
            return todos.filter( (t)=> {
                return !t.completed;
            } )
    }
};

const mapStateToProps = (state) => {
    console.log(state);
    return {
        todos: getVisibleTodos(state.todos.present, state.visibilityFilter)
    }
};

const mapDispatchToProps = (dispatch)=>{
    return {
        onTodoClick: (id)=>{
            dispatch(toggleTodo(id));
        }
    }
};

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList;