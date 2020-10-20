import React from 'react';
import { Element } from 'react-scroll';
import { projects } from '../assets/data/projects';
import Card from '../components/Card';
import SpanGenerator from '../components/SpanGenerator';

const Projects: React.FC = () => {
    return (
        <Element name="projects">
            <div className="section-projects">
                <div className="section-projects--bg">&nbsp;</div>
                <div className="section-projects--pulse">&nbsp;</div>
                <div className="u-text-center">
                    <h2 className="heading-secondary heading-secondary__text-title-1">
                        <SpanGenerator>PROJECTS</SpanGenerator>
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
