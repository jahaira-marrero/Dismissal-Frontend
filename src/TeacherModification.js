import React from "react";
import MyProfile from "./MyProfile";

function TeacherModification({teacherMod, teacherStudent}) {

    const teacher = teacherMod.map((teach) => {
        console.log(teach)
        return (
            <MyProfile
            key={teach.id}
            teacherStudent={teacherStudent}
            teacherMod={teach.id}
            teacherDate={teach.date}
            teacherUser={teach.user}
            teacherTrans={teach.transportation}
            />
        )
    }
    )

    return (
        <div> 
            Teacher Mods
            {teacher}
        </div>
    )
}
export default TeacherModification;