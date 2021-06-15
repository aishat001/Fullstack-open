import React from "react";

const Person = ({name, number, deletePerson}) => {
    
    return ( 
        <div>
            <p key={name.id}>{name} {number}</p>
            <button type="button" onClick={deletePerson} >delete</button>
        </div>
     );
}
 
export default Person;