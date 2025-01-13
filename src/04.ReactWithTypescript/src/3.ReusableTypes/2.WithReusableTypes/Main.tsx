import AdminInfo from "./AdminInfo";
import UserInfo from "./UserInfo";

export default function Main(){

    return (
        <>
          <h1>Users Info:</h1>
          <UserInfo
            name="Alex"
            email="alex@gmail.com"
            age={20}
            location={["Earth", "USA"]}
          />
    
          <h1>Admin Info:</h1>
          <AdminInfo
            name="Alex"
            email="alex@gmail.com"
            age={20}
            location={["Mars", "Unknown"]}
            admin="yes"
          />
        </>
      );
}