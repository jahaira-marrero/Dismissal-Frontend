import React from "react";
import Transportation from "./Transportation"

function TransportationContainer({transportations}) {
    const transportMethods = transportations.map((transportation) => { 
        return (
            <Transportation
            key={transportation.id}
            name={transportation.name}
            students={transportation.students.map((student) => {return(student.name)})}
            />
        )
    })

    return (
        <div>
            Transportation Container
               {transportMethods}
        </div>
        )
}
export default TransportationContainer;