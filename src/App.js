import { useEffect, useState } from "react";
import { nanoid } from 'nanoid'
import NoteList from "./components/NoteList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

function App() {

  const [notes, setNotes] = useState([])

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes'))
    
    if (savedNotes) {
      setNotes(savedNotes)
    }

  }, [])
  

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))

  }, [notes])
  

  const addNote = ({title, content}) => {
    const newNote = {
      id: nanoid(),
      title,
      content,
      active: true
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }

  const deleteNote = (id) =>{
    const newNotes = notes.filter( note => note.id !== id);
    setNotes(newNotes)
  }

  const archiveNote = (id) => {
    let newNotes = notes.map( note => {
      const newNote = {...note}
      if (note.id === id){
        newNote.active = !newNote.active;
      }
      return newNote
    })
    // notes.forEach( )
    // newNotes = [...notes]
    setNotes(newNotes);
  }

  const updateNote = (id) => {
    
    notes.map( note => note.id === id)

  }

  return (
    <BrowserRouter>
      
      <Header/>
      <Routes>

      <Route exact path="/" element={
        
        <NoteList 
          notes={notes.filter( note => note.active === true)}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
          handleArchiveNote={archiveNote}
          handleUpdateNote={updateNote}
        />
        
      }/>

      <Route exact path="/archive" element={
        
        <NoteList 
          notes={notes.filter( note => note.active === false)}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
          handleArchiveNote={archiveNote}
          handleUpdateNote={updateNote}
        />
        
      }/>

      </Routes>      
    </BrowserRouter>
  
  );
}

export default App;
