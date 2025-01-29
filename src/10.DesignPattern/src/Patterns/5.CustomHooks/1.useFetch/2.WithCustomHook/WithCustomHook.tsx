import useFetch from "./hooks/useFetch";

type Todo = {
    id: number;
    title: string;
    completed: boolean;
}

const WithCustomHook = () => {

    const [data, loading, error] = useFetch<Todo[]>("https://jsonplaceholder.typicode.com/todos");

    if(loading) return <h1>Loading...</h1>
    if(error) return <h1>Error...</h1>

    return(
        <>
            {
                data && data.map(todo => (
                    <ul key={todo.id}>
                        <li>{todo.title}</li>
                    </ul>
                ))
            }
        </>
    )
}

export default WithCustomHook;