import React from 'react'
import Note from './Note'
// import Select from './Select'

const NoteList = ({notes, handleDeleteNote, handleArchiveNote, handleUpdateNote}) => {

  return (
    <div className='mt-5 d-flex flex-wrap justify-content-between'>
      {/* <Select/> */}
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
            />
        )}
    </div>
  )
}

export default NoteList