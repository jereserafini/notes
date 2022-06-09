import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';

const AddNote = ({handleAddNote}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

    const [data, setData] = useState({})
  

    const handleChange = (e) => {
      setData({
        ...data,
        [e.target.name]: e.target.value
      })
    }

    const handleSave = () => {
        if (data.title.trim().length > 0 && data.content.trim().length > 0) {
            setShow(false)
            handleAddNote(data)
            setData({
                title: '',
                content: ''
            })            
        }
    };

  
    return (
      <>
        <div className="container mt-3 d-flex align-item-center">
          <h1 className="d-inline me-5">Notes</h1>
          <Button className="d-inline" variant="dark" onClick={handleShow}>
            Create note
          </Button>
        </div>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          className='mt-5'
        >
          <Modal.Header closeButton>
            <Modal.Title>Create/Edit note</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <Form>

              <Form.Group className="mb-3" controlId="floatingTextarea">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  name="title"
                  onChange={handleChange}
                  as="textarea"/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="floatingTextarea">
                <Form.Label>Content</Form.Label>
                <Form.Control
                  name="content"
                  onChange={handleChange}
                  as="textarea"
                  style={{ height: '100px' }}/>
              </Form.Group>

              <Button className="me-2" variant="secondary" onClick={handleClose}>
                Close
              </Button>

              <Button variant="primary" type="button" onClick={handleSave}>
                Save
              </Button>

            </Form>

          </Modal.Body>
        </Modal>
      </>
    );
}

export default AddNote