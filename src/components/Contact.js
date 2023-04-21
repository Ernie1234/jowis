import React from "react";
import AppForm from "./AppForm";
// import ContactDetails from "./ContactDetails";
import ContactHeader from "./ContactHeader";

function Contact() {
  return (
    <div className="contact-container">
      <ContactHeader />
      <AppForm />
      {/* <div className="contact-wrapper">
        <ContactDetails />
      </div> */}
    </div>
  );
}

export default Contact;
