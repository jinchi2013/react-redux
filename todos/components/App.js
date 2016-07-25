import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodolist from './containers/VisibleTodolist';

const App = ()=> {
	<div>
		<AddTodo />
		<VisibleTodolist />
		<Footer />
	</div>
}

export default App;