import { useState } from "react"

const UseState = () => {

    const [iValue, setIValue] = useState(0);
    const [aValue, setAValue] = useState("Arjun");
    const [bValue, setBValue] = useState(["one","two","three"]);
    const [cValue, setCValue] = useState({name: "Arjun", age: 22});

    const [counter, setCounter] = useState(0);

    const incr = () => setCounter(counter+1);
    const decr = () => setCounter(counter-1)
  return (
    <section>
      <h1>{counter}</h1>  
      <button onClick={incr}>+</button>
      <button onClick={decr}>-</button>
    </section>
  )
}

export default UseState
