import React from "react";
import MyProfileMods from "./MyProfileMods";

function MyProfile({user}) {

   const modifications = user.modifications.map((mods) => {
console.log(user)
    return (
        <MyProfileMods
        key={mods.id}
        date={mods.date}
        student={mods["get_name"]}
        transportation={mods.transportation_id}
        studentName={user.get_name}
        />
       )})
   
    return(
        <div>
            <h1>{user.name}</h1>
            <h2>{user.role}</h2>
            <p>{user.username}</p>
            <h3> My Dismissal Change History</h3>
            {modifications}
        </div>
    )
}

export default MyProfile;