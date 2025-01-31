import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"

const fetchTodo = async (id: number) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    if (!response.ok) {
        throw new Error("Something went wrong")
    }
    return response.json()
    
}


export default function RefetchInterval(){

    const [currId, setCurrId] = useState(197)

    const { data, error, isLoading } = useQuery({
        queryKey: ["todo", currId],
        queryFn: () => fetchTodo(currId),
        refetchInterval: 5000
    })

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrId(prevId => (prevId < 200 ? prevId + 1 : 1))
            console.log("useEffect interval run and currId is", currId)
        }, 5000)

        return () => clearInterval(interval)
    }, []);
    // put [currId] if you want to see the currId change in the console

    if(isLoading) return <div>Loading...</div>
    if(error) return <div>Error: {error.message}</div>

    return (
        <div>
          <h1>Todo</h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
          <button
            onClick={() =>
              setCurrId((prevId) => (prevId < 200 ? prevId + 1 : 1))
            }
          >
            Next Todo
          </button>
        </div>
      );


}