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
            'On August 29th 2020, the Team Ninja (my friend and I) attended the Olympics Hackathon from Mintbean. It was 3 days project where the goal was to create a Kanban board using only front-end technologies. Single Page App (SPA) using React/Redux, TypeScript, HTML, CSS/SASS, and Block Element Modifier (BEM) Methodology.',
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
            'Single Page Application (SPA) using React.js, where users can keep tracking their applications, full CRUD (create, read, update, and delete) operation for resumes, cover letters, job descriptions, and follow-ups. Sending data to the backend through REST APIs, and permanently saving the information on MongoDB Atlas. Technologies used: MongoDB, Mongoose, Express, React/Redux, Node.js, JSON Web Token (JWT), REST API, JavaScript, HTML, CSS/SASS, and Block Element Modifier (BEM) methodology.',
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
            'E-commerce using server-side rendering (Django) and SQL database to serve HTML and JavaScript to the front-end. So users can shop books, full CRUD operation for users, carts, user profiles, and submitting the order. Technologies used: Django, Python, PostgreSQL, 3rd Party API, JavaScript, HTML, and CSS.',
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
            'Social media using Embedded JavaScript Templating (EJS) to serve HTML and JS, where users can sign up using Google OAuth, CRUD new posts, comments and send messages in the main chat via real-time communication. Technologies used: Node.js, Express, MongoDB, Mongoose, OAuth2, Socket.io, REST API, JavaScript, AJAX, jQuery, HTML, and CSS.',
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
