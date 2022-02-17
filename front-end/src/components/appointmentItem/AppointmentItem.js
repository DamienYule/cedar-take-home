import React from "react";
import "./AppointmentItem.scss";
import ListGroup from "react-bootstrap/ListGroup";

import { dateString } from "../../helperFunctions/datetime";

function AppointmentItem({
  apt,
  setAppointment,
  setDisplayNotSelcted,
  setDisplayEdit,
}) {
  let date = dateString(apt?.date);

  const handleSelect = () => {
    setAppointment(apt);
    setDisplayNotSelcted(false);
    setDisplayEdit(false);
  };

  return (
    <div className="aptItem">
      <ListGroup.Item
        onClick={handleSelect}
        as="li"
        className="d-flex justify-content-between align-items-start remove_extra_background"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">{apt?.doctor} </div>
          <div className="fw-mute">{apt?.patient} </div>
          <div>{date}</div>
        </div>
        <div className="id">
          <div className="id__text">id : </div>{" "}
          <div className="id__number">{apt?.id}</div>
        </div>
      </ListGroup.Item>
    </div>
  );
}

export default AppointmentItem;
