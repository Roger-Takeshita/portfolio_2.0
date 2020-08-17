import React from 'react';
import jestLogo from '../../assets/images/logos/languages/jest.svg';
import materialUILogo from '../../assets/images/logos/languages/material-ui.svg';
import pythonLogo from '../../assets/images/logos/languages/python.svg';
import reduxLogo from '../../assets/images/logos/languages/redux.svg';

export const strongSkills = [
    {
        name: 'React.js',
        icon: <i className="devicon-react-original colored skills__logo" />,
    },
    {
        name: 'Redux',
        icon: (
            <img src={reduxLogo} alt="logo" className="skills__logo--local" />
        ),
    },
    {
        name: 'Node.js',
        icon: <i className="devicon-nodejs-plain colored skills__logo" />,
    },
    {
        name: 'Express.js',
        icon: <i className="devicon-express-original skills__logo" />,
    },

    {
        name: 'Python',
        icon: (
            <img src={pythonLogo} alt="logo" className="skills__logo--local" />
        ),
    },
    {
        name: 'MongoDB',
        icon: <i className="devicon-mongodb-plain colored skills__logo" />,
    },
    {
        name: 'PostgreSQL',
        icon: <i className="devicon-postgresql-plain colored skills__logo" />,
    },
    {
        name: 'JavaScript',
        icon: (
            <i
                className="devicon-javascript-plain colored skills__logo"
                style={{ background: 'black' }}
            />
        ),
    },
    {
        name: 'jQuery',
        icon: <i className="devicon-jquery-plain colored skills__logo" />,
    },
    {
        name: 'HTML5',
        icon: <i className="devicon-html5-plain colored skills__logo" />,
    },
    {
        name: 'Sass',
        icon: <i className="devicon-sass-original colored skills__logo" />,
    },
    {
        name: 'Bootstrap4',
        icon: <i className="devicon-bootstrap-plain colored skills__logo" />,
    },
    {
        name: 'Material UI',
        icon: (
            <img
                src={materialUILogo}
                alt="logo"
                className="skills__logo--local"
            />
        ),
    },
    {
        name: 'CSS3',
        icon: <i className="devicon-css3-plain colored skills__logo" />,
    },
    {
        name: 'Heroku',
        icon: <i className="devicon-heroku-original colored skills__logo" />,
    },
];

export const workingSkills = [
    {
        name: 'Django',
        icon: <i className="devicon-django-plain skills__logo" />,
    },
    {
        name: 'AWS S3',
        icon: (
            <i className="devicon-amazonwebservices-original colored skills__logo" />
        ),
    },
    {
        name: 'Jest',
        icon: <img src={jestLogo} alt="logo" className="skills__logo--local" />,
    },
];
