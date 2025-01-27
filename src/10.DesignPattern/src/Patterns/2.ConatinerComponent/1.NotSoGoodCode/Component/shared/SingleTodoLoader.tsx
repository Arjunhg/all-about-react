import { ReactNode, useEffect, useState } from "react";
import type { Todo } from "../Details/TodoList";
import axios from "axios";
import React from "react";

type SingleTodoLoaderProps = {
    children: ReactNode;
}

type ChildComponentProps = {
    todos: Todo | null;
}

const SingleTodoLoader = ( { children }: SingleTodoLoaderProps ) => {

    const [todos, setTodos] = useState<Todo | null>(null);

    useEffect(() => {
        (
            async() => {
                const res = await axios.get<Todo>(`https://jsonplaceholder.typicode.com/todos`);

                setTodos(res.data);
            }
        )();
    }, []) 

    return(
        <>
            {
                React.Children.map(children, (child: any) => {
                    if(React.isValidElement<ChildComponentProps>(child)) {
                        return React.cloneElement(child, {
                            todos
                        })
                    }
                    return child;
                })
            }
        </>
    )

}

export default SingleTodoLoader;