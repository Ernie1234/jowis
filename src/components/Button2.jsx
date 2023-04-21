import React from "react";

function Button2({ title, otherProps }) {
  return (
    <button className="btn2 contact-btn" style={{ ...otherProps }}>
      {title}
    </button>
  );
}

export default Button2;
