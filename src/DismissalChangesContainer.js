import React from "react";
import DismissalChanges from "./DismissalChanges"

function DismissalChangesContainer({filteredModifications, handleDeleteDismissalChange}) {
 
    // .sort((a, b) =>  a.date.localCompare(b.date))
    
    const dismissalChanges = filteredModifications.map((student) => {
      
        return (
            <DismissalChanges
            key={student.id}
            id={student.id}
            student={student.name}
            modifications={student.modifications} 
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