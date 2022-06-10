import { Button, Form, Modal } from 'react-bootstrap';

const NoteModal = ({handleAddNote, setModalData, modalData, show, setShow}) => {
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = (e) => {
      setModalData({
        ...modalData,
        [e.target.name]: e.target.value
      })
    }

    const handleSave = () => {
        if (modalData.title.trim().length > 0 && modalData.content.trim().length > 0) {
            setShow(false)
            handleAddNote(modalData)
            setModalData({
                title: '',
                content: ''
            })            
        }
    };

    // const categories = new Set()

    // const addCategory = (e) => {
    //   categories.add(e.target.previousSibling.value)
    //   console.log(categories);
    // }


  
    return (
      <>
        <div className="mt-3 d-flex align-item-center">
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
                  as="textarea"
                  value={modalData.title}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="floatingTextarea">
                <Form.Label>Content</Form.Label>
                <Form.Control
                  name="content"
                  onChange={handleChange}
                  as="textarea"
                  style={{ height: '100px' }}
                  value={modalData.content}
                />
              </Form.Group>

              {/* <Form.Group className="mb-3" controlId="floatingTextarea">
                <Form.Label>Category</Form.Label>
                <fieldset disabled>
                  <Form.Control
                    name="categories"
                    as="textarea"
                    value={categories}
                  />
                </fieldset>
              </Form.Group>

              <Form.Group className="mb-3" controlId="floatingTextarea">
                <Form.Control
                  name="category"
                  onChange={handleChange}
                  as="textarea"
                  value={modalData.category}
                  placeholder='Add category'
                />
                  <Button className='mt-1' variant="success" onClick={addCategory}>
                    Add
                  </Button>
              </Form.Group> */}

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

export default NoteModal