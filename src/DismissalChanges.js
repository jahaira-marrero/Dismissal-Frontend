import React from "react";
import Modifications from "./Modifications"

function DismissalChanges({ student, modifications, handleDeleteDismissalChange}) {

    const mods = modifications.map((modification) => {
        return (
            <Modifications
            key={modification.key}
            id={modification.id}
            date={modification.date}
            user={modification.user.name}
            transport={modification.transportation.name}
            student={student}
            handleDeleteDismissalChange={handleDeleteDismissalChange}
    />
    )
})
    return (
        <div> 
           {mods}
        </div>
    )
}

export default DismissalChanges 