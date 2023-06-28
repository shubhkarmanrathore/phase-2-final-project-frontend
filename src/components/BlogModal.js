import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./BlogModal.css"
import "bootstrap/dist/css/bootstrap.min.css"

function BlogModal({blog}) {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Read full blog
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {blog.heading}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className='content'>
          {blog.content}
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default BlogModal;