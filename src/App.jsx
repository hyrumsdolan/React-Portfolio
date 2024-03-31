import React, { useState, useRef, useEffect } from 'react';

import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  const [currentSection, setCurrentSection] = useState('About');
  const [isHeaderOpen, setIsHeaderOpen] = useState(false);
  const [isOptimizedLoading, setIsOptimizedLoading] = useState(false);
  const sectionRefs = useRef({
    About: null,
    Portfolio: null,
    Contact: null,
    Resume: null,
  });

  const handleSectionChange = (sectionName) => {
    setCurrentSection(sectionName);
    if (sectionRefs.current[sectionName]) {
      sectionRefs.current[sectionName].scrollIntoView({ behavior: 'smooth' });
    }
    setIsHeaderOpen(false);
  };

  const handleScroll = () => {
    // Close the header on mobile when scrolling
    setIsHeaderOpen(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '0px',
        threshold: 0.5,
      }
    );

    Object.values(sectionRefs.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      Object.values(sectionRefs.current).forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const renderSection = (sectionName) => {
    switch (sectionName) {
      case 'About':
        return <About />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Resume':
        return <Resume />;
      case 'Contact':
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <div className="flex">
      <button
        className="fixed bottom-1 left-1 bg-gray-800 text-white px-4 py-2 rounded"
        onClick={() => isOptimizedLoading ? null : setIsOptimizedLoading(!isOptimizedLoading)}
      >
        {isOptimizedLoading ? 'Reload Page for intended scroll experience' : 'Bootcamp Grader, Click Here'}
      </button>
      <Header
        currentSection={currentSection}
        setCurrentSection={handleSectionChange}
        isOpen={isHeaderOpen}
        setIsOpen={setIsHeaderOpen}
      />
      <main
        className="snap-y snap-mandatory scroll-smooth snap-always overflow-y-scroll h-screen flex-1 bg-gradient-to-br from-[#1C1C1E] to-[#2E2E30] text-[#F3FFDB] md:ml-auto"
        onScroll={handleScroll}
        onClick={() => setIsHeaderOpen(false)}
      >
        {isOptimizedLoading ? (
          renderSection(currentSection)
        ) : (
          <>
            <section
              id="About"
              ref={(el) => (sectionRefs.current.About = el)}
              className="h-screen snap-start"
            >
              <About />
            </section>
            <section
              id="Portfolio"
              ref={(el) => (sectionRefs.current.Portfolio = el)}
              className="h-screen snap-start"
            >
              <Portfolio />
            </section>
            <section
              id="Resume"
              ref={(el) => (sectionRefs.current.Resume = el)}
              className="h-screen snap-start"
            >
              <Resume />
            </section>
            <section
              id="Contact"
              ref={(el) => (sectionRefs.current.Contact = el)}
              className="h-screen snap-start"
            >
              <Contact />
            </section>
          </>
        )}
      </main>
      <Header
        currentSection={currentSection}
        setCurrentSection={handleSectionChange}
        isOpen={isHeaderOpen}
        setIsOpen={setIsHeaderOpen}
      />
    </div>
  );
}

export default App;