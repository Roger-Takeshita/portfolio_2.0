import React from 'react';
import { strongSkills, workingSkills } from '../assets/data/skills';
import SkillsLogos from '../components/SkillsLogos';

const Skills: React.FC = () => {
    return (
        <div className="section-skills" id="skills">
            <div className="u-text-center u-margin-bottom-large">
                <h2 className="heading-secondary heading-secondary__text-title-1">
                    <span>S</span>
                    <span>K</span>
                    <span>I</span>
                    <span>L</span>
                    <span>L</span>
                    <span>S</span>
                </h2>
            </div>
            <div className="row u-text-center u-skew-y">
                <div className="col-1-of-2">
                    <SkillsLogos title="Strong" skills={strongSkills} />
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
