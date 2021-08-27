import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { EDIT_PHONE } from "../queries";


const PhoneForm = ({setError}) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('');

    const [ editPhone, result ] = useMutation(EDIT_PHONE)

    const submit = (e) => {
        e.preventDefault()

        editPhone({ variables: {name, phone}})

        setName('')
        setPhone('')
    }

    useEffect(() => {
        if (result.data && result.data.editNumber === null) {
            setError('person not found')
        }
    }, [result.data, setError]);

    return ( 
        <div>
             <h2>change number</h2>

            <form onSubmit={submit}>
            <div>
                name <input
                value={name}
                onChange={({ target }) => setName(target.value)}
                />
            </div>
            <div>
                phone <input
                value={phone}
                onChange={({ target }) => setPhone(target.value)}
                />
            </div>
            <button type='submit'>change number</button>
            </form>
        </div>
     );
}
 
export default PhoneForm;