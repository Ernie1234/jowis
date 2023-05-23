import React from "react";

function Card({ icon, title, subTitle }) {
  return (
    <div className="card">
      <div className="card__icon">{icon}</div>
      <h3 className="card__title">{title}</h3>
      <p className="card__subtitle">{subTitle}</p>
    </div>
  );
}

export default Card;
