import React from "react";

function MyProfileMods({date, student, transportation}) {

    return (
        <div> 
          
            <p>Date Submitted: {date}</p> 
            <p>Student: {student}</p>
            <p>Transportation Changed to: {transportation}</p>
        </div>
    )
}
export default MyProfileMods;