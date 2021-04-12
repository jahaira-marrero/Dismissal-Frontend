import React from "react";

function StudentDismissalDetails({date, transName, transUser}) {

        return (
       
        <div>
            <h3>Dismissal Changes Details</h3>
            <p>Date: {date}</p>
            <p>Changed to: {transName}</p>
            <p>Submitted by: {transUser}</p>
        </div>
    )
}


export default StudentDismissalDetails;