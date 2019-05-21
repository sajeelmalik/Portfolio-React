import React, { Component } from 'react';
import PropTypes from 'prop-types';


import { withStyles } from '@material-ui/core/styles';

// Components
import Splash from "../../components/Splash";

import "./About.css";

const styles = (theme) => ({
    section: {
        backgroundImage: "url('assets/images/pinkyellowgradient.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        // paddingTop: "10%",
        // paddingBottom: "5%",
        // transform: "skew(0deg, 5deg)",
        marginBottom: "360px",
        zIndex: "-2",
        paddingTop: "10%",
        paddingBottom: "5%",

    },
});

class About extends Component {

    
    render() {

        const { classes } = this.props;

        return (
            <div className={classes.section} style={{ display: this.props.show }} >
                <div className="container">
                    <div className="title" style={{ marginTop: "0" }}>
                        <h1 className="screen" id="about" >About Me</h1>
                    </div>

                    <div className="about-me">
                        <div className = "pic-container">
                            <img className="profile-pic" src="assets/images/Head.jpg"></img>
                        </div>
                        <div className="about-me-body">
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis inventore rem quisquam ipsam! Atque ducimus, dignissimos officiis tempora eius cupiditate iure quis doloremque soluta officia at assumenda dolorem, maiores voluptatibus? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis inventore rem quisquam ipsam! Atque ducimus, dignissimos officiis tempora eius cupiditate iure quis doloremque soluta officia at assumenda dolorem, maiores voluptatibus?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

About.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);