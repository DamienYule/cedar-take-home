import React from 'react';
import  Modal  from 'react-bootstrap/Modal';

function SelectDoctor({lgShow,setLgShow}) {
  return <div>
       <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Large Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal>
  </div>;
}

export default SelectDoctor;
