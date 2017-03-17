// Write the Reducer with tests
const counter = (state = 0, action) => {
	switch (action.type) {
		case 'INCREMENT':return state+1
		case 'DECREMENT':return state-1
		default: return state
	}
}

expect(
	counter(0, {'INCREMENT'})
	).toEqual(1);

// this counter is a reducer
const counter = (state=0, action) => {
	switch(action.type) {
		case 'INCREMENT':
			return state + 1
		case 'DECREMENT':
			return state - 1
		default:
			return state
	}
}

const {createStore} = Redux
const store = createStore(counter)

//==============================================

console.log(store.getState()); // => 0

store.dispatch({type: 'INCREMENT'})

console.log(store.getState()) // => 1

//================================================

const render ()=>{
	document.body.innerText = store.getState()
}

store.subscribe(render) // bind the callback to the store
						// one the state change, it will tigger the callback
render() // this used to call initial state

document.addEventListener('click', ()=>{
	store.dispatch({type:'INCREMENT'}) // this will trigger the counter of INCREMENT case
});

// redux store implementation
const createStore = (reducer) => {
	let state
	let listeners = []

	const getState = ()=> state;
	const dispatch = (action) => {
		state = reducer(state, action)
		listeners.forEach(function(listener => listener()));
	}
	const subscribe = (listener)=>{
		listeners.push(listener)
		return ()=> {
			listeners = listeners.filter(l => l !== listener)
		}
	}

	dispatch({});

	return { getState, dispatch, subscribe }
}






