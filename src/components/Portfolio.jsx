import React from 'react';

function Portfolio() {
  const projects = [
    {
      title: 'React Portfolio (This Website)',
      description: 'A responsive portfolio website built with React, focused on simple responsive design that uses Tailwind for styling.',
      repoLink: 'https://github.com/hyrumsdolan/React-Portfolio',
      demoLink: '#NeedToDeploy',
    },
    {
      title: 'Project 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      repoLink: '#project2',
      demoLink: '#demo2',
    },
    {
      title: 'Project 3',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      repoLink: '#project3',
      demoLink: '#demo3',
    },
    {
      title: 'Project 4',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      repoLink: '#project4',
      demoLink: '#demo4',
    },
    {
      title: 'Project 5',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      repoLink: '#project5',
      demoLink: '#demo5',
    },
    {
      title: 'Project 6',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      repoLink: '#project6',
      demoLink: '#demo6',
    },
  ];

  return (
    <section className="min-h-screen py-16 flex flex-col justify-center items-center text-[#F3FFDB]">
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
                    <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                    <p className="text-lg mb-6 line-clamp-4">{project.description}</p>
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
