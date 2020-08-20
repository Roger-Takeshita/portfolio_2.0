import React from 'react';
import githubSvg from '../../assets/images/logos/social_media/github.svg';
import linkedinSvg from '../../assets/images/logos/social_media/linkedin.svg';
import replitSvg from '../../assets/images/logos/social_media/replit.svg';
import tinkercadSvg from '../../assets/images/logos/social_media/tinkercad.svg';
import twitterSvg from '../../assets/images/logos/social_media/twitter.svg';

export const socialMedias = [
    {
        name: 'Linkedin',
        icon: (
            <img
                src={linkedinSvg}
                alt="Linkedin"
                className="icon icon__footer--local"
            />
        ),
        url: 'https://www.linkedin.com/in/roger-takeshita/',
    },
    {
        name: 'GitHub',
        icon: (
            <img
                src={githubSvg}
                alt="GitHub"
                className="icon icon__footer--local"
            />
        ),
        url: 'https://github.com/Roger-Takeshita',
        placement: 'left',
    },
    {
        name: 'Repl.it',
        icon: (
            <img
                src={replitSvg}
                alt="Repl.it"
                className="icon icon__footer--local"
            />
        ),
        url: 'https://repl.it/@rogertakeshita',
    },
    {
        name: 'Twitter',
        icon: (
            <img
                src={twitterSvg}
                alt="Twitter"
                className="icon icon__footer--local"
            />
        ),
        url: 'https://twitter.com/RogerTakeshita',
    },
    {
        name: 'TinkerCad',
        icon: (
            <img
                src={tinkercadSvg}
                alt="TinkerCad"
                className="icon icon__footer--local"
            />
        ),
        url:
            'https://www.tinkercad.com/users/6isX9On4Qd0-roger-takeshita?category=circuits&sort=likes&view_mode=default',
    },
];
