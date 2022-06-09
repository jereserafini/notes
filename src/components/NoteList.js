import React from 'react'
import AddNote from './AddNote'
import Note from './Note'

const NoteList = ({notes, handleAddNote, handleDeleteNote}) => {
  return (
    <div className='mt-5'>
        <AddNote handleAddNote={handleAddNote}/>
        <div className='mt-5 d-flex flex-wrap'>
            {notes.map( (note) =>
                <Note
                    id={note.id}
                    title={note.title}
                    content={note.content}
                    active={note.active}
                    handleDeleteNote={handleDeleteNote}
                />
            )}
        </div>
    </div>
  )
}

export default NoteList