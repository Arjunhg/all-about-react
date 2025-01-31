import  { useEffect, useState } from 'react';

export default function RaceCondition(){

    const [id, setId] = useState(1);
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let rc = false;
    
        const handleFetch = async() => {
            console.log(`Starting fetch for id ${id}`);  // Add this
            setIsLoading(true);
            setError(null);
    
            try {

                await new Promise(res => setTimeout(res, 2000));

                const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    
                if (rc) {
                    console.log(`🚫 Race condition prevented: Request for id ${id} was cancelled`);
                    return;
                }
    
                if(!res.ok){
                    throw new Error(`Error fetching the data: ${res.statusText}`);
                }
    
                const result = await res.json();
                console.log(`✅ Request for id ${id} completed successfully`);
                setData(result);
    
            } catch (error:any) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        }
        handleFetch();
    
        return () => {
            rc = true;
            console.log(`🔄 Effect cleanup triggered for id ${id}`);
        }
    }, [id])

    if(isLoading) return <div>Loading...</div>
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

/*

// Initial state: id = 4
// 1. id=4 request completes normally
✅ Request for id 4 completed successfully
🔄 Cleanup for id 4 (rc4 = true)

// 2. Start fetch for id=5 (with 2 sec delay)
let rc5 = false
// ...waiting for fetch...

// 3. Before 5's fetch completes, click Next for id=6
🔄 Cleanup for id 5 (rc5 = true)  // This prevents id=5's pending fetch from updating state
let rc6 = false
// Start fetch for id=6

// 4. After 2 seconds, id=5's fetch completes but sees rc5 is true
🚫 Race condition prevented: Request for id 5 was cancelled

// 5. id=6's fetch completes normally
✅ Request for id 6 completed successfully

*/