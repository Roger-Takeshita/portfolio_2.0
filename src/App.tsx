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
