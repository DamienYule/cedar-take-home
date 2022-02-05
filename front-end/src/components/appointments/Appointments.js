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
  const [filteredApts, setFilteredApts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [appointment, setAppointment] = useState({});
  const [displayNotSelcted, setDisplayNotSelcted] = useState(true);
  const [displayEdit, setDisplayEdit] = useState(false);
  console.log(searchTerm);

  useEffect(() => {
    const fetchAllAppointments = async () => {
      const res = await axios.get(`${API}/appointments`);
      let array = res.data.payload;
      array.sort(function (a, b) {
        return new Date(a.date) - new Date(b.date);
      });
      setAppointments(array);
      setLoading(false);
    };
    fetchAllAppointments();
  }, []);
  useEffect(() => {
    if (searchTerm) {
      let filteredApts = appointments.filter((apt) => {
        let doc = apt.doctor.toLowerCase();

        return doc.includes(searchTerm.toLowerCase());
      });

      setFilteredApts(filteredApts);
    } else {
      setFilteredApts([]);
    }
  }, [searchTerm]);

  return (
    <div className="appointments" data-testid="appointments">
      <NavBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filteredApts={filteredApts}
        setFilteredApts={setFilteredApts}
        setAppointments={setAppointments}
      />
      <div className="appointments__header">Appointments</div>
      <ListGroup className="appointments__leftContainer">
        {loading && "loading..."}
        {!searchTerm && appointments &&
          !loading &&
          appointments.map((apt) => {
            return (
              <AppointmentItem
                key={apt.id}
                apt={apt}
                setAppointment={setAppointment}
                setDisplayNotSelcted={setDisplayNotSelcted}
                setDisplayEdit={setDisplayEdit}
              />
            );
          })}
            {searchTerm &&
          !loading &&
          filteredApts.map((apt) => {
            return (
              <AppointmentItem
                key={apt.id}
                apt={apt}
                setAppointment={setAppointment}
                setDisplayNotSelcted={setDisplayNotSelcted}
                setDisplayEdit={setDisplayEdit}
              />
            );
          })}
      </ListGroup>
      <Appointment
        appointments={appointments}
        setAppointments={setAppointments}
        appointment={appointment}
        setAppointment={setAppointment}
        displayNotSelcted={displayNotSelcted}
        setDisplayNotSelcted={setDisplayNotSelcted}
        displayEdit={displayEdit}
        setDisplayEdit={setDisplayEdit}
      ></Appointment>
      <div className="appointments__footer">Built by Damien Yule</div>
    </div>
  );
}

export default Appointments;
