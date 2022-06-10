import { useEffect, useState } from "react";
import { nanoid } from 'nanoid'
import NoteList from "./components/NoteList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

function App() {

  const [notes, setNotes] = useState([])

  const [modalData, setModalData] = useState({})

  const [show, setShow] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes'))
    
    if (savedNotes) {
      setNotes(savedNotes)
    }

  }, [])
  

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])
  

  const saveNote = ({title, content, id, active}) => {
    const newNote = {
      id: id ?? nanoid(),
      title,
      content,
      active: active ?? true
    }

    const newNotes = [...notes]

    if (id) {
      const index = newNotes.findIndex( note => note.id === id )
      newNotes.splice( index, 1, newNote )
    } else {
      newNotes.push(newNote)
    }

    setNotes(newNotes)
  }

  const deleteNote = (id) =>{
    const newNotes = notes.filter( note => note.id !== id)
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
    const noteUpdate = notes.find( note => note.id === id)
    console.log(noteUpdate)
    setShow(true)
    setModalData(noteUpdate)
    console.log(modalData);
  }

  return (
    <BrowserRouter>
      
      <Header/>
      <Routes>

      <Route exact path="/" element={
        
        <NoteList
          notes={notes.filter( note => note.active === true)}
          handleAddNote={saveNote}
          handleDeleteNote={deleteNote}
          handleArchiveNote={archiveNote}
          handleUpdateNote={updateNote}
          modalData={modalData}
          setModalData={setModalData}
          show={show}
          setShow={setShow}
        />
        
      }/>

      <Route exact path="/archive" element={
        
        <NoteList 
          notes={notes.filter( note => note.active === false)}
          handleAddNote={saveNote}
          handleDeleteNote={deleteNote}
          handleArchiveNote={archiveNote}
          handleUpdateNote={updateNote}
          modalData={modalData}
          setModalData={setModalData}
          show={show}
          setShow={setShow}
        />
        
      }/>

      </Routes>      
    </BrowserRouter>
  
  );
}

export default App;
