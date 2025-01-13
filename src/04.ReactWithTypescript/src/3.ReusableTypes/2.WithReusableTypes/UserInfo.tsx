export type Info = {
    name: string;
    email: string;
    age: number;
    location: string[];
}

export default function UserInfo(props: Info){

    return(
        <ul>
            <li>{props.name}</li>
            <li>{props.email}</li>
            <li>{props.age}</li>
            <li>{JSON.stringify(props.location)}</li>
        </ul>
    )
}