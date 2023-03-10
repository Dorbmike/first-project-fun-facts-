import React from "react";
import NavLogo from "./images/react-icon-small.png";

export default function Navbar(props) {
  return (
    <nav className={props.darkMode ? "dark" : ""}>
      <a href="https://reactjs.org/">
        <img className="nav--logo_icon" src={NavLogo} />
      </a>

      <h3 className="nav--logo_text">
        <a href="https://reactjs.org/">ReactFacts</a>
      </h3>

      <div className="toggler">
        <p className="toggler--light">Light</p>
        <div className="toggler--slider" onClick={props.toggleDarkMode}>
          <div className="toggler--slider--circle"></div>
        </div>
        <p className="toggler--dark">Dark</p>
      </div>
    </nav>
  );
}
