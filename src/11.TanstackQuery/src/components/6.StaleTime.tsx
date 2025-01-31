import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const fetchData = async () => {
    console.log('🔄 Fetch function called - Making network request');
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");

    if (!res.ok) {
        throw new Error("Something went wrong");
    }

    const data = await res.json();
    console.log('✅ Network request completed');
    return data;
}

export default function StaleTime() {
    console.log('🔄 Component rendered');

    const { data, error, isLoading, isFetching, isStale, dataUpdatedAt } = useQuery({
        queryKey: ["todos"],
        queryFn: fetchData,
        staleTime: 10000, // 10 seconds
        refetchOnMount: true,
    });

    useEffect(() => {
        if (data) {
            console.log('✨ Query successfully completed');
            console.log(`📅 Data last updated at: ${new Date(dataUpdatedAt).toLocaleTimeString()}`);
            console.log(`🕐 Time until data becomes stale: ${(10000 - (Date.now() - dataUpdatedAt))/1000}s`);
        }
        if (isStale) {
            console.log('🥀 Data is now stale');
        }
    }, [data, isStale, dataUpdatedAt]);

    // Log state changes
    console.log({
        isLoading,
        isFetching,
        isStale,
        dataPresent: !!data,
        timestamp: new Date().toLocaleTimeString()
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h1>Data</h1>
            <div>
                <p>Status Indicators:</p>
                <ul>
                    <li>Is Fetching: {isFetching ? 'Yes' : 'No'}</li>
                    <li>Is Stale: {isStale ? 'Yes' : 'No'}</li>
                    <li>Last Updated: {new Date(dataUpdatedAt).toLocaleTimeString()}</li>
                </ul>
            </div>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}




/*
import { useQuery } from "@tanstack/react-query";

const fetchData = () => async () => {

    const res = await fetch("https://jsonplaceholder.typicode.com/todos");

    if(!res.ok) {
        throw new Error("Something went wrong");
    }

    return res.json();
}

export default function StaleTime() {

    const { data, error, isLoading } = useQuery({
        queryKey: ["todos"],
        queryFn: fetchData(),
        staleTime: 10000 // 10 seconds
    })

    if(isLoading) return <div>Loading...</div>
    if(error) return <div>Error: {error.message}</div>

    return (
        <div>
            <h1>Data</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    )

}
    */