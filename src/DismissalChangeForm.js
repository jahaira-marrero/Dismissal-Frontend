import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

function DismissalChangeForm({addDismissalChange, students, currentUser, handleUserModUpdate}) {
    const [date, setDate] = useState("")
    const [transportation_id, setTransportation_id] = useState([])
    const [user, setUser] = useState([])
    const [studentId, setStudentId] = useState([])
    const history = useHistory()

useEffect(() => {
    fetch(`http://localhost:3000/users/${id}`)
     .then(r => r.json())
     .then(userObject => { setUser(userObject)
    })
},[]);

const id = currentUser.id

const studentOptions = students?.map((student) => { return (
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
            console.log(changeRequest)
            addDismissalChange(changeRequest);
            handleUserModUpdate(changeRequest)
            history.push('/dismissalchangescontainer')
        });
    }

    return (
        <div>
            <h1 className="App-header">Dismissal Change Form</h1>
                <Form  onSubmit={handleSubmit}>
                <Form.Row>
                    <Col md={4}>
                <Form.Group size="lg" controlId="student_id"
                    id="student_id"
                    name="student_id"
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)} >
                    <Form.Label>Student Name</Form.Label>
                    <Form.Control size="sm" as="select">
                    {studentOptions}
                    </Form.Control>
                </Form.Group>
                </Col>

                <Col md={3}>
                <Form.Group size="lg" controlId="date"
                    id="date"
                    name="date"
                    value="date"
                    onChange={(e) => setDate(e.target.value)}>
                    <Form.Label>Date</Form.Label>
                    <Form.Control size="sm" type="text" placeholder="Date" />
                </Form.Group>
                </Col>
                
                <Col md={3}>
                <Form.Group size="lg" controlId="transportation_id"
                id="transportation_id"
                name="transportation_id"
                value="transportation_id"
                onChange={(e) => setTransportation_id(e.target.value)}>
                    <Form.Label>Transportation</Form.Label>
                    <Form.Control size="sm" as="select">
                    <option value="1">Bus 1</option>
                    <option value="2">Bus 2</option>
                    <option value="3">Walker</option>
                    <option value="4">Car Rider</option>
                    <option value="5">Early Pick Up</option>
                    </Form.Control>
                </Form.Group>
                </Col>
                <Col xs={1}><Button type="submit">Submit Change</Button></Col>
                </Form.Row>
                </Form>
            </div>
            );
        }

export default DismissalChangeForm;
