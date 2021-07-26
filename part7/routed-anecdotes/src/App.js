import React, { useEffect, useState } from 'react'
import { Alert, Button, Form, Nav, Navbar, Table } from 'react-bootstrap'
import { Link, Route, BrowserRouter as Router, Switch, useParams } from 'react-router-dom'
import { useField } from './hooks'



const AnecdoteList = ({ anecdotes }) => (
  <div>
    <h2>Anecdotes</h2>
    <Table striped>
    <tbody>
        {anecdotes.map(anecdote =>
          <tr key={anecdote.id} >
            <td>
              <Link to={`/anecdotes/${anecdote.id}`}>{anecdote.content}</Link>
            </td>
          </tr>)}
      </tbody>
    </Table>
  </div>
)

const About = () => (
  <div>
    <h2>About anecdote app</h2>
    <p>According to Wikipedia:</p>

    <em>An anecdote is a brief, revealing account of an individual person or an incident.
      Occasionally humorous, anecdotes differ from jokes because their primary purpose is not simply to provoke laughter but to reveal a truth more general than the brief tale itself,
      such as to characterize a person by delineating a specific quirk or trait, to communicate an abstract idea about a person, place, or thing through the concrete details of a short narrative.
      An anecdote is "a story with a point."</em>

    <p>Software engineering is full of excellent anecdotes, at this app you can find the best and add more.</p>
  </div>
)

const Footer = () => (
  <div>
    Anecdote app for <a href='https://courses.helsinki.fi/fi/tkt21009'>Full Stack -websovelluskehitys</a>.

    See <a href='https://github.com/fullstack-hy/routed-anecdotes/blob/master/src/App.js'>https://github.com/fullstack-hy2019/routed-anecdotes/blob/master/src/App.js</a> for the source code.
  </div>
)

const CreateNew = (props) => {
  // const [content, setContent] = useState('')
  // const [author, setAuthor] = useState('')
    // const [info, setInfo] = useState('')

  const content = useField('text')
  const author = useField('text')
  const info = useField('text')


  const handleSubmit = (e) => {
    e.preventDefault()
    props.addNew({
      content: content.value,
      author: author.value,
      info: info.value,
      votes: 0
    })
  }
  const handleReset = () => {
    content.onReset()
    author.onReset()
    info.onReset()
  }

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <Form.Group>
          <Form.Label>
              content
            </Form.Label>
            <Form.Control {...content}/>
            <Form.Label>
              author
            </Form.Label>
            <Form.Control {...author}/>
            <Form.Label>
              url for more info
            </Form.Label>
            <Form.Control {...info} />

          <Button variant="primary" type='submit'>create</Button>
          <Button variant="secondary" type='reset'>reset</Button>
        </Form.Group>

      </form>
    </div>
  )

}

const Notification = ({notification, setNotification}) => {

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [notification, setNotification])
  
  return (
<div className="container">
  {(notification &&
    <Alert variant="success">
      {notification}
    </Alert>
  )}
</div>
  )
}


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
              <About/>
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