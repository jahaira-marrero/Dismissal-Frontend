import React from "react";

function StudentCards({name, address, guardian, phone, transportation}) {

    return (
        <div>Student Information Card
            <p>Student Name:</p> {name}
            <p>Home Address:</p> {address}
            <p>Guardian:</p> {guardian}
            <p>Phone:</p> {phone}
            <p>Transportation: </p> {transportation}
        </div>
    )
}

export default StudentCards;