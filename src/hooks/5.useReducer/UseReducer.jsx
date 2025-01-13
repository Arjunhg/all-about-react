// useReducer returns a current state and a dispatch function while useState returns current state and a function to update current state

// The useReducer Hook is the alternative to useState Hook.
// If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.

// The useReducer Hook returns the current (state) and a (dispatch) method.

// State as the name suggest will be the "state" of your component.
// dispatch will allow you to change that state, Think of it is like [val, setVal]. Dispatch sends action to the reducer

// useReducer accepts two parameters (reducer, initialState)

// The reducer function contains your custom state logic
//  The initialState can be a simple value but generally will contain an object.

import { useReducer } from "react";

const UseReducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return(
        <div>
            <button onClick={() => dispatch({type: "increment"})}>+</button>
            <button onClick={() => dispatch({type: "decrement"})}>-</button>
            <button onClick={() => dispatch({type: "reset"})}>Reset</button>
            <h1>{state.count}</h1>
        </div>
    )
    
}

const initialState = { age: 0, count: 0 };

const reducer = (state, action) => {

        switch (action.type){
            case "increment":
                return {
                    ...state,
                    count: state.count + 1
                };
            case "decrement":
                return{
                    ...state,
                    count: state.count - 1
                };
            case "reset":
                return {
                    ...state,
                    count: 0
                };
            default:
                return state;
        }
};

export default UseReducer;


/*

// Using useState
import { useState } from "react";

const UseState = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    const reset = () => {
        setCount(0);
    };

    return (
        <div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
            <h1>{count}</h1>
        </div>
    );
};

export default UseState;
*/