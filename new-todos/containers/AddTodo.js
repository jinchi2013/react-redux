import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

let AddTodo = function({dispatch}) {
    let input;

    return (
        <div>
            <form
                onSubmit={(e)=>{
                    e.preventDefault();
                    if(!input.value.trim()) {
                        return;
                    }
                    dispatch(addTodo(input.value));
                    input.value = '';
                }}>
                    <input ref = { (node) => { input = node } } />
                    <button type="submit">Add Todo</button>
            </form>
        </div>
    );
}

//connect() method connect the component to the <Provider store={store}>
AddTodo = connect()(AddTodo);
export default AddTodo;
