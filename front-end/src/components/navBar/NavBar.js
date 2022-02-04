import React from "react";
import Logo from "../../images/logo.png";
import "./NavBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  return (
    <div className="nav__container" data-testid="nav__constainer">
      <img className="nav__logo" data-testid="nav__logo" src={Logo}></img>
      <input className="nav__filter" placeholder="Filter by Doctor" />
      <FontAwesomeIcon className="nav__plus" icon={faPlus} />
    </div>
  );
}

export default NavBar;
