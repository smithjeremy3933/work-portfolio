import React from "react";
import "./App.css";
import portfolioPic from "./portfolioPic.PNG";

class App extends React.Component {
  render() {
    return (
      <div className="rootContainer">
        <div className="ui grid">
          <div className="ui row">
            <div className="eight wide column">
              <img className="portfolioPicture" src={portfolioPic} />
            </div>
            <div className="eight wide column">
              <div className="ui secondary pointing menu">
                <a to="/projects" className="item">
                  Gamer Vision
                </a>
                <a to="/allprojects" className="item">
                  All Game Projects
                </a>
                <a to="/allprojects" className="item">
                  Some Game Projects
                </a>
              </div>
              <div>
                <h1 className="nameHeader">Jeremy Keith Smith</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
