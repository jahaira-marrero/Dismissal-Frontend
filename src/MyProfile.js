import React from "react";
import MyProfileMods from "./MyProfileMods";

function MyProfile({user}) {

   const modifications = user.modifications.map((mods) => {

    return (
        <MyProfileMods
        key={mods.id}
        date={mods.date}
        student={mods.student_id}
        transportation={mods.transportation_id}
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