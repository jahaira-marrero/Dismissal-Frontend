import React from "react";
import Card from 'react-bootstrap/Card';

function MyProfileMods({date, student, transportation}) {

    return (
        <Card border="success">
            <Card.Body >
                <Card.Title>Student: {student}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted" >Changed to: {transportation}</Card.Subtitle>
                <Card.Text >
                Submmited: {date}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
export default MyProfileMods;