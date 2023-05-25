import React from "react";

import { projects } from "../data/projectData";
import HeaderTitle from "./HeaderTitle";
import Project from "./Project";
import ContactBase from "./ContactBase";

function Projects() {
  return (
    <div className="project__container">
      <HeaderTitle title="Project." subTitle={`Things we've made`} />
      <div className="project__box">
        {projects.map((project) => (
          <Project
            key={project.id}
            title={project.title}
            url={project.url}
            pic={project.pics}
          />
        ))}
      </div>
      <div className="project__footer">
        <ContactBase />
      </div>
    </div>
  );
}

export default Projects;
