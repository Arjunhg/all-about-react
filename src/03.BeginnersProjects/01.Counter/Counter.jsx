import { useState } from "react";
import "./Counter.css";

const Counter = () => {

    const [count, setCount] = useState(0);

    const incr = () => setCount(count+1);
    const decr = () => setCount(count-1);
    return(
        <>
            <div className="container">
                <h1 className="number">{count}</h1>
            </div>

            <section className="btns-container">
                <button onClick={incr} className="increement">+</button>
                <button onClick={decr} className="increement">-</button>
            </section>
        </>
    )
}

export default Counter;