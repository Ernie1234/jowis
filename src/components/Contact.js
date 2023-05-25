import React from "react";
import AppForm from "./AppForm";

import HeaderTitle from "./HeaderTitle";

function Contact() {
  return (
    <div className="contact-container">
      <HeaderTitle title="contact us" subTitle="What can we do you?" />
      <AppForm />
    </div>
  );
}

export default Contact;
