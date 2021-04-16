import React from "react";
import Table from 'react-bootstrap/Table'

function Transportation({name, students}) {

//  const studentObject = students.map((student) => {
     
//     return (
//      <td>
//      key={student.id} 
//      student={student.name}
//         </td> 
//     )
// })

//  console.log(student)

    return (
        <div> 
            {/* <h2>Transport Type: {name}</h2>
                <li>{students}</li> */}

         <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>Student</th>
                        <th>Transportation</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>{students}</td>
                        <td>{name}</td>
                       </tr>
                        
                    </tbody>
                    </Table>
        </div>
    )
}

export default Transportation