import React from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function MyProfileMods({date, student, transportation}) {

    return (
        <div> 
            <CardGroup style={{ width: '18rem', background: "skyblue", margin: "1rem" }} id={student.id}>
            <Card.Body>
                <Card.Title>Date: {student}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted" >Changed to: {transportation}</Card.Subtitle>
                <Card.Text >
                Submitted by: {date}
                </Card.Text>
            </Card.Body>
        </CardGroup>
        </div>
    )
}
export default MyProfileMods;