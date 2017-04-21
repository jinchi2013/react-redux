/**
 * Created by chi on 7/28/16.
 */
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';

const configureStore = (preloadedState) => {
    const store = createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(thunkMiddleware, createLogger())
    );

    if(module.hot){
        //Enable Webpack hot module replacement for reducer
        module.hot.accept('../reducers', ()=>{
            const nextRootReducer = require('../reducers').default;
            store.replaceReducer(nextRootReducer);
        })
    }

    return store;
};

export default configureStore;