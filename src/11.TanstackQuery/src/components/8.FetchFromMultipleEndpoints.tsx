import { useQueries } from "@tanstack/react-query";
import { useState } from "react";

const fetchTodos = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    if(!response.ok) {
        throw new Error("Something went wrong");
    }
    return response.json();
}

const fetchPosts = async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if(!response.ok) {
        throw new Error("Something went wrong");
    }
    return response.json();
}

const FetchFromMultipleEndpoints = () => {

    const [currTodoId ,setCurrTodoId] = useState(1);
    const [currPostId, setCurrPostId] = useState(1);

    const results = useQueries({
        queries: [
            {
                queryKey: ["todos"],
                queryFn: fetchTodos
            },
            {
                queryKey: ["posts"],
                queryFn: fetchPosts
            }
        ]
    })

    const [todosQueries, postsQueries] = results;

    /*
        results = [
            { data: todosData, isLoading: false, error: null },  // Result of fetchTodos
            { data: postsData, isLoading: false, error: null }   // Result of fetchPosts
        ];
    */

    if(todosQueries.isLoading || postsQueries.isLoading) {
        return <div>Loading...</div>
    }

    if(todosQueries.error || postsQueries.error) {
        <div>
            An error occurred:
            {todosQueries.error?.message || postsQueries.error?.message}
        </div>
    }

    const todoData = todosQueries.data;
    const postData = postsQueries.data;
    console.log(todoData.length, postData.length);

    const handleNextTodoClick = () => {
        setCurrTodoId(prev => Math.min(prev+1, todoData.length));
    }

    const handleNextPostClick = () => {
        setCurrPostId(prev => Math.min(prev+1, postData.length));
    }

    return(
        <div>
            <h1>Todos</h1>
            <pre>
                {
                    JSON.stringify(todoData[currTodoId-1], null, 2)
                }
            </pre>
            <button onClick={handleNextTodoClick}>Next Todo</button>

            <h1>Post</h1>
            <pre>
                {
                    JSON.stringify(postData[currPostId-1], null, 2)
                }
            </pre>
            <button onClick={handleNextPostClick}>Next Post</button>
        </div>
    )
    
     
}

export default FetchFromMultipleEndpoints;