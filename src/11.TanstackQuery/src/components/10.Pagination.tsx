import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const fetchTodo = (page=1, pageSize=10) => async() => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${pageSize}`)
    if(!res.ok) {
        throw new Error('Something went wrong')
    }
    return res.json()
}


export default function Pagination() {

    const [currPage, setCurrPage] = useState(1)
    const pageSize = 5

    const { data, error, isLoading  } = useQuery({
        queryKey: ["todos", currPage],
        queryFn: fetchTodo(currPage, pageSize)
    })

    const handleNextPage = () => {
        setCurrPage(prev => prev+1);
    }
    const handlePreviousPage = () => {
        setCurrPage(prev => Math.max(prev-1, 1))
    }

    if(isLoading) return <p>Loading...</p>
    if(error) return <p>Error: {error.message}</p>

    return(
        <div>
            <h1>Todos</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>

            <div className="flex gap-2">
                <button onClick={handlePreviousPage} disabled={currPage===1}>
                    Previous Page
                </button>
                <button onClick={handleNextPage}>Next Page</button>
            </div>
        </div>
    )
}