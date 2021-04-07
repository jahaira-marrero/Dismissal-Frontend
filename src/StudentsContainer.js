import React from "react";
import StudentCards from "./StudentCards";

function StudentsContainer({students}) {
    
    const studentCards = students.map((student) => {
        
        return (
            <StudentCards
            key={student.id}
            name={student.name}
            address={student.address}
            guardian={student.guardian}
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