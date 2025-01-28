import { printProps } from "./utils/printProps";
import TodoList from "./components/TodoList";

const TodoListWrapped = printProps(TodoList);

const Hoc = () => {

    const todo = { id: 1, title: 'Test Todo', body: 'This is a test' };

    return(
        <div>
            <TodoListWrapped todo={todo}/>
        </div>
    )
}

export default Hoc