import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui container">
      <div className="ui large secondary inverted pointing menu">
        <Link to="/" className="item headerLink">
          Home
        </Link>
        <Link to="/portfolio" className="item headerLink">
          Portfolio
        </Link>
        <Link to="/" className="item headerLink">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Header;
