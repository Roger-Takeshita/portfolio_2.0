import React from 'react';
import materialuiLogo from '../images/logos/languages/materialui.svg';
import pythonLogo from '../images/logos/languages/python.svg';
import reduxLogo from '../images/logos/languages/redux.svg';
import socketIoLogo from '../images/logos/languages/socketio.svg';
import minesweeperImg from '../images/projects/project_001.png';
import icheatsImg from '../images/projects/project_002.png';
import fellasImg from '../images/projects/project_003.png';
import pennyImg from '../images/projects/project_004.png';
import myfollowupImg from '../images/projects/project_005.png';
import theNinjaBoardImg from '../images/projects/project_006.png';

export const projects = [
    {
        name: 'The Ninja Board',
        imageUri: theNinjaBoardImg,
        liveUrl:
            'https://roger-takeshita.github.io/Mintbean_Hackathons_JS_Bootcamp_Olympics/',
        repoUrl:
            'https://github.com/Roger-Takeshita/Mintbean_Hackathons_JS_Bootcamp_Olympics',
        technologies: [
            <i
                className="devicon-react-original colored icon__project"
                style={{ color: 'darkblue' }}
            />,
            <img src={reduxLogo} alt="logo" className="icon__project--local" />,
            <i className="devicon-typescript-plain colored icon__project" />,
            <i className="devicon-html5-plain colored icon__project" />,
            <i className="devicon-css3-plain colored icon__project" />,
            <i className="devicon-sass-original colored icon__project" />,
        ],
        description:
            'On August 29th 2020, the Team Ninja (Suzy Nakayama and I) attended the Olympics Hackathon from Mintbean. It was 3 days project where the goal was to create a SPA Kanban board using only front-end technologies. Technologies used: React/Redux, TypeScript, HTML, and CSS/SASS (BEM).',
    },
    {
        name: 'My Follow-up',
        imageUri: myfollowupImg,
        liveUrl: 'https://myfollowup.herokuapp.com/',
        repoUrl: 'https://github.com/Roger-Takeshita/MyFollowUp',
        technologies: [
            <i className="devicon-mongodb-plain colored icon__project" />,
            <i className="devicon-express-original icon__project" />,
            <i
                className="devicon-react-original colored icon__project"
                style={{ color: 'darkblue' }}
            />,
            <i className="devicon-nodejs-plain colored icon__project" />,
            <img src={reduxLogo} alt="logo" className="icon__project--local" />,
            <i
                className="devicon-javascript-plain colored icon__project"
                style={{ background: 'black' }}
            />,
            <i className="devicon-html5-plain colored icon__project" />,
            <img
                src={materialuiLogo}
                alt="logo"
                className="icon__project--local"
            />,
            <i className="devicon-css3-plain colored icon__project" />,
            <i className="devicon-heroku-original colored icon__project" />,
        ],
        description:
            'Single Page App (SPA) where users can keep track and follow-up their job applications, full CRUD operation to create resumes, job applications, and follow-ups. Technologies used: MongoDB, Express, React/Redux, Node.js, JSON Web Token (JWT), REST API, JavaScript, HTML, and CSS/SASS (BEM).',
    },
    {
        name: 'Penny Pinchers',
        imageUri: pennyImg,
        liveUrl: 'https://penny-pinchers.herokuapp.com/',
        repoUrl: 'https://github.com/Roger-Takeshita/Penny-Pinchers',
        technologies: [
            <i className="devicon-mongodb-plain colored icon__project" />,
            <i className="devicon-express-original icon__project" />,
            <i
                className="devicon-react-original colored icon__project"
                style={{ color: 'darkblue' }}
            />,
            <i className="devicon-nodejs-plain colored icon__project" />,
            <i
                className="devicon-javascript-plain colored icon__project"
                style={{ background: 'black' }}
            />,
            <i className="devicon-html5-plain colored icon__project" />,
            <i className="devicon-bootstrap-plain colored icon__project" />,
            <i className="devicon-css3-plain colored icon__project" />,
            <i className="devicon-heroku-original colored icon__project" />,
        ],
        description:
            'Single Page App (SPA) where users can log in/sign up, full CRUD operation to create a new list of expenses, stores, products, categories, and sub-categories. Technologies used: MongoDB, Express, React, Node.js, JSON Web Token (JWT), REST API, JavaScript, HTML, and CSS.',
    },
    {
        name: 'Bookfellas',
        imageUri: fellasImg,
        liveUrl: 'https://bookfellas.herokuapp.com/',
        repoUrl: 'https://github.com/BookFellas/book-fellas',
        technologies: [
            <i className="devicon-django-plain colored icon__project" />,
            <img
                src={pythonLogo}
                alt="logo"
                className="icon__project--local"
            />,
            <i
                className="devicon-javascript-plain colored icon__project"
                style={{ background: 'black' }}
            />,
            <i className="devicon-jquery-plain colored icon__project" />,
            <i className="devicon-html5-plain colored icon__project" />,
            <i className="devicon-bootstrap-plain colored icon__project" />,
            <i className="devicon-css3-plain colored icon__project" />,
            <i className="devicon-heroku-original colored icon__project" />,
        ],
        description:
            'Book store where users can shop for books, full CRUD operation to store the user profile, create a new cart, add new items, and submit the order. Technologies used: Django, Python, PostgreSQL, 3rd Party API, JavaScript, HTML, and CSS.',
    },
    {
        name: 'iCheats',
        imageUri: icheatsImg,
        liveUrl: 'https://icheats.herokuapp.com/',
        repoUrl: 'https://github.com/Roger-Takeshita/iCheats',
        technologies: [
            <i className="devicon-mongodb-plain colored icon__project" />,
            <i className="devicon-express-original icon__project" />,
            <i className="devicon-nodejs-plain colored icon__project" />,
            <img
                src={socketIoLogo}
                alt="logo"
                className="icon__project--local"
            />,
            <i
                className="devicon-javascript-plain colored icon__project"
                style={{ background: 'black' }}
            />,
            <i className="devicon-jquery-plain colored icon__project" />,
            <i className="devicon-html5-plain colored icon__project" />,
            <i className="devicon-bootstrap-plain colored icon__project" />,
            <i className="devicon-css3-plain colored icon__project" />,
            <i className="devicon-heroku-original colored icon__project" />,
        ],
        description:
            'Social media where users can sign up using Google OAuth, logged in users can CRUD posts and comments, and send messages to the main chat. Technologies used: Node.js, Express, MongoDB, OAuth2, Socket.io, REST API, JavaScript, HTML, and CSS.',
    },
    {
        name: 'Minesweeper',
        imageUri: minesweeperImg,
        liveUrl: 'https://roger-takeshita.github.io/game-minesweeper/',
        repoUrl: 'https://github.com/Roger-Takeshita/game-minesweeper',
        technologies: [
            <i
                className="devicon-javascript-plain colored icon__project"
                style={{ background: 'black' }}
            />,
            <i className="devicon-jquery-plain colored icon__project" />,
            <i className="devicon-html5-plain colored icon__project" />,
            <i className="devicon-css3-plain colored icon__project" />,
            <i className="devicon-github-plain colored icon__project" />,
        ],
        description:
            'Single Page App (SPA) using jQuery to update the DOM, JavaScript class to create the board and recursion the check for empty spots. Technologies used: JavaScript, HTML, and CSS.',
    },
];
