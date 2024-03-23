import React from 'react';

function Portfolio() {
  const projects = [
    {
      title: 'Project 1',
      image: 'project1.jpg',
      deployedUrl: 'https://project1.com',
      githubUrl: 'https://github.com/developer/project1',
    },
    // Add more projects...
  ];

  return (
    <section>
      <h2 className="text-3xl font-bold mb-4">Portfolio</h2>
      <div className="grid grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div key={index}>
            <img src={project.image} alt={project.title} className="mb-2" />
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <a href={project.deployedUrl} target="_blank" rel="noopener noreferrer" className="mr-4">
              Deployed App
            </a>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              GitHub Repo
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;


