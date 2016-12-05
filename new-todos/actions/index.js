let nextTodoId = 0;

export const addTodo = function addTodo (text) {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    }
};

export const toggleTodo = function (id) {
    return {
        type: 'TOGGLE_TODO',
        id
    }
};