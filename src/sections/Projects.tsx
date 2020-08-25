import React from 'react';
import { Element } from 'react-scroll';
import { projects } from '../assets/data/projects';
import Card from '../components/Card';

const Projects: React.FC = () => {
    return (
        <Element name="projects">
            <div className="section-projects">
                <div className="u-text-center">
                    <h2 className="heading-secondary heading-secondary__text-title-1">
                        <span>P</span>
                        <span>R</span>
                        <span>O</span>
                        <span>J</span>
                        <span>E</span>
                        <span>C</span>
                        <span>T</span>
                        <span>S</span>
                    </h2>
                </div>
                <div className="projects">
                    <div className="row u-text-center u-items-center u-flex-wrap-wrap">
                        <div className="col-1-of-1">
                            {projects.map((project, idx) => {
                                return (
                                    <Card
                                        key={idx}
                                        name={project.name}
                                        imageUri={project.imageUri.toString()}
                                        liveUrl={project.liveUrl.toString()}
                                        repoUrl={project.repoUrl.toString()}
                                        technologies={project.technologies}
                                        description={project.description.toString()}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    );
};

export default Projects;
