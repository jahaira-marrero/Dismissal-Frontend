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
        <div
        
        style={{backgroundImage: "https://www.cabnetsol.com.au/wp-content/uploads/2017/06/homepage-background.jpg",
        height: "100vh",
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"}}
        
        >
            <header className="App-header">Dismissal Changes</header>
            {dismissalChanges}
        </div>
    )
}

export default DismissalChangesContainer;