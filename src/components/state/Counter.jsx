import React from 'react'

const Counter = () => {

    const [count, setCount] = React.useState(0)

    const inc = () => setCount(count+1);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={inc}>Increment</button>
    </div>
  )
}

export default Counter
