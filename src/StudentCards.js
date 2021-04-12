import React, {useState} from "react";
import StudentDismissalDetails from "./StudentDismissalDetails"

function StudentCards({name, address, guardian, phone, transportation, modifications}) {
    const [showDetails, setShowDetails] = useState(false)

  

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

        function handleClick() {
            setShowDetails(!showDetails)
        }

    return (
        <div>
            <h2>Student Information Card</h2>
            <p>Student Name:</p> {name}
            <p>Home Address:</p> {address}
            <p>Guardian:</p> {guardian}
            <p>Phone:</p> {phone}
            <p>Transportation: </p> {transportation}
            
            <button onClick={handleClick}> See Prior Changes</button>
            {showDetails ?  <p>{dismissalModification}</p> : null}
        </div>
    )
}

export default StudentCards;

// dismissalchanges.map((dismissal, index) => {
//     return (
//         <>
//         Change #{index+1}
//         <ul>
//             <li>{dismissal.date}</li>
//             <li>{dismissal.transport}</li>
//             <li>{dismissal.user}</li>
//         </ul>
//         </>
//     )
// })