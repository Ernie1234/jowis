import React, { useEffect, useState } from "react";
import Logo from "../images/logo.png";
import { Link } from "react-router-dom";
import Button1 from "./Button1";

import { CgMenuRight } from "react-icons/cg";
import { MdOutlineClose } from "react-icons/md";

function NavBar() {
  const [stickyClass, setStickyClass] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 70 ? setStickyClass("nav__fixed") : setStickyClass("");
    }
  };

  return (
    <div className="navbar">
      <nav className={`nav ${stickyClass}`}>
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
        <span className="navbar__btn">
          <Button1 title="Get a Quote" />
        </span>

        <div className="navbar__hamburger">
          <CgMenuRight size={25} onClick={() => setIsOpen(true)} />
        </div>
        {isOpen && (
          <div className="navigation">
            <MdOutlineClose
              size={30}
              onClick={() => setIsOpen(false)}
              className="navigation__close"
            />
            <ul className="navigation__list">
              <li className="navigation__item" onClick={() => setIsOpen(false)}>
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="navigation__link"
                >
                  Home
                </Link>
              </li>
              <li className="navigation__item" onClick={() => setIsOpen(false)}>
                <Link to="/contact" className="navigation__link">
                  Contact Us
                </Link>
              </li>
              <li className="navigation__item" onClick={() => setIsOpen(false)}>
                <Link to="/services" className="navigation__link">
                  Service
                </Link>
              </li>
              <li className="navigation__item" onClick={() => setIsOpen(false)}>
                <Link to="/projects" className="navigation__link">
                  Project
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}

export default NavBar;
