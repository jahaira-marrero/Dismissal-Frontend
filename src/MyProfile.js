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
            {user.name}
            {modifications}
          
             
        </div>
    )
}

export default MyProfile;