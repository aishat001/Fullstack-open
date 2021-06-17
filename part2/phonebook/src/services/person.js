import axios from "axios";
const baseUrl = '/api/persons'

const getAll = () => {
   const request = axios.get(baseUrl)
    return request.then(res => res.data) 
}

const create = (personObject) => {
   const request = axios.post(baseUrl, personObject)
    return request.then(res => res.data) 
}

const remove = id => axios.delete(`${baseUrl}/${id}`);

const update = (id, updateNumber) => {
   const request = axios.put(`${baseUrl}/${id}`, updateNumber)
    return request.then(res => res.data) 
}

const exportObject = { getAll, create, remove, update }
export default exportObject;
