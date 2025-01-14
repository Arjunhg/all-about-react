import React, {useState, useEffect} from "react";
const useWindowSize = () => {

    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })

    useEffect(() => {
        const handleSize = () => {
            // console.log("Resize called")
            // console.log("Previous State:", size); call this using empty FD and setting size as FD
            setSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        window.addEventListener("resize", handleSize);
        return () => {
            // console.log("Cleanup called")
            window.removeEventListener("resize", handleSize);
        }
    }, []);

    // return size -> gives width and height to destructure
    return size;
}

export default useWindowSize;