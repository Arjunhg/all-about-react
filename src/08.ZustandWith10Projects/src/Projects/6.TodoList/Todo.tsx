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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 p-4">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md border border-gray-100">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            To-Do List
        </h1>
        <div className="flex items-center mb-6 gap-2">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new task..."
            className="flex-grow px-4 py-3 border-2 rounded-lg border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all duration-200"
            onKeyPress={(e) => e.key === 'Enter' && handleAddTodo()}
          />
          <button
            onClick={handleAddTodo}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 active:transform active:scale-95 transition-all duration-200 flex items-center gap-2 font-semibold shadow-md hover:shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            Add
          </button>
        </div>

        <ul className="space-y-3 max-h-[60vh] overflow-y-auto custom-scrollbar">
          {todos.length === 0 ? (
            <li className="text-center text-gray-500 py-8">
              No tasks yet. Add some tasks to get started!
            </li>
          ) : (
            todos.map(todo => (
              <li
                key={todo.id}
                className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 group"
              >
                  <div className="flex items-center gap-3 flex-1">
                    <input 
                      type="checkbox" 
                      checked={todo.completed}
                      onChange={() => toggleTodo(todo.id)}
                      className="form-checkbox h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 transition-all duration-200 cursor-pointer"
                    />
                    <span
                      className={`${
                        todo.completed 
                          ? "line-through text-gray-400" 
                          : "text-gray-700"
                      } font-medium transition-all duration-200`}
                    >
                      {todo.text}
                    </span>
                  </div>
                  <button
                    onClick={() => removeTodo(todo.id)}
                    className="text-gray-400 hover:text-red-500 p-2 rounded-full hover:bg-red-50 opacity-0 group-hover:opacity-100 transition-all duration-200"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  )
}

export default Todo;