import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faHeartbeat, faWallet, faGraduationCap, faShoppingCart, faRobot } from '@fortawesome/free-solid-svg-icons';

const projects = [
  {
    name: 'Smart Home Control Panel',
    description: 'An IoT-enabled control panel for managing home devices. Allows users to control lighting, temperature, and security remotely.',
    domain: 'IoT/Smart Home',
    icon: <FontAwesomeIcon icon={faHome} className="text-blue-500 text-3xl" />,
  },
  {
    name: 'Virtual Fitness Coach',
    description: 'A mobile app that uses AI to create personalized workout plans and real-time feedback based on user performance and health metrics.',
    domain: 'Health & Fitness',
    icon: <FontAwesomeIcon icon={faHeartbeat} className="text-red-500 text-3xl" />,
  },
  {
    name: 'Blockchain-Powered Digital Wallet',
    description: 'A secure, decentralized digital wallet for storing and managing cryptocurrency, with easy transaction history tracking and multi-layer security.',
    domain: 'Blockchain/FinTech',
    icon: <FontAwesomeIcon icon={faWallet} className="text-yellow-500 text-3xl" />,
  },
  {
    name: 'Remote Learning Platform',
    description: 'A web-based platform for virtual classes, assignments, and resources, with integrated chat and video features to enhance learning.',
    domain: 'EdTech',
    icon: <FontAwesomeIcon icon={faGraduationCap} className="text-green-500 text-3xl" />,
  },
  {
    name: 'Augmented Reality Shopping Experience',
    description: 'An AR-enabled shopping app where users can virtually try on clothing and accessories before purchasing, improving the online shopping experience.',
    domain: 'Retail/AR',
    icon: <FontAwesomeIcon icon={faShoppingCart} className="text-purple-500 text-3xl" />,
  },
  {
    name: 'AI-Powered Chatbot for Customer Support',
    description: 'An intelligent chatbot that uses natural language processing to assist customers with inquiries, improving response times and customer satisfaction.',
    domain: 'AI/Chatbot',
    icon: <FontAwesomeIcon icon={faRobot} className="text-orange-500 text-3xl" />, // Robot icon for the chatbot project
  },
];

const Projects = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <header className="text-center mb-8 lg:mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-4">Our Projects</h1>
        <p className="text-gray-700 text-base sm:text-lg max-w-md mx-auto">
          Explore some of our innovative projects that are shaping the future of technology.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full max-w-6xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 hover:scale-105 duration-300"
          >
            <div className="flex items-center mb-3">
              {project.icon}
              <h2 className="text-xl sm:text-2xl font-semibold text-blue-600 ml-3">{project.name}</h2>
            </div>
            <p className="text-gray-700 text-sm sm:text-base mb-2">{project.description}</p>
            <span className="text-blue-600 font-medium text-sm sm:text-base">{project.domain}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
