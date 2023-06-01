import React from "react";
import logo from "../logo.svg";

const Logo = () => {
  return (
    <div className="logo flex justify-center items-center">
      <img src={logo} className="App-logo flex content-center justify-center items-center " alt="logo" />
    </div>
  );
};

export default Logo;
