import React, { useState } from "react";
import StudentDismissalDetails from "./StudentDismissalDetails";
import StudentUpdateForm from "./StudentUpdateForm";
import Button from 'react-bootstrap/Button';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import styled, { css } from "styled-components";

// import Student from "./Student";

function StudentCards({id, name,hr, address, guardian, phone, transportation, modifications, handleStudentUpdateForm, students, transForm}) {
    const [showDetails, setShowDetails] = useState(false)
    const [showUpdateForm, setShowUpdateForm] = useState(false)

    const dismissalModification = modifications.map((modification) => {
        
        return (
            <StudentDismissalDetails  
            key={modification.id}
            date={modification.date}
            transUser={modification.user.name}
            transName={modification.transportation.name}
            />
        )
        })

        function handleUpdateClick() {
            setShowUpdateForm(!showUpdateForm)
        }

        function handleClick() {
            setShowDetails(!showDetails)
        }

    
  const layoutBox = css`
  width: 80%;
  min-height: 100px;
  resize: both;
  overflow: auto;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);
  
  > * {
    border: 1px dashed rgba(0, 0, 0, 0.1);
  }
  `;


const Box = styled.div`
  background: ${props => props.background || "aliceblue"};
  display: grid;
  place-items: center;
  padding: 1rem;
  font-weight: bold;
`;


  const SidebarSaysLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(250px, 25%) 1fr;
  ${layoutBox};
  `;
  


    return (
        <div className="card-group" id={id}>
            {/* <h4>{name}</h4>
            <p>Home Address: {address}</p> 
            <p>Guardian: {guardian}</p> 
            <p>Phone: {phone}</p> 
            <p>Homeroom: {hr}</p>
            <p>Transportation Type: {transportation}</p> 
            <Button size="sm" onClick={handleUpdateClick}>Update this Student</Button> {" "}
            {showUpdateForm ? <StudentUpdateForm handleStudentUpdateForm={handleStudentUpdateForm} students={students} transportations={transForm} /> : null}
            <Button size="sm" onClick={handleClick}> See Prior Changes</Button>
            {showDetails ?  <p>{dismissalModification}</p> : null} */}
          
            {/* <CardDeck style={{ width: '18rem' }}>
                
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Transportation: {transportation}</Card.Subtitle>
                    <Card.Text>
                    <p>Home Address: {address}</p> 
                    <p>Guardian: {guardian}</p> 
                    <p>Phone: {phone}</p> 
                    <p>Homeroom: {hr}</p>
                    </Card.Text>

                    <Button size="sm" onClick={handleUpdateClick}>Update this Student</Button> {" "}
            {showUpdateForm ? <StudentUpdateForm handleStudentUpdateForm={handleStudentUpdateForm} students={students} transportations={transForm} /> : null}
            <Button size="sm" onClick={handleClick}> See Prior Changes</Button>
            {showDetails ?  <p>{dismissalModification}</p> : null}
                    {/* <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link> */}
                {/* </Card.Body> */}
                {/* </CardDeck> */} 
            
            <h3>{name}</h3>
            <SidebarSaysLayout>
                <Box>
                    <p>Home Address: {address}</p> 
                    <p>Guardian: {guardian}</p> 
                    <p>Phone: {phone}</p> 
                    <p>Homeroom: {hr}</p>

                </Box>
              <Box background="papayawhip">
              <Button size="sm" onClick={handleUpdateClick}>Update this Student</Button> {" "}
            {showUpdateForm ? <StudentUpdateForm handleStudentUpdateForm={handleStudentUpdateForm} students={students} transportations={transForm} /> : null}
            <Button size="sm" onClick={handleClick}> See Prior Changes</Button>
            {showDetails ?  <p>{dismissalModification}</p> : null}
              </Box>
        
          </SidebarSaysLayout>

           
        </div>
    )
}

export default StudentCards;
