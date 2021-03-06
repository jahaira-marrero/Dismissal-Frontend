import React, { useState } from "react";
import StudentDismissalDetails from "./StudentDismissalDetails";
import StudentUpdateForm from "./StudentUpdateForm";
import Button from 'react-bootstrap/Button';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';

function StudentCards({id, name,hr, address, guardian, phone, transportation, modifications, handleStudentUpdateForm, students, transForm, handleSearch}) {
    const [showDetails, setShowDetails] = useState(false)
    const [showUpdateForm, setShowUpdateForm] = useState(false)

    const dismissalModification = modifications.map((modification) => {
        return (
            <StudentDismissalDetails  
            key={modification.id}
            modId={modification.id}
            date={modification.date}
            transUser={modification.user.name}
            transName={modification.transportation.name}
            />
            )
        })

        function handleUpdateClick() {
            setShowUpdateForm(!showUpdateForm)
        }

        function handleClick() {
            setShowDetails(!showDetails)
        }
       
    return (
        <div  id={id} 
        style={{width: "1400px", justifyContent: "center"}}
        >  
            <br></br>
            <br></br>
            <Card style={{borderColor: "blue", border: "3px", boarderRadius: "3.25rem", background: "white"}} >
                    <Card.Body id={id} style={{content: "center"}}>
                    <Card.Title >{name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted" style={{content: "center"}}>Transportation: {transportation}</Card.Subtitle>
                    <Card.Text>
                    <p>Home Address: {address}</p> 
                    <p>Guardian: {guardian}</p> 
                    <p>Phone: {phone}</p> 
                    <p>Homeroom: {hr}</p>
                    </Card.Text>

                    <Button size="sm" onClick={handleUpdateClick}>Update this Student</Button> {" "}
                      {showUpdateForm ? 
                      <StudentUpdateForm 
                      studentId={id}
                      studentName={name}
                      studentAddress={address}
                      studentPhone={phone}
                      studentGuardian={guardian}
                      studentTransportation={transportation}
                      studentHr={hr}
                      handleStudentUpdateForm={handleStudentUpdateForm} 
                      students={students} 
                      transportations={transForm} /> : null}
                    <Button size="sm" onClick={handleClick}> See Prior Changes</Button>
                      {showDetails ?  <p>
                        <CardDeck 
                        style={{
                            display: "grid",
                            gridTemplateColumns: "350px 350px 350px 350px",
                            margin: "15px 15px 15px 15px"}}>
                            {dismissalModification}
                        </CardDeck>
                        </p> : null }
                    </Card.Body> 
                    </Card>
             
        </div>
    )
}

export default StudentCards;
