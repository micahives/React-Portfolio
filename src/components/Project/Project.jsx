import React from 'react';

const Project = ({ title, image, deployedLink, githubLink }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <div className="flex justify-between">
          <a href={deployedLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-800">Deployed Application</a>
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-800">GitHub Repository</a>
        </div>
      </div>
    </div>
  );
};

export default Project;