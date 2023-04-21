import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function ContactDetails() {
  return (
    <div>
      <p className="contact-text">
        Tell us about your visions which challenges you are facing? What would
        success look like and how much are you planning to apend to get there?
      </p>
      <div className="footer__icons-container">
        <a
          href="https://facebook.com/"
          target="_blank"
          rel="noreferrer noopener"
          className="footer__icon-wrapper"
        >
          <FaFacebookF className="footer__icon" />
        </a>
        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noreferrer noopener"
          className="footer__icon-wrapper"
        >
          <FaInstagram className="footer__icon" />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noreferrer noopener"
          className="footer__icon-wrapper"
        >
          <FaTwitter className="footer__icon" />
        </a>
        <a
          href="https://youtube.com/"
          target="_blank"
          rel="noreferrer noopener"
          className="footer__icon-wrapper"
        >
          <FaYoutube className="footer__icon" />
        </a>
      </div>
    </div>
  );
}

export default ContactDetails;
