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
          icon={<MdMailOutline size={35} />}
          title="Web Design and Development"
          subTitle={`Let our team of skilled graphic designers bring your brand to life! With a keen eye for detail and a passion for creating visually stunning designs, we'll help you make a lasting impression on your audience. From logos and branding materials to marketing collaterals and packaging design, we'll work with you to create cohesive and impactful designs that accurately reflect your brand identity. Invest in a strong visual presence, choose us for all your graphic design needs!`}
        />
        <Card
          icon={<MdMailOutline size={35} />}
          title="Design Concept"
          subTitle={`Looking to create an impactful online presence? Look no further! Our experienced team of web designers will craft a stunning website that represents your brand and engages your audience. With a focus on user experience, search engine optimization, and fast loading speeds, your website will be a cut above the rest. Let us help bring your vision to life and grow your online presence today.`}
        />
      </div>
    </div>
  );
}

export default Service;
