/*
--> Plain JavaScript in the browser does not support importing Node.js modules like Redux directly.
--> Parcel is a bundler that processes and resolves these dependencies.
--> Running `npx parcel index.html` allows us to use `import` statements for modules inside `node_modules`.
--> Make sure to add type="module" in the script tag in index.html.
*/
import { createStore } from 'redux'; //createStore is default export from redux. Instead use redux toolkit configureStore

// console.dir(createStore);
// createStore(reducer); //must give reducer

const initialState = {
    post: 0,
    name: "Arjun",
    age: 21,
}

const INCREMENT = 'post/increment'
const DECREMENT = 'post/decrement'
const INCREASE_BY = 'post/increaseBy'
const DECREASE_BY = 'post/decreaseBy'

/*
function reducer(state=initialState, action){
    // console.log(action);
    if(action.type===INCREMENT){
        return {...state, post: state.post+1};
    }
    if(action.type===DECREMENT){
        return {...state, post: state.post-1};
    }
    if(action.type===INCREASE_BY){
        return {...state, post: state.post + action.payload};
    }
    if(action.type===DECREASE_BY){
        return {...state, post: state.post - action.payload};
    }
    return state;
}
*/

function reducer(state=initialState, action){
    switch (action.type){
        case INCREMENT:
            return {...state, post: state.post+1};
        case DECREMENT:
            return {...state, post: state.post-1};
        case INCREASE_BY:
            return {...state, post: state.post + action.payload};
        case DECREASE_BY:
            return {...state, post: state.post - action.payload};
        default:
            return state;
    }
}




const store = createStore(reducer);
// console.log(store); // have many like dispatch, getState, subscribe etc.
// console.log(store.getState()); // undefined as in reducer we need to pass some initial state as state = {}

// Updating the state
/*
store.dispatch({type: 'post/increment'}) // must past action. These action are required for reducer, but since we can't call reducer directly we use dispatch to call reducer.
console.log(store.getState());
store.dispatch({type: 'post/incrementBy', payload: 5})
console.log(store.getState());
store.dispatch({type: 'post/decrementBy', payload: 3})
console.log(store.getState());
*/
//Instead of writing this we can use subscribe method of store
store.subscribe(() => {
    console.log(store.getState());
})
store.dispatch({type: INCREMENT});
store.dispatch({type: INCREASE_BY, payload: 5});
store.dispatch({type: DECREASE_BY, payload: 3});