import { useApolloClient, useQuery } from '@apollo/client';
import Persons from './component/Persons';
import './App.css';
import PersonForm from './component/PersonForm';
import { ALL_PERSONS } from './queries';
import Notification from './component/Notification';
import { useState } from 'react';
import PhoneForm from './component/PhoneForm';
import LoginForm from './component/LoginForm';




function App() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [token, setToken] = useState(null);
  const client = useApolloClient()
  const result = useQuery(ALL_PERSONS)

  
  const notify = (message) => {
    setErrorMessage(message)
    setTimeout(() => {
      setErrorMessage(null)
    }, 10000)
  }


  const logOut = () => {
    setToken(null)
    localStorage.clear()
    client.resetStore()
  }

  if (!token) {
    return (
      <div>
        <Notification errorMessage={errorMessage}/>
        <h2>Login</h2>
        <LoginForm
          setError={notify}
          setToken={setToken}
        />
      </div>
    )
  }
  // if (result.loading) {
  //   return <div>Loading...</div>
  // }

  return (
    <div className="App">
      
      <Notification errorMessage={errorMessage}/>
      <Persons persons = { result.data.allPersons}/>
      <PersonForm setError={notify} />
      <PhoneForm setError={notify}/>
      <button onClick={logOut}>logout</button>
    </div>
  );
}

export default App;
