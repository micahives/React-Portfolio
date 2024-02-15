import React from 'react';
import Project from '../../components/Project/Project';
import projects from '../../components/Project/ProjectData';

const Portfolio = () => {
    return (
      <div className="portfolio mt-8">
        <h1 className="text-3xl font-bold mb-4">Portfolio</h1>
        <div className="grid grid-cols-2 gap-4">
          {projects.slice(0, 6).map((project, index) => (
            <Project 
              key={index} 
              title={project.title} 
              image={project.image} 
              deployedLink={project.deployedLink} 
              githubLink={project.githubLink} 
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default Portfolio;