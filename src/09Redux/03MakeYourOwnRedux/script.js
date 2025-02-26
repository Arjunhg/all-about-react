import { myCreateStore } from './my-redux';

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
// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.()); 
const myStore = myCreateStore(reducer);
console.log("My store", myStore);

myStore.subscribe(() => {
    console.log(myStore.getState());
})
const unsubscribe1 = myStore.subscribe(() => {
    console.log("hi");
})
const unsubscribe2 = myStore.subscribe(() => {
    console.log("Hello");
})
console.log("My store", myStore.getState());

myStore.dispatch({type: INCREMENT});
unsubscribe1();
// console.log("My store", myStore.getState());
myStore.dispatch({type: DECREMENT});
myStore.dispatch({type: INCREMENT});
unsubscribe2();
myStore.dispatch({type: INCREMENT});
myStore.dispatch({type: INCREMENTBY, payload: 5});