import React from "react";
import img from "../assets/bg2.jpg";
import build from "../assets/build.png";


const Home = () => {
  return (
    <div>
      <div className="relative">
        <img className="w-screen" src={img} alt="" />
        <p className="absolute top-1/2 -translate-y-1/2 left-0 w-full text-center text-white md:text-6xl text-2xl font-bold">
          <p>WELCOME TO </p>
          <p>GURUKUL RESEARCH FOUNDATION</p>
          <p className=" mt-5 text-black text-3xl">
            Foundation of Education & Research trust
          </p>
        </p>
      </div>

      <div className=" py-10 px-5 ">
        <h1 className="text-4xl font-bold text-blue-800 text-center mb-6">
          Welcome to Gurukul Research Foundation
        </h1>

        <p className="text-lg  text-center mb-8 md:mx-16">
          At Gurukul Research Foundation, we are passionate about helping
          businesses thrive in today's fast-evolving digital world. Our
          expertise lies in providing innovative, customized project solutions
          that include AI/ML integration, web development, UI/UX design, and
          graphic design.
        </p>

        <h2 className="text-3xl font-semibold text-blue-800 py-4 bg-blue-50 md:px-16">
          Our Expertise
        </h2>
        <div className="flex flex-wrap items-center md:px-8 w-screen justify-around bg-blue-50">
  <img src={build} className="w-96 p-4" alt="" />
  <p className="w-1/2 text-3xl break-words mb-8 p-4">
    With a dedicated team of specialists, we ensure seamless project execution, 
    delivering high-quality results that exceed expectations.
  </p>
</div>


        <h2 className="text-3xl font-semibold text-blue-800 mb-4 md:px-16">
          Our Approach
        </h2>
        <p className="text-lg mb-8 md:px-16">
          We believe in a customer-first approach, maintaining transparency,
          professionalism, and a commitment to excellence in every project we
          undertake. Whether you're looking to enhance your digital presence or
          streamline business operations, we are your trusted partner in
          transforming ideas into impactful solutions.
        </p>

        <h2 className="text-3xl font-semibold md:px-16 text-blue-800 mb-4">
          Discover Our Services
        </h2>
        <p className="text-lg md:px-16">
          Explore our services and discover how we can help you lead in a
          dynamic digital landscape.
        </p>
      </div>
    </div>
  );
};

export default Home;
