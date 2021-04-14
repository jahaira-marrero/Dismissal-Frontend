import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Login({changeLogin}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function changeUsername(e) {
        setUsername(e.target.value)
    }

    function changePassword(e) {
        setPassword(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()

        const newLogin = {
            username,
            password
        }
    fetch('http://localhost:3000/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newLogin)
    })
        .then(r => r.json())
        .then(data => changeLogin(data))
    }

    return(
        <div>
            Login Page PlaceHolder
            <Form  onSubmit={handleSubmit}>
            <Form.Row>
        
            <Col xs={3}>
            <Form.Group size="sm" controlId="username"
            id="usernamee"
            name="username"
            value="username"
            onChange={(e) => setUsername(e.target.value)}>
            <Form.Label>Username</Form.Label>
            <Form.Control size="sm" type="text" placeholder="username" />
            </Form.Group>
            </Col>
 
            <Col xs={3}>
            <Form.Group size="sm" controlId="password"
            id="password"
            name="passworde"
            value="password"
            onChange={(e) => setPassword(e.target.value)}>
            <Form.Label>Password</Form.Label>
            <Form.Control size="sm" type="text" placeholder="password" />
            </Form.Group>
            </Col>
           

            <Col xs={1}><Button type="submit">Login</Button></Col>
            </Form.Row>
            </Form>
        </div>
    );
}

export default Login;