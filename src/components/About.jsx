import React from 'react';
// import profilePhoto from '../assets/profile-photo.jpg';

function About() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      {/* <img src={profilePhoto} alt="Developer" className="w-48 h-48 rounded-full mb-4" /> */}
      <p>
        Hi, I'm a web developer with experience in building single-page applications using React.
        I have a passion for creating responsive and user-friendly websites.
      </p>
    </section>
  );
}

export default About;