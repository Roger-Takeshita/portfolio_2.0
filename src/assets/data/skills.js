import React from 'react';
import apolloLogo from '../../assets/images/logos/languages/apollo.svg';
import bashLogo from '../../assets/images/logos/languages/bash.svg';
import djangoLogo from '../../assets/images/logos/languages/django.svg';
import firebaseLogo from '../../assets/images/logos/languages/firebase.svg';
import graphqlLogo from '../../assets/images/logos/languages/graphql.svg';
import jestLogo from '../../assets/images/logos/languages/jest.svg';
import jwtLogo from '../../assets/images/logos/languages/jwt.svg';
import materialuiLogo from '../../assets/images/logos/languages/materialui.svg';
import postmanLogo from '../../assets/images/logos/languages/postman.svg';
import pythonLogo from '../../assets/images/logos/languages/python.svg';
import reduxLogo from '../../assets/images/logos/languages/redux.svg';
import socketioLogo from '../../assets/images/logos/languages/socketio.svg';
import webapackLogo from '../../assets/images/logos/languages/webpack.svg';

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
        name: 'JavaScript',
        icon: (
            <i
                className="devicon-javascript-plain colored skills__logo"
                style={{ background: 'black' }}
            />
        ),
    },
    {
        name: 'Python',
        icon: (
            <img src={pythonLogo} alt="logo" className="skills__logo--local" />
        ),
    },
    {
        name: 'JWT',
        icon: <img src={jwtLogo} alt="logo" className="skills__logo--local" />,
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
        name: 'jQuery',
        icon: <i className="devicon-jquery-plain colored skills__logo" />,
    },
    {
        name: 'HTML 5',
        icon: <i className="devicon-html5-plain colored skills__logo" />,
    },
    {
        name: 'CSS 3',
        icon: <i className="devicon-css3-plain colored skills__logo" />,
    },
    {
        name: 'Sass',
        icon: <i className="devicon-sass-original colored skills__logo" />,
    },
    {
        name: 'Bootstrap 4',
        icon: <i className="devicon-bootstrap-plain colored skills__logo" />,
    },
    {
        name: 'Material UI',
        icon: (
            <img
                src={materialuiLogo}
                alt="logo"
                className="skills__logo--local"
            />
        ),
    },
    {
        name: 'Git',
        icon: <i className="devicon-git-plain colored skills__logo" />,
    },
    {
        name: 'GitHub',
        icon: <i className="devicon-github-plain skills__logo" />,
    },
    {
        name: 'Heroku',
        icon: <i className="devicon-heroku-original colored skills__logo" />,
    },
    {
        name: 'Firebase',
        icon: (
            <img
                src={firebaseLogo}
                alt="logo"
                className="skills__logo--local"
            />
        ),
    },
    {
        name: 'Postman',
        icon: (
            <img src={postmanLogo} alt="logo" className="skills__logo--local" />
        ),
    },
];

export const workingSkills = [
    {
        name: 'Django',
        icon: (
            <img src={djangoLogo} alt="logo" className="skills__logo--local" />
        ),
    },
    {
        name: 'GraphQL',
        icon: (
            <img src={graphqlLogo} alt="logo" className="skills__logo--local" />
        ),
    },
    {
        name: 'Apollo',
        icon: (
            <img src={apolloLogo} alt="logo" className="skills__logo--local" />
        ),
    },
    {
        name: 'Bash',
        icon: <img src={bashLogo} alt="logo" className="skills__logo--local" />,
    },
    {
        name: 'Socket.io',
        icon: (
            <img
                src={socketioLogo}
                alt="logo"
                className="skills__logo--local"
            />
        ),
    },
    {
        name: 'Webpack',
        icon: (
            <img
                src={webapackLogo}
                alt="logo"
                className="skills__logo--local"
            />
        ),
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
