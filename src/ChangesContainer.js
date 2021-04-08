import React from "react";
import DismissalChanges from "./DismissalChanges"

function ChangesContainer({changes}) {

    const dismissalChanges = changes.map((change) => {
        return (
            <DismissalChanges
            key={change.key}
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

export default ChangesContainer