import React, { Component } from 'react';

// Components
import Splash from "../../components/Splash";
import Projects from "../../components/Projects"


class Main extends Component {

    render() {

        return (
            <React.Fragment>
                <Splash></Splash>
                <Projects></Projects>
            </React.Fragment>
        )
    }

}

export default Main;