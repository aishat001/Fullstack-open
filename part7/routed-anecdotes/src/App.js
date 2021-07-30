import React, { useState } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link, Route, BrowserRouter as Router, Switch, useParams } from 'react-router-dom'
import About from './component/About'
import AnecdoteList from './component/AnecdoteList'
import CreateNew from './component/CreateNew'
import Footer from './component/Footer'
import Notification from './component/Notification'


const App = () => {

  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: '1'
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: '2'
    }
  ])
  const [notification, setNotification] = useState('')



  const addNew = (anecdote) => {
    anecdote.id = (Math.random() * 10000).toFixed(0)
    setAnecdotes(anecdotes.concat(anecdote))
    setNotification(`a new anecdote "${anecdote.content}" has been created`)
  }

  const anecdoteById = (id) =>
    anecdotes.find(a => a.id === id)

  const vote = (id) => {
    const anecdote = anecdoteById(id)

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    }

    setAnecdotes(anecdotes.map(a => a.id === id ? voted : a))
  }
  const Anecdotes = ({ vote, anecdoteById }) => {
    const id = useParams().id
    const anecdote = anecdoteById(id)

    return (
    <div>
      <h2>
        {anecdote.content} by {anecdote.author}
      </h2>

      <p>has {anecdote.votes} {anecdote.votes === 1 || anecdote.votes === 0  ? "vote" : "votes"}</p>
      <button style={{ marginLeft: 5 }} onClick={() => vote(anecdote.id)}>vote</button>
    
    <p>
      for more info see{" "} 
      <a href={anecdote.info} target="_blank" rel="noopener noreferrer"> {anecdote.info} </a>
    </p>
    
    </div>
  )
    }
const padding = {
  padding : 10
}

  return (
    <div className="container">
        <h1>Software anecdotes</h1>
        <Notification notification={notification} setNotification={setNotification}/>
      
      <Router>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#" as="span">
                  <Link style={padding} to="/">anecdotes</Link>
              </Nav.Link>
              <Nav.Link href="#" as="span">
                  <Link style={padding} to="/create">create new</Link>
              </Nav.Link>
              <Nav.Link href="#" as="span">
                  <Link style={padding} to="/about">about</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>

        <Switch>
          <Route path="/anecdotes/:id">
              <Anecdotes vote={vote} anecdoteById={anecdoteById}/>
          </Route>
          <Route path="/about">
              <About />
          </Route>
          <Route path="/create">
              <CreateNew addNew={addNew}/>
          </Route>
          <Route path="/">
             <AnecdoteList anecdotes={anecdotes}/>
          </Route>
        </Switch>
      </Router>
      <Footer/>
    </div>
  )
}

export default App;