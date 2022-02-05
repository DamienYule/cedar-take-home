import React from "react";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/esm/Button";
import "./SelectDoctor.scss";
import { doctors } from "./data/dataMDs";
import DoctorListItem from "./DoctorListItem";
function SelectDoctor({ lgShow, setLgShow,setDateShow,newAppointment, setNewAppointment }) {
  
const handleNext = ()=>{
    setDateShow(true)
    setLgShow(false)
}
  return (
    <div>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Select a Doctor
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            {doctors.map((doc,index) => {
              return (
               <DoctorListItem 
               newAppointment={newAppointment}
               setNewAppointment={setNewAppointment}
               doc ={doc}
               key ={index}
               />
              );
            })}
          </Row>
        </Modal.Body>
        <Modal.Footer>
        <div>{newAppointment.doctor}</div>
        <button className="btn btn-outline-danger" onClick={handleNext}>Next</button>
      </Modal.Footer>
      </Modal>
    </div>
  );
}

export default SelectDoctor;
