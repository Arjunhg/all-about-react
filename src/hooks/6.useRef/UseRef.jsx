// useRef is used to manage any kind of DOM manipulation
import { useRef } from "react";

const UseRef = () => {
    const inputElement = useRef(null);
    console.log("inputElement", inputElement);

    const focusInput = () => {
        inputElement.current.focus();
        console.log("current focus", inputElement.current.focus());

        inputElement.current.value = "Arjun";
        console.log("current value", inputElement.current.value);
    }

    return(
        <>
            <input type="text" ref={inputElement} />
            <button onClick={() => focusInput()}>Focus and Write</button>
        </>
    )
}

export default UseRef