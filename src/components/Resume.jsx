import React from 'react';
// import resumePdf from '../assets/resume.pdf';

function Resume() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-4">Resume</h2>
      {/* <a href={resumePdf} download className="mb-4 inline-block">
        Download Resume
      </a> */}
      <h3 className="text-xl font-bold mb-2">Proficiencies</h3>
      <ul className="list-disc pl-6">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Tailwind CSS</li>
      </ul>
    </section>
  );
}

export default Resume;