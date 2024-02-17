import React from 'react';
import ResumeLink from '../../assets/Resume - Micah Ives.pdf';
import Footer from '../../components/Footer/Footer';

const Resume = () => {
  return (
    <div className="max-w-md mx-auto p-8 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Resume</h2>
      
      {/* Link to download resume file */}
      <div className="mb-4">
        <p className="font-semibold">Download Resume:</p>
        <a
          href={ResumeLink}
          download="Resume-Micah Ives.pdf"
          className="text-blue-500 hover:underline"
        >
          Click here to download
        </a>
      </div>
      
      <div>
        <p className="font-semibold mb-2">Proficiencies:</p>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Node.js</li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Resume;
