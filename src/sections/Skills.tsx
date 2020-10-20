import React from 'react';
import { Element } from 'react-scroll';
import { strongSkills, workingSkills } from '../assets/data/skills';
import SkillsLogos from '../components/SkillsLogos';
import SpanGenerator from '../components/SpanGenerator';

const Skills: React.FC = () => {
    return (
        <Element name="skills">
            <div className="section-skills">
                <div className="u-text-center">
                    <h2 className="heading-secondary heading-secondary__text-title-1">
                        <SpanGenerator>SKILLS</SpanGenerator>
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
