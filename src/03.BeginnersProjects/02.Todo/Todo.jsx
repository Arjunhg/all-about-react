import { useState } from "react";
import "./Todo.css";

const Todo = () => {

    const [todo, setTodo] = useState([]);
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodo([...todo, {text: input.trim(), id: Date.now()}]);
        setInput("");
    }

    const removeTodo = (id) => {
        setTodo((todos) => todos.filter((t) => t.id !== id));
    }

    return(
        <div container>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="new todo"/>
            <button onClick={handleSubmit}>Add</button>

            <ul className="todos-list">
                {
                    todo.map(({text, id}) => (
                        <li key={id} className="todo">
                            <span>{text}</span>
                            <button className="close" onClick={() => removeTodo(id)}>X</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Todo;