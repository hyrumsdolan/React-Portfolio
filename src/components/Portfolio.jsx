import React from 'react';

function Portfolio() {
  const projects = [
    {
      title: `React Portfolio (This)`,
      description: 'Built a responsive portfolio website using React and Tailwind CSS.',
      repoLink: 'https://github.com/hyrumsdolan/React-Portfolio',
      demoLink: '#NeedToDeploy',
    },
    {
      title: 'AI Pokemon Battler',
      description: 'Using lua to retrieve pokemon data and give to ChatGPT API to allow it to play pokemon.',
      repoLink: 'https://github.com/hyrumsdolan/AI-Pokemon_battler',
      demoLink: '#NeedToRecord',
    },
    {
      title: 'Simple JS/CSS Game',
      description: 'Early learning project to better understand CSS animations. Used array of arrays to track game state. (use WASD for demo)',
      repoLink: 'https://github.com/hyrumsdolan/Basic-Javascript-Game',
      demoLink: 'https://hyrumsdolan.github.io/Basic-Javascript-Game/',
    },
    {
      title: 'Fitness Tracker',
      description: 'Group project where I led a team of 3 to build a fitness tracker using the MVC design pattern. Using Node, Express, MySQl, Mongoose, and Handlebars.',
      repoLink: 'https://github.com/hyrumsdolan/fitness-tracker-MVC',
      demoLink: 'https://workout-fitness-tracker-ff2f5d2f6a1e.herokuapp.com/login',
    },
    {
      title: 'Custom Map Plotter',
      description: 'Found a need at work for a flexible ad quick map plotter. Built utilizing Google Maps API allowing bulk plotting of locations from a CSV.',
      repoLink: 'https://github.com/hyrumsdolan/Custom-Map-Plotter',
      demoLink: 'https://hyrumsdolan.github.io/Custom-Map-Plotter/',
    },
    {
      title: 'Q-Learning Snake',
      description: 'Snake game made with PyGame using Q-Tables to enable learning and AI-play. Learning project for refreshing on Python OOP and Q-learning.',
      repoLink: 'https://github.com/hyrumsdolan/snake-Q-learning',
      demoLink: '#demo6',
    },
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-[#F3FFDB]">
      <div className="max-w-full mx-auto">
        <h2 className="text-5xl font-bold mb-12 text-center">Portfolio</h2>
        <div className="overflow-x-auto pl-4">
          <div style={{ maxWidth: '100vw' }} className="whitespace-nowrap">
            <div className="inline-grid grid-rows-2 grid-flow-col auto-cols-max gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="inline-block bg-[#2b2b2b] border border-[#eceff133] rounded-2xl overflow-hidden flex flex-col w-80 text-wrap"
                >
                  <div className="p-6 flex-grow">
                    <h3 className="text-2xl font-semibold mb-4 " style={{ whiteSpace: 'pre-wrap' }}>{project.title}</h3>
                    <p className="text-lg mb-6 line-clamp-6">{project.description}</p>
                  </div>
                  <div className="border-t border-[#eceff133] mt-auto flex">
                    <a
                      href={project.repoLink}
                      className="w-1/2 py-4 text-center text-[#fff] font-semibold hover:bg-[#1C1C1E] transition-colors duration-300"
                    >
                      View Repo
                    </a>
                    <div className="border-l border-[#eceff133]"></div>
                    <a
                      href={project.demoLink}
                      className="w-1/2 py-4 text-center text-[#fff] font-semibold hover:bg-[#1C1C1E] transition-colors duration-300"
                    >
                      View Demo
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
