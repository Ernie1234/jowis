import React from "react";
import Button1 from "./Button1";

function Section({ color, text, title, mainImg, imgSection1, imgSection2 }) {
  return (
    <section className="section" style={{ backgroundColor: color }}>
      <div className="section__wrapper">
        <div className="section__main--image">
          <img src={mainImg} alt="sectionImg" className="section__img--1" />
        </div>
        <div className="section__secondary--image">
          <div className="section__container--1">
            <img
              src={imgSection1}
              alt="sectionImg1"
              className="section__img--2"
            />
          </div>
          <div className="section__container--2">
            <img
              src={imgSection2}
              alt="sectionImg2"
              className="section__img--3"
            />
          </div>
          <div className="section__text">
            <h4 className="section__text--header">{title}</h4>
            <p className="section__text--content">{text}</p>
          </div>
        </div>
      </div>
      <div className="section__btn">
        <Button1 title="Get a quote" />
      </div>
    </section>
  );
}

export default Section;
