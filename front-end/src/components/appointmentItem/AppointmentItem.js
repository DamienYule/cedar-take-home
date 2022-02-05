import { useEffect,useState } from "react";
import "./AppointmentItem.scss";
// import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";

function AppointmentItem({ apt, setAppointment,setDisplayNotSelcted,setDisplayEdit }) {

//   const [appointment, setAppointment] = useState({});

    const handleSelect =() =>{
        setAppointment(apt)
        setDisplayNotSelcted(false)
        setDisplayEdit(false)
        // console.log(appointment.id)
    }

    
  return (
      
//   <ListGroup.Item 
//   lassName="aptCard"
//    onClick={handleSelect}>
//       { Vestibulum at eros}
//        </ListGroup.Item>

<ListGroup.Item   
onClick={handleSelect}
as="li"
className="d-flex justify-content-between align-items-start"
>
<div className="ms-2 me-auto">
  <div className="fw-bold">{apt.doctor}</div>
  Cras justo odio
</div>
<Badge variant="primary" pill>
  {apt.id}
</Badge>
</ListGroup.Item>
  );
}

export default AppointmentItem;
