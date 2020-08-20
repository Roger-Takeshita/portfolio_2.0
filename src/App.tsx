import React from 'react';
import AboutMe from './sections/AboutMe';
import ContactMe from './sections/ContactMe';
import Education from './sections/Education';
import Footer from './sections/Footer';
import HeaderPortfolio from './sections/HeaderPortfolio';
import Projects from './sections/Projects';
import Skills from './sections/Skills';

const App: React.FC = () => {
    return (
        <div>
            <header>
                <HeaderPortfolio />
            </header>

            <main>
                <AboutMe />
                <Skills />
                <Projects />
                <Education />
                <ContactMe />
                <Footer />
            </main>
        </div>
    );
};

export default App;
