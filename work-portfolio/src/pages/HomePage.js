import React from "react";
import Header from "../components/Header";
import portfolioPic from "./portfolioPic.PNG";

class HomePage extends React.Component {
  render() {
    return (
      <div className="rootContainer">
        <div className="ui grid">
          <div className="ui row">
            <div className="eight wide column">
              <img
                className="portfolioPicture"
                src={portfolioPic}
                alt="portfolioPic"
              />
            </div>
            <div className="eight wide column">
              <Header />
              <div>
                <h1 className="nameHeader">Jeremy Keith Smith</h1>
                <div className="ui divider"></div>
                <h5 className="jobHeader">
                  Chemistry Research/ Software Development/ Game Development
                </h5>
                <div className="buttonBox">
                  <button className="hireButton">Hire Me</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
