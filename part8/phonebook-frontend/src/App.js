import { useQuery } from '@apollo/client';
import Persons from './component/Persons';
import './App.css';
import PersonForm from './component/PersonForm';
import { ALL_PERSONS } from './component/queries';
import Notification from './component/Notification';
import { useState } from 'react';
import PhoneForm from './component/PhoneForm';




function App() {
  const [errorMessage, setErrorMessage] = useState(null);

  const result = useQuery(ALL_PERSONS)

  if (result.loading) {
    return <div>Loading...</div>
  }

  const notify = (message) => {
    setErrorMessage(message)
    setTimeout(() => {
      setErrorMessage(null)
    }, 10000)
  }

  return (
    <div className="App">
      <Notification errorMessage={errorMessage}/>
      <Persons persons = { result.data.allPersons}/>
      <PersonForm setError={notify} />
      <PhoneForm setError={notify}/>
    </div>
  );
}

export default App;
