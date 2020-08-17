import React from 'react';
import materialuiLogo from '../images/logos/languages/materialui.svg';
import pythonLogo from '../images/logos/languages/python.svg';
import reduxLogo from '../images/logos/languages/redux.svg';
import socketIoLogo from '../images/logos/languages/socketio.svg';
import minesweeperImg from '../images/projects/001-minesweeper.jpg';
import icheatsImg from '../images/projects/002-icheats.jpg';
import fellasImg from '../images/projects/003-bookfellas.jpg';
import pennyImg from '../images/projects/004-penny-pinchers.jpg';
import myfollowupImg from '../images/projects/005-my-follow-up.jpg';

export const projects = [
    {
        name: 'My Follow-up',
        imageUri: myfollowupImg,
        liveUrl: 'https://myfollowup.herokuapp.com/',
        repoUrl: 'https://github.com/Roger-Takeshita/MyFollowUp',
        technologies: [
            <i className="devicon-mongodb-plain-wordmark colored" />,
            <i className="devicon-express-original" />,
            <i
                className="devicon-react-original-wordmark colored"
                style={{ color: 'darkblue' }}
            />,
            <i className="devicon-nodejs-plain colored" />,
            <img src={reduxLogo} alt="logo" />,
            <i
                class="devicon-javascript-plain colored"
                style={{ background: 'black' }}
            />,
            <i className="devicon-html5-plain-wordmark colored" />,
            <img src={materialuiLogo} alt="logo" />,
            <i className="devicon-css3-plain-wordmark colored" />,
            <i className="devicon-heroku-original-wordmark colored" />,
        ],
        description: 'MERN stack job application follow-up app built with:',
    },
    {
        name: 'Penny Pinchers',
        imageUri: pennyImg,
        liveUrl: 'https://penny-pinchers.herokuapp.com/',
        repoUrl: 'https://github.com/Roger-Takeshita/Penny-Pinchers',
        technologies: [
            <i className="devicon-mongodb-plain-wordmark colored" />,
            <i className="devicon-express-original" />,
            <i
                className="devicon-react-original-wordmark colored"
                style={{ color: 'darkblue' }}
            />,
            <i className="devicon-nodejs-plain colored" />,
            <i
                class="devicon-javascript-plain colored"
                style={{ background: 'black' }}
            />,
            <i className="devicon-html5-plain-wordmark colored" />,
            <i className="devicon-bootstrap-plain-wordmark colored" />,
            <i className="devicon-css3-plain-wordmark colored" />,
            <i className="devicon-heroku-original-wordmark colored" />,
        ],
        description: 'MERN stack expenses tracker app built with:',
    },
    {
        name: 'Bookfellas',
        imageUri: fellasImg,
        liveUrl: 'https://bookfellas.herokuapp.com/',
        repoUrl: 'https://github.com/BookFellas/book-fellas',
        technologies: [
            <i className="devicon-django-plain-wordmark colored" />,
            <img src={pythonLogo} alt="logo" />,
            <i
                class="devicon-javascript-plain colored"
                style={{ background: 'black' }}
            />,
            <i className="devicon-jquery-plain-wordmark colored" />,
            <i className="devicon-html5-plain-wordmark colored" />,
            <i className="devicon-bootstrap-plain-wordmark colored" />,
            <i className="devicon-css3-plain-wordmark colored" />,
            <i className="devicon-heroku-original-wordmark colored" />,
        ],
        description: 'Full-Stack book store application built with:',
    },
    {
        name: 'iCheats',
        imageUri: icheatsImg,
        liveUrl: 'https://icheats.herokuapp.com/',
        repoUrl: 'https://github.com/Roger-Takeshita/iCheats',
        technologies: [
            <i className="devicon-mongodb-plain-wordmark colored" />,
            <i className="devicon-express-original" />,
            <i className="devicon-nodejs-plain colored" />,
            <img src={socketIoLogo} alt="logo" />,
            <i
                className="devicon-javascript-plain colored"
                style={{ background: 'black' }}
            />,
            <i className="devicon-jquery-plain-wordmark colored" />,
            <i className="devicon-html5-plain-wordmark colored" />,
            <i className="devicon-bootstrap-plain-wordmark colored" />,
            <i className="devicon-css3-plain-wordmark colored" />,
            <i className="devicon-heroku-original-wordmark colored" />,
        ],
        description: 'Full-Stack social media application built with:',
    },
    {
        name: 'Minesweeper',
        imageUri: minesweeperImg,
        liveUrl: 'https://roger-takeshita.github.io/game-minesweeper/',
        repoUrl: 'https://github.com/Roger-Takeshita/game-minesweeper',
        technologies: [
            <i
                class="devicon-javascript-plain colored"
                style={{ background: 'black' }}
            />,
            <i className="devicon-jquery-plain-wordmark colored" />,
            <i className="devicon-html5-plain-wordmark colored" />,
            <i className="devicon-css3-plain-wordmark colored" />,
            <i className="devicon-github-plain-wordmark colored" />,
        ],
        description: 'Single Page Application (SPA) built with:',
    },
];
