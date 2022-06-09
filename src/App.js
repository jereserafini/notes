import { useState } from "react";
import { nanoid } from 'nanoid'
import NoteList from "./components/NoteList";

function App() {

  const [notes, setNotes] = useState([{
    id: nanoid(),
    title: 'title1',
    content:'content',
    active: true
  },{
    id: nanoid(),
    title: 'title2',
    content:'content',
    active: true
  },{
    id: nanoid(),
    title: 'title3',
    content:'content',
    active: true
  },{
    id: nanoid(),
    title: 'title4',
    content:'content',
    active: true
  },])

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

  return (
    <div className="container">
      <NoteList 
        notes={notes}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
}

export default App;
