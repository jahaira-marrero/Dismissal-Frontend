import React from "react";
import Button from 'react-bootstrap/Button';

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
        <h3>{student} Dismissal Change</h3>
        <p>Date: {date}</p>
        <p> Changed to: {transport}</p>
        <p> Submitted by: {user}</p>
        <Button onClick={handleDelete}>Delete</Button>
        </div>
    )
}


export default Modifications;