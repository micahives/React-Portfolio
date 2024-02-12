import React from 'react';
import profilePicture from '../../assets/profilePic.png';

const About = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <div className="flex items-center mb-8">
            <div className="w-64 h-64 rounded-full overflow-hidden mr-4 flex-shrink-0 relative border-2 border-gray-500">
                    <img className="w-full h-full object-cover object-center rounded-full absolute top-1/2 transform -translate-y-1/2" src={profilePicture} alt="Profile" />
                </div>
                <p className="text-lg">Scientist, software developer in the works.</p>
            </div>
        </div>
    );
};

export default About;