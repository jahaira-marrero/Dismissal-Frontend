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
            hr={student.homeroom}
            id={student.id}
            />
        )
    })
 
    return (
        <ul className="cards"> 
    
              {studentCards}
        </ul>
      
    )
}

export default StudentsContainer