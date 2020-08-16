import React from 'react';
import AboutMe from './sections/AboutMe';
import HeaderPortfolio from './sections/HeaderPortfolio';

const App: React.FC = () => {
    return (
        <div>
            <header>
                <HeaderPortfolio />
            </header>

            <main>
                <AboutMe />
            </main>
        </div>
    );
};

export default App;
