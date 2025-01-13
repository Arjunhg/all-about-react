// We setup useEffect hook to run some code WHEN
//  👉 Component renders for the (First Time)
//  👉  & WHENEVER it re-renders
//  👉  & some data in our component changed.

import { useEffect, useState } from "react";

// 1. Without the empty array
// const App = () => {
//   const [value, setValue] = useState(0);
//   useEffect(() => {
//     console.log("call useEffect");
//     document.title = `Increment (${value})`;
//   });

//   return (
//     <>
//       <h2>{value}</h2>
//       <button onClick={() => setValue(value + 1)}>Click me</button>
//     </>
//   );
// };

// 2. useEffect - Conditional
// You cannot wrap hook with conditional statement
// If you want logic you'll have to put it inside your hook.
// const UseEffect = () => {
//     const [value, setValue] = useState(0);

//     useEffect(() => {
//         console.log("call useEffect");
//         if(value > 5){
//             document.title = "Can't Increment after 5"
//         }  
//     })
//     return <>
//         <h1>{value}</h1>
//         <button onClick={() => setValue(value + 1)}>Click Me</button>
//     </>
// }

// 3. useEffect - Dependency List
// empty array means (it will ONLY run on initial render)
// passing value to array means (it will re-render when that value changed)
// const UseEffect = () => {
//   const [value, setValue] = useState(0);
//   const [something, setSomething] = useState(0);

//   useEffect(() => {
//     console.log("call useEffect");
//     if (value > 0) {
//       document.title = `Increment (${value})`;
//     }
//   }, [value]);

//   return (
//     <>
//       <h2>{value}</h2>
//       <button onClick={() => setValue(value + 1)}>Click me</button>
//       <button onClick={() => setSomething(value + 1)}>Click Something</button>
//     </>
//   );
// };

// 4. Clean up: Can prevent memory leak
// const UseEffect = () => {
//     const [size, setSize] = useState(window.innerWidth);
//     console.log(size);

//     const checkSize = () => setSize(window.innerWidth);
//     useEffect(() => {
//         window.addEventListener("resize", checkSize);
//         return () => {
//              // Before we add render our component again
//              // this cleanup function will cleanup the component first.
//             console.log("cleanup");
//             window.removeEventListener("resize", checkSize);
//         }
//     })

//     return (
//         <>
//             <h2>{size}px</h2>

//         </>
//     )
// }

// 5. Fetching data from 3rd party
const UseEffect = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        async function getData(){
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            
            const data = await response.json();
            if(data && data.length) setData(data);
        }
        getData();
    }, []);

    return(
        <>
            <ul>
                {
                    data.map((item) => (
                        <li key={item.id}>
                            <strong>Title: {item.title}</strong> <br/>
                            <strong>Body: {item.body}</strong>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}
export default UseEffect
