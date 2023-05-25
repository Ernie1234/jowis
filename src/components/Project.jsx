import React from "react";

function Project({ title, url, pic }) {
  // console.log(pic);
  return (
    <div className="project__card">
      <div className="project__image">
        <img src={`${pic}`} alt="project-images" className="project__img" />
      </div>
      <div className="project__wrapper">
        <h3 className="project__title">{title}</h3>
      </div>
      <a
        href={url}
        target="_blank"
        rel="noreferrer noopener"
        className="project__link"
      >
        know more<span>&rarr;</span>
      </a>
    </div>
  );
}

export default Project;
