import { useMutation } from "@apollo/client";
import { useState } from "react";
import Select from "react-select";
import { ADD_BIRTH_YEAR, ALL_AUTHORS } from "../queries";

const SetBirthYear = ({authors}) => {
    const [nameOptions, setNameOptions] = useState('');
    const [born, setBorn] = useState('');

    const [ editBirthYear ] = useMutation(ADD_BIRTH_YEAR,
        {
            refetchQueries: [{query : ALL_AUTHORS}]
        })

const options = authors.map(author => {
    return {
        value: author.name, label: author.name
    }
})

    const addBirthYear = (e) => {
        e.preventDefault()
        const name = nameOptions.value
        editBirthYear({ variables : {name, born}})
    }

    return ( 
        <div>
            <form onSubmit={addBirthYear}>
            <div>
            <Select
            Value={nameOptions}
            onChange={setNameOptions}
            options={options}
        />
        </div>
            {/* <input type="text" value={name} onChange={({target}) => setName(target.value)} placeholder="Author's sname"/> */}
             <br/>   <input type="number" value={born} onChange={({target}) => setBorn(parseInt(target.value))} placeholder="e.g 1985"/>
             <br/>   <button type="submit">update author</button>
            </form>
        </div>
     );
}
 
export default SetBirthYear;