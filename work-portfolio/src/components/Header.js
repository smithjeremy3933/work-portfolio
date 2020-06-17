import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Home
      </Link>
      <Link to="/portfolio" className="item">
        Portfolio
      </Link>
      <Link to="/" className="item">
        Contact
      </Link>
    </div>
  );
};

export default Header;
