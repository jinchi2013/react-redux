const todo = function (state, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text:action.text,
                completed: false
            };
        case 'TOGGLE_TODO':
            if (state.id !== action.id) {
                return state;
            }
            return Object.assign(
                    {},
                    state,
                    {
                        completed: !state.completed
                    }
                );
        default: return state;

    }
};

const todos = function(state = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ];
        case 'TOGGLE_TODO':
            return state.map(t => todo(t, action));
        default:
            return state;
    }
};

export default todos;

export const getVisibleTodos = function(state, filter) {
    switch(filter) {
        case 'SHOW_ALL':
            return state;
        case 'SHOW_COMPLETED':
            return state.filter( (t)=>{ return t.completed; } );
        case 'SHOW_ACTIVE':
            return state.filter( (t)=>{ return !t.completed; } );
    }
};