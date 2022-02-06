import React from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import { apiURL } from "../../../util/apiURL";
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";
import "./SelectDate.scss";
const API = apiURL();

function SelectDate({
  dateShow,
  setDateShow,
  newAppointment,
  setNewAppointment,
  setAppointments,
}) {
  const handleSubmit = async () => {
    await createAppointment();
    setNewAppointment({                
                img: "",
                doctor: "",
                date: new Date(),
                patient: "",
                reason_for_visit: "",
                notes: "",
             })
    setDateShow(false);
  };
  const createAppointment = async () => {
    try {
      const res = await axios.post(`${API}/appointments`, newAppointment);
      if (res.data.success) {
        setAppointments((oldArrayOfApts) => [
          ...oldArrayOfApts,
          res.data.payload,
        ]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setNewAppointment({ ...newAppointment, [e.target.id]: e.target.value });
  };
  return (
    <div>
      <Modal
        className="modalDateAndText"
        show={dateShow}
        onHide={() => {
            setDateShow(false)
            setNewAppointment({                
                img: "",
                doctor: "",
                date: new Date(),
                patient: "",
                reason_for_visit: "",
                notes: "",
             })
            }}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Details 
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
         
          <div className="input-group mb-3">
            <span
              htmlFor="patient"
              className="input-group-text"
              id="inputGroup-sizing-default"
            >
              Patient Name
            </span>
            <input
              id="patient"
              value={newAppointment.patient}
              type="text"
              onChange={handleChange}
              required
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" htmlFor="reason_for_visit">
              Reason For Visit
            </span>
            <textarea
              id="reason_for_visit"
              value={newAppointment.reason_for_visit}
              type="text"
              onChange={handleChange}
              required
              className="form-control"
              aria-label="With textarea"
            ></textarea>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" htmlFor="description">
              Notes
            </span>
            <textarea
              id="notes"
              value={newAppointment.notes}
              type="text"
              onChange={handleChange}
              required
              className="form-control"
              aria-label="With textarea"
            ></textarea>
          </div>
           <DateTimePickerComponent
            className="dateTimePicker"
            id="date"
            value={newAppointment.date}
            placeholder="Select Date"
            onChange={handleChange}
          />
        </Modal.Body>
        <Modal.Footer>
          <button  className="btn btn-outline-danger" onClick={handleSubmit}>Submit</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default SelectDate;
