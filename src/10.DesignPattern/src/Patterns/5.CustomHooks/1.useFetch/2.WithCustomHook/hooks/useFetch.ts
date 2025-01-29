import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = <T,>(url: string): [T | null, boolean, Error | null] => {

    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {

        const fetchData = async() => {

            setLoading(true);
            setError(null);

            try {

                const res = await axios.get(url);
                setData(res.data);
                
            } catch (error: any) {
                console.error("Fetch Error:", error);
                setError(error);
                setData(null);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [url])

    return [data, loading, error];

}

export default useFetch;

// [T | null, boolean, Error | null] : return array of 3 element: return [data, loading, error]; : const [data, loading, error] = useFetch<User[]>('https://api.example.com/users');

// (T | null, boolean, Error | null)[] : return array of multiple element: return [[data, loading, error]]; // Return an array of tuples : const [[data, loading, error]] = useFetch<User[]>('https://api.example.com/users');































// import axios from "axios";
// import { useEffect, useState } from "react";

// const useFetch = <T,>(url: string): [T | null] => {

//     const [data, setData] = useState<T | null>(null);

//     useEffect(() => {

//         const fetchData = async() => {
//             try {
                
//                 const res = await axios.get(url);
//                 setData(res.data);
//             } catch (error) {
//                 console.error("Fetch Error:", error);
//                 setData(null);
//             }
//         }

//         fetchData();
//     }, [url])

//     return [data];
// }

// export default useFetch;


// [T | null] : return array of single element
// (T | null)[] : return array of multiple element