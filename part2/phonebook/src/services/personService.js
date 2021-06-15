import axios from "axios";
const baseUrl = 'http://localhost:3002/api/persons'

const getAll = () => {
   const request = axios.get(baseUrl)
    return request.then(res => res.data) 
}

const create = (personObject) => {
   const request = axios.post(baseUrl, personObject)
    return request.then(res => res.data) 
}

const update = (id, newPersons) => {
   const request = axios.delete(`${baseUrl}/${id}`, newPersons)
    return request.then(res => res.data) 
}

const exportObject = { getAll, create, update }
export default exportObject;
