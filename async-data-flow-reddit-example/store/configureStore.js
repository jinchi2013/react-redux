import { createStore, applyMiddleware } from 'redux';

// Redux Thunk middleware allows you to write action creators that return a function instead of an action.
// The thunk can be used to delay the dispatch of an action,
// or to dispatch only if a certain condition is met.
// The inner function receives the store methods dispatch and getState as parameters.
import thunkMiddleware from 'redux-thunk';

import createLogger from 'redux-logger';
import rootReducer from '../reducers';

const configureStore = (preloadedState)=>{
    let store = createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(thunkMiddleware, createLogger())
    );

    if(module.hot) {
        //Enable Webpack hot module replacement for reducer
        module.hot.accept('../reducers', ()=>{
            let nextRootReducer = require('../reducers').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
};

export default configureStore;