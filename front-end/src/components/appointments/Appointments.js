import { useEffect, useState } from "react";
import axios from "axios";
import { apiURL } from "../../util/apiURL";
import AppointmentItem from "../appointmentItem/AppointmentItem";
import NavBar from "../navBar/NavBar";
import ListGroup from "react-bootstrap/ListGroup";
import "./Appointments.scss";
import Appointment from "../appointment/Appointment";
import Spinner from "react-bootstrap/Spinner";
import ToastContainer from "react-bootstrap/ToastContainer";
import Toast from "react-bootstrap/Toast";

const API = apiURL();
function Appointments() {
  const [appointments, setAppointments] = useState([]);
  const [filteredApts, setFilteredApts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [appointment, setAppointment] = useState({});
  const [displayNotSelcted, setDisplayNotSelcted] = useState(true);
  const [displayEdit, setDisplayEdit] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [show, setShow] = useState(false);
  const [createdApointmentNumber, SetCreatedAppointmentNumber] = useState({});
  useEffect(() => {
    const fetchAllAppointments = async () => {
      const res = await axios.get(`${API}/appointments`);
      setAppointments(res.data.payload);
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
  }, [searchTerm, displayEdit, appointments]);

  return (
    <div className="appointments" data-testid="appointments">
      <NavBar
      SetCreatedAppointmentNumber={SetCreatedAppointmentNumber}
      setShow={setShow}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filteredApts={filteredApts}
        setFilteredApts={setFilteredApts}
        setAppointments={setAppointments}
      />
      <div className="appointments__header">Appointments</div>
      <ListGroup className="appointments__leftContainer">
        {loading && (
          <Spinner
            animation="border"
            variant="danger"
            className="appointments__loading"
          />
        )}
        {!searchTerm &&
          appointments &&
          !loading &&
          appointments
            .sort(function (a, b) {
              return new Date(a.date) - new Date(b.date);
            })
            .map((apt) => {
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
          filteredApts
            .sort(function (a, b) {
              return new Date(a.date) - new Date(b.date);
            })
            .map((apt) => {
              return (
                <AppointmentItem
                  className="aptCard"
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
        setShowEdit={setShowEdit}
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
      <ToastContainer className="p-3" position="top-end">
        <Toast
          onClose={() => setShowEdit(false)}
          show={showEdit}
          delay={8000}
          autohide
        >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">
              Appointment number {appointment.id}
            </strong>
            <small>Thank you</small>
          </Toast.Header>
          <Toast.Body className="dark">
            You Changed Dr {appointment.doctor} appointment!
          </Toast.Body>
        </Toast>
      </ToastContainer>
      <ToastContainer className="p-3" position="top-end">
      <Toast onClose={() => setShow(false)} show={show} delay={8000} autohide >
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Appointment number {createdApointmentNumber.id}</strong>
          <small>Thank you</small>
        </Toast.Header>
        <Toast.Body className='dark'>You created an appointment for {createdApointmentNumber.doctor}!</Toast.Body>
      </Toast>
      </ToastContainer>
    </div>
  );
}

export default Appointments;
