import React from "react";
import Table from 'react-bootstrap/Table';

function Transportation({name, students}) {

  const studentArray=students.map((student) => (
    <tbody>
    <tr>
    <td>
        {student}</td>
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