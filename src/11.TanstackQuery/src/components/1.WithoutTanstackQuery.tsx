import { useEffect, useState } from "react";


const WithoutTanstackQuery = () => {

    const [id, setId] = useState(1);
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const handleFetch = async() => {
            setIsLoading(true);
            setError(null);
            try {
                const data = await fetch(
                    `https://jsonplaceholder.typicode.com/posts/${id}`
                )
                if(!data.ok) {
                    throw new Error( `Error fetching the data: ${data.statusText}`);
                }
                const result = await data.json();
                setData(result);
            } catch (error:any) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        }
        handleFetch();
    }, [id])

    // if(isLoading) return <div>Loading...</div> 
    if(error) return <div>Error: {error}</div>

    return(
        <div className="p-4">
            {data && <pre className="border p-4 bg-gray-100">{JSON.stringify(data, null, 2)}</pre>}
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={() => setId((prevId) => prevId + 1)}>
                Next
            </button>
        </div>
    )

}

export default WithoutTanstackQuery;