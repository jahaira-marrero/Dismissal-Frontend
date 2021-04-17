import React, { useState } from "react";
import StudentDismissalDetails from "./StudentDismissalDetails";
import StudentUpdateForm from "./StudentUpdateForm";
import Button from 'react-bootstrap/Button';
// import CardDeck from 'react-bootstrap/CardDeck';
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
     
        >  
        <section>    
            <Card style={{ width: "25rem", border: "red"}}>
                    <Card.Body id={id} style={{width: "25rem"}}>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Transportation: {transportation}</Card.Subtitle>
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
                      {showDetails ?  <p>{dismissalModification}</p> : null}
                </Card.Body> 
                </Card>
                </section> 
        </div>
    )
}

export default StudentCards;
