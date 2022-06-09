import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { MdDelete, MdArchive, MdEdit } from 'react-icons/md';

const Note = ({id, title, content, active, handleDeleteNote, handleArchiveNote, handleUpdateNote}) => {
  return (
        <Card className='note mb-4 mx-auto' style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {`id: ${id}`}<br/>
                    {`content: ${content}`}<br/>
                    {`active: ${active}`}
                </Card.Text>
                <div>
                    <Button variant="dark me-1" onClick={()=>handleUpdateNote(id)}><MdEdit/></Button>
                    <Button variant="dark mx-1" onClick={()=>handleArchiveNote(id)}><MdArchive/></Button>
                    <Button variant="danger mx-1" onClick={()=>handleDeleteNote(id)}><MdDelete/></Button>
                </div>
            </Card.Body>
        </Card>
  )
}

export default Note