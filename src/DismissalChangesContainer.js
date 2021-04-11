import React from "react";
import DismissalChanges from "./DismissalChanges"

function DismissalChangesContainer({modifications}) {

    const dismissalChanges = modifications.map((modification) => {
      
        return (
            <DismissalChanges
            key={modification.id}
            date={modification.date}
            student={modification.student.name}
            transportation={modification.transportation.name}
            user={modification.user.name}    
            />
        )
    })
    return (
        <div>
            <h2> Changes Container</h2>
            {dismissalChanges}
        </div>
    )
}

export default DismissalChangesContainer;