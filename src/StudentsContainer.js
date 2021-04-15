import React from "react";
import StudentCards from "./StudentCards";

function StudentsContainer({filteredStudents, handleStudentUpdateForm, students, transportations}) {
    
    const studentCards = filteredStudents.map((student) => {

        return (
            <StudentCards
            key={student.id}
            name={student.name}
            address={student.address}
            guardian={student.guardian}
            phone={student.phone}
            transportation={student.transportation.name}
            modifications={student.modifications}
            handleStudentUpdateForm={handleStudentUpdateForm} 
            students={students} 
            transForm={transportations}
            id={student.id}
            />
        )
    })
 
    return (
        <div> 
            <h2>Student Container</h2>
              {studentCards}
        </div>
      
    )
}

export default StudentsContainer