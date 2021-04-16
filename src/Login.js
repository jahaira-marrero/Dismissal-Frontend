import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

function Login({setCurrentUser}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()
   

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
        .then(data => setCurrentUser(data))
        history.push('/home')
    }
const busPic = "https://brazilbustravel.com/blog/wp-content/uploads/2017/09/seat.png"

    return(
        <div 
        style={{
            background: `url(${busPic})`,
            height: "100vh",
            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}>
            <h1  style={{color: "white",  display: "flex",lineHeight: "4", fontSize: "6rem", justifyContent: "center", height: "10vh"}}>
                Dismissal Made Easy </h1>
            <section  style={{color: "white",  display: "flex", justifyContent: "center"}}>
      
            <h3 style={{color: "white", margin: "25px", marginTop: "200px", justifyContent: "center"}}>Log In  </h3>
            <Form  onSubmit={handleSubmit} style={{marginTop: "200px"}} >
            <Form.Row>
        
            <Col xs={3}>
            <Form.Group size="sm" controlId="username"
            id="usernamee"
            name="username"
            value={username}
            onChange={changeUsername}>
            {/* <Form.Label>Username</Form.Label> */}
            <Form.Control size="sm" type="text" placeholder="username" />
            </Form.Group>
            </Col>
 
            <Col xs={3}>
            <Form.Group size="sm" controlId="password"
            id="password"
            name="passworde"
            value={password}
            onChange={changePassword}>
            {/* <Form.Label>Password</Form.Label> */}
            <Form.Control size="sm" type="text" placeholder="password" />
            </Form.Group>
            </Col>
    
            <Col xs={1}><Button type="submit">Login</Button></Col>
            </Form.Row>
            </Form>
           
            </section>
        </div>
    );
}

export default Login;