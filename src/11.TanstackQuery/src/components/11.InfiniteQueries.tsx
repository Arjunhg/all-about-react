import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useRef } from "react";

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

const fetchTodos = async ({ pageParam }: { pageParam: number }) => {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos?_page=${pageParam}&_limit=10`
    );

    if (!response.ok) {
        throw new Error("Something went wrong");
    }

    return response.json();
};

export default function InfiniteQueries() {
    const {
        data,
        error,
        isLoading,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
    } = useInfiniteQuery<Todo[], Error>({
        queryKey: ["todos"],
        queryFn: fetchTodos as any,
        initialPageParam: 1,
        getNextPageParam: (lastPage, pages) => lastPage.length === 10 ? pages.length + 1 : undefined,
    });

    const loadMoreRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
                    fetchNextPage();
                }
            },
            {
                root: null,
                rootMargin: "100px",
                threshold: 1.0,
            }
        );

        if (loadMoreRef.current) {
            observer.observe(loadMoreRef.current);
        }

        return () => {
            if (loadMoreRef.current) {
                observer.unobserve(loadMoreRef.current);
            }
        };
    }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error</div>;

    return (
        <div>
            <h1>Todos</h1>
            <div>
                {data?.pages.map((page, index) => (
                    <div key={index}>
                        {page.map((todo: Todo) => (
                            <pre key={todo.id}>{JSON.stringify(todo, null, 2)}</pre>
                        ))}
                    </div>
                ))}
            </div>
            <div ref={loadMoreRef} style={{ height: "1px" }}>
                {isFetchingNextPage && <div>Loading more...</div>}
            </div>
        </div>
    );
}
