import React from 'react';
import AboutMe from './sections/AboutMe';
import HeaderPortfolio from './sections/HeaderPortfolio';
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
            </main>
        </div>
    );
};

export default App;
