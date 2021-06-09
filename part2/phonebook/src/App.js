import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Person from './component/person/Person';
import PersonForm from './component/personform/PersonForm';
import Search from './component/search/Search';
// import Search from './component/search/Search';


const App = () => {
  const [persons, setpersons] = useState([]);
  const [newName, setnewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchName, setSearchName] = useState('');
  const [filteredNames, setfilteredNames] = useState(true);

useEffect(() => {
  axios
    .get('http://localhost:3002/persons')
    .then(res => {
      console.log(res.data)
      setpersons(res.data)
    });
}, []);

  const addName = (e) => {
    e.preventDefault();

    //  if name already exist *********
    const existingPerson = persons.some(person => person.name.toLowerCase() === newName)
    
    if (existingPerson) {
        window.confirm(`${existingPerson.name} is already added to phonebook, replace the old number with a new one?`)

  } else {

    const personObject = {
      name: newName,
      number: newNumber
    }
     
      const setAPerson = persons.concat(personObject); 
      setpersons(setAPerson);
      setnewName('');
      setNewNumber(''); 
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



  return (
    <div className="App">
      <h2>Phonebook</h2>
      <Search filteredNames={filteredNames} numbersToShow={numbersToShow} handleSearchName={handleSearchName} searchForPerson={searchForPerson} setfilteredNames={setfilteredNames}/>
      
      <h2>Add a new</h2>
      <PersonForm addName={addName} newNumber={newNumber} newName={newName} handleNewName={handleNewName} handleNewNumber={handleNewNumber}/>

      <h2>Numbers</h2>
          {numbersToShow.map(filteredName => 
      <Person key={filteredName.id} name={filteredName.name} number={filteredName.number}/>
        
        )}  
    </div>
  );
}

export default App;

        // {/* {persons.map(person => 
        //   <Person key={person.id} person={person}/>
        //   )} */}