// 1.Passing Types

// const User = (props: {name: string; age: number; isStudent: boolean}) => {
//     return(
//         <main>
//             <h2>{props.name}</h2>
//             <p>{props.age}</p>
//             <p>{props.isStudent}</p>
//         </main>
//     )
// }

// 2. Destructuring props type
// const User = ({name, age, isStudent}: {name: string, age: number, isStudent: boolean}) => {

//     return(
//         <main>
//             <h2>{name}</h2>
//             <p>{age}</p>
//             <p>{isStudent}</p>
//         </main>
//     )
// }

// 3. Creating Custom Types

// type UserType = {
//   name: string;
//   age: number;
//   isStudent: boolean;
// };

// const User = ({ name, age, isStudent }: UserType) => {
//   return (
//     <main>
//       <h2>{name}</h2>
//       <p>{age}</p>
//       <p>{isStudent}</p>
//     </main>
//   );
// };

// 4. Children

type Shape = {
    children: React.ReactNode;
}

const User = ({children}: Shape) => {

    return(
        <main>
            {children}
        </main>
    )
}


export default User;
