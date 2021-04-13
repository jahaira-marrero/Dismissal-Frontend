import React from "react";

function Modifications({student,transport, user, date, id, handleDeleteDismissalChange}) {

    function handleDelete(e) {
        e.preventDefault()
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
        <p> Name: {student}</p>
        <p>Date: {date}</p>
        <p> Changed to: {transport}</p>
        <p> Submitted by: {user}</p>
        <button onClick={handleDelete}>Delete</button>
        </div>
    )
}


export default Modifications;