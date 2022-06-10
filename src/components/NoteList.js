import React from 'react'
import NoteModal from './NoteModal'
import Note from './Note'

const NoteList = ({notes, handleAddNote, handleDeleteNote, handleArchiveNote, handleUpdateNote, setModalData, modalData, show, setShow}) => {

  return (
    <div className='mt-5'>
        <NoteModal 
          handleAddNote={handleAddNote}
          modalData={modalData}
          setModalData={setModalData}
          show={show}
          setShow={setShow}
        />
        <div className='mt-5 d-flex flex-wrap'>
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
    </div>
  )

}

export default NoteList