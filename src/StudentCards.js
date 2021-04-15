import React, { useState } from "react";
import StudentDismissalDetails from "./StudentDismissalDetails";
import StudentUpdateForm from "./StudentUpdateForm";
import Button from 'react-bootstrap/Button';
// import Student from "./Student";

function StudentCards({id, name,hr, address, guardian, phone, transportation, modifications, handleStudentUpdateForm, students, transForm}) {
    const [showDetails, setShowDetails] = useState(false)
    const [showUpdateForm, setShowUpdateForm] = useState(false)

    const dismissalModification = modifications.map((modification) => {
        
        return (
            <StudentDismissalDetails  
            key={modification.id}
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
        <div className="card" id={id}>
            <h4>{name}</h4>
            <p>Home Address: {address}</p> 
            <p>Guardian: {guardian}</p> 
            <p>Phone: {phone}</p> 
            <p>Homeroom: {hr}</p>
            <p>Transportation Type: {transportation}</p> 
            <Button size="sm" onClick={handleUpdateClick}>Update this Student</Button> {" "}
            {showUpdateForm ? <StudentUpdateForm handleStudentUpdateForm={handleStudentUpdateForm} students={students} transportations={transForm} /> : null}
            <Button size="sm" onClick={handleClick}> See Prior Changes</Button>
            {showDetails ?  <p>{dismissalModification}</p> : null}
        </div>
    )
}

export default StudentCards;
