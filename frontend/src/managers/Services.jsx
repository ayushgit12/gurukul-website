import React from 'react';

const Services = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Our Services</h1>
        <p className="text-black text-lg">
          At Gurukul Research Foundation, we bring your vision to life with our comprehensive project solutions. Explore our range of services below.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        
        {/* ML/AI Projects */}
        <div className="border p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">ML/AI Projects</h2>
          <p className="text-black">
            Our team specializes in machine learning and artificial intelligence solutions, bringing advanced data analytics, predictive modeling, and automation capabilities to your business.
          </p>
        </div>

        {/* Web Development Projects */}
        <div className="border p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">Web Development Projects</h2>
          <p className="text-black">
            From responsive websites to custom web applications, we provide cutting-edge web development solutions to establish and enhance your online presence.
          </p>
        </div>

        {/* App Development Projects */}
        <div className="border p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">App Development Projects</h2>
          <p className="text-black">
            We develop user-friendly mobile applications that combine performance with seamless design, tailored to meet your business requirements and delight your users.
          </p>
        </div>

        {/* UI/UX Designing Projects */}
        <div className="border p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">UI/UX Designing Projects</h2>
          <p className="text-black">
            Our design team crafts intuitive and engaging user experiences, ensuring every interaction is both impactful and user-centric.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
