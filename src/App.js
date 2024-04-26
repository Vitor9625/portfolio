// src/App.js
import React from 'react';
import Header from './components/Header'; // Importe corretamente o componente Header
import About from './components/About'; // Importe corretamente o componente About
import Projects from './components/Projects'; // Importe corretamente o componente Projects
import Contact from './components/Contact'; // Importe corretamente o componente Contact

const App = () => {
    return (
        <div>
            <Header />
            <About />
            <Projects />
            <Contact />
        </div>
    );
};

export default App;
