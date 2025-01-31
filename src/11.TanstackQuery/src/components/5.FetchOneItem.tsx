import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";

const fetchTodo = (id: number) => async () => {
    console.log(`🌐 Making API call for Todo ID: ${id}`);
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    if (!res.ok) {
        throw new Error("Something went wrong");
    }
    return res.json();
};

const FetchOneItem = () => {
    const [currId, setCurrId] = useState(1);

    const { 
        data, 
        isLoading, 
        error,
        isPlaceholderData,  // Will be true if data is from cache
        isFetching          // Will be true during background refetches
    } = useQuery({
        queryKey: ["todo", currId],
        /*
        queryFn: fetchTodo(currId)
        Never call the function directly in queryFn → instead, pass a function reference (() => fetchTodo(currId)).
        This ensures that React Query calls the function only when needed (e.g., when dependencies change).
        */
        queryFn: fetchTodo(currId),
        staleTime: 5000    // Consider data fresh for 5 seconds
    });

    useEffect(() => {
        if (data) {
            console.log(`📦 Data for Todo ${currId}:`, {
                fromCache: !isFetching,
                data
            });
        }
    }, [data, currId, isFetching]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error...</div>;

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Todo</h2>
            <div className="mb-4">
                <pre className="bg-gray-100 p-4 rounded">
                    {JSON.stringify(data, null, 2)}
                </pre>
            </div>
            <div className="flex gap-4">
                <button
                    onClick={() => setCurrId(currId - 1)}
                    disabled={currId <= 1}
                    className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
                >
                    Previous Todo
                </button>
                <button
                    onClick={() => setCurrId(currId + 1)}
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Next Todo
                </button>
            </div>
            <div className="mt-4 text-sm text-gray-600">
                {isFetching ? "🔄 Fetching..." : "✅ Using cached data"}
            </div>
        </div>
    );
};

export default FetchOneItem;




/*
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const fetchTodo = (id: number) => async() => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    if (!res.ok) {
        throw new Error("Something went wrong");
    }
    return res.json();
}

const FetchOneItem = () => {

    const [currId, setCurrId] = useState(1);

    const { data, isLoading, error } = useQuery({
        queryKey: ["todo", currId],
        /*
        queryFn: fetchTodo(currId)
        Never call the function directly in queryFn → instead, pass a function reference (() => fetchTodo(currId)).
        This ensures that React Query calls the function only when needed (e.g., when dependencies change).
        
       queryFn: fetchTodo(currId)
    })

    if(isLoading) return <div>Loading...</div>
    if(error) return <div>Error...</div>

    return(
        <div>
            <h1>Todo</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
            <button onClick={() => setCurrId(currId + 1)}>Next Todo</button>
        </div>
    )

}
export default FetchOneItem;

*/