import React from 'react'

const Profile = () => {

    const [profile, setProfile] = React.useState({name: "Arjun", age: 22});

    const onNameChange = (e) => {
        setProfile({...profile, name: e.target.value});
    }
    const onAgeChange = (e) => {
        setProfile({...profile, age: e.target.value});
    }

  return (
    <div>

        <label>
            Name: <input type="text" value={profile.name} onChange={onNameChange}/>
        </label>
        <br/>
        <label>
            Age:  <input type="number" value={profile.age} onChange={onAgeChange}/>
        </label>
      
      <h1>Profile</h1>
      <p> Name: {profile.name}</p>
      <p> Age: {profile.age}</p>
    </div>
  )
}

export default Profile
