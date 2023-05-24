import React from "react";
import HeaderTitle from "./HeaderTitle";
import Card from "./Card";

import { MdOutlineDesignServices, MdOutlineWeb } from "react-icons/md";
import { IoAnalyticsSharp } from "react-icons/io5";

function Service() {
  return (
    <div className="service__container">
      <HeaderTitle title="services." subTitle="Our services for clients" />
      <div className="box">
        <Card
          icon={<MdOutlineWeb size={35} />}
          title="Web Design and Development"
          subTitle={`Let our team of skilled graphic designers bring your brand to life! With a keen eye for detail and a passion for creating visually stunning designs, we'll help you make a lasting impression on your audience. From logos and branding materials to marketing collaterals and packaging design, we'll work with you to create cohesive and impactful designs that accurately reflect your brand identity. Invest in a strong visual presence, choose us for all your graphic design needs!`}
        />
        <Card
          icon={<MdOutlineDesignServices size={35} />}
          title="Design Concept"
          subTitle={`Looking to create an impactful online presence? Look no further! Our experienced team of web designers will craft a stunning website that represents your brand and engages your audience. With a focus on user experience, search engine optimization, and fast loading speeds, your website will be a cut above the rest. Let us help bring your vision to life and grow your online presence today.`}
        />
        <Card
          icon={<IoAnalyticsSharp size={35} />}
          title="Data Processing and Analysis"
          subTitle={`Maximize the value of your data with our data processing and analysis services. Our team of experts will work with you to collect, clean, and transform your data into actionable insights. Whether you're looking to improve your business operations, make data-driven decisions, or gain a competitive advantage, we have the tools and expertise to help. From predictive analytics to visual data representations, we'll provide you with the information you need to succeed. Don't let data overwhelm you, let us help turn it into opportunity`}
        />
      </div>
    </div>
  );
}

export default Service;
