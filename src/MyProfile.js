import React from "react";
import MyProfileMods from "./MyProfileMods";
import CardDeck from 'react-bootstrap/CardDeck';

function MyProfile({user}) {

   const modifications = user.modifications.map((mods) => {
    return (
        <MyProfileMods
        key={mods.id}
        date={mods.date}
        student={mods.get_name}
        transportation={mods.get_transport}
        />
       )})
   
    return(
        <div>
            <h1>{user.name}</h1>
            <h2>{user.role}</h2>
            <p>{user.username}</p>
            <h3> My Dismissal Change History</h3>
        <CardDeck style={{
          display: "grid",
          gridTemplateColumns: "350px 350px 350px 350px",
          margin: "15px 15px 15px 15px"}}>
            {modifications}
        </CardDeck>
        </div>
    )
}

export default MyProfile;