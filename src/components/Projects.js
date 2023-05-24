import React from "react";
import HeaderTitle from "./HeaderTitle";
import Project from "./Project";
import ContactBase from "./ContactBase";

function Projects() {
  return (
    <div className="project__container">
      <HeaderTitle title="Project." subTitle={`Things we've made`} />
      <div className="project__box">
        <Project title="the vintage" url="https://www.facebook.com" />
        <Project title="the vintage" url="https://www.facebook.com" />
        <Project title="the vintage" url="https://www.facebook.com" />
        <Project title="the vintage" url="https://www.facebook.com" />
        <Project title="the vintage" url="https://www.facebook.com" />
      </div>
      <div className="project__footer">
        <ContactBase />
      </div>
    </div>
  );
}

export default Projects;
