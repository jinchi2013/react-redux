/**
 * Created by CalvinJ on 12/3/2016.
 */
import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTod';
//import VisibleTodoList from '../containers/VisibleTodoList';

const App = () => {
    return (
        <div>
            <AddTodo/>
            <Footer/>
        </div>
    );
};

export default App;