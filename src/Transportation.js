import React from "react";

function Transportation({name, students}) {
    return (
        <div> 
            <h2>Transport Type: {name}</h2>

            <p>{students}</p>
        </div>
    )
}

export default Transportation