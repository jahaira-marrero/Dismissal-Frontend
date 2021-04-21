import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

function StudentUpdateForm({handleStudentUpdateForm, transportations, studentId, studentName, studentAddress, studentGuardian,studentHr, studentPhone}) {
    const [id, setId] = useState(studentId)
    const [name, setName] = useState(studentName)
    const [address, setAddress] =  useState(studentAddress)
    const [guardian, setGuardian] = useState(studentGuardian)
    const [homeroom, setHomeroom] = useState(studentHr)
    const [phone, setPhone] = useState(studentPhone)
    const [transportation_id, setTransportation_id] = useState("")

    const transportationType = transportations.map((transportation) => {return (
    <option key={transportation.id} value={transportation.id}>{transportation.name}</option>
    )})

function handleStudentUpdate(e) {
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
        .then((updatedStudentInfo) => handleStudentUpdateForm(updatedStudentInfo));
       
}
    return (
        <div style={{position: "relative", left: "415px", marginTop: "20px", background: "#a3c8e4e6", width: "40%", justifyContent: "center"}}><h3>Student Update Form</h3>
            
        
        <Form onSubmit={handleStudentUpdate}>
        <Form.Row>
            <Form.Group as={Col}  controlId="formGridEmail">
            <Form.Label>Student Name</Form.Label>
            <Form.Control  
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)} />
            </Form.Group>
        </Form.Row>
        <Form.Group controlId="formGridAddress2">
            <Form.Label>Address</Form.Label>
            <Form.Control 
              type="text"
              id="address"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)} />
        </Form.Group>
        <Form.Row>
        <Form.Group as={Col} controlId="formGuardian">
            <Form.Label>Guardian</Form.Label>
            <Form.Control 
                 type="text"
                 id="guardian"
                 name="guardian"
                 value={guardian}
                 onChange={(e) => setGuardian(e.target.value)} />
            </Form.Group>  
            <Form.Group as={Col} controlId="formGuardian">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control 
                 type="text"
                 id="phone"
                 name="phone"
                 value={phone}
                 onChange={(e) => setPhone(e.target.value)} />
            </Form.Group>
        </Form.Row>
        <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Homeroom</Form.Label>
            <Form.Control as="select" 
                type="text"
                id="homeroom"
                name="homeroom"
                value={homeroom}
                onChange={(e) => setHomeroom(e.target.value)}>
                <option value="0">Select Homeroom</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Transportation</Form.Label>
            <Form.Control as="select" 
                defaultValue="Choose..."
                id="transportation.id"
                name="transportation.id"
                value={transportationType}
                onChange={(e) => setTransportation_id(e.target.value)}>
                <option value="0">Select a Transportation</option>
                {transportationType}   
            </Form.Control>
            </Form.Group>
            <Button size="sm" type="submit">Update Information</Button>
        </Form>
        </div>
    )
}

export default StudentUpdateForm;