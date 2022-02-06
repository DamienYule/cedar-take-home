import { useState } from "react";
import Logo from "../../images/logo.png";
import "./NavBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import SelectDoctor from "../newAppointmentModals/selectDoctor/SelectDoctor";
import SelectDate from "../newAppointmentModals/selectDate/SelectDate";

function NavBar({ setAppointments, searchTerm, setSearchTerm,SetCreatedAppointmentNumber,setShow }) {
  const [lgShow, setLgShow] = useState(false);
  const [dateShow, setDateShow] = useState(false);
  const [newAppointment, setNewAppointment] = useState({
    img: "",
    doctor: "",
    date: new Date(),
    patient: "",
    reason_for_visit: "",
    notes: "",
  });


  return (
    <div className="nav__container" data-testid="nav__constainer">
      <img
        className="nav__logo"
        alt="logo pic"
        data-testid="nav__logo"
        src={Logo}
      ></img>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="nav__filter"
        placeholder="Filter by Doctor"
      />
      <FontAwesomeIcon
        className="nav__plus"
        icon={faPlus}
        onClick={() => setLgShow(true)}
      />
      <SelectDoctor
        lgShow={lgShow}
        setLgShow={setLgShow}
        setDateShow={setDateShow}
        newAppointment={newAppointment}
        setNewAppointment={setNewAppointment}
      />
      <SelectDate
        SetCreatedAppointmentNumber={SetCreatedAppointmentNumber}
        setShow={setShow}
        setAppointments={setAppointments}
        dateShow={dateShow}
        setDateShow={setDateShow}
        newAppointment={newAppointment}
        setNewAppointment={setNewAppointment}
      />
    </div>
  );
}

export default NavBar;
