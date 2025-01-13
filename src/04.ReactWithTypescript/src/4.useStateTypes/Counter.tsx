import { useState } from "react";

const Counter = () => {

    const[count, setCount] = useState<number>(0);

    // const incr = () => {
    //     setCount(count + 1);
    // }

    // const decr = () => {
    //     setCount(count - 1);
    // }

    return(
        <main>
            <h1>Counter App</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </main>
    )
}

export default Counter;