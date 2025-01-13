type AInfo = {
    username: string;
    email: string;
    age: number;
    location: string[];
    // We just wanna add this extra type
    admin: string;
}

const AdminInfo = (props: AInfo) => {
    return(
        <ul>
            <li>{props.username}</li>
            <li>{props.email}</li>
            <li>{props.age}</li>
            <li>{JSON.stringify(props.location)}</li>
            <li>{props.admin}</li>
        </ul>
    )
}

export default AdminInfo;