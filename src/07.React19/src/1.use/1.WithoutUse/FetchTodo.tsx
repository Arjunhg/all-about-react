import React from 'react';

interface Todo {
    title: string;
}

const FetchTodo = () => {

    const [todo, setTodo] = React.useState<Todo | null>(null);
    const [loading, setLoading] = React.useState<boolean>(true);

    React.useEffect(()=>{
        const fetchData = async() => {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');

                if(!res.ok){
                    throw new Error('Failed to fetch data');
                }

                const data: Todo = await res.json();
                setTodo(data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    })

    if (loading) return <h1>Loading...</h1>
  return (
    <div>
      <h1>{todo?.title}</h1>
    </div>
  )
}

export default FetchTodo
