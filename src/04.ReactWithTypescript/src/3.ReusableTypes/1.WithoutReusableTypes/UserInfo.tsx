type Info = {
    username: string;
    email: string;
    age: number;
  };
  
  const UsersInfo = ({ username, email, age }: Info) => {
    return (
      <ul>
        <li>{username}</li>
        <li>{email}</li>
        <li>{age}</li>
      </ul>
    );
  };
  
  export default UsersInfo;