import React from "react";

function Transportation({name, students}) {
    return (
        <div> 
            <h2>Transport Type: {name}</h2>
            
             {students}

            
            
        </div>
    )
}

export default Transportation