import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa"; 
import "./Input.css";

const HiddenSearchBar = () => {

    const [bgColor, setBgColor] = useState("white");
    const [showInput, setShowInput] = useState(false);
    
    const handleClick = (e) => {
        setBgColor("lightblue");
        if(e.target.className === "container"){
            setShowInput(false);
            setBgColor("#fff");
        }
    }

    return (

        <section className="container" style={{backgroundColor: bgColor}} onClick={handleClick}>
            {
                showInput ? (
                    <input type="text" placeholder='search...'/>
                ) : (
                    <FaSearch onClick={() => setShowInput(true)}/>
                )
            }
        </section>
    )
}

export default HiddenSearchBar
