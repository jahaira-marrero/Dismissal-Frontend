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
            phone={student.phone}
            transportation={student.transportation.name}
            modifications={student.modifications}
            />
        )
    })
 
    return (
        <div> 
            <h2>Student Container</h2>
            <button>Edit Student Profile</button>
              {studentCards}
        </div>
      
    )
}

export default StudentsContainer