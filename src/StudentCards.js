import React, {useState} from "react";
// import {useHistory} from "react-router-dom";
import StudentDismissalDetails from "./StudentDismissalDetails"
import StudentUpdateForm from "./StudentUpdateForm"

function StudentCards({name, address, guardian, phone, transportation, modifications, handleStudentUpdateForm, students, transForm}) {
    const [showDetails, setShowDetails] = useState(false)
    const [showUpdateForm, setShowUpdateForm] = useState(false)
    // const history = useHistory()

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
        <div>
            <h2>Student Information Card</h2>
            
            <p>Student Name:</p> {name}
            <p>Home Address:</p> {address}
            <p>Guardian:</p> {guardian}
            <p>Phone:</p> {phone}
            <p>Transportation: </p> {transportation}
            <button onClick={handleUpdateClick}>Update this Student</button>
            {showUpdateForm ? <StudentUpdateForm handleStudentUpdateForm={handleStudentUpdateForm} students={students} transportations={transForm} /> : null}
            <button onClick={handleClick}> See Prior Changes</button>
            {showDetails ?  <p>{dismissalModification}</p> : null}
        </div>
    )
}

export default StudentCards;
