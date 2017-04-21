/**
 * Created by chi on 7/26/16.
 */
import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import UndoRedo from '../containers/UndoRedo';

const App = () => (
    <div>
        <AddTodo/>
        <VisibleTodoList/>
        <Footer/>
        <UndoRedo/>
    </div>
);

export default App;