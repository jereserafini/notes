import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { MdDelete, MdArchive, MdUnarchive, MdEdit } from 'react-icons/md';

const Note = ({id, title, content, active, category, handleDeleteNote, handleArchiveNote, handleUpdateNote}) => {
  return (
        <Card className='mb-4' style={{ width: '18rem'}}>
            <Card.Body className='d-flex flex-column justify-content-between'>
                <div className='mb-3'>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {content}<br/>
                        {category}
                    </Card.Text>
                </div>
                <div className=''>
                    <Button variant="dark me-1" onClick={()=>handleUpdateNote(id)}><MdEdit/></Button>
                    <Button variant="dark mx-1" onClick={()=>handleArchiveNote(id)}>
                        {active === true ?
                            <MdArchive/>
                        :
                            <MdUnarchive/>
                        }
                    </Button>
                    <Button variant="danger mx-1" onClick={()=>handleDeleteNote(id)}><MdDelete/></Button>
                </div>
            </Card.Body>
        </Card>
  )
}

export default Note