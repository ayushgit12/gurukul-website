import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket, faEye, faHandshake } from "@fortawesome/free-solid-svg-icons";
import './About.css'; 

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`py-10 px-12 bg-gray-50 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
      <h1 className="text-4xl font-semibold text-blue-600 text-center mb-8">
        About Gurukul Research Foundation
      </h1>
      <div className={`py-6 border-l-4 border-blue-600 bg-white rounded-lg shadow-lg mb-6 hover:shadow-xl transition-shadow duration-300 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        <h2 className="text-3xl font-semibold text-blue-600 flex items-center mb-4">
          <FontAwesomeIcon icon={faRocket} className="mx-6" />
          Our Mission
        </h2>
        <p className="text-xl md:px-16 mb-6 tracking-wide	">
          Our mission is to provide top-tier project services while fostering
          innovation, creativity, and technical expertise. We believe in delivering
          excellence by staying at the forefront of technological advancements and
          ensuring that every project reflects our commitment to quality.
        </p>
      </div>

      <div className={`py-6 border-l-4 border-blue-600 bg-white rounded-lg shadow-lg mb-6 hover:shadow-xl transition-shadow duration-300 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        <h2 className="text-3xl font-semibold text-blue-600 flex items-center mb-4">
          <FontAwesomeIcon icon={faEye} className="mx-6" />
          Our Vision
        </h2>
        <p className="text-xl md:px-16 mb-8 tracking-wide	">
          We envision a future where technology enhances every aspect of life and
          business. Through our solutions, we aim to bridge the gap between technology
          and people, enabling them to harness the power of innovation for better
          decision-making and greater success.
        </p>
      </div>

      <div className={`py-6 border-l-4 border-blue-600 bg-white rounded-lg shadow-lg mb-6 hover:shadow-xl transition-shadow duration-300 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        <h2 className="text-3xl font-semibold text-blue-600 flex items-center mb-4">
          <FontAwesomeIcon icon={faHandshake} className="mx-6" />
          Our Values
        </h2>
        <p className="text-xl md:px-16 mb-6 tracking-wide	">
          At Gurukul Research Foundation, our values are grounded in integrity,
          transparency, professionalism, and a strong sense of responsibility. We are
          committed to not only achieving results but also building long-lasting
          relationships based on trust and mutual respect.
        </p>
      </div>
    </div>
  );
};

export default About;
