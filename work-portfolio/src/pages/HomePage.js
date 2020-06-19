import React from "react";
import Header from "../components/Header";
import portfolioPic from "./portfolioPic.PNG";
import gamerVisionArt from "./gamerVisionArt.png";
import towerDefenseArt from "./towerDefensePic2.PNG";
import liriArt from "./liriArt.png";
import strategyArt from "./strategyArt.png";

class HomePage extends React.Component {
  scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight / 3.5);
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="pusher">
        <div
          style={{ height: 800 }}
          className="ui inverted vertical masthead center aligned segment"
        >
          <Header />
          <div className="ui container topContainer">
            <div className="ui stackable grid">
              <div className="ui row">
                <div className="eight wide column">
                  <img
                    className="portfolioPicture"
                    src={portfolioPic}
                    alt="Portfolio"
                  />
                </div>
                <div className="eight wide column">
                  <div className="ui container topInfoContainer">
                    <h1 className="nameHeaderText">Jeremy Smith</h1>
                    <h2 className="jobHeader">
                      Software Developer/ Chemistry Technician
                    </h2>
                    <div
                      onClick={this.scrollToBottom}
                      style={{ marginTop: 30 }}
                      className="ui huge primary button"
                    >
                      Check Out Projects!
                      <i className="right arrow icon" />
                    </div>
                    <h3 className="contactText">
                      e-mail: smithjeremy3933@gmail.com
                    </h3>
                    <h3 className="contactText">cell: (925)-518-6483</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ backgroundColor: "white" }}
          className="ui vertical stripe segment"
        >
          <div className="ui container">
            <div className="ui text container">
              <div className="ui header">
                <h1 style={{ textAlign: "center", fontSize: 50 }}>Projects</h1>
              </div>
            </div>
            <div className="ui divider"></div>
            <div className="ui divided grid">
              <div className="ui row">
                <div className="six wide column">
                  <img
                    className="projectPicture"
                    src={towerDefenseArt}
                    alt="Portfolio"
                  />
                </div>
                <div className="ten wide column">
                  <a href="https://github.com/smithjeremy3933/Tower-Defense">
                    <h2>Elemental Tower Defense Game (C#)</h2>
                  </a>
                  <div className="ui divider"></div>
                  <h5>Dependencies: Unity, Gimp, Blender</h5>
                  <h5 className="descriptionText">
                    A table-top tower defense game inspired by the tower defense
                    (TD) games I used to play on Warcraft III: Reign of Chaos
                    when I was kid. I used this game and Wilmer Lin's
                    "Pathfinding in Unity" Udemy series to start learning about
                    pathfinding algorithms. This game features some unique
                    towers I made through Blender and a User Interface I made
                    through Gimp. This particular TD is an elemental tower
                    defense where each tower has a unique ability that sets it
                    apart from other towers in the game. The Fire Tower is the
                    damage dealer, the Ice Tower slows enemies, while the
                    lightning tower unleashes splash damage upon your enemies.
                    Tower's damage can be upgraded, so players can strategically
                    upgrade certain towers in certain spots around the map.
                  </h5>
                </div>
              </div>
              <div className="ui divider"></div>
              <div className="ui row">
                <div className="six wide column">
                  <img
                    className="projectPicture"
                    src={gamerVisionArt}
                    alt="Portfolio"
                  />
                </div>
                <div className="ten wide column">
                  <a href="https://github.com/smithjeremy3933/Gamer-Vision">
                    <h2>Gamer Vision (Javascript)</h2>
                  </a>
                  <div className="ui divider"></div>
                  <h5>
                    Dependencies: MERN stack, axios, lodash, react-router-dom,
                    redux, react-redux, redux-form, redux-thunk, bcrypt-nodejs,
                    jwt-simple, mogoose, nodemon, passport, passport-jwt,
                    passport-local, Semantic-UI
                  </h5>
                  <h5 className="descriptionText">
                    An app I am designing for game developers to manage the many
                    components that make up a video game. I started working on
                    this app after I started to realize that just keeping track
                    of my goals on Github was not enough. Including planning how
                    the build scalable code, I also had to think about how the
                    user interface would work, character progression, level
                    design, story, player experience etc... I also want it to be
                    a platform for Indy game developers to talk to each other
                    and discuss different ideas.
                  </h5>
                </div>
              </div>
              <div className="ui divider"></div>
              <div className="ui row">
                <div className="six wide column">
                  <img
                    className="projectPicture"
                    src={liriArt}
                    alt="Portfolio"
                  />
                </div>
                <div className="ten wide column">
                  <a href="https://github.com/smithjeremy3933/Liri">
                    <h2>
                      L.I.R.I - Language Interpretation and Recognition
                      Interface (Javascript)
                    </h2>
                  </a>
                  <div className="ui divider"></div>
                  <h5>
                    Dependencies: axios, dotenv, inquirer, moment, node.js,
                    node-spotify-api
                  </h5>
                  <h5 className="descriptionText">
                    LIRI is a Language Interpretation and Recognition Interface.
                    LIRI can search Spotify for songs, Bands in Town for
                    concerts, and OMDB for movies. Directions: use the
                    "concert-this" command followed by the name of the artist to
                    see a touring schedule (if there is one) of the artist, use
                    the "spotify-this-song" command followed by the name of the
                    song to get information about the song, and can use the
                    "movie-this" command followed by the name of the movie to
                    find information about the movie.
                  </h5>
                </div>
              </div>
              <div className="ui divider"></div>
              <div className="ui row">
                <div className="six wide column">
                  <img
                    className="projectPicture"
                    src={strategyArt}
                    alt="Portfolio"
                  />
                </div>
                <div className="ten wide column">
                  <a href="https://github.com/smithjeremy3933/Turn-Based-Strategy-Game">
                    <h2>Turn-Based-Strategy-Game (C#)</h2>
                  </a>
                  <div className="ui divider"></div>
                  <h5>Dependencies: unity</h5>
                  <h5 className="descriptionText">
                    A strategy game I am currently developing that I wish to be
                    in the style of Fire Emblem and X-COM, two of my favorite
                    childhood games.
                  </h5>
                </div>
              </div>
              <div className="ui divider"></div>
            </div>
          </div>
        </div>
        <div className="ui inverted vertical footer segment">
          <div className="ui container">
            <div className="ui stackable inverted divided equal height stackable grid">
              <div className="six wide column">
                <h4 className="ui inverted header">Social Media</h4>
                <div className="ui inverted link list">
                  <a href="https://github.com/smithjeremy3933" className="item">
                    Github
                  </a>
                </div>
              </div>
              <div className="seven wide column">
                <h4 className="ui inverted header">Thank You For Your Time</h4>
                <p>Thank you for taking the time to look at my portfolio.</p>
                <div
                  onClick={this.scrollToTop}
                  style={{ marginTop: 30 }}
                  className="ui huge primary button"
                >
                  Back to Top
                  <i className="right arrow icon" />
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
