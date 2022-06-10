import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import NoteList from "./components/NoteList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import NoteModal from "./components/NoteModal";

function App() {
  const [notes, setNotes] = useState([]);

  const [modalData, setModalData] = useState({});

  const [show, setShow] = useState(false);
  

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes"));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const saveNote = ({ title, content, id, active }) => {
    const newNote = {
      id: id ?? nanoid(),
      title,
      content,
      active: active ?? true,
    };

    const newNotes = [...notes];

    if (id) {
      const index = newNotes.findIndex((note) => note.id === id);
      newNotes.splice(index, 1, newNote);
    } else {
      newNotes.push(newNote);
    }

    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const confirm = window.confirm('Are you sure you want to delete this note?')
    if (confirm) {
      const newNotes = notes.filter((note) => note.id !== id);
      setNotes(newNotes);
    }    
  };

  const archiveNote = (id) => {
    let newNotes = notes.map((note) => {
      const newNote = { ...note };
      if (note.id === id) {
        newNote.active = !newNote.active;
      }
      return newNote;
    })
    setNotes(newNotes);
  };

  const updateNote = (id) => {
    const noteUpdate = notes.find((note) => note.id === id);
    setShow(true);
    setModalData(noteUpdate);
  };

  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <h1 className="mt-3">Notes</h1>
                <NoteModal
                  handleAddNote={saveNote}
                  modalData={modalData}
                  setModalData={setModalData}
                  show={show}
                  setShow={setShow}
                />
                <NoteList
                  notes={notes.filter((note) => note.active === true)}
                  handleDeleteNote={deleteNote}
                  handleArchiveNote={archiveNote}
                  handleUpdateNote={updateNote}
                />
              </>
            }
          />
          <Route
            exact
            path="/archive"
            element={
              <>
                <h1 className="mt-3">Archived notes</h1>
                <NoteList
                  notes={notes.filter((note) => note.active === false)}
                  handleDeleteNote={deleteNote}
                  handleArchiveNote={archiveNote}
                  handleUpdateNote={updateNote}
                />
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
