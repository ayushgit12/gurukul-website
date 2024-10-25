import React from 'react';

const projects = [
  {
    name: 'AI-Powered Analytics Tool',
    description: 'A tool that uses machine learning algorithms to analyze data and provide actionable insights for businesses.',
    domain: 'AI/ML',
    screenshots: [
      'https://via.placeholder.com/600x400', // replace with actual screenshot URLs
      'https://via.placeholder.com/600x400',
    ],
  },
  {
    name: 'E-Commerce Website',
    description: 'A full-featured e-commerce website with payment gateway integration, user-friendly interface, and responsive design.',
    domain: 'Web Development',
    screenshots: [
      'https://via.placeholder.com/600x400',
      'https://via.placeholder.com/600x400',
    ],
  },
  {
    name: 'Mobile Health App',
    description: 'A mobile application that helps users track their health metrics and receive personalized health recommendations.',
    domain: 'App Development',
    screenshots: [
      'https://via.placeholder.com/600x400',
      'https://via.placeholder.com/600x400',
    ],
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Our Projects</h1>
        <p className="text-black text-lg">
          Discover some of the exciting projects we've developed across various domains.
        </p>
      </header>

      <div className="space-y-12">
        {projects.map((project, index) => (
          <div key={index} className="border p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
            {/* Screenshots Carousel */}
            <div className="flex overflow-x-scroll space-x-4 mb-4">
              {project.screenshots.map((screenshot, idx) => (
                <img
                  key={idx}
                  src={screenshot}
                  alt={`loading...`}
                  className="w-full md:w-1/2 lg:w-1/3 object-cover rounded-md"
                />
              ))}
            </div>

            {/* Project Info */}
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">{project.name}</h2>
            <p className="text-black mb-2">{project.description}</p>
            <span className="text-blue-600 font-medium">{project.domain}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
