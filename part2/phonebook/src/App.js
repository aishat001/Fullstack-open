import { useState } from 'react';
import './App.css';
import Person from './component/person/Person';
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
  const [filteredNames, setfilteredNames] = useState([]);

  const addName = (e) => {
    e.preventDefault();

    //  if name already exist *********
    const existingPerson = persons.some(person => person.name === newName)
    
    if (existingPerson) {
        window.confirm(`${existingPerson.name} is already added to phonebook, replace the old number with a new one?`)

  } else {

    const personObject = {
      name: newName,
      number: newNumber
    }
     
      setpersons(persons.concat(personObject));
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


//  search names
 const  searchForPerson = (e) => {
  e.preventDefault();
    console.log(searchName);
    const filteredResult = persons.filter(person => person.name.toLowerCase().includes(searchName));
    console.log(filteredResult);
    setfilteredNames(filteredResult);
 }




  return (
    <div className="App">
      <h2>Phonebook</h2>
      <div className="search">
        <form onSubmit={searchForPerson}>
        filter shown with <input value={searchName} onChange={handleSearchName}/>
        
              
          <button type="submit"> search</button>
        </form>

        <div>
        {filteredNames.map(filteredName => {
            return <p >{filteredName.name} {filteredName.number}</p>
        }
        )}   
        </div>
               
    </div>
        {/* <Search handleSearchName={handleSearchName} searchForPerson={searchForPerson} filteredNames={filteredNames} /> */}

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
        {persons.map(person => 
          <Person key={person.id} person={person}/>
          )}
      </div>
    </div>
  );
}

export default App;
