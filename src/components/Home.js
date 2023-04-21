import React from "react";
import Header from "./Header";
import Section from "./Section";

import mainImg1 from "../images/2.jpg";
import mainImg2 from "../images/5.jpg";
import mainImg3 from "../images/6.jpg";
import secImg1 from "../images/3.jpg";
import secImg2 from "../images/10.jpg";
import secImg3 from "../images/4.jpg";
import secImg4 from "../images/9.jpg";
import secImg5 from "../images/7.jpeg";
import secImg6 from "../images/8.jpg";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Header />
      <h4 className="section__header">our service</h4>
      <Section
        color="#8d0b9f"
        text="Looking to create an impactful online presence? Look no further! Our experienced team of web designers will craft a stunning website that represents your brand and engages your audience. With a focus on user experience,  search engine optimization, and fast loading speeds, your website will be a cut above the rest.  Let us help bring your vision to life and grow your online presence today."
        title="Web Deveplopment & Management"
        mainImg={mainImg1}
        imgSection1={secImg1}
        imgSection2={secImg2}
      />
      <Section
        color="#6ccb5d"
        text="Let our team of skilled graphic designers bring your brand to life! With a keen eye for detail and a passion for creating visually stunning designs, we'll help you make a lasting impression on your audience. From logos and branding materials to marketing collaterals and packaging design, we'll work with you to create cohesive and impactful designs that accurately reflect your brand identity. Invest in a strong visual presence, choose us for all your graphic design needs!"
        title="Graphic Design & Illustrations"
        mainImg={mainImg2}
        imgSection1={secImg3}
        imgSection2={secImg4}
      />
      <Section
        color="#c73e1d"
        text="Maximize the value of your data with our data processing and analysis services. Our team of experts will work with you to collect, clean, and transform your data into actionable insights. Whether you're looking to improve your business operations, make data-driven decisions, or gain a competitive advantage, we have the tools and expertise to help. From predictive analytics to visual data representations, we'll provide you with the information you need to succeed. Don't let data overwhelm you, let us help turn it into opportunity"
        title="Data Processing and Analysis"
        mainImg={mainImg3}
        imgSection1={secImg5}
        imgSection2={secImg6}
      />

      <Footer />
    </>
  );
}

export default Home;
