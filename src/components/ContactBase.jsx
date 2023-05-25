import React from "react";
import { Link } from "react-router-dom";
import AppButton from "./AppButton";

function ContactBase() {
  return (
    <>
      <div className="project__footer-text">
        <h3 className="project__footer--title">
          Let's work together on your next project
        </h3>
        <p className="project__footer--subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quibusdam
          nemo dolore suscipit at libero maiores, magni aliquam consequuntur
          itaque eum tenetur expedita recusandae omnis, a harum aliquid quasi
          sunt!
        </p>
      </div>
      <Link to="/contact">
        <AppButton mainText="Contact Us" secText="Get started with us" />
      </Link>
    </>
  );
}

export default ContactBase;
