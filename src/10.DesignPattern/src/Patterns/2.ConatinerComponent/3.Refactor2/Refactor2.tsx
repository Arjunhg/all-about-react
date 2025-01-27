import CommentsList from "./components/details/CommentsList";
import TodoList from "./components/details/TodoList";
import ResourceLoader from "./components/shared/ResourceLoader";

const Refactor2 = () => {

    return(

        <div>
            <ResourceLoader resourceURL="/todos/1" resourceName="todo">
                <TodoList/>
            </ResourceLoader>

            <hr />
            <br />

            <ResourceLoader resourceURL="/comments/1" resourceName="comments">
                <CommentsList/>
            </ResourceLoader>
        </div>
    )
}

export default Refactor2;