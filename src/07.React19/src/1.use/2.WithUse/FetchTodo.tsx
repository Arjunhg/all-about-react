import { use } from 'react';

const FetchData = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  return await res.json();
}

const FetchTodo = () => {

  const data = use(FetchData()); //inside use hook we provided promise

  return (
    <div>
      {data.title}
    </div>
  )
}

export default FetchTodo
