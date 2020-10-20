import React from 'react';
import Modal from './components/Modal';
import ModalMSg from './components/ModalMsg';
import Navbar from './components/Navbar';
import AboutMe from './sections/AboutMe';
import ContactMe from './sections/ContactMe';
import Education from './sections/Education';
import Footer from './sections/Footer';
import HeaderPortfolio from './sections/HeaderPortfolio';
import Projects from './sections/Projects';
import Skills from './sections/Skills';

const App: React.FC = () => {
    console.log(
        "Oh! Hello Dev! Nice to see you here. Please don't forget to send me a msg or connect with me at https://linkedin.com/in/roger-takeshita"
    );
    return (
        <div className="App">
            <header>
                <Navbar />
                <HeaderPortfolio />
            </header>

            <main>
                <AboutMe />
                <Skills />
                <Projects />
                <Education />
                <ContactMe />
                <Modal />
                <ModalMSg />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default App;
