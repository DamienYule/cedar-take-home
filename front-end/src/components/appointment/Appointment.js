import React from "react";
import "./Appointment.scss";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import EditForm from "../editForm/EditForm";
import axios from "axios";
import { apiURL } from "../../util/apiURL";
const API = apiURL();

function Appointment({
  appointment,
  displayNotSelcted,
  setDisplayNotSelcted,
  displayEdit,
  setDisplayEdit,
  setAppointment,
  setAppointments,
  appointments,
}) {
  let date = new Date(appointment.date);
  const handleClick = () => {
    setDisplayEdit(true);
  };
 
  const handleDelete = async () => {
    try {
      const res = await axios.delete(`${API}/appointments/${appointment.id}`);
      if (res.data.success) {
        setAppointments(appointments.filter((apt) => apt.id !== appointment.id));
        setDisplayNotSelcted(true)
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="rightContainer">
      {displayNotSelcted && (
        <div className="rightContainer__notSelected">Select an Appointment</div>
      )}
      {!displayNotSelcted && !displayEdit && (
        <div>
          <Card className="">
            <Card.Header>Doctor: {appointment.doctor} <Badge className="rightContainer__badge"  bg="danger" pill>
        {appointment.id}
      </Badge></Card.Header>
          </Card>

          <div className="rightContainer__twoContainers">
            <img src={appointment.img} alt="doctor pic" className="rightContainer__img"></img>

            <Card className="rightContainer__card">
              <Card.Body>
                <Card.Title> Appointment: {date.toLocaleString()}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Patient: {appointment.patient}
                </Card.Subtitle>
                <Card.Text>
                  Reason for visit: {appointment.reason_for_visit}
                </Card.Text>
                <Card.Text>Notes:</Card.Text>
                <Card.Subtitle className="mb-2 text-muted">
                  {appointment.notes}
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </div>
          <Card className="">
            <Card.Footer>
              <button className="btn btn-outline-danger" onClick={handleClick}>
                Edit
              </button>
              <button className="btn btn-danger " onClick={handleDelete}>
                Delete Appointment
              </button>
            </Card.Footer>
          </Card>
        </div>
      )}
      {!displayNotSelcted && displayEdit && (
        <EditForm
          appointments={appointments}
          appointment={appointment}
          setAppointment={setAppointment}
          setAppointments={setAppointments}
          setDisplayEdit={setDisplayEdit}
        />
      )}
    </div>
  );
}

export default Appointment;
