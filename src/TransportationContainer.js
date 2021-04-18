import React from "react";
import Transportation from "./Transportation"

function TransportationContainer({transportations}) {
    const transportMethods = transportations.map((transportation) => { 
      
        return (
            <Transportation
            key={transportation.id}
            name={transportation.name}
            students={transportation.students.map((student) => {return(student)})}
           
            />
        )
    })

    return (
        <div>
            <h1 style={{color: "black"}}>Transportation Rosters</h1>
        
               {transportMethods}
         </div>
        )
}
export default TransportationContainer;