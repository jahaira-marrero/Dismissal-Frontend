import React from "react";
import StudentCards from "./StudentCards";
import Search from "./Search";

function StudentsContainer({filteredStudents, handleStudentUpdateForm, students, transportations, handleSearch}) {
    
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
            />
        )
    })


    const image="https://www.cabnetsol.com.au/wp-content/uploads/2017/06/homepage-background.jpg"
    return (
        <div 
        style={{
            background: `url(${image})`,
            height: "50vh",
            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        > 
        <section>
            <Search handleSearch={handleSearch}/> 
              {studentCards}
              </section>
        </div>
      
    )
}

export default StudentsContainer