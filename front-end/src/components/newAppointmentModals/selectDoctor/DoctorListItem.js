import React from "react";
import Col from "react-bootstrap/Col";

function DoctorListItem({doc,newAppointment,setNewAppointment,setDocSelected,handleNext}) {
  
    const handleClick = ()=>{
        setNewAppointment({
            ...newAppointment,
            doctor: doc.doctor,
            img: doc.img,
          })
          handleNext()
    }
  
    return (
    <Col xs={6} md={4}>
      <img
        src={doc.img}
        className="selectDoc__img"
        onClick={handleClick}
        alt="doctor pic"
      />
      <div className="selectDoc__doctor">{doc.doctor}</div>
    </Col>
  );
}

export default DoctorListItem;
