import React from "react";
import DismissalChanges from "./DismissalChanges"

function DismissalChangesContainer({modifications, handleDeleteDismissalChange}) {

    const dismissalChanges = modifications.map((modification) => {
      
        return (
            <DismissalChanges
            key={modification.id}
            id={modification.id}
            date={modification.date}
            student={modification.student.name}
            transportation={modification.transportation.name}
            user={modification.user.name} 
            handleDeleteDismissalChange={handleDeleteDismissalChange}   
            />
        )
    })
    return (
        <div>
            <h2> Current Dismissal Changes</h2>
            {dismissalChanges}
        </div>
    )
}

export default DismissalChangesContainer;