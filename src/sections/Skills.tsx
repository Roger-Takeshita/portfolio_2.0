import React from 'react';
import { Element } from 'react-scroll';
import { strongSkills, workingSkills } from '../assets/data/skills';
import SkillsLogos from '../components/SkillsLogos';

const Skills: React.FC = () => {
    return (
        <Element name="skills">
            <div className="section-skills">
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
                <div className="row u-text-center skills__skew-y">
                    <div className="col-1-of-2">
                        <SkillsLogos title="Strong" skills={strongSkills} />
                    </div>
                    <div className="col-1-of-2 skills__skew-y--border-left">
                        <SkillsLogos
                            title="Working Knowledge"
                            skills={workingSkills}
                        />
                    </div>
                </div>
            </div>
        </Element>
    );
};

export default Skills;
