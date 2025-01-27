export type Todo = {
    id: number;
    title: string;
    completed: boolean;
}

type TodoListProps = {
    todos: Todo | null;
}

const TodoList = ( { todos }: TodoListProps ) => {

    const { id, title } = todos || {};

    // return todos ? (
    //     <div>
    //         <p>
    //             <strong>Todo ID:</strong>{id}
    //         </p>
    //         <h1>
    //             <strong>Todo Title:</strong> {title}
    //         </h1>
    //     </div>
    // ) : (
    //     <p>Loading...</p>
    // )

    return todos?.map((todo) => (
        <div>
            <p>
                <strong>Todo ID:</strong>{todo.id}
            </p>
            <h1>
                <strong>Todo Title:</strong> {todo.title}
            </h1>
        </div>
    ))
}

export default TodoList;


// const delay = (ms: number) => new Promise(res => setTimeout(res, ms));