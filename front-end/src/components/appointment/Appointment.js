import React from "react";
import "./Appointment.scss";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
function Appointment({ appointment }) {
  return (
    <div className="rightContainer">
      <Card >
        <Card.Header>Doctor: {appointment.doctor}</Card.Header>
        <Card.Img variant="left" src={appointment.img} />
        <Card.Body>
          <Card.Title> Appointment </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Patient: {appointment.patient}</Card.Subtitle>

          <Card.Text>{appointment.notes}</Card.Text>
          <Button variant="primary">Edit</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Appointment;
