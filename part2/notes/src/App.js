import React, { useState, useEffect } from 'react'
import Note from './component/note/Note'
import noteService from './services/notes'
import './App.css'
import Notification from './component/notification/Notification'
import Footer from './component/footer/Footer'
import loginService from './services/login'
import LoginForm from './component/LoginForm'
import Togglable from './component/Togglable'


  const App = () => {
    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState('')
    const [showAll, setShowAll] = useState(false)
    const [username, setUsername] = useState('azeez');
    const [password, setPassword] = useState('mypassword');
    const [user, setUser] = useState(null);
    const [info, setInfo] = useState();
    const [errorMessage, setErrorMessage] = useState(null)



    useEffect(() => {
      noteService
        .getAll()
        .then(initialNotes => {
        setNotes(initialNotes)
      })
    }, [])

    useEffect(() => {
      const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
      if (loggedUserJSON) {
        const user = JSON.parse(loggedUserJSON)
        setUser(user)
        noteService.setToken(user.token)
      }
    }, [])  
  
    const addNote = (event) => {
      event.preventDefault()
      const noteObject = {
        content: newNote,
        date: new Date().toISOString(),
        important: Math.random() > 0.5,
      }
  
      noteService
        .create(noteObject)
          .then(returnedNote => {
          setNotes(notes.concat(returnedNote))
          setNewNote('')
        })
    }
  
    const toggleImportanceOf = id => {
      const note = notes.find(n => n.id === id)
      const changedNote = { ...note, important: !note.important }
    
      noteService
      .update(id, changedNote).then(returnedNote => {
        setNotes(notes.map(note => note.id !== id ? note : returnedNote))
      })
      .catch(error => {
        setErrorMessage(
          `the note '${note.content}' was already deleted from server`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000);
        setNotes(notes.filter(n => n.id !== id))
      })    
    }
  
    const handleNoteChange = (event) => {
      console.log(event.target.value)
      setNewNote(event.target.value)
    }

    const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important)

    const handleLogin = async (e) => {
      e.preventDefault()
 
      try {
        const user = await loginService.login({
          username,
          password
        })
        console.log('logging in with', username, password, user)

        // noteService.setToken(user.token)
        window.localStorage.setItem(
          'loggedNoteappUser', JSON.stringify(user)
        ) 
        setUser(user)
        setUsername('')
        setPassword('')

      } catch (exception) {
        setErrorMessage('wrong credentials')
      }
    }
    const handleLogout = () => {
      setUser(null)
      localStorage.clear()
    }
    const loginForm = ( ) => (
      <Togglable buttonLabel="log in">
          <LoginForm 
          handleLogin={handleLogin}
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword} />
      </Togglable>
    )
      const noteForm = () => (
        <form onSubmit={addNote}>
          <input
            value={newNote}
            onChange={handleNoteChange}
            />
          <button type="submit">save</button>
        </form>  
        )

    return (
      <div className='App'>
        <h1>Notes</h1>
        <Notification message={errorMessage}
         setInfo={setInfo}
         info={info}
         setMessage={setErrorMessage}/>

        {user === null ? 
        <div>
          {loginForm()}
          </div>
         :
          <div>
           <p>{user.name} logged-in</p>
           <button onClick={handleLogout}>logout</button>

           <ul>
              {notesToShow.map(note => 
              <Note
                key={note.id}
                note={note} 
                toggleImportance={() => toggleImportanceOf(note.id)}
                />
              )}
            </ul>

           {noteForm()}
           <div>
           <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>
          </div>
         }

 

        <Footer />
      </div>
    )
  }
  export default App