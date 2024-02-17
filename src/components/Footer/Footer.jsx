import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-4 absolute bottom-0 w-full">
            <div className="flex justify-center space-x-4">
                <a href="https://github.com/micahives" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-2xl" />
                </a>
                <a href="https://www.linkedin.com/in/micah-ives-a893232a0/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-2xl" />
                </a>
                {/* Add more links as needed */}
            </div>
        </footer>
    );
};

export default Footer;
