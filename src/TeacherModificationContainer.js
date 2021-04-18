import React from "react";
import TeacherModification from "./TeacherModification";

function TeacherModificationContainter({filteredModifications}) {

    const teacherMods = filteredModifications.map((mods) => {
        return (
            <TeacherModification
            key={mods.id}
            teacherStudent={mods.name}
            teacherMod={mods.modifications}
            />
        )
    })

    return (
        <div>
            TeacherModificationContainer
            {teacherMods}
        </div>
    )
}

export default TeacherModificationContainter;