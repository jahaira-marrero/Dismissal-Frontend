import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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
            <br></br>
            <br></br>
            <Card className="text-center">
            <Card.Header>Date: {date}</Card.Header>
            <Card.Body>
                <Card.Title>{student}</Card.Title>
                <Card.Text>
                Changed to: {transport}
                </Card.Text>
                <Button onClick={handleDelete}>Delete</Button>
            </Card.Body>
            <Card.Footer className="text-muted">Submitted by: {user}</Card.Footer>
            </Card>
    
        </div>
    )
}


export default Modifications;