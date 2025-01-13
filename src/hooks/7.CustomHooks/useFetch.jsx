import { useEffect, useState } from "react"

const useFetch = (url) => {

    const [ data, setData ] = useState([]);

    useEffect(() => {
        // fetch(url)
        //     .then((res) => res.json())
        //     .then((data) => setData(data));
        async function fetchData(){
            const response = await fetch(url);
            const data = await response.json();
            setData(data);
        }
        fetchData();
    }, [url]);

    return data;
}
export default useFetch