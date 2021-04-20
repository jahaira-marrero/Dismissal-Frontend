import React from "react";
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Transportation({name, students}) {
console.log(students)
  const studentArray=students.map((student) => (
        <tbody>
          <tr>
            <td>
              <Accordion>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        <p><h4>{student.name}</h4></p>
                    </Accordion.Toggle>
                  </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body><p>Homeroom: {student.homeroom}</p> Phone Number: {student.phone}</Card.Body>
                    </Accordion.Collapse>
                </Card>
              </Accordion>
            </td>
          </tr>
        </tbody>
  ))
    return (
        <div>
          <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th><h2>{name}</h2></th>
                </tr>
              </thead>
              {studentArray}
          </Table>
        </div>
    )
}

export default Transportation