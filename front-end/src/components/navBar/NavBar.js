import {useState} from "react";
import Logo from "../../images/logo.png";
import "./NavBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import SelectDoctor from "../newAppointmentModals/selectDoctor/SelectDoctor";

function NavBar() {
    const [lgShow, setLgShow] = useState(false);
    // <Button onClick={() => setLgShow(true)}>Large modal</Button>
  return (
    <div className="nav__container" data-testid="nav__constainer">
      <img className="nav__logo" data-testid="nav__logo" src={Logo}></img>
      <input className="nav__filter" placeholder="Filter by Doctor" />
      <FontAwesomeIcon className="nav__plus" icon={faPlus} onClick={() => setLgShow(true)}/>
        <SelectDoctor 
        lgShow={lgShow}
        setLgShow={setLgShow}
        />
    </div>
  );
}

export default NavBar;
