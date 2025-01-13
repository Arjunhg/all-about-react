import React from 'react'

const TodoList = () => {

    const [todos, setTodos] = React.useState([]);
    const [inputValue, setInputValue] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim()){
            setTodos([...todos, inputValue]);
            setInputValue("");
        }
    }

  return (
    <div>
      <h1>Todo List</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} placeholder='Enter todo' onChange={(e) => setInputValue(e.target.value)}/>
        <button type='submit'>Add Todo</button>
      </form>

      <ul>
        {todos.map((todos, index) => (
            <li key={index}>{todos}</li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
