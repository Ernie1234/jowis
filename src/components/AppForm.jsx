import React, { useState } from "react";
import Button2 from "./Button2";

function AppForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    detail: "",
  });

  function handleChange(event) {
    event.preventDefault();
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formData);
  };
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <p className="form--cat__name">What can we do for you?</p>
        <div className="form-btn--wrapper">
          <Button2 title="Design" />
          <Button2 title="Development" />
          <Button2 title="Animation" />
          <Button2 title="Other" />
        </div>
        <div className="form-user--details">
          <div className="form__group">
            <input
              type="text"
              className="form__input"
              placeholder="Full Name"
              onChange={handleChange}
              value={formData.name}
              name="name"
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
              onChange={handleChange}
              value={formData.email}
              name="email"
              id="mail"
              required
            />
            <label htmlFor="mail" className="form__label">
              e-Mail
            </label>
          </div>
        </div>
        <div className="form__group">
          <input
            type="text"
            className="form__input"
            placeholder="Project Details"
            onChange={handleChange}
            value={formData.detail}
            name="detail"
            id="detail"
            required
          />
          <label htmlFor="detail" className="form__label">
            Project Details
          </label>
        </div>
        <div className="form-btn--submit__wrapper">
          <button className="form-btn__submit" type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default AppForm;
