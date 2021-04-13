import React from "react";
import Modifications from "./Modifications"

function DismissalChanges({ student, modifications, handleDeleteDismissalChange}) {

    const mods = modifications.map((modification) => {
        return (
            <Modifications
            key={modification.key}
            date={modification.date}
            user={modification.user.name}
            transport={modification.transportation.name}
            student={student}
            handleDeleteDismissalChange={handleDeleteDismissalChange}
    />
    )
})
    

    // function handleDelete(id) {
    //     fetch(`http://localhost:3000/modifications/${id}`, {
    //        method: "DELETE" 
    //     })
    //        .then(r => r.json())
    //        .then(() =>{console.log((id))
    //     });
    //     handleDeleteDismissalChange(id)
    // }

    return (
        <div> 
           {mods}
        </div>
    )
}

export default DismissalChanges 