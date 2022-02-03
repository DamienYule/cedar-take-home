import axios from "axios";
import { useState, useEffect } from "react";
import { apiURL } from "./util/apiURL.js";
const API = apiURL();

function App() {
  const [apt, setApt] = useState({});
  useEffect(() => {
    axios
      .get(`${API}/appointments`)
      .then(
        (response) => setApt(response.data.payload),
        (error) => console.log("get", error)
      )
      .catch((c) => console.warn("catch", c));
  }, []);
  console.log(apt)
  return (
    <div>
     {apt.doctor}
    </div>
  );
}

export default App;
