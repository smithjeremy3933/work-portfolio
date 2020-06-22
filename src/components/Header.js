import React from "react";
import "./App.css";

class Header extends React.Component {
  openInNewWindow() {
    window.open("https://github.com/smithjeremy3933");
  }

  render() {
    return (
      <div className="ui container">
        <div className="ui large secondary inverted pointing menu">
          <button
            style={{ width: 130 }}
            className="ui inverted button"
            onClick={this.openInNewWindow}
          >
            Github
            <i style={{ marginLeft: 11 }} className="large github icon"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default Header;
