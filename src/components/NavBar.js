import React from "react";
import Logo from "../images/logo.png";
import { Link } from "react-router-dom";
import Button1 from "./Button1";

function NavBar() {
  return (
    <nav className="nav">
      <Link to="/" className="nav__logo-container">
        <img src={Logo} className="nav__logo--img" alt="Jowis logo" />

        <h2 className="nav__logo--text">jowis studio</h2>
      </Link>

      <ul className="nav__list">
        <li className="nav__item">
          <Link to="/" className="nav__link nav__link--active">
            Home
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/contact" className="nav__link">
            Contact
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/services" className="nav__link">
            service
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/projects" className="nav__link">
            Projects
          </Link>
        </li>
      </ul>
      <Button1 title="Get a Quote" />
    </nav>
  );
}

export default NavBar;
