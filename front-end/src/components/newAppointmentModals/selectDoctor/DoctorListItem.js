import React from "react";
import Col from "react-bootstrap/Col";

function DoctorListItem({doc,newAppointment,setNewAppointment}) {
  
    const handleClick = ()=>{
        setNewAppointment({
            ...newAppointment,
            doctor: doc.doctor,
            img: doc.img,
          })
    }
  
    return (
    <Col xs={6} md={4}>
      <img
        src={doc.img}
        className="selectDoc__img"
        onClick={handleClick}
      />
      <div className="selectDoc__doctor">{doc.doctor}</div>
    </Col>
  );
}

export default DoctorListItem;
