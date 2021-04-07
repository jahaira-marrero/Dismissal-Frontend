import React from "react";

function StudentCards({name, address, guardian}) {

    return (
        <div>Student Information Card
            <p>Student Name:</p> {name}
            <p>Home Address:</p> {address}
            <p>Guardian:</p> {guardian}
        </div>
    )
}

export default StudentCards;