import React from 'react';
import profPic from '../assets/profPic.jpeg';

function About() {
  return (
    <section className="h-screen flex flex-col justify-center items-center">
      <div className="max-w-3xl mx-auto px-8">
        
        <div className="flex justify-center mb-8">
          <img
            src= {profPic}
            alt="Developer"
            className="w-48 h-48 rounded-full border-4 border-[#F3FFDB]"
          />
          
        </div>
        <h2 className="text-5xl font-bold mb-8 text-center">Hyrum Dolan</h2>
        <div className="text-xl leading-relaxed mb-8">
          <p className="mb-4">
            Hi, I'm a web developer with experience in building single-page applications using React. I have a passion for creating responsive and user-friendly websites.
          </p>
          <p className="mb-4">
            With a strong foundation in front-end technologies like HTML, CSS, and JavaScript, I strive to deliver high-quality code and seamless user experiences. I enjoy tackling complex challenges and finding elegant solutions to meet the needs of both clients and end-users.
          </p>
        </div>
        
      </div>
    </section>
  );
}

export default About;