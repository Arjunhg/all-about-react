import { useState, useTransition } from "react"
import Home from "./components/Home";
import Posts from "./components/Posts";
import Contact from "./components/Contact";

export default function WithUseTransition(){

    const [activeTab, setActiveTab] = useState("home");

    // const something = useTransition();
    // console.log(something);

    const [isPending, startTransition] = useTransition();

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

    const handleTabChange = (tab: string) => {
        startTransition(() => setActiveTab(tab));
    }

    return(
        <div>
            <div className="tabs">
                <button className="border-2 p-4" onClick={() => handleTabChange("home")}>Home</button>
                <button className="border-2 p-4" onClick={() => handleTabChange("posts")}>posts</button>
                <button className="border-2 p-4" onClick={() => handleTabChange("contact")}>contact</button>
            </div>

            {
                isPending && (
                    <p>Loading...</p>
                )
            }

            <div className="content">{renderContent()}</div>
        </div>
    )
}