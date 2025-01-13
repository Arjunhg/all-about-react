import useFetch from "./useFetch"

const Custom = () => {

    const data = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
        {
        data && (
            data.map((item) => (
                <li key={item.id}>
                    <strong>Title: {item.title}</strong> <br/>
                </li>
                ))
            )
        }
    </>
  )
}

export default Custom
