import { useState } from 'react';
import './App.css';
import Person from './component/person/Person';
import Search from './component/search/Search';
// import Search from './component/search/Search';


const App = () => {
  const [persons, setpersons] = useState([
    {
      name: 'Aishat',
      number: '08140308878'
    },
    {
      name: 'kent',
      number: '08140356878'
    },
    {
      name: 'azeez',
      number: '08140795878'
    },
  ]);

  const [newName, setnewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchName, setSearchName] = useState('');
  const [filteredNames, setfilteredNames] = useState(true);



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
 }



  return (
    <div className="App">
      <h2>Phonebook</h2>
        <Search filteredNames={filteredNames} numbersToShow={numbersToShow} handleSearchName={handleSearchName} searchForPerson={searchForPerson} setfilteredNames={setfilteredNames}/>

      <form onSubmit={addName} >
        <div>
          name: <input value={newName} onChange={handleNewName}/>
          <p>{}</p>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNewNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {/* {persons.map(person => 
          <Person key={person.id} person={person}/>
          )} */}

            {numbersToShow.map(filteredName => 
            <Person key={filteredName.id} name={filteredName.name} number={filteredName.number}/>
        
        )}  
      </div>
    </div>
  );
}

export default App;
