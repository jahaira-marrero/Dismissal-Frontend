import React, { useState } from "react";
import StudentDismissalDetails from "./StudentDismissalDetails";
import StudentUpdateForm from "./StudentUpdateForm";
import Button from 'react-bootstrap/Button';
// import Student from "./Student";

function StudentCards({id, name, address, guardian, phone, transportation, modifications, handleStudentUpdateForm, students, transForm}) {
    const [showDetails, setShowDetails] = useState(false)
    const [showUpdateForm, setShowUpdateForm] = useState(false)

    const dismissalModification = modifications.map((modification) => {
        
        return (
            <StudentDismissalDetails  
            key={modification.id}
            date={modification.date}
            transUser={modification.user.name}
            transName={modification.transportation.name}
            // id={id}
            // name={name}
            // guardian={guardian}
            // phone={phone}
            // transportation={transportation}
            // address={address}
            // handleStudentUpdateForm={handleStudentUpdateForm}
            // transForm={transForm}
            // students={students}
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
        <div>
            <h2>{name} Information Card</h2>
            <p>Home Address: {address}</p> 
            <p>Guardian: {guardian}</p> 
            <p>Phone: {phone}</p> 
            <p>Transportation Type: {transportation}</p> 
            <Button size="sm" onClick={handleUpdateClick}>Update this Student</Button> {" "}
            {showUpdateForm ? <StudentUpdateForm handleStudentUpdateForm={handleStudentUpdateForm} students={students} transportations={transForm} /> : null}
            <Button size="sm" onClick={handleClick}> See Prior Changes</Button>
            {showDetails ?  <p>{dismissalModification}</p> : null}
        {/* {studentObject} */}
        </div>
    )
}

export default StudentCards;
