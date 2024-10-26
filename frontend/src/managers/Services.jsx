import React from 'react';
import deeplearning from "../assets/deep-learning.png";
import web from "../assets/web.png";
import ui from "../assets/ui.png";
import app from "../assets/app.png";

const services = [
  {
    title: 'ML/AI Projects',
    description:
      'Our team specializes in machine learning and artificial intelligence solutions, bringing advanced data analytics, predictive modeling, and automation capabilities to your business.',
    imageUrl: deeplearning,
  },
  {
    title: 'Web Development Projects',
    description:
      'From responsive websites to custom web applications, we provide cutting-edge web development solutions to establish and enhance your online presence.',
    imageUrl:  web,
  },
  {
    title: 'App Development Projects',
    description:
      'We develop user-friendly mobile applications that combine performance with seamless design, tailored to meet your business requirements and delight your users.',
    imageUrl: app 
  },
  {
    title: 'UI/UX Designing Projects',
    description:
      'Our design team crafts intuitive and engaging user experiences, ensuring every interaction is both impactful and user-centric.',
    imageUrl:  ui ,
  },
];

const Services = () => {
  return (
    <div className="bg-gradient-to-b min-h-screen p-4 lg:p-8 mx-2 lg:mx-5">
      <header className="text-center mb-6 lg:mb-8">
        <h1 className="text-2xl lg:text-3xl font-bold text-blue-600 mb-3">Our Services</h1>
        <p className="text-gray-700 text-sm lg:text-base max-w-lg mx-auto">
          At Gurukul Research Foundation, we bring your vision to life with our comprehensive project solutions. Explore our range of services below.
        </p>
      </header>

      <div className="space-y-8 lg:space-y-10">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row items-center border border-gray-200 rounded-lg shadow-lg w-full transition-transform transform-gpu duration-300 hover:scale-105 hover:shadow-lg ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
            style={{ backgroundColor: '#ffffff' }}
          >
            {/* Icon-Sized Image */}
            <img
              src={service.imageUrl}
              alt={service.title}
              className="w-16 h-16 lg:w-20 lg:h-20 object-cover rounded-full lg:mx-4 my-3 lg:my-0 shadow-sm transition-all duration-300 ease-in-out transform hover:scale-105"
            />
            
            {/* Content */}
            <div className="flex-1 p-5 lg:p-6">
              <h2 className="text-xl lg:text-2xl font-semibold text-blue-600 mb-2">{service.title}</h2>
              <p className="text-gray-800 text-xl">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
