import React from "react";
import StudentCards from "./StudentCards";
import Search from "./Search";

function StudentsContainer({filteredStudents, handleStudentUpdateForm, students, transportations, handleSearch, search}) {
    
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
            handleSearch={handleSearch}
            search={search}
            />
        )
    })

    return (
        <div> 
            <Search handleSearch={handleSearch} search={search}/> 
              {studentCards}
        </div>
      
    )
}

export default StudentsContainer