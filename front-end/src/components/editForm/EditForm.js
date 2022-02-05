import axios from "axios";
import React from "react";
import { apiURL } from "../../util/apiURL";
const API = apiURL();


function EditForm({ appointment,setAppointment,setAppointments,appointments,setDisplayEdit }) {
//   const [input, setInput] = (useState = {
//     id: appointment.id,
//     doctor: appointment.doctor,
//     img: appointment.img,
//     patient: appointment.patient,
//     reason_for_visit: appointment.reason_for_visit,
//     notes: appointment.notes,
//     date: appointment.date,
//   });
  const handleSubmit = async (e) => {
      e.preventDefault()
    const res = await axios.put(`${API}/appointments/${appointment.id}`,appointment)//${input.id}?uid=${user.uid}`, input)
    if(res.data.success){
        setAppointments(appointments.map((apt)=>apt.id ===appointment.id ? (apt = res.data.payload): apt))
    }
    setDisplayEdit(false)
  };

  const handleChange = (e) => {
    setAppointment({...appointment,[e.target.id]: e.target.value })
  };

  return (
    <div className="card">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <span
              htmlFor="patient"
              className="input-group-text"
              id="inputGroup-sizing-default"
            >
              Patient Name
            </span>
            <input
              id="patient"
              value={appointment.patient}
              type="text"
              onChange={handleChange}
              required
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" htmlFor="reason_for_visit">
              Reason For Visit
            </span>
            <textarea
              id="reason_for_visit"
              value={appointment.reason_for_visit}
              type="text"
              onChange={handleChange}
              required
              className="form-control"
              aria-label="With textarea"
            ></textarea>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" htmlFor="description">
            Notes
            </span>
            <textarea
              id="notes"
              value={appointment.notes}
              type="text"
              onChange={handleChange}
              required
              className="form-control"
              aria-label="With textarea"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditForm;
//https://www.youtube.com/watch?v=osAIu-1ag-Q

//https://doctors.nyp.org/?aff=false&sp=obgyn
