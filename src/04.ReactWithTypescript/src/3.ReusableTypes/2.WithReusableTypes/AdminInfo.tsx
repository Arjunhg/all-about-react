import { type Info } from "./UserInfo";

type AdminInfo = Info & {
    admin: string
}

export default function AdminInfo(props: AdminInfo){

    return(
        <ul>
            <li>Admin: {props.admin}</li>
            <li>{props.name}</li>
            <li>{props.email}</li>
            <li>{props.age}</li>
            <li>{JSON.stringify(props.location)}</li>
        </ul>
    )
}