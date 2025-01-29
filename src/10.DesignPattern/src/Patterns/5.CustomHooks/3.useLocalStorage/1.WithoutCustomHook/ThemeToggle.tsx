import { useEffect, useState } from "react";

const ThemeToggle = () => {

    const [theme, setTheme] = useState<string>("light");

    useEffect(() => {

        const storedTheme = window.localStorage.getItem('theme');
        if(storedTheme){
            setTheme(JSON.parse(storedTheme));
            document.body.style.background = storedTheme === "light" ? "#fff" : "#333";
            document.body.style.color = storedTheme === "light" ? "#333" : "#fff";
        }
    }, [])

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme)
        window.localStorage.setItem("theme", JSON.stringify(newTheme));
        document.body.style.background = newTheme === "light" ? "#fff" : "#333";
        document.body.style.color = newTheme === "light" ? "#333" : "#fff";
    }

    return(
        <div
            // style={{
            //     background: theme === "light" ? "#fff" : "#333",
            //     color: theme === "light" ? "#333" : "#fff",
            //     padding: "1rem",
            // }}
            style={{padding: "1rem"}}
        >
            <h1>Current Theme: {theme}</h1>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    )
}

export default ThemeToggle;