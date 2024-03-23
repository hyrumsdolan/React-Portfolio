import React from 'react';
import { FaUser, FaFolder, FaEnvelope, FaFile, FaCode } from 'react-icons/fa';

const sections = [
  { name: 'About', icon: FaUser },
  { name: 'Portfolio', icon: FaFolder },
  { name: 'Contact', icon: FaEnvelope },
  { name: 'Resume', icon: FaFile },
];

function Header({ currentSection, setCurrentSection }) {
  return (
    <header className="bg-[#2C2C2E] w-auto min-h-screen flex flex-col items-center p-4">
      <div className="text-4xl text-white mb-8">
        <FaCode />
      </div>
      <nav className="flex-grow">
        <ul className="flex flex-col space-y-9 justify-center h-full">
          {sections.map(({ name, icon: Icon }) => (
            <li key={name}>
              <button
                className={`text-3xl ${
                  currentSection === name ? 'text-[#FF7F50]' : 'text-[#C2D69A] transition duration-400 ease-in-out hover:text-[#F3FFDB]'
                }`}
                onClick={() => setCurrentSection(name)}
              >
                <Icon />
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;