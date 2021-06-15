import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Person from './component/person/Person';
import PersonForm from './component/personform/PersonForm';
import Search from './component/search/Search';
import personService from './services/personService';
// import Search from './component/search/Search';


const App = () => {
  const [persons, setpersons] = useState([]);
  const [newName, setnewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchName, setSearchName] = useState('');
  const [filteredNames, setfilteredNames] = useState(true);

useEffect(() => {
  personService
    .getAll()
    .then(initial => {
      console.log(initial)
      setpersons(initial)
    })
    .catch(error => {
      return console.log('api does not exist');
    })
}, []);

  const addName = (e) => {
    e.preventDefault();

    //  if name already exist *********
    const existingPerson = persons.find(person => person.name.toLowerCase() === newName)
    
    if (existingPerson) {
        window.confirm(` The username ${existingPerson.name} is already added to phonebook, replace the old number with a new one?`)

        if (existingPerson) {
          const updateUserNum = { 
            name : existingPerson.name,
            number: newNumber
          }
          const id = existingPerson.id;
          

      return axios
          .put(`http://localhost:3002/api/persons/${id}`, updateUserNum) 
          .then(res => {
              console.log(res);
              setpersons(persons.map(person => person.id !== id ? person : updateUserNum))
          })
        }




  } else {

    const generateId = id => {
      const maxId = persons.length > 0 ? Math.max(...persons.map(person => person.id)) : 0
      return maxId + 1
  }
    const personObject = {
      id: generateId(),
      name: newName,
      number: newNumber
    }
     
    personService
    .create(personObject)
    .then(addNewPerson => {
      console.log(addNewPerson)
      setpersons(persons.concat(personObject))
      setnewName('');
      setNewNumber(''); 
    })

  }

 };

//  get name from input ************
  const handleNewName = (e) => {
   setnewName(e.target.value);
   console.log(newName);
 }

//  getNumber from input ******
  const handleNewNumber = (e) => {
   setNewNumber(e.target.value);
   console.log(newName);
 };
  const  handleSearchName = (e) => {
    setSearchName(e.target.value);
 };

 const numbersToShow = filteredNames ?  persons : persons.filter((person) => person.name.toLowerCase().includes(searchName) === true);

//  search names
 const  searchForPerson = (e) => {
  e.preventDefault();
    console.log(numbersToShow);
    console.log(setpersons(numbersToShow));
 }



 const deletePerson = (id) => {
   console.log(id);
    const newPersons = persons.filter(person => person.id !== id)

   personService
    .update(id, newPersons)
   .then(returnedPerson => {
          console.log(returnedPerson)
          setpersons(newPersons)
         // returnedPerson.status(204).end()
        })

 }



  return (
    <div className="App">
      <h2>Phonebook</h2>
      <Search filteredNames={filteredNames} numbersToShow={numbersToShow} handleSearchName={handleSearchName} searchForPerson={searchForPerson} setfilteredNames={setfilteredNames}/>
      
      <h2>Add a new</h2>
      <PersonForm addName={addName} newNumber={newNumber} newName={newName} handleNewName={handleNewName} handleNewNumber={handleNewNumber}/>

      <h2>Numbers</h2>
          {numbersToShow.map(filteredName => 
      <Person key={filteredName.id} deletePerson={() => deletePerson(filteredName.id)} name={filteredName.name} number={filteredName.number}/>
        
        )}  
    </div>
  );
}

export default App;

