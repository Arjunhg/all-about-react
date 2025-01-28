type Todo = {
    id: number;
    title: string;
    body: string;
}

type TodoListProps = {
    todo: Todo | null;
}

const TodoList = ( { todo }: TodoListProps ) => {

    const { id, title } = todo || {};

    return todo ? (
        <div>
            <p>
                <strong>Todo ID:</strong>{id}
            </p>
            <h1>
                <strong>Todo Title:</strong>{title}
            </h1>
        </div>
    ): (
        <div>
            <h1>Loading....</h1>
        </div>
    )
}
export default TodoList;
