import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const getRandomNumber = () => {
    return Promise.resolve(Math.random());
}

const Deduplication = () => {

    const { data } = useQuery({
        queryKey: ["random"],
        queryFn: getRandomNumber
    })

    return <div>Random Number is: {data}</div>
}

const DeduplicationDemo = () => {
    const [count, setCount] = useState(1);

    return (
        <div className="p-6 max-w-2xl mx-auto">
            <div className="mb-6 space-y-4">
                <h2 className="text-xl font-bold">React Query Deduplication Demo</h2>
                <p className="text-gray-600">
                    This demo shows how React Query deduplicates multiple instances of the same query.
                    Open your browser console to see how many times getRandomNumber() is called!
                </p>
                <div className="flex items-center gap-4">
                    <button 
                        onClick={() => setCount(prev => prev + 1)}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Add Instance
                    </button>
                    <button 
                        onClick={() => setCount(1)}
                        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                    >
                        Reset
                    </button>
                </div>
            </div>
            
            <div className="space-y-4">
                {Array.from({ length: count }, (_, index) => (
                    <div key={index} className="flex items-center gap-4">
                        <span className="text-gray-500 w-8">#{index + 1}:</span>
                        <Deduplication />
                    </div>
                ))}
            </div>
        </div>
    );
};
// export default DeduplicationDemo;
export default Deduplication;