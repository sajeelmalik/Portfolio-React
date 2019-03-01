import React, { Component } from 'react';

// Components
import Project from "./Project"

// Styling
import "./Projects.css"


const projects = [
    {
        title: "Tempo",
        image: "",
        description: ""
    },
    {
        title: "Dev Lab",
        image: "",
        description: ""
    },
    {
        title: "Mt. Sutro",
        image: "",
        description: ""
    }
]

class Projects extends Component {

    render() {
        let keyCount = 0;

        return (
            <div className="container">
                <div className="title">
                    <h1 className="screen" id="portfolio">Portfolio
                </h1>
                </div>
                <div id="projects">
                {projects.map(elem => {
                    return <Project key={keyCount} title={elem.title} image={elem.image} description={elem.description} />
                })}
                </div>

            </div>
        )
    }

}

export default Projects;