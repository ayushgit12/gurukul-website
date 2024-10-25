import React, { useEffect } from "react";

const AboutUs = () => {
  // Scroll animation effect
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.scroll-fade-up');
      elements.forEach((el) => {
        const position = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (position < windowHeight) {
          el.classList.add('animate-fade-up');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="py-10 px-5">
      <h1 className="text-4xl font-bold text-blue-800 text-center mb-6 scroll-fade-up">
        About Gurukul Research Foundation
      </h1>

      <p className="text-lg text-center mb-8 scroll-fade-up md:mx-16">
        Gurukul Research Foundation is dedicated to advancing technology and education
        through innovative solutions and cutting-edge research. Our goal is to empower
        businesses and individuals by offering personalized services in web development,
        AI/ML, UI/UX design, and graphic design.
      </p>

      <div className="scroll-fade-up py-6">
        <h2 className="text-3xl font-semibold text-blue-800 md:px-16 mb-4">
          Our Mission
        </h2>
        <p className="text-lg md:px-16 mb-8">
          Our mission is to provide top-tier project services while fostering
          innovation, creativity, and technical expertise. We believe in delivering
          excellence by staying at the forefront of technological advancements and
          ensuring that every project reflects our commitment to quality.
        </p>
      </div>

      <div className="scroll-fade-up py-6">
        <h2 className="text-3xl font-semibold text-blue-800 md:px-16 mb-4">
          Our Vision
        </h2>
        <p className="text-lg md:px-16 mb-8">
          We envision a future where technology enhances every aspect of life and
          business. Through our solutions, we aim to bridge the gap between technology
          and people, enabling them to harness the power of innovation for better
          decision-making and greater success.
        </p>
      </div>

      <div className="scroll-fade-up py-6">
        <h2 className="text-3xl font-semibold text-blue-800 md:px-16 mb-4">
          Our Values
        </h2>
        <p className="text-lg md:px-16 mb-8">
          At Gurukul Research Foundation, our values are grounded in integrity,
          transparency, professionalism, and a strong sense of responsibility. We are
          committed to not only achieving results but also building long-lasting
          relationships based on trust and mutual respect.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
