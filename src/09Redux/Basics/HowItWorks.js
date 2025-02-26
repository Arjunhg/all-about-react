let reduxState = {
    post: 0,
    name: "Arjun",
    age: 21,
}

/*

let prevState = state;
console.log(prevState===state); // true

function incr(){
    // state.count++;
    // state = {count: state.count+1}; // this will not work as it will remove other properties of state
    // state = {...state, count: state.count+1};
    return {...state, count: state.count+1}; // better way to compare Redux behavior! 🚀
}
let newObj = incr();
console.log(prevState===state);//true
console.log(state);
console.log(prevState);
console.log(newObj);
*/

/*In redux we create a functino, name can be anything must for convention it's better to name it reducer.(Reducer is a state updater function)
function stateUpdater(){
    // state = {...state, count: state.count+1}; ❌  
}
*/
/* Instead do this:
function reducer(state){
    return {...state, post: state.post+1};✅
}
// reduxState = reducer(reduxState);
// reduxState = reducer(reduxState);
// console.log(reduxState);
*/

/*We can other in other ways too. For that we pass action(plain JS object, contains a mandatory property called type) to reducer function.*/
function reducer(state, action){
    // console.log(action);
    if(action.type==='post/increment'){
        return {...state, post: state.post+1};
    }
    if(action.type==='post/decrement'){
        return {...state, post: state.post-1};
    }
    if(action.type==='post/incrementBy'){
        return {...state, post: state.post + action.payload};
    }
    if(action.type==='post/decrementBy'){
        return {...state, post: state.post - action.payload};
    }
    return state;
}

// let action = {// using this reducer will check whether to increase post or not 
//     type: 'post/increment' //conventionally we use this format
// }
reduxState = reducer(reduxState, {type: 'post/increment'});
console.log(reduxState);
reduxState = reducer(reduxState, {type: 'post/increment'});
console.log(reduxState);
reduxState = reducer(reduxState, {type: 'post/decrement'});
console.log(reduxState);
reduxState = reducer(reduxState, {type: 'post/incrementBy', payload: 10});
console.log(reduxState);
reduxState = reducer(reduxState, {type: 'post/decrementBy', payload: 5});
console.log(reduxState);
reduxState = reducer(reduxState, {type: 'post/nothing'}); //return state;
console.log(reduxState);
