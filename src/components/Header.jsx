import React from 'react';
import { FaUser, FaFolder, FaEnvelope, FaFile, FaCode, FaBars, FaTimes } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';

const sections = [
  { name: 'About', icon: FaUser },
  { name: 'Portfolio', icon: FaFolder },
  { name: 'Resume', icon: FaFile },
  { name: 'Contact', icon: FaEnvelope }
];

function Header({ currentSection, setCurrentSection, isOpen, setIsOpen }) {
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className="fixed top-4 right-4 text-3xl text-[#F3FFDB] z-50 md:hidden"
        onClick={toggleMenu}
      >
        {isOpen ? <FaCode /> : <FaBars />}
      </button>
      <header
        className={`fixed top-0 right-0 bg-[#2C2C2E] w-auto h-screen flex flex-col justify-between p-4 transition-transform duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:translate-x-0`}
      >
        <nav className="flex-grow">
          <ul className="flex flex-col space-y-9 justify-center h-full">
            {sections.map(({ name, icon: Icon }) => (
              <li key={name}>
                <button
                  className={`text-3xl ${
                    currentSection === name
                      ? 'text-[#FF7F50]'
                      : 'text-[#C2D69A] transition duration-400 ease-in-out hover:text-[#F3FFDB]'
                  }`}
                  onClick={() => setCurrentSection(name)}
                >
                  <Icon />
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex flex-col space-y-1 items-center">
          <a
            href="https://github.com/hyrumsdolan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-[#F3FFDB] hover:text-[#FF7F50] transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/hyrum-dolan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-[#F3FFDB] hover:text-[#FF7F50] transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://stackoverflow.com/users/23913213/hyrum-dolan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-[#F3FFDB] hover:text-[#FF7F50] transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faStackOverflow} />
          </a>
        </div>
      </header>
    </>
  );
}

export default Header;