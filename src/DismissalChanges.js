import React from "react";

function DismissalChanges({date, student, user, transportation}) {
    return (
        <div> 
            <h2> Current Dismissal Changes</h2>
            <p>Requested:</p> {date}
            <p> Student:</p> {student}
            <p> Dismissal Change to:</p> {transportation}
            <p> Submitted by:</p> {user}
        </div>
    )
}

export default DismissalChanges 