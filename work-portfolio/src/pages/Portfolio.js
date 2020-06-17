import React from "react";
import Header from "../components/Header";
import portfolioPic from "./portfolioPic.PNG";

class Portfolio extends React.Component {
  render() {
    return (
      <div className="rootContainer">
        <div className="ui grid">
          <div className="ui row">
            <div className="eight wide column">
              <div></div>
            </div>
            <div className="eight wide column">
              <Header />
            </div>
          </div>
          <div className="ui row">
            <div className="sixteen wide column">
              <div className="ui celled list">
                <div className="item portfolioItem">
                  <div className="ui row">
                    <div className="five wide column">
                      <img
                        className="projectPicture"
                        src={portfolioPic}
                        alt="portfolioPic"
                      />
                    </div>
                    <div className="eleven wide column">
                      <div className="content">
                        <div className="header">Header</div>
                        <div className="description">description</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item portfolioItem">
                  <img
                    className="projectPicture"
                    src={portfolioPic}
                    alt="portfolioPic"
                  />
                  <div className="content">
                    <div className="header">Header</div>
                    <div className="description">description</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
