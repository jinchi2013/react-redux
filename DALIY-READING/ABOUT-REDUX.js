/*
	More state management tool to study in the future

	MobX less complicated and less verbose

	Relay and Falcor

	they must be backed by GraphQL and Falcor Server respectively

	and all Relay state corresponds to some server-persisted data 

*/

/*

	About Isolation.

*/

/*
	The main purpose of the redux is to isolate state management from I/O side effects
	such as rendering the view or working with the network

	Given the same state, the view will always render the same output

*/

/*
	The Flux In a nutshell: A one way data flow architechture

	1. First, we get into a known, fixed state…

	2. When we render the view. 
	   Nothing can change the state again for this render loop.

	3. Given the same state, the view will always render the same way.

	4. Event listeners listen for user input and network request handlers. 
	   When they get them, actions are dispatched to the store.

	5. When an action is dispatched, 
	   the state is updated to a new known state and the sequence repeats. 
	   Only dispatched actions can touch the state.

*/

/*
	An action object is a transaction record, 
*/

{
	type: 'ADD_TODO',
	payload: 'cool stuff'
}

/*  
	Benefit: Given the same initial state and the same transactions in the same order, 
			 you always get the same state as a result.

	1. Easy testability

	2. Easy undo/redo

	3. Time travel debugging

	4. Durability — Even if the state gets wiped out, 
	   if you have a record of every transaction, you can reproduce it.(action objects)

*/

/*
	About the reducer 

	Redux applies reducers to a stream of action objects, 
	which mean it will accumulate payload to current state

	Reducers Must be Pure Functions

	what make a function impure : current time, I/o(user, disk, network), random number
						side effect : mutation the original object and array, 
										which pass in function by reference
										if you update these object and array, the original 
										objects and arrays will also update
										that is side effect

	What's more
	Reducer must be the single source of truth

	When you store any state in a Redux store, 
	any access to that state should be made through Redux. 
	Failing to adhere to this principle can result in stale data 
	or the kinds of shared state mutation bugs that 
	Flux and Redux were invented to solve.

*/

/*
	Use Selectors for Calculated state and decoupling

	when you have to change the date structure of your state, 
	you can use a SELECTOR
*/

export const getViewState = state => Object.assign({}, state);

// For example if we want recentlyActiveUsers from the state

export const getViewState = state => ({
	...state,
	recentlyActiveUsers: [...new Set(state.chatLog.map(chat => chat.user))]
})

// An array of recentlyActiveUsers would be selected from current state and returned

/*
	The benefits of the SELECTOR

	1. the complexity of your reducers & components
	2. Decouple the rest of your app from your state shape
	3. Obey the single source of truth principle, even within your reducer
*/

// Following is test for selector by tape

describe('getViewState', ({ test }) => {
  test('with chats', ({ same, end }) => {
    const msg = 'should return the state needed to render';
    const chats = [
      createChat({
        id: 2,
        user: 'Bender',
        msg: 'Does Barry Manilow know you raid his wardrobe?',
        timeStamp: 451671300000
      }),
      createChat({
        id: 2,
        user: 'Andrew',
        msg: `Hey let's watch the mouth, huh?`,
        timeStamp: 451671480000 }),
      createChat({
        id: 1,
        user: 'Brian',
        msg: `We accept the fact that we had to sacrifice a whole Saturday in
              detention for whatever it was that we did wrong.`,
        timeStamp: 451692000000
      })
    ];

    const state = chats.map(addChat).reduce(reducer, reducer());

    const actual = getViewState(state);
    const expected = Object.assign(createState(), {
      chatLog: chats,
      recentlyActiveUsers: ['Bender', 'Andrew', 'Brian']
    });

    same(actual, expected, msg);
    end();
  });
});


