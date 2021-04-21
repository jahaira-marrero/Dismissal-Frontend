import React from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function StudentDismissalDetails({date, transName, transUser, modId}) {

        return (
            <div>
                
        <CardGroup style={{ width: '18rem', background: "pink", margin: "1rem" }} id={modId}>
            <Card.Body>
                <Card.Title>Date: {date}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted" >Changed to: {transName}</Card.Subtitle>
                <Card.Text >
                Submitted by: {transUser}
                </Card.Text>
            </Card.Body>
        </CardGroup>
        </div>
    )
}


export default StudentDismissalDetails;