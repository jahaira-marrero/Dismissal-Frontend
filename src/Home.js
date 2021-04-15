import React from "react";
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


function Home({currentUser}) {
    const history = useHistory()
    
    return (
        <div> <h2>Welcome {currentUser?.name}</h2>
            <Button onClick={()=>history.push("/dismissalchangescontainer")}>Current Dismissal Changes</Button>
            <Button onClick={()=>history.push("/dismissalchangeform")}>Add Dismissal Change</Button>
            <Button onClick={()=>history.push("/students")}>All Students</Button>
            <Button onClick={()=>history.push("/transportations")}>Transportation</Button>
        </div>
    )
}

export default Home;