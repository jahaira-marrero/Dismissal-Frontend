import React from "react";
import DismissalChanges from "./DismissalChanges"

function DismissalChangesContainer({filteredModifications, handleDeleteDismissalChange}) {
  
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
            <header className="App-header">Dismissal Changes</header>
            {dismissalChanges}
        </div>
    )
}

export default DismissalChangesContainer;