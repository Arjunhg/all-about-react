import SingleTodoLoader from "./components/SingleTodoLoader";
import TodoList from "./components/TodoList";


const Refactor1 = () => {
  return (
    <div>
      <SingleTodoLoader todoId="1">
        <TodoList />
      </SingleTodoLoader>
      <br />

      <SingleTodoLoader todoId="2">
        <TodoList />
      </SingleTodoLoader>
      <br />

      <SingleTodoLoader todoId="3">
        <TodoList />
      </SingleTodoLoader>
      <br />
    </div>
  );
};

export default Refactor1;

