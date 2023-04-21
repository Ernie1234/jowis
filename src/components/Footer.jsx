import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
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
      <h3 className="footer__title">Jowis studio</h3>
    </footer>
  );
}

export default Footer;
