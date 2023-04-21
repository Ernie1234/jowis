import React from "react";
import Button1 from "../components/Button1";

function Header() {
  return (
    <header className="header">
      <div className="header__text">
        <h1 className="header__text--primary">Simple.</h1>
        <h1 className="header__text--secondary">creative.</h1>
        <h1 className="header__text--primary">Efficient.</h1>
        <Button1 title="Get a Quote" />
      </div>
    </header>
  );
}

export default Header;
