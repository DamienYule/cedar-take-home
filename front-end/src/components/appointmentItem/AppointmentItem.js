import React from "react";
import "./AppointmentItem.scss";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import { dateString } from "../../helperFunctions/datetime";

function AppointmentItem({
  apt,
  setAppointment,
  setDisplayNotSelcted,
  setDisplayEdit,
}) {

  let date = dateString(apt.date)
 
  const handleSelect = () => {
    setAppointment(apt);
    setDisplayNotSelcted(false);
    setDisplayEdit(false);
  };

  return (
    <ListGroup.Item
      onClick={handleSelect}
      as="li"
      className="d-flex justify-content-between align-items-start aptItem"
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold">{apt.doctor} </div>
        <div className="fw-mute">{apt.patient} </div>
        <div>{date}</div>
        
      </div>
      <Badge pill bg="danger" >
        {apt.id}
      </Badge>
    </ListGroup.Item>
  );
}

export default AppointmentItem;
