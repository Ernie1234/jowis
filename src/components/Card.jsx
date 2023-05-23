import React from "react";

function Card({ icon, title, subTitle }) {
  return (
    <div className="card">
      <div className="card__icon">{icon}</div>
      <h3 className="card__title">Design Concept</h3>
      <p className="card__subtitle">
        Let our team of skilled graphic designers bring your brand to life! With
        a keen eye for detail and a passion for creating visually stunning
        designs, we'll help you make a lasting impression on your audience. From
        logos and branding materials to marketing collaterals and packaging
        design, we'll work with you to create cohesive and impactful designs
        that accurately reflect your brand identity. Invest in a strong visual
        presence, choose us for all your graphic design needs!
      </p>
    </div>
  );
}

export default Card;
