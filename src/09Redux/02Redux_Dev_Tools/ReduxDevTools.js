import {createStore} from 'redux';

const initialState = {
    post: 0,
    name: "Arjun",
    age: 21,
}

const INCREMENT = 'post/increment'
const DECREMENT = 'post/decrement'
const INCREMENTBY = 'post/incrementBy'

function reducer(state=initialState, action){
    switch (action.type){
        case INCREMENT:
            return {...state, post: state.post+1};
        case INCREMENTBY:
            return {...state, post: state.post + action.payload
            };
        case DECREMENT:
            return {...state, post: state.post-1};
        default:
            return state;
    }
}

// const store = createStore(reducer, __REDUX_DEVTOOLS_EXTENSION__()); But some browsers don't support this as redux dev tools is not installed in them.
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.()); //this is called store enhancer, just like middleware

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch({type: INCREMENT});
store.dispatch({type: DECREMENT});
store.dispatch({type: INCREMENTBY, payload: 5});