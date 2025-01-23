import { create } from "zustand";

type Todo = {
    id: number;
    text: string;
    completed: boolean;
}

type TodoStore = {
    todos: Todo[];
    addTodo: (todo: Todo) => void;
    removeTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
}

const useTodoStore = create<TodoStore>(set => ({
    todos: [],
    addTodo: (todo: Todo) => set(state => ({
        todos: [...state.todos, todo]
    })),
    removeTodo: (id:number) => set(state => ({
        todos: state.todos.filter(todo => todo.id !== id)
    })),
    toggleTodo: (id: number) => set(state => ({
        todos: state.todos.map(todo => todo.id === id ? {
            ...todo,
            completed: !todo.completed
        } : todo)
    }))
}))

export default useTodoStore;