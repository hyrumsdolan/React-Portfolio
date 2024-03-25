import React from 'react';
import profPic from '../assets/profPic.jpeg';

function About() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 py-8"> <div className="max-w-3xl mx-auto w-full"> <div className="flex justify-center mb-8"> <img src={profPic} alt="Developer" className="w-1/2 sm:w-1/3 md:w-1/4 rounded-full border-4 border-[#F3FFDB]" /> </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center">Hyrum Dolan</h2>

<div className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-8">
  <p>Hi friend,</p>

  <p className="mb-4">
    I'm a full-stack developer passionate about automation, UX, and Generative AI. I create tools to help people work smarter, utilizing my diverse experience with various languages and technologies. I constantly seek new challenges and opportunities to learn and grow, believing in technology's power to improve lives.
  </p>

  <p className="mb-4">
    With a background in sales and management, I led a team of nearly 30 reps, generating $4 million in revenue within 5 months. I transitioned to tech to pursue a career that allows me to make significant impacts by developing tools and systems that help businesses grow quickly and enhance employee satisfaction and productivity.
  </p>
</div>
        
      </div>
    </section>
  );
}

export default About;