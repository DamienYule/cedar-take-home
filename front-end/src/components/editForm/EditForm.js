import axios from "axios";
import React from "react";
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";
import { apiURL } from "../../util/apiURL";
import Card from "react-bootstrap/Card"
import Badge from "react-bootstrap/esm/Badge";
import "./EditForm.scss";
const API = apiURL();

function EditForm({
  appointment,
  setAppointment,
  setAppointments,
  appointments,
  setDisplayEdit,
}) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.put(
      `${API}/appointments/${appointment.id}`,
      appointment
    );
    if (res.data.success) {
      setAppointments(
        appointments.map((apt) =>
          apt.id === appointment.id ? (apt = res.data.payload) : apt
        )
      );
    }
    setDisplayEdit(false);
  };

  const handleChange = (e) => {
    setAppointment({ ...appointment, [e.target.id]: e.target.value });
  };

  return (
    <div className="card">
      <Card.Header>Doctor: {appointment.doctor} <Badge className="rightContainer__badge"  bg="danger" pill>
        {appointment.id}
      </Badge></Card.Header>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
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
              value={appointment.patient}
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
              value={appointment.reason_for_visit}
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
              value={appointment.notes}
              type="text"
              onChange={handleChange}
              required
              className="form-control"
              aria-label="With textarea"
            ></textarea>
            
          
          </div>
            <DateTimePickerComponent
            className="dateTimePicker  editForm__picker"
            id="date"
            value={appointment.date}
            placeholder="Select Date"
            onChange={handleChange}
          />
          <button type="submit" className="btn btn-outline-danger editForm__submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditForm;