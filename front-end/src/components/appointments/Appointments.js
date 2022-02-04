import { useEffect, useState } from "react";
import axios from "axios";
import { apiURL } from "../../util/apiURL";
import AppointmentItem from "../appointmentItem/AppointmentItem";
import NavBar from "../navBar/NavBar";
import ListGroup from "react-bootstrap/ListGroup";
import "./Appointments.scss";
import Appointment from "../appointment/Appointment";

const API = apiURL();
function Appointments() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [appointment, setAppointment] = useState({});
  console.log(appointment.id);

  useEffect(() => {
    const fetchAllAppointments = async () => {
      const res = await axios.get(`${API}/appointments`);
      setAppointments(res.data.payload);
      setLoading(false);
    };
    fetchAllAppointments();
  }, []);

  return (
    <div className="appointments" data-testid="appointments">
      <NavBar />

      
      
        <ListGroup className="appointments__leftContainer">
            {loading && "loading..."}
          {appointments.length &&
            !loading &&
            appointments.map((apt) => {
              return (
                <AppointmentItem
                  key={apt.id}
                  apt={apt}
                  setAppointment={setAppointment}
                />
              );
            })}
        </ListGroup>
        <Appointment 
        appointment={appointment}
        ></Appointment>
     
    </div>
  );
}

export default Appointments;
