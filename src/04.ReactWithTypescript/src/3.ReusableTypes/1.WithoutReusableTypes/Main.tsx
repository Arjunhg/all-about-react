import AdminInfo from "./AdminInfo";
import UsersInfo from "./UserInfo";

export default function Main(){

    return(
        <>
            <h1>User Info: </h1>
            <UsersInfo username="John" email="j@j.com" age={20}/>

            <h1>Admin Info: </h1>
            <AdminInfo username="Admin" email="a@a.com" age={30} location={["India", "Goa"]} admin="true"/>
        </>
    )
}