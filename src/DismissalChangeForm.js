import React, { useEffect, useState } from "react";

function DismissalChangeForm({addDismissalChange, students}) {
    const [date, setDate] = useState("")
    const [transportation_id, setTransportation_id] = useState([])
    const [user, setUser] = useState([])
    const [studentId, setStudentId] = useState([])
    

useEffect(() => {
    fetch(`http://localhost:3000/users/${id}`)
     .then(r => r.json())
     .then(userObject => { setUser(userObject)
    })
},[]);

const id = 1

const studentOptions = students.map((student) => { return (
    <option key={student.id} value={student.id}>{student.name}</option>
)})

    function handleSubmit(e) {
        e.preventDefault()
    
        const formData = {
        date: date,
        user_id: user.id,
        transportation_id: parseInt(transportation_id),
        student_id: parseInt(studentId),
    }; console.log(formData)
    fetch("http://localhost:3000/modifications", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    })
        .then((r) => r.json())
        .then((changeRequest) => {
            addDismissalChange(changeRequest);
        });
    }

    return (
        <div>Form Placeholder
        <section>
            <form onSubmit={handleSubmit}>
                <h3>Insert Form Here</h3>
                <label>Date Requested:</label>
                <input
                    type="text"
                    id="date"
                    name="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    />
                    {date.length === 0 ? (
                        <p style={{color: "red"}}>You must input a date!</p>) : null}
                <label>Transportation</label>
                <select
                    id="transportation_id"
                    name="transportation_id"
                    value={transportation_id}
                    onChange={(e) => setTransportation_id(e.target.value)}
                >
                    <option value="1">Bus 1</option>
                    <option value="2">Bus 2</option>
                    <option value="3">Walker</option>
                    <option value="4">Car Rider</option>
                    <option value="5">Early Pick Up</option>
                </select>

                <label> Student</label>
                <select 
                    id="student_id"
                    name="student_id"
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)}
                    >
                        {studentOptions}
                    </select>
  
                <button type="submit">Add Dismissal Change</button>
            </form>
            
        </section>
         </div>
    );
}

export default DismissalChangeForm;