import React from "react";

function DismissalChanges({date, student, user, transportation, id, handleDeleteDismissalChange}) {

    function handleDelete(id) {
        fetch(`http://localhost:3000/modifications/${id}`, {
           method: "DELETE" 
        })
           .then(r => r.json())
           .then(() =>{console.log((id))
        });
        handleDeleteDismissalChange(id)
    }

    return (
        <div> 
            <p>Requested:</p> {date}
            <p> Student:</p> {student}
            <p> Dismissal Change to:</p> {transportation}
            <p> Submitted by:</p> {user}
            <label>Delete Dismissal Change
            <button onClick={() => handleDelete(id)}> Delete</button>
            </label>
        </div>
    )
}

export default DismissalChanges 