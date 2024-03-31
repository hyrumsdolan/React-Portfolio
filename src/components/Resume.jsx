import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaPython, FaAws, FaGit } from 'react-icons/fa';
import { SiJquery, SiBootstrap, SiSass, SiTailwindcss, SiFirebase, SiMongodb, SiWebpack, SiExpress, SiMysql, SiBun, SiC, SiLua } from 'react-icons/si';

function Resume() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-[#F3FFDB]">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-5xl font-bold mb-12 text-center">Resume</h2>
        <div className="mb-12 text-center">
          <a
            href="src/assets/hyrumResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#2b2b2b] text-[#fff] px-8 py-4 rounded-full font-semibold text-xl shadow-md hover:bg-[#3b3b3b] transition-colors duration-300"
          >
            Download Resume
          </a>
        </div>
        <div className="bg-[#2b2b2b] rounded-3xl shadow-lg p-8">
          <h3 className="text-4xl font-semibold mb-8 text-center">Proficiencies</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-[#1C1C1E] rounded-xl p-6 shadow-md">
              <h4 className="text-2xl font-semibold mb-4 flex items-center">
                
                Frontend
              </h4>
              <ul className="list-none">
                <li className="mb-2 flex items-center">
                  <FaHtml5 className="mr-2 text-[#E44D26]" />
                  HTML5
                </li>
                <li className="mb-2 flex items-center">
                  <FaCss3Alt className="mr-2 text-[#1572B6]" />
                  CSS3
                </li>
                <li className="mb-2 flex items-center">
                  <FaJs className="mr-2 text-[#F7DF1E]" />
                  JavaScript
                </li>
                <li className="mb-2 flex items-center">
                  <SiJquery className="mr-2 text-[#0769AD]" />
                  jQuery
                </li>
                <li className="mb-2 flex items-center">
                  <SiBootstrap className="mr-2 text-[#7952B3]" />
                  Bootstrap
                </li>
                <li className="mb-2 flex items-center">
                  <SiSass className="mr-2 text-[#CC6699]" />
                  SASS
                </li>
                <li className="mb-2 flex items-center">
                  <SiTailwindcss className="mr-2 text-[#38B2AC]" />
                  Tailwind CSS
                </li>
              </ul>
            </div>
            <div className="bg-[#1C1C1E] rounded-xl p-6 shadow-md">
              <h4 className="text-2xl font-semibold mb-4 flex items-center">
                Backend
              </h4>
              <ul className="list-none">
                <li className="mb-2 flex items-center">
                  <FaNode className="mr-2 text-[#339933]" />
                  Node.js
                </li>
                <li className="mb-2 flex items-center">
                  <FaReact className="mr-2 text-[#61DAFB]" />
                  React
                </li>
                <li className="mb-2 flex items-center">
                  <SiExpress className="mr-2 text-[#000000]" />
                  Express
                </li>
                <li className="mb-2 flex items-center">
                  <SiMongodb className="mr-2 text-[#47A248]" />
                  MongoDB
                </li>
                <li className="mb-2 flex items-center">
                  <SiFirebase className="mr-2 text-[#FFCA28]" />
                  Firebase
                </li>
                <li className="mb-2 flex items-center">
                  <SiWebpack className="mr-2 text-[#8DD6F9]" />
                  Webpack
                </li>
                <li className="mb-2 flex items-center">
                  <SiMysql className="mr-2 text-[#4479A1]" />
                  MySQL
                </li>
                <li className="mb-2 flex items-center">
                  <SiBun className="mr-2 text-[#000000]" />
                  Bun
                </li>
              </ul>
            </div>
            <div className="bg-[#1C1C1E] rounded-xl p-6 shadow-md">
              <h4 className="text-2xl font-semibold mb-4 flex items-center">
                Other
              </h4>
              <ul className="list-none">
                <li className="mb-2 flex items-center">
                  <FaAws className="mr-2 text-[#232F3E]" />
                  AWS
                </li>
                <li className="mb-2 flex items-center">
                  <FaGit className="mr-2 text-[#F05032]" />
                  Git
                </li>
                <li className="mb-2 flex items-center">
                  <FaPython className="mr-2 text-[#3776AB]" />
                  Python
                </li>
                <li className="mb-2 flex items-center">
                  <SiC className="mr-2 text-[#A8B9CC]" />
                  C#
                </li>
                <li className="mb-2 flex items-center">
                  <SiLua className="mr-2 text-[#000080]" />
                  Lua
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;