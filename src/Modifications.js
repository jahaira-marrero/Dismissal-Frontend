import React from "react";

function Modifications({student,transport, user, date}) {
    return (
        <div>
        <p> Name: {student}</p>
        <p>Date: {date}</p>
        <p> Changed to: {transport}</p>
        <p> Submitted by: {user}</p>
        <button>Delete</button>
        </div>
    )
}


export default Modifications;