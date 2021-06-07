import { useState } from 'react';
import React from 'react'
import './App.css';
import Note from './component/note/Note';


const App = () => {
const [notes, setNotes] = useState(
   [
    {
      id: 1,
      content: 'HTML is easy',
      date: '2019-05-30T17:30:31.098Z',
      important: true
    },
    {
      id: 2,
      content: 'Browser can execute only JavaScript',
      date: '2019-05-30T18:39:34.091Z',
      important: false
    },
    {
      id: 3,
      content: 'GET and POST are the most important methods of HTTP protocol',
      date: '2019-05-30T19:20:14.298Z',
      important: true
    }
  ]
);

const [newNote, setNewNote] = useState();
const [showAll, setShowAll] = useState(true);

const notesToShow = showAll ?  notes : notes.filter((note) => note.important === true);

const addNote = (e) => {
    e.preventDefault();
    console.log("button clicked", e.target);

    const noteObject = {
    content: newNote,
    date: new Date().toISOString(),
    important: Math.random() < 0.5,
    id: notes.length + 1,
}
    setNotes(notes.concat(noteObject));
    setNewNote('');
};

  const handleNoteChange = (e) => {
    console.log("input", e.target.value);
    setNewNote(e.target.value);
}


  return (
    <div className="App">
     <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>
      <ul>
        {notesToShow.map(note => 
          <Note key={note.id} note={note}/>
        )}
      </ul>

      <form onSubmit={addNote} >
        <input value={newNote} onChange={handleNoteChange}/>
        <button type="submit">Save</button>
      </form>
    </div>
    </div>
  );
}

export default App;
