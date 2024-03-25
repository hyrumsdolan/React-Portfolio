import React from 'react';
import { FaDownload } from 'react-icons/fa';

function Resume() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-[#F3FFDB]">
      <div className="mx-auto px-8">
        <h2 className="text-5xl font-bold mb-8 text-center">Resume</h2>
        <div className="mb-8">
          <a
            href="/path/to/resume.pdf"
            download
            className="inline-flex items-center px-6 py-3 bg-[#FF7F50] text-white font-semibold rounded-lg hover:bg-[#FF6347] transition duration-300"
          >
            <FaDownload className="mr-2" />
            Download Resume
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-3xl font-bold mb-4">Skills</h3>
            <ul className="list-disc pl-6 text-xl">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-4">Experience</h3>
            <div className="mb-6">
              <h4 className="text-2xl font-semibold mb-2">Web Developer</h4>
              <p className="text-lg mb-2">Company Name</p>
              <p className="text-lg text-[#C2D69A]">2020 - Present</p>
            </div>
            <div>
              <h4 className="text-2xl font-semibold mb-2">Front-end Developer</h4>
              <p className="text-lg mb-2">Company Name</p>
              <p className="text-lg text-[#C2D69A]">2018 - 2020</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;