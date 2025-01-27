import TodoList from "./Component/Details/TodoList";
import SingleTodoLoader from "./Component/shared/SingleTodoLoader";


const NSGC = () => {
  return (
    <div>
      <SingleTodoLoader>
        <TodoList/>
      </SingleTodoLoader>
    </div>
  );
};

export default NSGC;