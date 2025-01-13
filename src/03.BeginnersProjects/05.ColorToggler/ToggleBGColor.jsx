import { useState } from "react";
import "./Input.css";

const ToggleBGColor = () => {

    const [bg, setBg] = useState("white");
    const [textColor, setTextColor] = useState("#1b1b1b");
    const [buttonStyle, setButtonStyle] = useState("white");

    const handleClick = () => {
        setBg(bg === "white" ? "#1b1b1b" : "white");
        setTextColor(textColor === "#1b1b1b" ? "#ffa31a": "#1b1b1b");
        setButtonStyle(buttonStyle === "white" ? "#1b1b1b" : "white");
    }

    return(
        <section style={{backgroundColor: bg}}>
            <button onClick={handleClick} style={{buttonStyle, color: textColor, border: `2px solid ${textColor}`}}>
                {
                    bg === "white" ? "Switch to dark mode" : "Switch to light mode"
                }
            </button>
            <section className="content" style={{color: textColor}}>
                <h1>
                    Welcome To A <br/> Real World...
                </h1>
            </section>
        </section>
    )
}

export default ToggleBGColor;