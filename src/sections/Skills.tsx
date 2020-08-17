import React from 'react';
import { strongSkills, workingSkills } from '../assets/data/skills';

const Skills: React.FC = () => {
    return (
        <div className="section-skills">
            <div className="u-center-text u-margin-bottom-medium">
                <h2 className="heading-secondary heading-secondary__text-title-1">
                    <span>S</span>
                    <span>K</span>
                    <span>I</span>
                    <span>L</span>
                    <span>L</span>
                    <span>S</span>
                </h2>
            </div>
            <div className="row u-center-text u-skew-y">
                <div className="col-1-of-2">
                    <div className="skills">
                        <h3 className="heading-tertiary u-margin-bottom-small u-no-skew-y">
                            Strong
                        </h3>
                        <div className="skills__logos">
                            {strongSkills.map((skill, idx) => {
                                return (
                                    <div
                                        key={idx}
                                        className="skills__logo-box u-no-skew-y"
                                    >
                                        {skill.icon}
                                        <p className="skills__paragraph">
                                            {skill.name}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="col-1-of-2 u-skew-y-border-left">
                    <div className="skills">
                        <h3 className="heading-tertiary u-margin-bottom-small u-no-skew-y">
                            Working Knowledge
                        </h3>
                        <div className="skills__logos">
                            {workingSkills.map((skill, idx) => {
                                return (
                                    <div
                                        key={idx}
                                        className="skills__logo-box u-no-skew-y"
                                    >
                                        {skill.icon}
                                        <p className="skills__paragraph">
                                            {skill.name}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
