import React from "react";

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
      <button class="project_btn">
        <span class="project_btn__visible">Contact Us</span>
        <span class="project_btn__invisible">get started with us</span>
      </button>
    </>
  );
}

export default ContactBase;
