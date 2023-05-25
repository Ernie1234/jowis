import React from "react";

function AppButton({ mainText, secText }) {
  return (
    <>
      <button className="project_btn">
        <span className="project_btn__visible">{mainText}</span>
        <span className="project_btn__invisible">{secText}</span>
      </button>
    </>
  );
}

export default AppButton;
