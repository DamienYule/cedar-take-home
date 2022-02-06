import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import "./SelectDoctor.scss";
import { doctors } from "./data/dataMDs";
import DoctorListItem from "./DoctorListItem";
function SelectDoctor({
  lgShow,
  setLgShow,
  setDateShow,
  newAppointment,
  setNewAppointment,
}) {
  const [docSelected, setDocSelected] = useState(false);

  const handleNext = () => {
    if (!docSelected) {
      console.log("select a doctor");
    } else {
      setDateShow(true);
      setLgShow(false);
      setDocSelected(false);
    }
  };
  return (
    <div>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => {
          setLgShow(false);
          setNewAppointment({
            img: "",
            doctor: "",
            date: new Date(),
            patient: "",
            reason_for_visit: "",
            notes: "",
          });
        }}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Select a Doctor
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            {doctors.map((doc, index) => {
              return (
                <DoctorListItem
                  setDocSelected={setDocSelected}
                  newAppointment={newAppointment}
                  setNewAppointment={setNewAppointment}
                  doc={doc}
                  key={index}
                />
              );
            })}
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <div className="selectDoc__footerText">{newAppointment.doctor}</div>
          <button className="btn btn-outline-danger" onClick={handleNext}>
            Next
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default SelectDoctor;
