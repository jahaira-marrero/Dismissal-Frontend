import React from "react";

function MyProfileMods({date, student, transportation}) {

    return (
        <div> 
           <h4> My Dismissal Change History</h4>
            <p>Date Submitted: {date}</p> 
            <p>Student: {student}</p>
            <p>Transportation Changed to: {transportation}</p>
        </div>
    )
}
export default MyProfileMods;