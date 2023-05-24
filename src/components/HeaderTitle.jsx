import React from "react";

function HeaderTitle({ title, subTitle }) {
  return (
    <div className="head">
      <h2 className="head__title">{title}</h2>
      <p className="head__desc">{subTitle}</p>
    </div>
  );
}

export default HeaderTitle;
