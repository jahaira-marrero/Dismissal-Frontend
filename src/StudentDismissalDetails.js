import React from "react";

function StudentDismissalDetails({date, transName, transUser}) {
console.log(transName)
console.log(transUser)
        return (
       
        <div>
            <h3>Dismissal Changes Details</h3>
            <p>Date: {date}</p>
            <p>Changed to: {transName.name}</p>
            <p>Submitted by: {transUser.name}</p>
        </div>
    )
}


export default StudentDismissalDetails;