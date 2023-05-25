import React, { useEffect, useRef, useState } from "react";
import Logo from "../images/logo.png";
import { Link } from "react-router-dom";
import Button1 from "./Button1";

function NavBar() {
  const [sticky, setSticky] = useState(false);
  const [navHeight, setNavHeight] = useState(0);

  const navbar = useRef();
  const navbarOffset = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const value = navbarOffset.current.clientHeight;
      setSticky(window.pageYOffset >= value);
    };

    window.addEventListener("scroll", handleScroll);

    setNavHeight(navbar.current.clientHeight);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="navbar" ref={navbarOffset}>
      <nav ref={navbar} className={`nav ${sticky && "nav__fixed"}`}>
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
      <div style={sticky ? { marginTop: navHeight } : {}}></div>
    </div>
  );
}

export default NavBar;
