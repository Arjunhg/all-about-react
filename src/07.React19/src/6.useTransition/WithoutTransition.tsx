import { useState } from "react"
import Home from "./components/Home";
import Posts from "./components/Posts";
import Contact from "./components/Contact";

export default function WithoutTransition(){

    const [activeTab, setActiveTab] = useState("home");

    const renderContent = () => {
        switch(activeTab){
            case "home":
                return <Home />;
            case "posts":
                return <Posts />;
            case "contact":
                return <Contact />;
            default:
                return <Home/>
        }
    }

    return(
        <div>
            <div className="tabs">
                <button className="border-2 p-4" onClick={() => setActiveTab("home")}>Home</button>
                <button className="border-2 p-4" onClick={() => setActiveTab("posts")}>posts</button>
                <button className="border-2 p-4" onClick={() => setActiveTab("contact")}>contact</button>
            </div>

            <div className="content">{renderContent()}</div>
        </div>
    )
}