import React from 'react';

const GurukulResearchFoundation = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-5">
      <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden p-8 md:p-12">
        {/* Image/GIF Section */}
      
        {/* Heading */}
        <h1 className="text-5xl font-bold text-blue-800 text-center mb-8">
          Welcome to Gurukul Research Foundation
        </h1>

        {/* About Text */}
        <p className="text-xl text-gray-700 text-center mb-10 md:px-16">
          At Gurukul Research Foundation, we empower businesses to succeed in a fast-paced digital landscape. We specialize in delivering tailored solutions that blend innovation with cutting-edge technology, from AI and machine learning to advanced web development and design.
        </p>

        {/* Approach Section */}
        <div className="bg-blue-50 rounded-lg p-8 md:p-12 mb-10">
          <h2 className="text-4xl font-semibold text-blue-800 text-center mb-6">
            Our Commitment to Excellence
          </h2>
          <p className="text-xl text-gray-700 text-center md:px-16">
            With a focus on client success, we embrace a transparent, collaborative approach to bring your vision to life. Our team prioritizes high standards of integrity and performance, ensuring that every project drives impactful results and advances your digital capabilities.
          </p>
        </div>

        {/* Services Section */}
        <div className="bg-blue-50 rounded-lg p-8 md:p-12">
          <h2 className="text-4xl font-semibold text-blue-800 text-center mb-6">
            Explore Our Expertise
          </h2>
          <p className="text-xl text-gray-700 text-center md:px-16">
            Discover how our services in AI, web development, UI/UX, and graphic design can position you as a leader in your industry. Let us help you turn your ideas into transformative digital experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GurukulResearchFoundation;
