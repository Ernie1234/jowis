import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

function AppForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    toast.promise(
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_PUBLIC_KEY
        )
        .then(
          (result) => {
            // toast.loading("Waiting for the action to complete...");
            // toast.success("Sucess!");
            console.log(result.text);
            console.log("message sent");
          },
          (error) => {
            console.log(error.text);
          }
        ),
      {
        loading: "Loading...",
        success: "Message successful!",
        error: (err) =>
          err?.response?.data?.msg ?? "Something is wrong, please try again",
      },
      {
        style: {
          fontSize: "20px",
        },
      }
    );
  };
  return (
    <>
      <form className="form" ref={form} onSubmit={sendEmail}>
        <div className="form-user--details">
          <div className="form__group">
            <input
              type="text"
              className="form__input"
              placeholder="Full Name"
              name="user_name"
              id="name"
              required
            />
            <label htmlFor="name" className="form__label">
              Full Name
            </label>
          </div>
          <div className="form__group">
            <input
              type="email"
              className="form__input"
              placeholder="E-mail"
              name="user_email"
              id="mail"
              required
            />
            <label htmlFor="mail" className="form__label">
              e-Mail
            </label>
          </div>
        </div>
        <div className="form__group">
          <textarea
            type="text"
            className="form__input"
            placeholder="Project Details"
            name="message"
            id="detail"
            rows={5}
            required
          />
          <label htmlFor="detail" className="form__label">
            Project Details
          </label>
        </div>
        <div className="form-btn--submit__wrapper">
          <button className="form-btn__submit" type="submit" value="Send">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default AppForm;
