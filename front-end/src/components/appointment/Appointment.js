import { useState } from "react";
import "./Appointment.scss";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import EditForm from "../editForm/EditForm";

function Appointment({ appointment, displayNotSelcted,displayEdit, setDisplayEdit,setAppointment,setAppointments,appointments }) {


  const handleClick = () => {
    setDisplayEdit(true)
  };
  return (
    <div className="rightContainer">
      {displayNotSelcted && <div className="rightContainer__notSelected">select an appointment</div>}
      {!displayNotSelcted && !displayEdit &&(
        <Card>
          <Card.Header>Doctor: {appointment.doctor}</Card.Header>
          <Card.Img variant="left" src={appointment.img} />
          <Card.Body>
            <Card.Title> Appointment </Card.Title>
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
            <Button variant="primary" onClick={handleClick}>
              Edit
            </Button>
          </Card.Body>
        </Card>
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
