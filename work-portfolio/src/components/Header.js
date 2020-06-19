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
        <a
          href="https://github.com/smithjeremy3933"
          className="item headerLink"
        >
          Github
        </a>
      </div>
    </div>
  );
};

export default Header;
