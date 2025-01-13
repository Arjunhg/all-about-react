import { useReducer } from "react";

type State = {
    count: number;
}
type Action = { type: 'increment'} | {  type: 'decrement'}

const reducer = (state: State, action: Action) => {
    switch (action.type){
        case 'increment':
            return {count: state.count + 1}
        case 'decrement':
            return {count: state.count - 1}
        default:
            return state;
    }
}
const Counter = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0})

    return (
        <main>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({type: 'increment'})}>Ince</button>
            <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
        </main>
    )
}
export default Counter;