import { useSelector, useDispatch } from 'react-redux';
import { incr, decr } from '../app/features/counter/counterSlice'

const Counter = () => {

    // read data from store
    const count = useSelector(state => state.counter.value);
    // change date by sending actions to store
    const dispatch = useDispatch();

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch(incr())}>+</button>
            <button onClick={() => dispatch(decr())}>-</button>
        </div>
    )
}

export default Counter;