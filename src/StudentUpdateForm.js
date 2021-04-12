import React, {useState} from "react";

function StudentUpdateForm({handleStudentUpdateForm, transportations, students}) {
    const [id, setId] = useState([])
    const [name, setName] = useState("")
    const [address, setAddress] =  useState("")
    const [guardian, setGuardian] = useState("")
    const [homeroom, setHomeroom] = useState("0")
    const [phone, setPhone] = useState("0001234567")
    const [transportation_id, setTransportation_id] = useState("")

    const studentObj = students.map((student) => { return (
        <option key={student.id} value={student.id}>{student.name}</option>
    )})

    const transportationType = transportations.map((transportation) => {return (
    <option key={transportation.id} value={transportation.id}>{transportation.name}</option>
)})

function handleStudentUpdate(id, e) {
    e.preventDefault()
    fetch(`http://localhost:3000/students/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify({
            name: name,
            address: address,
            phone: parseInt(phone),
            guardian: guardian,
            homeroom: parseInt(homeroom),
            transportation_id: parseInt(transportation_id),
        }),
    })
        .then((r) => r.json())
        .then((updatedStudentInfo) => handleStudentUpdateForm(updatedStudentInfo))
}

    return (
        <div><h3>Update Student Form Place Holder</h3>
        <section>
            <form onSubmit={handleStudentUpdate}>
                <p>Update Student Information</p>
                <label>Student </label>
                <select 
                    id="student.id"
                    name="student.id"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    >{studentObj}
                    </select>
                    <label>Name: </label>
                    <input 
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                     <label>Address: </label>
                    <input 
                        type="text"
                        id="address"
                        name="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                     <label>Guardian: </label>
                    <input 
                        type="text"
                        id="guardian"
                        name="guardian"
                        value={guardian}
                        onChange={(e) => setGuardian(e.target.value)}
                    />
                     <label>Phone: </label>
                    <input 
                        type="text"
                        id="phone"
                        name="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                     <label>Homeroom: </label>
                    <input 
                        type="text"
                        id="homeroom"
                        name="homeroom"
                        value={homeroom}
                        onChange={(e) => setHomeroom(e.target.value)}
                    />
                    <label>Transportation</label>
                    <select
                    id="transportation.id"
                    name="transportation.id"
                    value={transportation_id}
                    onChange={(e) => setTransportation_id(e.target.value)}
                    >
                        {transportationType}
                    </select>
                <button type="submit">Update Information</button>
            </form>
        </section>
        </div>
    )
}

export default StudentUpdateForm;