import React, { Component } from 'react';

// Components
import Project from "./Project"

// Styling
import "./Projects.css"


const projects = [
    {
        title: "Tempo",
        image: "assets/images/box-logo.png",
        description: "Tempo is a virtual booking agent that allows musicians to stay independent by mitigating the friction in the booking and gigging industry."
    },
    {
        title: "Dev Lab",
        image: "assets/images/DevLab.gif",
        description: "DevLab is a crowd-sourced platform for learning how to code. As developers, we are often bombarded with an overwhelming flood of resources. DevLab seeks to wade through the flood by providing a robust, user-driven tool to pool the best resources!"
    },
    {
        title: "Mt. Sutro",
        image: "assets/images/MtSutro.gif",
        description: "Mt. Sutro Music Company is a platform that allows its associates to grow and excel in the emerging music industry by connecting, engaging, and conducting business in and around the San Francisco music scene."
    },
    
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