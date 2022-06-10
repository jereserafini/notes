import React from 'react'
import Note from './Note'
import Select from './Select'

const NoteList = ({notes, handleDeleteNote, handleArchiveNote, handleUpdateNote}) => {

  return (
    <>
      <div className='mt-4 d-flex flex-wrap justify-content-between'>
          {notes.map( (note) =>
              <Note
                  id={note.id}
                  title={note.title}
                  content={note.content}
                  active={note.active}
                  handleDeleteNote={handleDeleteNote}
                  handleArchiveNote={handleArchiveNote}
                  handleUpdateNote={handleUpdateNote}
                  key={note.id}
                  category={note.category}
              />
          )}
      </div>
    </>
  )
}

export default NoteList