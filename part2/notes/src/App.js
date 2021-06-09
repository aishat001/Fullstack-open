import { useEffect, useState } from 'react';
import React from 'react'
import './App.css';
import Note from './component/note/Note';
import axios from 'axios';


const App = () => {
const [notes, setNotes] = useState([]);
const [newNote, setNewNote] = useState();
const [showAll, setShowAll] = useState(true);

const notesToShow = showAll ?  notes : notes.filter((note) => note.important === true);

useEffect(() => {
  axios
    .get('http://localhost:3003/notes')
    .then(res => {
      console.log('fulfilled');
      setNotes(res.data)
    });

}, []);
console.log('render', notes.length, 'notes')

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
