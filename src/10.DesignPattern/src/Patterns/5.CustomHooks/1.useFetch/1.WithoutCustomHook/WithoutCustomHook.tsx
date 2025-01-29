import axios from "axios";
import { useEffect, useState } from "react";

type Todo = {
	id: number;
	title: string;	
}

const WithoutCustomHook = () => {

	const [data, setData] = useState<Todo[] | null>(null);

	useEffect(() => {
		try{
			(	
				async() => {
					const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
					setData(res.data);
				}
			)();
		}catch(error){
			console.log(error);
		}
	},[])
	
	return(
		<div>
			{
				data?.map(todo => (
					<div key={todo.id}>
						<p><strong>User ID:</strong>{todo.id}</p>	
						<h1><strong>Title:</strong>{todo.title}</h1>
					</div>
				))	
			}
		</div>
	)
}

export default WithoutCustomHook;