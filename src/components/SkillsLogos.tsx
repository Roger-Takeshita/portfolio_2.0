import React from 'react';
import { SkillsLogosProps } from '../utils/interface';

const SkillsLogos: React.FC<SkillsLogosProps> = ({ title, skills }) => {
    return (
        <div className="skills">
            <h3 className="heading-tertiary u-margin-bottom-small u-no-skew-y">
                {title}
            </h3>
            <div className="skills__logos">
                {skills.map((skill: any, idx: number) => {
                    return (
                        <div key={idx} className="skills__logo-box u-no-skew-y">
                            {skill.icon}
                            <p className="skills__paragraph">{skill.name}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default SkillsLogos;
