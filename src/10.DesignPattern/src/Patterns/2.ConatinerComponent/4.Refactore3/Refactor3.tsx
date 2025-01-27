import CommentsList from "./components/CommentsList";
import TodoList from "./components/TodoList";
import DataSource from "./components/shared/DataSource";
import axios from "axios";

const Refactor3 = () => {

    // const getServerData = async(url: string) => {
    //     const res = await axios.get(url);
    //     return res.data;
    // }
    const getServerData = (url: string) => async() => {
        const res = await axios.get(url);
        return res.data;
    }
    
    return(
        <div>
            <DataSource getDataFunc={getServerData(
                "https://jsonplaceholder.typicode.com/todos/1"
            )} resourceName="todo">
                <TodoList/>
            </DataSource>
        </div>
    )
}

export default Refactor3;