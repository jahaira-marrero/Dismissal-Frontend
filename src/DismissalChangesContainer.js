import React from "react";
import DismissalChanges from "./DismissalChanges"

function DismissalChangesContainer({changes}) {

    const dismissalChanges = changes.map((change) => {
        return (
            <DismissalChanges
            key={change.id}
            date={change.date}
            student={change.student.name}
            transportation={change.transportation.name}
            user={change.user.name}
            
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