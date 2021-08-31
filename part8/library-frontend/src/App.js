import './App.css';
import React, { useState } from 'react';
import Authors from './component/Authors';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Books from './component/Books';
import BookForm from './component/BookForm';
import LoginForm from './component/LoginForm';
import Notification from './component/Notification';
import { useApolloClient } from '@apollo/client';
import Recommended from './component/Recommended';

function App() {
  const [token, setToken] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const client = useApolloClient()


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

    setErrorMessage('logged out')
  }

  return (
    <div className="App">
      <Notification errorMessage={errorMessage}/>

      <Router>
        <Link to="/">Authors</Link>{'   '}
        <Link to="/books">Books</Link> {'   '}

{
  !token ?
  <div>
        <Link to="/login">login</Link>
        <Route path='/login' exact>
            <LoginForm 
              setToken={setToken}
              setError={notify} 
              />
        </Route>
  </div>

  :
  <div>
    <Link to="/add-Book">add books</Link>
    <Link to="/recommend">recommend</Link>
    <button onClick={logOut}>logout</button>
    <Route path='/add-Book' exact>
      <BookForm />
    </Route>
  </div>

}
        <Switch>
          <Route path='/' exact>
            <Authors/>
          </Route>
          <Route path='/books' exact>
            <Books/>
          </Route>
          <Route path='/recommend' exact>
            <Recommended token={token}/>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
