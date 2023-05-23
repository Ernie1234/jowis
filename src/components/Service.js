import React from "react";
import HeaderTitle from "./HeaderTitle";
import Card from "./Card";

import { MdMailOutline } from "react-icons/md";

function Service() {
  return (
    <div className="service__container">
      <HeaderTitle />
      <div className="box">
        <Card
          icon={<MdMailOutline />}
          title="Design Concept"
          subTitle={`Let our team of skilled graphic designers bring your brand to life! With a keen eye for detail and a passion for creating visually stunning designs, we'll help you make a lasting impression on your audience. From logos and branding materials to marketing collaterals and packaging design, we'll work with you to create cohesive and impactful designs that accurately reflect your brand identity. Invest in a strong visual presence, choose us for all your graphic design needs!`}
        />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Service;
