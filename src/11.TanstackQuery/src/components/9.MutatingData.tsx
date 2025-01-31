import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
interface Todo {
    id?: number;
    title: string;
    completed: boolean;
}

const postTodo = async (newTodo: Todo) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify(newTodo),
        headers: {
            'Content-type': 'application/json'
        }
    })
    if(!res.ok) {
        throw new Error('Something went wrong')
    }
    return res.json()
}
 

export default function MutatingData() {

    const [title, setTitle] = useState('')

    const queryClient = useQueryClient()

    const { mutate, error, status } = useMutation<Todo, Error, Todo>({
        mutationFn: postTodo,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["todos"] })
        },
        onError: (error) => {
            console.log("Error occured",error)
        }
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(title.trim() === '') {
            confirm('Title is required')
            return
        }
        mutate({title, completed: false})
        setTitle('')
    }

    return(
        <div>
            <h1>Create New Todo</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Enter todo title"/>

                <button type="submit" disabled={status === "pending"}>
                    {status === "pending" ? "Adding..." : "Add Todo"}
                </button>

            {error && <p style={{color: 'red'}}>Error Occured: {error.message}</p>}
            {status === "success" && <p style={{color: 'green'}}>Todo Added Successfully</p>}
            </form>
        </div>
    )
}