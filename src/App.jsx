import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  const [currentSection, setCurrentSection] = useState('About');

  return (
    <div className="flex">
      <Header currentSection={currentSection} setCurrentSection={setCurrentSection} />
      <main className="flex-1 p-8 bg-[#1C1C1E] text-[#F3FFDB]">
        {currentSection === 'About' && <About />}
        {currentSection === 'Portfolio' && <Portfolio />}
        {currentSection === 'Contact' && <Contact />}
        {currentSection === 'Resume' && <Resume />}
      </main>
    </div>
  );
}

export default App;