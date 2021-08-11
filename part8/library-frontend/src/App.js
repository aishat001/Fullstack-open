import './App.css';
import React from 'react';
import Authors from './component/Authors';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Books from './component/Books';


function App() {



  return (
    <div className="App">
      <Router>
        <Link to="/">Authors</Link>
        <Link to="/books">Books</Link>

        <Switch>
          <Route path='/' exact>
            <Authors/>
          </Route>
          <Route path='/books' exact>
            <Books/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
