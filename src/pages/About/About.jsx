import React, { Component } from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";

// Icons

import PlayIcon from "@material-ui/icons/PlayArrowRounded";
import PauseIcon from "@material-ui/icons/PauseRounded";

// Components

// Styling
import Fade from "react-reveal/Fade";
import "./About.css";

const styles = theme => ({
  section: {
    backgroundImage: "url('assets/images/pinkyellowgradient.jpg')",
    // backgroundColor: "transparent",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    marginBottom: "-30px",
    zIndex: "-3",
    paddingTop: "10%",
    paddingBottom: "5%"
  }
  // aboutBackground: {
  //   position: "absolute",
  //   top: "0px",
  //   left: "0px",
  //   backgroundImage: "url('assets/images/pinkyellowgradient.jpg')",
  //   backgroundSize: "cover",
  //   backgroundRepeat: "no-repeat",
  //   marginBottom: "-30px",
  //   zIndex: "-4",
  //   paddingTop: "10%",
  //   paddingBottom: "5%"
  // }
});

// holder for audio
let jazz;

class About extends Component {
  state = {
    audioPlaying: false,
    firstAudioClick: true,
    button: "play"
  };

  playJazz = () => {
    console.log(this.state.audioPlaying);

    // checks if we've played the song yet or not
    if (this.state.firstAudioClick) {
      jazz = new Audio("assets/audio/sayuwont.mp3");
      this.setState({
        firstAudioClick: false
      });
    }

    if (!this.state.audioPlaying) {
      jazz.play();

      this.setState({
        audioPlaying: true,
        button: "pause"
      });
    } else {
      jazz.pause();

      this.setState({
        audioPlaying: false,
        button: "play"
      });
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        {/* <div
          className={classes.aboutBackground}
          style={{ display: this.props.show }}
        /> */}
        <div className={classes.section} style={{ display: this.props.show }}>
          <div className="container">
            <div className="title" style={{ marginTop: "0" }}>
              <h1 className="screen" id="about">
                About Me
              </h1>
            </div>

            <div className="about-me">
              <div className="pic-container">
                <img
                  className="profile-pic"
                  src="assets/images/Head.jpg"
                  alt="Profile Picture of Sajeel"
                />
                <div className="profile-pic-overlay">
                  <div className="play-button" onClick={this.playJazz}>
                    <PlayIcon
                      style={{
                        display: this.state.button === "play" ? "block" : "none"
                      }}
                      className="play-icon"
                    />
                    <PauseIcon
                      style={{
                        display:
                          this.state.button === "pause" ? "block" : "none"
                      }}
                      className="play-icon"
                    />
                  </div>
                </div>
              </div>
              <div className="about-me-body">
                <p className="about-me-text">
                  I am a full-stack software engineer specializing in a{" "}
                  <span className="about-highlight about-anim">MERN stack</span>
                  .
                </p>
                <p className="about-me-text">
                  I am a graduate of the{" "}
                  <span className="about-highlight about-anim">
                    University of California, Berkeley
                  </span>
                  , with a degree in Cognitive Neuroscience.
                </p>
                <p className="about-me-text">
                  Not unlike Childish Gambino, I have a medley of{" "}
                  <span className="about-highlight about-anim">
                    diverse experiences
                  </span>
                  . I have worked as a Prototype Engineer and a Clinical
                  Research Assistant and designed a surgical robot for
                  minimally-invasive surgery. I have tutored high-school
                  students extensively to improve their SAT, ACT, and SAT II
                  scores to succesfully earn admission to the top colleges of
                  their choice. Currently, I am part of the teaching staff for
                  UC Berkeley's full-stack software engineering course, where I develop unique course material and help instruct the next generation of software engineers
                </p>
                <p className="about-me-text">
                  In the past few years, I have developed an unwavering{" "}
                  <span className="about-highlight about-anim">
                    passion for people
                  </span>
                  , for software, and for teaching. I hope to develop products
                  that influence positive change in the world.
                </p>
                <p className="about-me-text">
                  I am an avid, and often disappointed,{" "}
                  <span className="about-highlight rockets-highlight rockets-anim">
                    Houston Rockets fan
                  </span>
                  , an amateur chef, and clearly, a{" "}
                  <Tooltip title="Hint: Click my face" placement="bottom">
                    <span className="about-highlight about-anim">
                      jazz enthusiast
                    </span>
                  </Tooltip>
                  .
                </p>
              </div>
            </div>
          </div>
          <Fab
            color="primary"
            aria-label="play"
            className={this.state.firstAudioClick ? "hidden" : "fab-play"}
            onClick={this.playJazz}
          >
            <PlayIcon
              style={{
                display: this.state.button === "play" ? "block" : "none"
              }}
            />
            <PauseIcon
              style={{
                display: this.state.button === "pause" ? "block" : "none"
              }}
            />
          </Fab>
        </div>
      </div>
    );
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
