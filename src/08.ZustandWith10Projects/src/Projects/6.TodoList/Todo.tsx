import useTodoStore from "./store";
import { useState } from "react";

const Todo = () => {

  const { todos, addTodo, removeTodo, toggleTodo } = useTodoStore();
  const [input, setInput] = useState("");

  const handleAddTodo = () => {
    if(input.trim() === "") return;
    addTodo({
      id: Date.now(),
      text: input,
      completed: false
    })
    setInput("");
  }

  return (

    <div className="min-h-screen flex items-center jusitfy-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
            To-Do List
        </h1>
        <div className="flex items-center mb-4">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow px-4 py-2 border rounded-l-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleAddTodo}
            className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add
          </button>
        </div>

        <ul className="space-y-3">
          {
            todos.map(todo => (
              <li
                key={todo.id}
                className="flex items-center justify-between bg-gray-50 p-3 rounded-lg shadow-sm"
              >
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      checked={todo.completed}
                      onChange={() => toggleTodo(todo.id)}
                      className="mr-2 form-checkbox h-5 w-5 text-blue-600"
                    />
                    <span
                      className={`${
                        todo.completed ? "line-through text-gray-600" : "text-gray-800"
                      }`}
                    >
                      {todo.text}
                    </span>
                  </div>
                  <button
                    onClick={() => removeTodo(todo.id)}
                    className="text-red-500 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    Delete
                  </button>
              </li>
            ))
          }
        </ul>
      </div>
    </div>

  )
}

export default Todo;