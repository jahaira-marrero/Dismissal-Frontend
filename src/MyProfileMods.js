import React from "react";

function MyProfileMods({modifications}) {

    const myMods = modifications.map((mods) => {
        return (
        <li
        key={mods.id}
        date={mods.date}
        student={mods.student_id}
        />
    )}); 

    return (
        <div> 
            My Transportation History
        {myMods}
        </div>
    )
}
export default MyProfileMods;