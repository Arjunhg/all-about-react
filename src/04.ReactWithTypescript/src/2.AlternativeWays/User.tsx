import { FC } from "react";

// type Shape = {
//     name: string;
//     age: number;
// } or

interface Shape{
    name: string;
    age: number;
}

const User: FC<Shape> = ( {name, age} ) => {

  return (
    <main>
        <h2>{name}</h2>
        <p>{age}</p>
    </main>
  )
}

export default User
